import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import {
  SKIN_W,
  SKIN_H,
  ModelKind,
  partsFor,
  validMaskFor,
  BodyPart,
  partAtlasRect,
} from '../skin/format'
import { getCtx, pickPixel } from '../skin/canvas'
import {
  paintPixel,
  erasePixel,
  floodFill,
  shadePixel,
  lightenPixel,
  lineStroke,
} from '../skin/tools'
import { useEditor } from '../state/editor'

interface Props {
  model: ModelKind
  /** Optional body-part filter. When set, masks out everything else. */
  partFilter?: BodyPart | 'all'
}

export const PixelCanvas = ({ model, partFilter = 'all' }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayRef = useRef<HTMLCanvasElement>(null)

  const layers = useEditor((s) => s.layers)
  const activeLayerId = useEditor((s) => s.activeLayerId)
  const tool = useEditor((s) => s.tool)
  const color = useEditor((s) => s.color)
  const brushSize = useEditor((s) => s.brushSize)
  const mirror = useEditor((s) => s.mirror)
  const showGrid = useEditor((s) => s.showGrid)
  const showOnlyValid = useEditor((s) => s.showOnlyValid)
  const setColor = useEditor((s) => s.setColor)
  const pushRecentColor = useEditor((s) => s.pushRecentColor)
  const snapshot = useEditor((s) => s.snapshot)
  const setTool = useEditor((s) => s.setTool)

  // Map mouse/touch coordinates to pixel coordinates.
  const [containerSize, setContainerSize] = useState({ w: 512, h: 512 })
  const containerRef = useRef<HTMLDivElement>(null)
  const lastPixelRef = useRef<{ x: number; y: number } | null>(null)
  const drawingRef = useRef(false)
  const didChangeRef = useRef(false)

  const validMask = validMaskFor(model)

  // Compute "scoped" mask for the selected body part (so paint never escapes the region).
  const scopedMask = useMaskForPart(model, partFilter, validMask)

  // Resize observer for the container square
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect()
      const size = Math.floor(Math.min(rect.width, rect.height))
      setContainerSize({ w: size, h: size })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Render the composite + grid every frame anything changes.
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = getCtx(c)
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.imageSmoothingEnabled = false

    // Composite all layers
    for (const l of layers) {
      if (!l.visible) continue
      ctx.globalAlpha = l.opacity
      ctx.drawImage(l.canvas, 0, 0)
    }
    ctx.globalAlpha = 1
  }, [layers])

  // Overlay (grid, mask, brush cursor, body-part highlight)
  useEffect(() => {
    const c = overlayRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.imageSmoothingEnabled = false

    const scale = c.width / SKIN_W

    // Invalid area dim (for showOnlyValid)
    if (showOnlyValid) {
      const img = ctx.getImageData(0, 0, c.width, c.height)
      // Simpler: draw a translucent overlay using a path
      ctx.fillStyle = 'rgba(20, 14, 28, 0.62)'
      for (let y = 0; y < SKIN_H; y++) {
        for (let x = 0; x < SKIN_W; x++) {
          if (!validMask[y * SKIN_W + x]) {
            ctx.fillRect(x * scale, y * scale, scale, scale)
          }
        }
      }
    }

    // Body part scope highlight
    if (partFilter !== 'all') {
      ctx.fillStyle = 'rgba(20, 14, 28, 0.55)'
      for (let y = 0; y < SKIN_H; y++) {
        for (let x = 0; x < SKIN_W; x++) {
          if (validMask[y * SKIN_W + x] && !scopedMask[y * SKIN_W + x]) {
            ctx.fillRect(x * scale, y * scale, scale, scale)
          }
        }
      }
    }

    if (showGrid && scale >= 6) {
      ctx.strokeStyle = scale >= 16 ? 'rgba(42,33,56,.32)' : 'rgba(42,33,56,.18)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = 0; x <= SKIN_W; x++) {
        ctx.moveTo(Math.round(x * scale) + 0.5, 0)
        ctx.lineTo(Math.round(x * scale) + 0.5, c.height)
      }
      for (let y = 0; y <= SKIN_H; y++) {
        ctx.moveTo(0, Math.round(y * scale) + 0.5)
        ctx.lineTo(c.width, Math.round(y * scale) + 0.5)
      }
      ctx.stroke()
      // Bolder lines every 8 pixels (body part boundaries)
      ctx.strokeStyle = 'rgba(42,33,56,.7)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let x = 0; x <= SKIN_W; x += 8) {
        ctx.moveTo(Math.round(x * scale) + 0.5, 0)
        ctx.lineTo(Math.round(x * scale) + 0.5, c.height)
      }
      for (let y = 0; y <= SKIN_H; y += 8) {
        ctx.moveTo(0, Math.round(y * scale) + 0.5)
        ctx.lineTo(c.width, Math.round(y * scale) + 0.5)
      }
      ctx.stroke()
    }

    // Outline body part regions
    const parts = partsFor(model)
    ctx.strokeStyle = 'rgba(213,75,75,.85)'
    ctx.lineWidth = 2
    for (const [key, faces] of Object.entries(parts) as [BodyPart, ReturnType<typeof partsFor>[BodyPart]][]) {
      if (partFilter !== 'all' && key !== partFilter && !key.startsWith(partFilter + '_')) {
        continue
      }
      const r = partAtlasRect(faces)
      ctx.strokeRect(
        Math.round(r.x * scale) + 0.5,
        Math.round(r.y * scale) + 0.5,
        Math.round(r.w * scale) - 1,
        Math.round(r.h * scale) - 1,
      )
    }
  }, [showGrid, showOnlyValid, model, partFilter, validMask, scopedMask, containerSize])

  // Pixel coord from pointer
  const getPx = useCallback((e: React.PointerEvent | PointerEvent) => {
    const el = canvasRef.current
    if (!el) return null
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * SKIN_W
    const y = ((e.clientY - rect.top) / rect.height) * SKIN_H
    return {
      x: Math.max(0, Math.min(SKIN_W - 1, Math.floor(x))),
      y: Math.max(0, Math.min(SKIN_H - 1, Math.floor(y))),
    }
  }, [])

  const activeLayer = layers.find((l) => l.id === activeLayerId) ?? null

  const apply = useCallback(
    (px: number, py: number) => {
      if (!activeLayer || activeLayer.locked) return
      const cv = activeLayer.canvas
      if (tool === 'pencil') {
        paintPixel(
          cv,
          px,
          py,
          { color, size: brushSize, mirror },
          scopedMask,
        )
      } else if (tool === 'eraser') {
        erasePixel(cv, px, py, brushSize, mirror)
      } else if (tool === 'shade') {
        shadePixel(cv, px, py, brushSize, scopedMask)
      } else if (tool === 'lighten') {
        lightenPixel(cv, px, py, brushSize, scopedMask)
      }
      didChangeRef.current = true
      // Trigger a re-render by mutating layers reference
      useEditor.setState((s) => ({ layers: [...s.layers] }))
    },
    [activeLayer, brushSize, color, mirror, scopedMask, tool],
  )

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    ;(e.target as Element).setPointerCapture(e.pointerId)
    const p = getPx(e)
    if (!p) return

    if (tool === 'eyedropper') {
      // Sample the composited canvas (so user picks visible color)
      const c = canvasRef.current
      if (!c) return
      const sample = pickPixel(c, p.x * (c.width / SKIN_W), p.y * (c.height / SKIN_H))
      // Strip alpha for color picker; if fully transparent, ignore.
      if (sample.length === 9 && sample.endsWith('00')) return
      const hex = '#' + sample.slice(1, 7)
      setColor(hex)
      pushRecentColor(hex)
      setTool('pencil')
      return
    }

    if (tool === 'fill') {
      if (!activeLayer || activeLayer.locked) return
      snapshot()
      floodFill(activeLayer.canvas, p.x, p.y, color, scopedMask)
      useEditor.setState((s) => ({ layers: [...s.layers] }))
      return
    }

    snapshot()
    drawingRef.current = true
    didChangeRef.current = false
    lastPixelRef.current = p
    apply(p.x, p.y)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drawingRef.current) return
    const p = getPx(e)
    if (!p) return
    const last = lastPixelRef.current
    if (last && (last.x !== p.x || last.y !== p.y)) {
      lineStroke(canvasRef.current!, last.x, last.y, p.x, p.y, (_, x, y) => {
        apply(x, y)
      })
    } else {
      apply(p.x, p.y)
    }
    lastPixelRef.current = p
  }

  const onPointerUp = (e: React.PointerEvent) => {
    drawingRef.current = false
    lastPixelRef.current = null
    if (didChangeRef.current && color) {
      pushRecentColor(color)
    }
    didChangeRef.current = false
    ;(e.target as Element).releasePointerCapture?.(e.pointerId)
  }

  // Canvas display size: round to multiple of 64 so each pixel is integer-sized
  const DISPLAY_SIZE = Math.max(
    SKIN_W * 4,
    Math.floor(Math.min(containerSize.w, containerSize.h) / SKIN_W) * SKIN_W,
  )

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ touchAction: 'none' }}
    >
      <div
        className="relative border-[3px] border-ink shadow-[6px_6px_0_0_#2A2138]"
        style={{
          width: DISPLAY_SIZE,
          height: DISPLAY_SIZE,
          background:
            'repeating-conic-gradient(#E9D6B4 0% 25%, #D9BF8E 0% 50%) 50%/24px 24px',
        }}
      >
        <canvas
          ref={canvasRef}
          width={SKIN_W * 16}
          height={SKIN_H * 16}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            imageRendering: 'pixelated',
            pointerEvents: 'none',
          }}
        />
        <canvas
          ref={overlayRef}
          width={SKIN_W * 16}
          height={SKIN_H * 16}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            cursor:
              tool === 'eyedropper'
                ? 'crosshair'
                : tool === 'fill'
                ? 'cell'
                : 'crosshair',
            touchAction: 'none',
          }}
        />
      </div>
    </div>
  )
}

const useMaskForPart = (
  model: ModelKind,
  partFilter: BodyPart | 'all',
  validMask: Uint8Array,
): Uint8Array =>
  useMemo(() => {
    if (partFilter === 'all') return validMask
    const m = new Uint8Array(SKIN_W * SKIN_H)
    const parts = partsFor(model)
    const targets: BodyPart[] = []
    for (const k of Object.keys(parts) as BodyPart[]) {
      if (k === partFilter || k === ((partFilter + '_overlay') as BodyPart))
        targets.push(k)
    }
    for (const t of targets) {
      const faces = parts[t]
      for (const face of Object.values(faces)) {
        for (let yy = 0; yy < face.h; yy++) {
          for (let xx = 0; xx < face.w; xx++) {
            const px = face.x + xx
            const py = face.y + yy
            if (px >= 0 && py >= 0 && px < SKIN_W && py < SKIN_H) {
              m[py * SKIN_W + px] = 1
            }
          }
        }
      }
    }
    return m
  }, [model, partFilter, validMask])
