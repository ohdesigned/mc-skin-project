import { useEffect, useRef, useState } from 'react'
import * as skinview3d from 'skinview3d'
import { MOUSE, TOUCH } from 'three'
import { ModelKind } from '../skin/format'
import { compositeLayers, hasVisibleLayers, toDataURL } from '../skin/canvas'
import { enableSkinAlphaMaterials } from '../skin/skinViewer'
import { applyPartLayerModes } from '../skin/partVisibility'
import {
  buildPaintTargets,
  canConnectStroke,
  raycastSkin,
  type SkinHit,
} from '../skin/raycastPaint'
import { applyToolAtPixel, strokeToolLine } from '../skin/paintAtPixel'
import { useEditor } from '../state/editor'
import { CharacterPreviewFrame } from './CharacterPreviewFrame'

interface Props {
  model: ModelKind
  className?: string
}

export const SkinPaintCanvas = ({ model, className }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<skinview3d.SkinViewer | null>(null)
  const [size, setSize] = useState({ w: 400, h: 480 })
  const [failed, setFailed] = useState(false)

  const layers = useEditor((s) => s.layers)
  const partLayerModes = useEditor((s) => s.partLayerModes)
  const previewBackground = useEditor((s) => s.previewBackground)
  const tool = useEditor((s) => s.tool)
  const color = useEditor((s) => s.color)
  const pushRecentColor = useEditor((s) => s.pushRecentColor)
  const snapshot = useEditor((s) => s.snapshot)

  const paintingRef = useRef(false)
  const lastHitRef = useRef<SkinHit | null>(null)
  const didChangeRef = useRef(false)
  const compositeRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const rect = el.getBoundingClientRect()
      setSize({
        w: Math.max(200, Math.floor(rect.width)),
        h: Math.max(240, Math.floor(rect.height)),
      })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    let viewer: skinview3d.SkinViewer | null = null
    try {
      const canvas = document.createElement('canvas')
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.imageRendering = 'pixelated'
      canvas.style.touchAction = 'none'
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(canvas)

      viewer = new skinview3d.SkinViewer({
        canvas,
        width: size.w,
        height: size.h,
        preserveDrawingBuffer: true,
      })
      viewer.zoom = 0.92
      viewer.fov = 50
      viewer.background = null
      viewer.autoRotate = false
      viewer.animation = null

      viewer.controls.enablePan = false
      viewer.controls.enableZoom = true
      viewer.controls.enableRotate = true
      viewer.controls.mouseButtons = {
        LEFT: MOUSE.ROTATE,
        MIDDLE: MOUSE.DOLLY,
        RIGHT: MOUSE.ROTATE,
      }
      viewer.controls.touches = {
        ONE: TOUCH.ROTATE,
        TWO: TOUCH.DOLLY_ROTATE,
      }

      viewerRef.current = viewer
      enableSkinAlphaMaterials(viewer)
    } catch (e) {
      console.warn('SkinPaintCanvas init failed', e)
      setFailed(true)
    }
    return () => {
      viewer?.dispose()
      viewerRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer) return
    viewer.setSize(size.w, size.h)
  }, [size.w, size.h])

  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer) return

    if (!hasVisibleLayers(layers)) {
      const empty = compositeLayers(layers)
      compositeRef.current = empty
      viewer.loadSkin(null)
      viewer.render()
      return
    }

    const composite = compositeLayers(layers)
    compositeRef.current = composite
    try {
      viewer.loadSkin(composite, { model: model === 'slim' ? 'slim' : 'default' })
    } catch {
      viewer.loadSkin(toDataURL(composite), {
        model: model === 'slim' ? 'slim' : 'default',
      })
    }
  }, [layers, model])

  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer) return
    applyPartLayerModes(viewer.playerObject.skin, partLayerModes)
    viewer.render()
  }, [partLayerModes])

  const toolRef = useRef(tool)
  const colorRef = useRef(color)
  const partLayerModesRef = useRef(partLayerModes)
  toolRef.current = tool
  colorRef.current = color
  partLayerModesRef.current = partLayerModes

  const raycastAt = (clientX: number, clientY: number) => {
    const viewer = viewerRef.current
    if (!viewer) return null

    const targets = buildPaintTargets(
      viewer.playerObject.skin,
      partLayerModesRef.current,
    )
    return raycastSkin(viewer.camera, viewer.canvas, clientX, clientY, targets)
  }

  const paintAt = (clientX: number, clientY: number) => {
    const composite = compositeRef.current
    const hit = raycastAt(clientX, clientY)
    if (!hit || !composite) return null

    const changed = applyToolAtPixel(hit.px, hit.py, composite)
    if (changed && toolRef.current !== 'eyedropper' && toolRef.current !== 'fill') {
      didChangeRef.current = true
    }
    return hit
  }

  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer || failed) return
    const canvas = viewer.canvas

    const down = (e: PointerEvent) => {
      if (e.button !== 0) return
      const hit = raycastAt(e.clientX, e.clientY)
      if (!hit) {
        paintingRef.current = false
        viewer.controls.enabled = true
        return
      }
      e.preventDefault()
      e.stopPropagation()
      canvas.setPointerCapture(e.pointerId)
      viewer.controls.enabled = false
      if (toolRef.current !== 'eyedropper') snapshot()
      paintingRef.current = true
      didChangeRef.current = false
      lastHitRef.current = null
      const painted = paintAt(e.clientX, e.clientY)
      if (painted) lastHitRef.current = painted
    }

    const move = (e: PointerEvent) => {
      if (!paintingRef.current) return
      if (toolRef.current === 'fill' || toolRef.current === 'eyedropper') return
      const hit = paintAt(e.clientX, e.clientY)
      if (!hit) return
      const last = lastHitRef.current
      const composite = compositeRef.current
      if (
        last &&
        composite &&
        (last.px !== hit.px || last.py !== hit.py) &&
        canConnectStroke(last, hit)
      ) {
        strokeToolLine(last.px, last.py, hit.px, hit.py, composite)
      }
      lastHitRef.current = hit
    }

    const up = () => {
      paintingRef.current = false
      lastHitRef.current = null
      viewer.controls.enabled = true
      if (didChangeRef.current && colorRef.current) pushRecentColor(colorRef.current)
      didChangeRef.current = false
    }

    canvas.addEventListener('pointerdown', down)
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerup', up)
    canvas.addEventListener('pointercancel', up)
    canvas.addEventListener('contextmenu', (e) => e.preventDefault())

    return () => {
      canvas.removeEventListener('pointerdown', down)
      canvas.removeEventListener('pointermove', move)
      canvas.removeEventListener('pointerup', up)
      canvas.removeEventListener('pointercancel', up)
    }
  }, [failed, pushRecentColor, snapshot])

  if (failed) {
    return (
      <div
        className={`h-full w-full grid place-items-center panel-text text-ink p-4 text-center ${className ?? ''}`}
      >
        3D paint view unavailable on this device.
      </div>
    )
  }

  return (
    <CharacterPreviewFrame
      backgroundId={previewBackground}
      className={`border-[3px] border-ink shadow-[4px_4px_0_0_#2A2138] ${className ?? ''}`}
      inset={12}
    >
      <div
        ref={containerRef}
        className="h-full w-full min-h-0"
        style={{ touchAction: 'none' }}
      />
    </CharacterPreviewFrame>
  )
}
