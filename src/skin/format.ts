// Minecraft Java skin format (64x64).
// Reference: https://minecraft.wiki/w/Skin
// All UV rectangles are [x, y, w, h] on the 64x64 atlas.

export const SKIN_W = 64
export const SKIN_H = 64

export type ModelKind = 'classic' | 'slim'

export type BodyPart =
  | 'head'
  | 'head_overlay'
  | 'body'
  | 'body_overlay'
  | 'right_arm'
  | 'right_arm_overlay'
  | 'left_arm'
  | 'left_arm_overlay'
  | 'right_leg'
  | 'right_leg_overlay'
  | 'left_leg'
  | 'left_leg_overlay'

export type Face = 'top' | 'bottom' | 'front' | 'back' | 'left' | 'right'

export interface Rect {
  x: number
  y: number
  w: number
  h: number
}

export interface PartFaces {
  top: Rect
  bottom: Rect
  front: Rect
  back: Rect
  left: Rect
  right: Rect
}

const box = (
  x: number,
  y: number,
  width: number,
  height: number,
  depth: number,
): PartFaces => ({
  top: { x: x + depth, y, w: width, h: depth },
  bottom: { x: x + depth + width, y, w: width, h: depth },
  right: { x, y: y + depth, w: depth, h: height },
  front: { x: x + depth, y: y + depth, w: width, h: height },
  left: { x: x + depth + width, y: y + depth, w: depth, h: height },
  back: { x: x + depth + width + depth, y: y + depth, w: width, h: height },
})

// Body part UV rects for classic (4-pixel-wide arms).
export const CLASSIC_PARTS: Record<BodyPart, PartFaces> = {
  head: box(0, 0, 8, 8, 8),
  head_overlay: box(32, 0, 8, 8, 8),
  body: box(16, 16, 8, 12, 4),
  body_overlay: box(16, 32, 8, 12, 4),
  right_arm: box(40, 16, 4, 12, 4),
  right_arm_overlay: box(40, 32, 4, 12, 4),
  left_arm: box(32, 48, 4, 12, 4),
  left_arm_overlay: box(48, 48, 4, 12, 4),
  right_leg: box(0, 16, 4, 12, 4),
  right_leg_overlay: box(0, 32, 4, 12, 4),
  left_leg: box(16, 48, 4, 12, 4),
  left_leg_overlay: box(0, 48, 4, 12, 4),
}

// Slim model: arms are 3 pixels wide instead of 4.
export const SLIM_PARTS: Record<BodyPart, PartFaces> = {
  ...CLASSIC_PARTS,
  right_arm: box(40, 16, 3, 12, 4),
  right_arm_overlay: box(40, 32, 3, 12, 4),
  left_arm: box(32, 48, 3, 12, 4),
  left_arm_overlay: box(48, 48, 3, 12, 4),
}

export const partsFor = (m: ModelKind) =>
  m === 'slim' ? SLIM_PARTS : CLASSIC_PARTS

export interface PartView {
  key: BodyPart
  label: string
  rect: Rect
  isOverlay: boolean
}

// Union rect that encloses all faces of one body part (the rectangle in the atlas).
export const partAtlasRect = (faces: PartFaces): Rect => {
  const all = Object.values(faces)
  const minX = Math.min(...all.map((r) => r.x))
  const minY = Math.min(...all.map((r) => r.y))
  const maxX = Math.max(...all.map((r) => r.x + r.w))
  const maxY = Math.max(...all.map((r) => r.y + r.h))
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY }
}

export const BODY_PART_GROUPS: { key: BodyPart; label: string; overlayKey: BodyPart }[] = [
  { key: 'head', label: 'Head', overlayKey: 'head_overlay' },
  { key: 'body', label: 'Body', overlayKey: 'body_overlay' },
  { key: 'right_arm', label: 'Right Arm', overlayKey: 'right_arm_overlay' },
  { key: 'left_arm', label: 'Left Arm', overlayKey: 'left_arm_overlay' },
  { key: 'right_leg', label: 'Right Leg', overlayKey: 'right_leg_overlay' },
  { key: 'left_leg', label: 'Left Leg', overlayKey: 'left_leg_overlay' },
]

// All pixels of a 64x64 skin that are NOT part of any valid UV face.
// Used to draw a "muted/forbidden" mask in the canvas so users only paint
// where Minecraft actually reads pixels from.
export const buildValidMask = (model: ModelKind): Uint8Array => {
  const m = new Uint8Array(SKIN_W * SKIN_H)
  const parts = partsFor(model)
  for (const part of Object.values(parts)) {
    for (const face of Object.values(part)) {
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

// Pre-baked masks so we don't recompute every frame.
export const VALID_MASK_CLASSIC = buildValidMask('classic')
export const VALID_MASK_SLIM = buildValidMask('slim')

export const validMaskFor = (m: ModelKind) =>
  m === 'slim' ? VALID_MASK_SLIM : VALID_MASK_CLASSIC
