import { ModelKind, partsFor, BodyPart, PartFaces } from '../skin/format'
import { createCanvas, getCtx } from '../skin/canvas'

export type PresetCategory = 'face' | 'hair' | 'shirt' | 'pants' | 'shoes'

export interface Preset {
  id: string
  name: string
  category: PresetCategory
  description: string
  // Procedural renderer: paints onto a 64x64 layer canvas for the given model.
  render: (canvas: HTMLCanvasElement, model: ModelKind) => void
  // Optional swatch colors for the preset thumbnail in the picker.
  swatch?: [string, string, string?]
}

const drawFace = (
  ctx: CanvasRenderingContext2D,
  face: PartFaces['front'],
  cb: (x: number, y: number) => void,
) => {
  for (let yy = 0; yy < face.h; yy++) {
    for (let xx = 0; xx < face.w; xx++) {
      cb(face.x + xx, face.y + yy)
    }
  }
}

const fillFace = (
  ctx: CanvasRenderingContext2D,
  face: PartFaces['front'],
  color: string,
) => {
  ctx.fillStyle = color
  ctx.fillRect(face.x, face.y, face.w, face.h)
}

// Convenience: paint a relative rect inside a face.
const rect = (
  ctx: CanvasRenderingContext2D,
  face: PartFaces['front'],
  rx: number,
  ry: number,
  rw: number,
  rh: number,
  color: string,
) => {
  ctx.fillStyle = color
  ctx.fillRect(face.x + rx, face.y + ry, rw, rh)
}

const pix = (
  ctx: CanvasRenderingContext2D,
  face: PartFaces['front'],
  rx: number,
  ry: number,
  color: string,
) => {
  ctx.fillStyle = color
  ctx.fillRect(face.x + rx, face.y + ry, 1, 1)
}

// ============ FACES ============

const facePreset = (
  id: string,
  name: string,
  description: string,
  swatch: [string, string],
  paint: (ctx: CanvasRenderingContext2D, head: PartFaces) => void,
): Preset => ({
  id,
  name,
  category: 'face',
  description,
  swatch,
  render: (canvas, model) => {
    const ctx = getCtx(canvas)
    const head = partsFor(model).head
    paint(ctx, head)
  },
})

const FACES: Preset[] = [
  facePreset(
    'face-classic',
    'Classic',
    'A traditional Minecraft face',
    ['#FFFFFF', '#3B2A1E'],
    (ctx, head) => {
      const f = head.front
      pix(ctx, f, 2, 4, '#FFFFFF')
      pix(ctx, f, 5, 4, '#FFFFFF')
      pix(ctx, f, 2, 4, '#3B2A1E')
      pix(ctx, f, 5, 4, '#3B2A1E')
      rect(ctx, f, 3, 6, 2, 1, '#7A3B2C')
    },
  ),
  facePreset(
    'face-smile',
    'Happy',
    'A wide cheerful smile',
    ['#3B2A1E', '#D54B4B'],
    (ctx, head) => {
      const f = head.front
      pix(ctx, f, 2, 4, '#3B2A1E')
      pix(ctx, f, 5, 4, '#3B2A1E')
      rect(ctx, f, 2, 6, 4, 1, '#7A3B2C')
      pix(ctx, f, 1, 6, '#D54B4B')
      pix(ctx, f, 6, 6, '#D54B4B')
    },
  ),
  facePreset(
    'face-pirate',
    'Pirate',
    'Eye patch with a sly grin',
    ['#2A2138', '#3B2A1E'],
    (ctx, head) => {
      const f = head.front
      rect(ctx, f, 1, 3, 3, 2, '#2A2138')
      pix(ctx, f, 1, 5, '#2A2138')
      pix(ctx, f, 5, 4, '#3B2A1E')
      rect(ctx, f, 3, 6, 3, 1, '#7A3B2C')
    },
  ),
  facePreset(
    'face-blush',
    'Blushy',
    'Soft eyes with pink cheeks',
    ['#3B2A1E', '#FF9FB1'],
    (ctx, head) => {
      const f = head.front
      pix(ctx, f, 2, 4, '#3B2A1E')
      pix(ctx, f, 5, 4, '#3B2A1E')
      pix(ctx, f, 1, 5, '#FF9FB1')
      pix(ctx, f, 6, 5, '#FF9FB1')
      rect(ctx, f, 3, 6, 2, 1, '#D54B4B')
    },
  ),
  facePreset(
    'face-cool',
    'Sunglasses',
    'Cool sunglasses across the eyes',
    ['#1B1424', '#F5C04A'],
    (ctx, head) => {
      const f = head.front
      rect(ctx, f, 1, 4, 6, 1, '#1B1424')
      rect(ctx, f, 1, 4, 2, 2, '#1B1424')
      rect(ctx, f, 5, 4, 2, 2, '#1B1424')
      pix(ctx, f, 3, 4, '#1B1424')
      pix(ctx, f, 4, 4, '#1B1424')
      rect(ctx, f, 3, 6, 2, 1, '#7A3B2C')
    },
  ),
  facePreset(
    'face-robot',
    'Robot',
    'Glowing pixel eyes',
    ['#3FB6A8', '#A6E3C8'],
    (ctx, head) => {
      const f = head.front
      pix(ctx, f, 2, 4, '#3FB6A8')
      pix(ctx, f, 5, 4, '#3FB6A8')
      rect(ctx, f, 2, 5, 4, 1, '#A6E3C8')
      rect(ctx, f, 1, 6, 6, 1, '#1B1424')
      pix(ctx, f, 2, 6, '#FFFBEA')
      pix(ctx, f, 5, 6, '#FFFBEA')
    },
  ),
]

// ============ HAIR ============

const hairPreset = (
  id: string,
  name: string,
  description: string,
  color: string,
  shade: string,
  paint: (
    ctx: CanvasRenderingContext2D,
    headFaces: PartFaces,
    overlayFaces: PartFaces,
    primary: string,
    shade: string,
  ) => void,
): Preset => ({
  id,
  name,
  category: 'hair',
  description,
  swatch: [color, shade],
  render: (canvas, model) => {
    const ctx = getCtx(canvas)
    const head = partsFor(model).head
    const overlay = partsFor(model).head_overlay
    paint(ctx, head, overlay, color, shade)
  },
})

const HAIR: Preset[] = [
  hairPreset(
    'hair-short-brown',
    'Short Brown',
    'A simple cropped style',
    '#5B3A1F',
    '#3D2614',
    (ctx, head, overlay, c, s) => {
      fillFace(ctx, head.top, c)
      rect(ctx, head.front, 0, 0, 8, 2, c)
      rect(ctx, head.back, 0, 0, 8, 2, c)
      rect(ctx, head.left, 0, 0, 8, 2, c)
      rect(ctx, head.right, 0, 0, 8, 2, c)
      pix(ctx, head.front, 0, 2, s)
      pix(ctx, head.front, 7, 2, s)
    },
  ),
  hairPreset(
    'hair-long-blonde',
    'Long Blonde',
    'Flowing locks down the back',
    '#F5C04A',
    '#C98E20',
    (ctx, head, overlay, c, s) => {
      fillFace(ctx, head.top, c)
      // Front bangs
      rect(ctx, head.front, 0, 0, 8, 3, c)
      pix(ctx, head.front, 3, 3, c)
      pix(ctx, head.front, 4, 3, c)
      // Back: full hair
      fillFace(ctx, head.back, c)
      // Sides: full length
      fillFace(ctx, head.left, c)
      fillFace(ctx, head.right, c)
      // Highlights
      rect(ctx, head.front, 0, 0, 8, 1, s)
      rect(ctx, head.back, 0, 0, 8, 1, s)
    },
  ),
  hairPreset(
    'hair-mohawk',
    'Mohawk',
    'Bold center stripe',
    '#D54B4B',
    '#A82F38',
    (ctx, head, overlay, c, s) => {
      rect(ctx, head.top, 3, 0, 2, 8, c)
      rect(ctx, head.front, 3, 0, 2, 1, c)
      rect(ctx, head.back, 3, 0, 2, 1, c)
      rect(ctx, head.top, 3, 0, 2, 1, s)
      rect(ctx, head.top, 3, 7, 2, 1, s)
    },
  ),
  hairPreset(
    'hair-curly',
    'Curly',
    'Bouncy curls all around',
    '#3D2614',
    '#1F1208',
    (ctx, head, overlay, c, s) => {
      fillFace(ctx, head.top, c)
      // Curly silhouette around edges in head overlay layer (so it puffs out)
      fillFace(ctx, overlay.top, c)
      rect(ctx, overlay.front, 0, 0, 8, 3, c)
      rect(ctx, overlay.back, 0, 0, 8, 3, c)
      rect(ctx, overlay.left, 0, 0, 8, 3, c)
      rect(ctx, overlay.right, 0, 0, 8, 3, c)
      // Add little curl marks
      pix(ctx, head.top, 1, 1, s)
      pix(ctx, head.top, 6, 1, s)
      pix(ctx, head.top, 1, 6, s)
      pix(ctx, head.top, 6, 6, s)
      pix(ctx, head.top, 3, 3, s)
      pix(ctx, head.top, 4, 4, s)
    },
  ),
  hairPreset(
    'hair-ponytail',
    'Ponytail',
    'Tied back hair',
    '#7E4FB8',
    '#4A2C6E',
    (ctx, head, overlay, c, s) => {
      fillFace(ctx, head.top, c)
      rect(ctx, head.front, 0, 0, 8, 2, c)
      rect(ctx, head.left, 0, 0, 8, 2, c)
      rect(ctx, head.right, 0, 0, 8, 2, c)
      // Ponytail on back: a vertical strip
      rect(ctx, head.back, 2, 0, 4, 8, c)
      rect(ctx, head.back, 3, 0, 2, 8, s)
    },
  ),
  hairPreset(
    'hair-buzz',
    'Buzz Cut',
    'Clean and minimal',
    '#2A2138',
    '#1B1424',
    (ctx, head, overlay, c, s) => {
      fillFace(ctx, head.top, c)
      rect(ctx, head.front, 0, 0, 8, 1, c)
      rect(ctx, head.back, 0, 0, 8, 1, c)
      rect(ctx, head.left, 0, 0, 8, 1, c)
      rect(ctx, head.right, 0, 0, 8, 1, c)
    },
  ),
  hairPreset(
    'hair-hat',
    'Beanie',
    'Cozy knit cap',
    '#3FB6A8',
    '#1F7A70',
    (ctx, head, overlay, c, s) => {
      // Put on overlay so it sits over hair
      fillFace(ctx, overlay.top, c)
      rect(ctx, overlay.front, 0, 0, 8, 3, c)
      rect(ctx, overlay.back, 0, 0, 8, 3, c)
      rect(ctx, overlay.left, 0, 0, 8, 3, c)
      rect(ctx, overlay.right, 0, 0, 8, 3, c)
      rect(ctx, overlay.front, 0, 2, 8, 1, s)
      rect(ctx, overlay.back, 0, 2, 8, 1, s)
      rect(ctx, overlay.left, 0, 2, 8, 1, s)
      rect(ctx, overlay.right, 0, 2, 8, 1, s)
    },
  ),
]

// ============ SHIRT ============

const shirtPreset = (
  id: string,
  name: string,
  description: string,
  primary: string,
  shade: string,
  paint?: (
    ctx: CanvasRenderingContext2D,
    body: PartFaces,
    rightArm: PartFaces,
    leftArm: PartFaces,
    primary: string,
    shade: string,
  ) => void,
): Preset => ({
  id,
  name,
  category: 'shirt',
  description,
  swatch: [primary, shade],
  render: (canvas, model) => {
    const ctx = getCtx(canvas)
    const parts = partsFor(model)
    const body = parts.body
    const rightArm = parts.right_arm
    const leftArm = parts.left_arm
    if (paint) {
      paint(ctx, body, rightArm, leftArm, primary, shade)
      return
    }
    // Default solid shirt
    for (const face of Object.values(body)) {
      ctx.fillStyle = primary
      ctx.fillRect(face.x, face.y, face.w, face.h)
    }
    for (const arm of [rightArm, leftArm]) {
      ctx.fillStyle = primary
      ctx.fillRect(arm.front.x, arm.front.y, arm.front.w, 4)
      ctx.fillRect(arm.back.x, arm.back.y, arm.back.w, 4)
      ctx.fillRect(arm.left.x, arm.left.y, arm.left.w, 4)
      ctx.fillRect(arm.right.x, arm.right.y, arm.right.w, 4)
      ctx.fillStyle = shade
      ctx.fillRect(arm.top.x, arm.top.y, arm.top.w, arm.top.h)
    }
    ctx.fillStyle = shade
    ctx.fillRect(body.top.x, body.top.y, body.top.w, body.top.h)
  },
})

const SHIRTS: Preset[] = [
  shirtPreset('shirt-cyan', 'Cyan Tee', 'Classic blue t-shirt', '#2F8FCF', '#1E5F8E'),
  shirtPreset('shirt-red', 'Red Tee', 'Bright red shirt', '#D54B4B', '#A82F38'),
  shirtPreset('shirt-gold', 'Gold Tunic', 'Warm yellow tunic', '#F5C04A', '#C98E20'),
  shirtPreset('shirt-purple', 'Purple Robe', 'Wizardly purple', '#7E4FB8', '#4A2C6E'),
  shirtPreset(
    'shirt-stripes',
    'Stripey',
    'Horizontal stripes',
    '#FFFBEA',
    '#D54B4B',
    (ctx, body, ra, la, c, s) => {
      for (const face of [body.front, body.back, body.left, body.right]) {
        for (let y = 0; y < face.h; y++) {
          ctx.fillStyle = y % 2 === 0 ? c : s
          ctx.fillRect(face.x, face.y + y, face.w, 1)
        }
      }
      // Solid sleeves
      for (const arm of [ra, la]) {
        ctx.fillStyle = c
        ctx.fillRect(arm.front.x, arm.front.y, arm.front.w, 4)
        ctx.fillRect(arm.back.x, arm.back.y, arm.back.w, 4)
        ctx.fillRect(arm.left.x, arm.left.y, arm.left.w, 4)
        ctx.fillRect(arm.right.x, arm.right.y, arm.right.w, 4)
      }
    },
  ),
  shirtPreset(
    'shirt-armor',
    'Iron Armor',
    'Metal chestplate',
    '#C8CCD2',
    '#7B7F87',
    (ctx, body, ra, la, c, s) => {
      for (const face of [body.front, body.back, body.left, body.right]) {
        ctx.fillStyle = c
        ctx.fillRect(face.x, face.y, face.w, face.h)
      }
      ctx.fillStyle = s
      // straps
      ctx.fillRect(body.front.x, body.front.y, 2, body.front.h)
      ctx.fillRect(body.front.x + body.front.w - 2, body.front.y, 2, body.front.h)
      ctx.fillRect(body.front.x + 3, body.front.y, 2, 1)
      // Body bottom edge dark
      ctx.fillRect(body.front.x, body.front.y + body.front.h - 1, body.front.w, 1)
      ctx.fillRect(body.back.x, body.back.y + body.back.h - 1, body.back.w, 1)
      // Sleeves
      for (const arm of [ra, la]) {
        for (const face of Object.values(arm)) {
          ctx.fillStyle = c
          ctx.fillRect(face.x, face.y, face.w, 4)
        }
        ctx.fillStyle = s
        ctx.fillRect(arm.front.x, arm.front.y + 3, arm.front.w, 1)
        ctx.fillRect(arm.back.x, arm.back.y + 3, arm.back.w, 1)
      }
    },
  ),
  shirtPreset(
    'shirt-hoodie',
    'Hoodie',
    'Comfy hoodie with pocket',
    '#46367E',
    '#2E2456',
    (ctx, body, ra, la, c, s) => {
      for (const face of Object.values(body)) {
        ctx.fillStyle = c
        ctx.fillRect(face.x, face.y, face.w, face.h)
      }
      // Pocket
      ctx.fillStyle = s
      ctx.fillRect(body.front.x + 2, body.front.y + 6, 4, 3)
      ctx.fillRect(body.front.x + 2, body.front.y + 6, 4, 1)
      // Drawstring v
      pix(ctx, body.front, 3, 1, s)
      pix(ctx, body.front, 4, 1, s)
      pix(ctx, body.front, 3, 2, s)
      pix(ctx, body.front, 4, 2, s)
      // Sleeves: full long sleeves on overlay would be ideal, but
      // this paints the visible sleeve area.
      for (const arm of [ra, la]) {
        for (const face of Object.values(arm)) {
          ctx.fillStyle = c
          ctx.fillRect(face.x, face.y, face.w, face.h)
        }
      }
    },
  ),
]

// ============ PANTS ============

const pantsPreset = (
  id: string,
  name: string,
  description: string,
  primary: string,
  shade: string,
  paint?: (
    ctx: CanvasRenderingContext2D,
    rl: PartFaces,
    ll: PartFaces,
    primary: string,
    shade: string,
  ) => void,
): Preset => ({
  id,
  name,
  category: 'pants',
  description,
  swatch: [primary, shade],
  render: (canvas, model) => {
    const ctx = getCtx(canvas)
    const parts = partsFor(model)
    const rl = parts.right_leg
    const ll = parts.left_leg
    if (paint) {
      paint(ctx, rl, ll, primary, shade)
      return
    }
    for (const leg of [rl, ll]) {
      for (const face of [leg.front, leg.back, leg.left, leg.right]) {
        ctx.fillStyle = primary
        ctx.fillRect(face.x, face.y, face.w, face.h)
      }
      ctx.fillStyle = shade
      ctx.fillRect(leg.top.x, leg.top.y, leg.top.w, leg.top.h)
    }
  },
})

const PANTS: Preset[] = [
  pantsPreset('pants-jeans', 'Jeans', 'Sturdy denim', '#3B5BA3', '#1F3262'),
  pantsPreset('pants-shorts', 'Shorts', 'Summer shorts', '#D54B4B', '#A82F38', (ctx, rl, ll, c, s) => {
    for (const leg of [rl, ll]) {
      for (const face of [leg.front, leg.back, leg.left, leg.right]) {
        ctx.fillStyle = c
        ctx.fillRect(face.x, face.y, face.w, 6)
      }
      ctx.fillStyle = s
      ctx.fillRect(leg.top.x, leg.top.y, leg.top.w, leg.top.h)
      // bottom hem
      ctx.fillStyle = s
      ctx.fillRect(leg.front.x, leg.front.y + 5, leg.front.w, 1)
    }
  }),
  pantsPreset('pants-cargo', 'Cargo', 'Khaki cargo pants', '#9C8B5A', '#6B5C32'),
  pantsPreset('pants-fancy', 'Royal', 'Fancy purple trousers', '#7E4FB8', '#4A2C6E'),
  pantsPreset(
    'pants-skirt',
    'Skirt',
    'A puffy pixel skirt',
    '#FF7AB6',
    '#B3437E',
    (ctx, rl, ll, c, s) => {
      for (const leg of [rl, ll]) {
        for (const face of Object.values(leg)) {
          ctx.fillStyle = c
          ctx.fillRect(face.x, face.y, face.w, 5)
        }
        ctx.fillStyle = s
        ctx.fillRect(leg.front.x, leg.front.y + 4, leg.front.w, 1)
        ctx.fillRect(leg.back.x, leg.back.y + 4, leg.back.w, 1)
      }
    },
  ),
]

// ============ SHOES ============

const shoesPreset = (
  id: string,
  name: string,
  description: string,
  primary: string,
  shade: string,
  paint?: (
    ctx: CanvasRenderingContext2D,
    rl: PartFaces,
    ll: PartFaces,
    primary: string,
    shade: string,
  ) => void,
): Preset => ({
  id,
  name,
  category: 'shoes',
  description,
  swatch: [primary, shade],
  render: (canvas, model) => {
    const ctx = getCtx(canvas)
    const parts = partsFor(model)
    const rl = parts.right_leg
    const ll = parts.left_leg
    if (paint) {
      paint(ctx, rl, ll, primary, shade)
      return
    }
    for (const leg of [rl, ll]) {
      const h = 2
      for (const face of [leg.front, leg.back, leg.left, leg.right]) {
        ctx.fillStyle = primary
        ctx.fillRect(face.x, face.y + face.h - h, face.w, h)
      }
      ctx.fillStyle = shade
      ctx.fillRect(leg.bottom.x, leg.bottom.y, leg.bottom.w, leg.bottom.h)
    }
  },
})

const SHOES: Preset[] = [
  shoesPreset('shoes-boots', 'Boots', 'Leather boots', '#5B3A1F', '#3D2614'),
  shoesPreset('shoes-sneakers', 'Sneakers', 'White sneakers', '#FFFBEA', '#C8CCD2', (ctx, rl, ll, c, s) => {
    for (const leg of [rl, ll]) {
      for (const face of [leg.front, leg.back, leg.left, leg.right]) {
        ctx.fillStyle = c
        ctx.fillRect(face.x, face.y + face.h - 3, face.w, 3)
      }
      ctx.fillStyle = s
      ctx.fillRect(leg.bottom.x, leg.bottom.y, leg.bottom.w, leg.bottom.h)
      ctx.fillStyle = '#D54B4B'
      ctx.fillRect(leg.front.x, leg.front.y + leg.front.h - 2, leg.front.w, 1)
    }
  }),
  shoesPreset(
    'shoes-iron',
    'Iron Boots',
    'Heavy iron armor boots',
    '#C8CCD2',
    '#7B7F87',
    (ctx, rl, ll, c, s) => {
      for (const leg of [rl, ll]) {
        for (const face of [leg.front, leg.back, leg.left, leg.right]) {
          ctx.fillStyle = c
          ctx.fillRect(face.x, face.y + face.h - 4, face.w, 4)
        }
        ctx.fillStyle = s
        ctx.fillRect(leg.front.x, leg.front.y + leg.front.h - 1, leg.front.w, 1)
        ctx.fillRect(leg.bottom.x, leg.bottom.y, leg.bottom.w, leg.bottom.h)
      }
    },
  ),
  shoesPreset(
    'shoes-flames',
    'Flame Kicks',
    'Hot red flames',
    '#1B1424',
    '#D54B4B',
    (ctx, rl, ll, c, s) => {
      for (const leg of [rl, ll]) {
        for (const face of [leg.front, leg.back, leg.left, leg.right]) {
          ctx.fillStyle = c
          ctx.fillRect(face.x, face.y + face.h - 3, face.w, 3)
          ctx.fillStyle = s
          ctx.fillRect(face.x, face.y + face.h - 3, face.w, 1)
        }
        ctx.fillStyle = '#F5C04A'
        ctx.fillRect(leg.front.x + 1, leg.front.y + leg.front.h - 3, 1, 1)
        ctx.fillRect(leg.front.x + leg.front.w - 2, leg.front.y + leg.front.h - 3, 1, 1)
      }
    },
  ),
]

export const PRESETS: Preset[] = [
  ...FACES,
  ...HAIR,
  ...SHIRTS,
  ...PANTS,
  ...SHOES,
]

export const presetsByCategory = (cat: PresetCategory) =>
  PRESETS.filter((p) => p.category === cat)

export const PRESET_CATEGORIES: { key: PresetCategory; label: string; icon: string }[] = [
  { key: 'face', label: 'Faces', icon: 'face' },
  { key: 'hair', label: 'Hair', icon: 'hair' },
  { key: 'shirt', label: 'Shirts', icon: 'shirt' },
  { key: 'pants', label: 'Pants', icon: 'pants' },
  { key: 'shoes', label: 'Shoes', icon: 'shoes' },
]
