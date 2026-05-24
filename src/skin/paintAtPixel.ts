import { SKIN_W, SKIN_H, BodyPart, ModelKind, partsFor, validMaskFor } from './format'
import { getCtx, pickPixel } from './canvas'
import {
  paintPixel,
  erasePixel,
  floodFill,
  shadePixel,
  lineStroke,
} from './tools'
import { useEditor } from '../state/editor'

const useMaskForPart = (
  model: ModelKind,
  partFilter: BodyPart | 'all',
  validMask: Uint8Array,
): Uint8Array => {
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
}

export const getScopedMask = (model: ModelKind, activePart: string) => {
  const validMask = validMaskFor(model)
  if (activePart === 'all') return validMask
  return useMaskForPart(model, activePart as BodyPart, validMask)
}

export const applyToolAtPixel = (
  px: number,
  py: number,
  compositePreview: HTMLCanvasElement,
): boolean => {
  const state = useEditor.getState()
  const activeLayer = state.layers.find((l) => l.id === state.activeLayerId)
  if (!activeLayer || activeLayer.locked) return false

  const scopedMask = getScopedMask(state.model, state.activePart)
  if (!scopedMask[py * SKIN_W + px]) return false

  const { tool, color, brushSize, mirror, setColor, pushRecentColor, setTool } = state

  if (tool === 'eyedropper') {
    const sample = pickPixel(compositePreview, px, py)
    if (sample.length === 9 && sample.endsWith('00')) return false
    const hex = '#' + sample.slice(1, 7)
    setColor(hex)
    pushRecentColor(hex)
    setTool('pencil')
    return true
  }

  if (tool === 'fill') {
    floodFill(activeLayer.canvas, px, py, color, scopedMask)
    useEditor.setState((s) => ({ layers: [...s.layers] }))
    return true
  }

  const apply = () => {
    if (tool === 'pencil') {
      paintPixel(
        activeLayer.canvas,
        px,
        py,
        { color, size: brushSize, mirror },
        scopedMask,
      )
    } else if (tool === 'eraser') {
      erasePixel(activeLayer.canvas, px, py, brushSize, mirror)
    } else if (tool === 'shade') {
      shadePixel(activeLayer.canvas, px, py, -0.15, brushSize, scopedMask)
    } else if (tool === 'lighten') {
      shadePixel(activeLayer.canvas, px, py, +0.18, brushSize, scopedMask)
    }
    useEditor.setState((s) => ({ layers: [...s.layers] }))
  }

  apply()
  return true
}

export const strokeToolLine = (
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  compositePreview: HTMLCanvasElement,
) => {
  const activeLayer = useEditor.getState().layers.find(
    (l) => l.id === useEditor.getState().activeLayerId,
  )
  if (!activeLayer) return
  lineStroke(activeLayer.canvas, x0, y0, x1, y1, (_, x, y) => {
    applyToolAtPixel(x, y, compositePreview)
  })
}
