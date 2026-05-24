import { SKIN_W, SKIN_H, ModelKind, partsFor, BodyPart, INNER_BODY_PARTS, type InnerBodyPart } from './format'
import { fillFaceShaded, pix, PAL as PALETTE } from './shading'

export const createCanvas = (w = SKIN_W, h = SKIN_H): HTMLCanvasElement => {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  return c
}

export const getCtx = (c: HTMLCanvasElement): CanvasRenderingContext2D => {
  const ctx = c.getContext('2d', { willReadFrequently: true })
  if (!ctx) throw new Error('2d context unavailable')
  ctx.imageSmoothingEnabled = false
  return ctx
}

export const cloneCanvas = (src: HTMLCanvasElement): HTMLCanvasElement => {
  const c = createCanvas(src.width, src.height)
  getCtx(c).drawImage(src, 0, 0)
  return c
}

export const clearCanvas = (c: HTMLCanvasElement) => {
  getCtx(c).clearRect(0, 0, c.width, c.height)
}

export const dataUrlToCanvas = (
  url: string,
  w = SKIN_W,
  h = SKIN_H,
): Promise<HTMLCanvasElement> =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      // Normalize to 64x64. Legacy 64x32 skins are auto-upgraded by drawing
      // them onto a 64x64 canvas (the unused area stays transparent which
      // matches Minecraft's modern behavior).
      const out = createCanvas(w, h)
      const ctx = getCtx(out)
      const targetH = img.height === 32 ? 32 : h
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, targetH)
      resolve(out)
    }
    img.onerror = reject
    img.src = url
  })

export const fileToCanvas = (file: File): Promise<HTMLCanvasElement> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result !== 'string') return reject('bad read')
      dataUrlToCanvas(reader.result).then(resolve, reject)
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

export interface LayerCompositeOpts {
  canvas: HTMLCanvasElement
  opacity: number
  visible: boolean
  hue?: number
  saturation?: number
  brightness?: number
}

const layerHasAdjustments = (l: LayerCompositeOpts) =>
  (l.hue ?? 0) !== 0 ||
  (l.saturation ?? 1) !== 1 ||
  (l.brightness ?? 1) !== 1

/** Draw one layer onto a context, applying non-destructive HSL adjustments. */
export const drawLayerComposite = (
  ctx: CanvasRenderingContext2D,
  layer: LayerCompositeOpts,
) => {
  if (!layer.visible) return
  const hue = layer.hue ?? 0
  const saturation = layer.saturation ?? 1
  const brightness = layer.brightness ?? 1

  if (layerHasAdjustments(layer)) {
    const temp = createCanvas(layer.canvas.width, layer.canvas.height)
    const tctx = getCtx(temp)
    tctx.filter = `hue-rotate(${hue}deg) saturate(${saturation * 100}%) brightness(${brightness * 100}%)`
    tctx.drawImage(layer.canvas, 0, 0)
    tctx.filter = 'none'
    ctx.globalAlpha = layer.opacity
    ctx.drawImage(temp, 0, 0)
  } else {
    ctx.globalAlpha = layer.opacity
    ctx.drawImage(layer.canvas, 0, 0)
  }
  ctx.globalAlpha = 1
}

/** Export a single layer as PNG, including HSL adjustments. */
export const layerToDataUrl = (layer: LayerCompositeOpts): string => {
  const tmp = createCanvas()
  drawLayerComposite(getCtx(tmp), { ...layer, opacity: 1, visible: true })
  return toDataURL(tmp)
}

// Composite layered RGBA canvases (back to front) into a single 64x64 canvas.
export const hasVisibleLayers = (layers: LayerCompositeOpts[]): boolean =>
  layers.some((l) => l.visible)

export const compositeLayers = (layers: LayerCompositeOpts[]): HTMLCanvasElement => {
  const out = createCanvas()
  const ctx = getCtx(out)
  ctx.clearRect(0, 0, SKIN_W, SKIN_H)
  for (const l of layers) drawLayerComposite(ctx, l)
  return out
}

export const toBlobURL = (c: HTMLCanvasElement): Promise<string> =>
  new Promise((resolve, reject) =>
    c.toBlob((b) => (b ? resolve(URL.createObjectURL(b)) : reject('no blob')), 'image/png'),
  )

export const toDataURL = (c: HTMLCanvasElement): string => c.toDataURL('image/png')

export const downloadCanvas = (c: HTMLCanvasElement, filename: string) => {
  c.toBlob((blob) => {
    if (!blob) return
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename.endsWith('.png') ? filename : `${filename}.png`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 500)
  }, 'image/png')
}

// Replace pixels of one body part region in a layer with a swatch of color.
// Used for the auto-base "skin tone" base layer when starting fresh.
export const paintPart = (
  c: HTMLCanvasElement,
  rect: { x: number; y: number; w: number; h: number },
  color: string,
) => {
  const ctx = getCtx(c)
  ctx.fillStyle = color
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
}

// Blockbench default Java template — solid inner-layer cubes, overlay atlas empty/transparent.
const BLOCKBENCH_TEMPLATE_COLORS: Record<InnerBodyPart, string> = {
  head: '#54C2FF',
  body: '#7DFF7D',
  right_arm: '#FF7D7D',
  left_arm: '#FFBD7D',
  right_leg: '#7D7DFF',
  left_leg: '#FF7DFF',
}

export const buildBlockbenchBase = (model: ModelKind): HTMLCanvasElement => {
  const c = createCanvas()
  clearCanvas(c)
  const ctx = getCtx(c)
  const parts = partsFor(model)

  for (const key of INNER_BODY_PARTS) {
    const color = BLOCKBENCH_TEMPLATE_COLORS[key]
    for (const face of Object.values(parts[key])) {
      ctx.fillStyle = color
      ctx.fillRect(face.x, face.y, face.w, face.h)
    }
  }
  return c
}

// Default starting skin — Blockbench-style color blocks per body part.
export const buildDefaultBase = (model: ModelKind): HTMLCanvasElement =>
  buildBlockbenchBase(model)

// Minimal aesthetic mannequin used for preset previews.
export const buildMannequinBase = (model: ModelKind): HTMLCanvasElement => {
  const c = createCanvas()
  const ctx = getCtx(c)
  ctx.imageSmoothingEnabled = false
  const parts = partsFor(model)
  const skin = PALETTE.skin

  const baseParts: BodyPart[] = [
    'head', 'body', 'right_arm', 'left_arm', 'right_leg', 'left_leg',
  ]
  for (const key of baseParts) {
    for (const face of Object.values(parts[key])) {
      fillFaceShaded(ctx, face, skin)
    }
  }

  // Subtle aesthetic eyes
  const hf = parts.head.front
  ctx.fillStyle = '#FFF5EE'
  pix(ctx, hf.x + 2, hf.y + 4, '#FFF5EE')
  pix(ctx, hf.x + 5, hf.y + 4, '#FFF5EE')
  ctx.fillStyle = '#5A9A8A'
  pix(ctx, hf.x + 2, hf.y + 4, '#5A9A8A')
  pix(ctx, hf.x + 5, hf.y + 4, '#5A9A8A')
  ctx.fillStyle = '#2A2428'
  pix(ctx, hf.x + 2, hf.y + 5, '#2A2428')
  pix(ctx, hf.x + 5, hf.y + 5, '#2A2428')

  return c
}

// Back-compat alias for preset previews.
export const buildMannequinPreviewBase = buildMannequinBase

// Sample a single pixel as #rrggbbaa string
export const pickPixel = (c: HTMLCanvasElement, x: number, y: number): string => {
  const d = getCtx(c).getImageData(x, y, 1, 1).data
  const hex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${hex(d[0])}${hex(d[1])}${hex(d[2])}${hex(d[3])}`
}

// Convert "#rrggbb" or "#rrggbbaa" or "rgba(...)" to [r,g,b,a 0..255]
export const parseColor = (color: string): [number, number, number, number] => {
  if (color.startsWith('#')) {
    const hex = color.slice(1)
    if (hex.length === 6) {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
        255,
      ]
    }
    if (hex.length === 8) {
      return [
        parseInt(hex.slice(0, 2), 16),
        parseInt(hex.slice(2, 4), 16),
        parseInt(hex.slice(4, 6), 16),
        parseInt(hex.slice(6, 8), 16),
      ]
    }
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16)
      const g = parseInt(hex[1] + hex[1], 16)
      const b = parseInt(hex[2] + hex[2], 16)
      return [r, g, b, 255]
    }
  }
  // Fallback: render once to a temp canvas to resolve any CSS color
  const tmp = createCanvas(1, 1)
  const ctx = getCtx(tmp)
  ctx.fillStyle = color
  ctx.fillRect(0, 0, 1, 1)
  const d = ctx.getImageData(0, 0, 1, 1).data
  return [d[0], d[1], d[2], d[3]]
}
