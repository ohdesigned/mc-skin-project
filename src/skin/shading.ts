import { Rect } from './format'

/** Muted medieval / aesthetic palette tones */
export interface ShadePalette {
  light: string
  mid: string
  dark: string
  shadow?: string
}

export const PAL = {
  leather: { light: '#8B6548', mid: '#6B4A38', dark: '#4A3228', shadow: '#3D2A20' },
  darkLeather: { light: '#5A4A42', mid: '#3D3630', dark: '#2A2420', shadow: '#1B1614' },
  linen: { light: '#F5EDE0', mid: '#E8DED0', dark: '#C9BCAC', shadow: '#A89888' },
  charcoal: { light: '#5A5258', mid: '#3D363A', dark: '#2A2428', shadow: '#1B1618' },
  burgundy: { light: '#7A3848', mid: '#5C2838', dark: '#3D1828', shadow: '#2A1018' },
  cream: { light: '#FFFBEA', mid: '#F7E6CF', dark: '#D9BF8E', shadow: '#B07B47' },
  iron: { light: '#C8CCD2', mid: '#9BA0A8', dark: '#7B7F87', shadow: '#5A5E64' },
  skin: { light: '#F0C8B0', mid: '#E0B49A', dark: '#C99582', shadow: '#A87B68' },
  tealEye: { light: '#7AB8A8', mid: '#5A9A8A', dark: '#3D7068', shadow: '#2A5048' },
  hairBrown: { light: '#6B4A38', mid: '#4A3228', dark: '#3D2614', shadow: '#2A1810' },
  hairBlonde: { light: '#E8C878', mid: '#C9A848', dark: '#9A7830', shadow: '#6B5420' },
  moss: { light: '#6A8A68', mid: '#4A6A48', dark: '#3A5238', shadow: '#2A3A28' },
} as const

const hash = (x: number, y: number) => ((x * 374761393 + y * 668265263) >>> 0) % 997

/** Pick a shade tone for a pixel inside a face (vertical gradient + subtle noise). */
export const toneAt = (
  px: number,
  py: number,
  face: Rect,
  pal: ShadePalette,
): string => {
  const t = (py - face.y) / Math.max(1, face.h - 1)
  const n = hash(px, py) % 5
  if (t < 0.2) return n === 0 ? pal.light : pal.mid
  if (t < 0.55) return n < 2 ? pal.mid : pal.light
  if (t < 0.8) return n < 2 ? pal.dark : pal.mid
  return pal.shadow ?? pal.dark
}

export const fillFaceShaded = (
  ctx: CanvasRenderingContext2D,
  face: Rect,
  pal: ShadePalette,
) => {
  for (let yy = 0; yy < face.h; yy++) {
    for (let xx = 0; xx < face.w; xx++) {
      ctx.fillStyle = toneAt(face.x + xx, face.y + yy, face, pal)
      ctx.fillRect(face.x + xx, face.y + yy, 1, 1)
    }
  }
}

export const fillRectShaded = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  pal: ShadePalette,
) => fillFaceShaded(ctx, { x, y, w, h }, pal)

export const pix = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, 1)
}

export const hline = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  len: number,
  color: string,
) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, len, 1)
}

export const vline = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  len: number,
  color: string,
) => {
  ctx.fillStyle = color
  ctx.fillRect(x, y, 1, len)
}
