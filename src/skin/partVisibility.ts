import type { SkinObject } from 'skinview3d'
import type { BodyPart } from './format'

/** 0 = all layers, 1 = hide outer, 2 = hide inner + outer */
export type PartLayerMode = 0 | 1 | 2

export const PART_LAYER_MODE_LABEL: Record<PartLayerMode, string> = {
  0: '',
  1: 'OUT',
  2: 'OFF',
}

const SKIN_PARTS: { key: BodyPart; part: (skin: SkinObject) => { innerLayer: { visible: boolean }; outerLayer: { visible: boolean } } }[] = [
  { key: 'head', part: (s) => s.head },
  { key: 'body', part: (s) => s.body },
  { key: 'right_arm', part: (s) => s.rightArm },
  { key: 'left_arm', part: (s) => s.leftArm },
  { key: 'right_leg', part: (s) => s.rightLeg },
  { key: 'left_leg', part: (s) => s.leftLeg },
]

export const applyPartLayerModes = (
  skin: SkinObject,
  modes: Partial<Record<BodyPart, PartLayerMode>>,
) => {
  for (const { key, part } of SKIN_PARTS) {
    const mode = modes[key] ?? 0
    const body = part(skin)
    body.innerLayer.visible = mode < 2
    body.outerLayer.visible = mode < 1
  }
}

export const cyclePartLayerMode = (current: PartLayerMode): PartLayerMode =>
  ((current + 1) % 3) as PartLayerMode
