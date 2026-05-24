import { ModelKind } from '../skin/format'
import { createCanvas, buildDefaultBase, getCtx, toDataURL } from './canvas'
import { PRESETS } from './presets'

export interface SampleSkin {
  name: string
  model: ModelKind
  dataUrl: string
}

const compose = (
  model: ModelKind,
  presetIds: string[],
): HTMLCanvasElement => {
  const base = buildDefaultBase(model)
  const ctx = getCtx(base)
  for (const id of presetIds) {
    const preset = PRESETS.find((p) => p.id === id)
    if (!preset) continue
    const layer = createCanvas()
    preset.render(layer, model)
    ctx.drawImage(layer, 0, 0)
  }
  return base
}

const SAMPLES: { name: string; model: ModelKind; presets: string[] }[] = [
  {
    name: 'Pirate Adventurer',
    model: 'classic',
    presets: ['face-pirate', 'hair-buzz', 'shirt-stripes', 'pants-shorts', 'shoes-boots'],
  },
  {
    name: 'Iron Hero',
    model: 'classic',
    presets: ['face-cool', 'hair-short-brown', 'shirt-armor', 'pants-jeans', 'shoes-iron'],
  },
  {
    name: 'Cozy Wizard',
    model: 'slim',
    presets: ['face-classic', 'hair-long-blonde', 'shirt-purple', 'pants-fancy', 'shoes-boots'],
  },
  {
    name: 'Sunshine Friend',
    model: 'classic',
    presets: ['face-smile', 'hair-curly', 'shirt-gold', 'pants-shorts', 'shoes-sneakers'],
  },
  {
    name: 'Disco Dancer',
    model: 'slim',
    presets: ['face-blush', 'hair-ponytail', 'shirt-stripes', 'pants-skirt', 'shoes-flames'],
  },
  {
    name: 'Mountain Hiker',
    model: 'classic',
    presets: ['face-classic', 'hair-hat', 'shirt-hoodie', 'pants-cargo', 'shoes-boots'],
  },
  {
    name: 'Robot Friend',
    model: 'classic',
    presets: ['face-robot', 'hair-mohawk', 'shirt-armor', 'pants-cargo', 'shoes-iron'],
  },
]

export const generateSampleSkins = (): SampleSkin[] => {
  return SAMPLES.map((s) => ({
    name: s.name,
    model: s.model,
    dataUrl: toDataURL(compose(s.model, s.presets)),
  }))
}
