import { SKIN_W, SKIN_H, ModelKind, partsFor, BodyPart } from './format'

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

// Composite layered RGBA canvases (back to front) into a single 64x64 canvas.
export const compositeLayers = (
  layers: { canvas: HTMLCanvasElement; opacity: number; visible: boolean }[],
): HTMLCanvasElement => {
  const out = createCanvas()
  const ctx = getCtx(out)
  for (const l of layers) {
    if (!l.visible) continue
    ctx.globalAlpha = l.opacity
    ctx.drawImage(l.canvas, 0, 0)
  }
  ctx.globalAlpha = 1
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

// Build a starting "Steve-like" base canvas so a fresh skin isn't fully
// transparent. We fill all body parts (faces only) with skin tone, then
// add some basic clothing colors.
export const buildDefaultBase = (model: ModelKind): HTMLCanvasElement => {
  const c = createCanvas()
  const ctx = getCtx(c)
  ctx.imageSmoothingEnabled = false
  const parts = partsFor(model)

  const skin = '#C39979'
  const skinShade = '#A87B5C'
  const eye = '#3B2A1E'
  const mouth = '#7A3B2C'
  const hair = '#3D2614'
  const shirt = '#2F8FCF'
  const shirtShade = '#1E5F8E'
  const pants = '#46367E'
  const pantsShade = '#2E2456'
  const shoe = '#5B3A1F'

  // Paint head/body/arms/legs skin tone
  const paintAllFaces = (key: BodyPart, color: string) => {
    const faces = parts[key]
    for (const face of Object.values(faces)) {
      ctx.fillStyle = color
      ctx.fillRect(face.x, face.y, face.w, face.h)
    }
  }
  paintAllFaces('head', skin)
  paintAllFaces('body', skin)
  paintAllFaces('right_arm', skin)
  paintAllFaces('left_arm', skin)
  paintAllFaces('right_leg', skin)
  paintAllFaces('left_leg', skin)

  // Hair on head top
  const headFaces = parts.head
  ctx.fillStyle = hair
  ctx.fillRect(headFaces.top.x, headFaces.top.y, headFaces.top.w, headFaces.top.h)
  // Some hair edge on front (forehead band)
  ctx.fillRect(headFaces.front.x, headFaces.front.y, headFaces.front.w, 2)
  ctx.fillRect(headFaces.back.x, headFaces.back.y, headFaces.back.w, 2)
  ctx.fillRect(headFaces.left.x, headFaces.left.y, headFaces.left.w, 2)
  ctx.fillRect(headFaces.right.x, headFaces.right.y, headFaces.right.w, 2)

  // Eyes & mouth on head front
  const hf = headFaces.front
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(hf.x + 2, hf.y + 4, 1, 1)
  ctx.fillRect(hf.x + 5, hf.y + 4, 1, 1)
  ctx.fillStyle = eye
  ctx.fillRect(hf.x + 2, hf.y + 4, 1, 1)
  ctx.fillRect(hf.x + 5, hf.y + 4, 1, 1)
  ctx.fillStyle = mouth
  ctx.fillRect(hf.x + 3, hf.y + 6, 2, 1)

  // Subtle shading on head front sides
  ctx.fillStyle = skinShade
  ctx.fillRect(hf.x, hf.y + 7, 1, 1)
  ctx.fillRect(hf.x + 7, hf.y + 7, 1, 1)

  // Shirt: front+back+sides of body
  const bf = parts.body
  ctx.fillStyle = shirt
  ctx.fillRect(bf.front.x, bf.front.y, bf.front.w, bf.front.h)
  ctx.fillRect(bf.back.x, bf.back.y, bf.back.w, bf.back.h)
  ctx.fillRect(bf.left.x, bf.left.y, bf.left.w, bf.left.h)
  ctx.fillRect(bf.right.x, bf.right.y, bf.right.w, bf.right.h)
  ctx.fillStyle = shirtShade
  ctx.fillRect(bf.front.x, bf.front.y + bf.front.h - 1, bf.front.w, 1)
  ctx.fillRect(bf.back.x, bf.back.y + bf.back.h - 1, bf.back.w, 1)

  // Sleeves: paint front of arms shirt color
  for (const arm of ['right_arm', 'left_arm'] as const) {
    const af = parts[arm]
    ctx.fillStyle = shirt
    ctx.fillRect(af.front.x, af.front.y, af.front.w, 4)
    ctx.fillRect(af.back.x, af.back.y, af.back.w, 4)
    ctx.fillRect(af.left.x, af.left.y, af.left.w, 4)
    ctx.fillRect(af.right.x, af.right.y, af.right.w, 4)
    ctx.fillStyle = shirtShade
    ctx.fillRect(af.top.x, af.top.y, af.top.w, af.top.h)
  }

  // Pants
  for (const leg of ['right_leg', 'left_leg'] as const) {
    const lf = parts[leg]
    ctx.fillStyle = pants
    for (const face of Object.values(lf)) {
      ctx.fillRect(face.x, face.y, face.w, face.h)
    }
    // shoe at bottom 2 rows
    ctx.fillStyle = shoe
    ctx.fillRect(lf.front.x, lf.front.y + lf.front.h - 2, lf.front.w, 2)
    ctx.fillRect(lf.back.x, lf.back.y + lf.back.h - 2, lf.back.w, 2)
    ctx.fillRect(lf.left.x, lf.left.y + lf.left.h - 2, lf.left.w, 2)
    ctx.fillRect(lf.right.x, lf.right.y + lf.right.h - 2, lf.right.w, 2)
    ctx.fillRect(lf.bottom.x, lf.bottom.y, lf.bottom.w, lf.bottom.h)
    ctx.fillStyle = pantsShade
    ctx.fillRect(lf.top.x, lf.top.y, lf.top.w, lf.top.h)
  }

  return c
}

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
