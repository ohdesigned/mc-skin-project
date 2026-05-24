import { SKIN_W, SKIN_H } from './format'
import { getCtx, parseColor } from './canvas'

export type ToolKind =
  | 'pencil'
  | 'eraser'
  | 'fill'
  | 'eyedropper'
  | 'shade'
  | 'lighten'
  | 'mirror'

export interface PaintOpts {
  color: string
  size: number // 1, 2, 3 px brush
  mirror?: boolean
}

const setPixel = (
  data: Uint8ClampedArray,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
  a: number,
) => {
  if (x < 0 || y < 0 || x >= SKIN_W || y >= SKIN_H) return
  const i = (y * SKIN_W + x) * 4
  data[i] = r
  data[i + 1] = g
  data[i + 2] = b
  data[i + 3] = a
}

export const paintPixel = (
  c: HTMLCanvasElement,
  x: number,
  y: number,
  opts: PaintOpts,
  validMask?: Uint8Array,
) => {
  const ctx = getCtx(c)
  const img = ctx.getImageData(0, 0, SKIN_W, SKIN_H)
  const [r, g, b, a] = parseColor(opts.color)
  const size = Math.max(1, Math.floor(opts.size))
  const half = Math.floor(size / 2)
  for (let dy = 0; dy < size; dy++) {
    for (let dx = 0; dx < size; dx++) {
      const px = x - half + dx
      const py = y - half + dy
      if (validMask && (px < 0 || py < 0 || px >= SKIN_W || py >= SKIN_H ||
        !validMask[py * SKIN_W + px])) continue
      setPixel(img.data, px, py, r, g, b, a)
      if (opts.mirror) {
        // Mirror across head/body vertical axis
        const mirrored = mirrorX(px, py)
        if (mirrored) {
          if (validMask && !validMask[mirrored.y * SKIN_W + mirrored.x]) continue
          setPixel(img.data, mirrored.x, mirrored.y, r, g, b, a)
        }
      }
    }
  }
  ctx.putImageData(img, 0, 0)
}

export const erasePixel = (
  c: HTMLCanvasElement,
  x: number,
  y: number,
  size = 1,
  mirror = false,
) => {
  const ctx = getCtx(c)
  ctx.save()
  ctx.globalCompositeOperation = 'destination-out'
  ctx.fillStyle = '#000'
  const half = Math.floor(size / 2)
  ctx.fillRect(x - half, y - half, size, size)
  if (mirror) {
    const m = mirrorX(x, y)
    if (m) ctx.fillRect(m.x - half, m.y - half, size, size)
  }
  ctx.restore()
}

// Mirror a pixel coordinate across the symmetry axis used by the
// classic player skin: left-right body parts swap, and each face also
// flips horizontally inside the part. This is a simple approximation
// good enough for symmetric drawing tools.
const mirrorX = (x: number, y: number): { x: number; y: number } | null => {
  // Inside head (rows 0..16, cols 0..32) the head front spans 8..16, mirror inside it
  // The mirror tool here only mirrors faces horizontally within their own face.
  // It's not perfect, but it's a useful symmetry helper for the front of head/body.
  // Find which face the pixel belongs to and mirror horizontally inside it.
  const faces: { x: number; y: number; w: number; h: number }[] = [
    { x: 8, y: 8, w: 8, h: 8 }, // head front
    { x: 40, y: 8, w: 8, h: 8 }, // head front overlay
    { x: 20, y: 20, w: 8, h: 12 }, // body front
    { x: 20, y: 36, w: 8, h: 12 }, // body front overlay
  ]
  for (const f of faces) {
    if (x >= f.x && x < f.x + f.w && y >= f.y && y < f.y + f.h) {
      const local = x - f.x
      const mx = f.x + (f.w - 1 - local)
      return { x: mx, y }
    }
  }
  return null
}

// Flood fill (4-connected) within the same alpha-tolerant color region.
export const floodFill = (
  c: HTMLCanvasElement,
  x: number,
  y: number,
  color: string,
  validMask?: Uint8Array,
) => {
  if (x < 0 || y < 0 || x >= SKIN_W || y >= SKIN_H) return
  if (validMask && !validMask[y * SKIN_W + x]) return
  const ctx = getCtx(c)
  const img = ctx.getImageData(0, 0, SKIN_W, SKIN_H)
  const data = img.data
  const idx = (xx: number, yy: number) => (yy * SKIN_W + xx) * 4
  const start = idx(x, y)
  const sr = data[start]
  const sg = data[start + 1]
  const sb = data[start + 2]
  const sa = data[start + 3]
  const [r, g, b, a] = parseColor(color)
  if (sr === r && sg === g && sb === b && sa === a) return
  const stack: [number, number][] = [[x, y]]
  while (stack.length) {
    const [cx, cy] = stack.pop()!
    if (cx < 0 || cy < 0 || cx >= SKIN_W || cy >= SKIN_H) continue
    if (validMask && !validMask[cy * SKIN_W + cx]) continue
    const i = idx(cx, cy)
    if (
      data[i] !== sr ||
      data[i + 1] !== sg ||
      data[i + 2] !== sb ||
      data[i + 3] !== sa
    )
      continue
    data[i] = r
    data[i + 1] = g
    data[i + 2] = b
    data[i + 3] = a
    stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1])
  }
  ctx.putImageData(img, 0, 0)
}

// Soft tone tools: shade uses a dark purple multiply tint; lighten uses soft yellow screen.
const SHADE_STRENGTH = 0.12
const LIGHTEN_STRENGTH = 0.05
const SHADE_PURPLE = { r: 88, g: 38, b: 132 }
const LIGHTEN_YELLOW = { r: 255, g: 250, b: 210 }

const applyShadeTone = (r: number, g: number, b: number): [number, number, number] => {
  const t = SHADE_STRENGTH
  const { r: pr, g: pg, b: pb } = SHADE_PURPLE
  const mr = (r * pr) / 255
  const mg = (g * pg) / 255
  const mb = (b * pb) / 255
  const mix = (base: number, mul: number, tint: number) =>
    Math.round(base + (mul - base) * t * 0.55 + (tint - base) * t * 0.45)
  return [mix(r, mr, pr), mix(g, mg, pg), mix(b, mb, pb)]
}

const applyLightenTone = (r: number, g: number, b: number): [number, number, number] => {
  const t = LIGHTEN_STRENGTH
  const { r: yr, g: yg, b: yb } = LIGHTEN_YELLOW
  const sr = 255 - ((255 - r) * (255 - yr)) / 255
  const sg = 255 - ((255 - g) * (255 - yg)) / 255
  const sb = 255 - ((255 - b) * (255 - yb)) / 255
  return [
    Math.round(r + (sr - r) * t),
    Math.round(g + (sg - g) * t),
    Math.round(b + (sb - b) * t),
  ]
}

const toneAt = (
  data: Uint8ClampedArray,
  px: number,
  py: number,
  mode: 'shade' | 'lighten',
) => {
  const i = (py * SKIN_W + px) * 4
  if (data[i + 3] === 0) return
  const [nr, ng, nb] =
    mode === 'shade'
      ? applyShadeTone(data[i], data[i + 1], data[i + 2])
      : applyLightenTone(data[i], data[i + 1], data[i + 2])
  data[i] = nr
  data[i + 1] = ng
  data[i + 2] = nb
}

export const shadePixel = (
  c: HTMLCanvasElement,
  x: number,
  y: number,
  size = 1,
  validMask?: Uint8Array,
) => {
  const ctx = getCtx(c)
  const img = ctx.getImageData(0, 0, SKIN_W, SKIN_H)
  const data = img.data
  const half = Math.floor(size / 2)
  for (let dy = 0; dy < size; dy++) {
    for (let dx = 0; dx < size; dx++) {
      const px = x - half + dx
      const py = y - half + dy
      if (px < 0 || py < 0 || px >= SKIN_W || py >= SKIN_H) continue
      if (validMask && !validMask[py * SKIN_W + px]) continue
      toneAt(data, px, py, 'shade')
    }
  }
  ctx.putImageData(img, 0, 0)
}

export const lightenPixel = (
  c: HTMLCanvasElement,
  x: number,
  y: number,
  size = 1,
  validMask?: Uint8Array,
) => {
  const ctx = getCtx(c)
  const img = ctx.getImageData(0, 0, SKIN_W, SKIN_H)
  const data = img.data
  const half = Math.floor(size / 2)
  for (let dy = 0; dy < size; dy++) {
    for (let dx = 0; dx < size; dx++) {
      const px = x - half + dx
      const py = y - half + dy
      if (px < 0 || py < 0 || px >= SKIN_W || py >= SKIN_H) continue
      if (validMask && !validMask[py * SKIN_W + px]) continue
      toneAt(data, px, py, 'lighten')
    }
  }
  ctx.putImageData(img, 0, 0)
}

// Bresenham line drawing for smooth strokes when the user drags fast.
export const lineStroke = (
  c: HTMLCanvasElement,
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  apply: (cv: HTMLCanvasElement, x: number, y: number) => void,
) => {
  let x = x0
  let y = y0
  const dx = Math.abs(x1 - x0)
  const dy = -Math.abs(y1 - y0)
  const sx = x0 < x1 ? 1 : -1
  const sy = y0 < y1 ? 1 : -1
  let err = dx + dy
  while (true) {
    apply(c, x, y)
    if (x === x1 && y === y1) break
    const e2 = 2 * err
    if (e2 >= dy) {
      err += dy
      x += sx
    }
    if (e2 <= dx) {
      err += dx
      y += sy
    }
  }
}
