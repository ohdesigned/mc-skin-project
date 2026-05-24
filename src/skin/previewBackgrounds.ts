import valleyBirch from '../assets/backgrounds/valley-birch.png'
import forestSunset from '../assets/backgrounds/forest-sunset.png'
import wheatField from '../assets/backgrounds/wheat-field.png'
import mossyCave from '../assets/backgrounds/mossy-cave.png'

export type PreviewBackgroundId =
  | 'none'
  | 'valley-birch'
  | 'forest-sunset'
  | 'wheat-field'
  | 'mossy-cave'

export interface PreviewBackground {
  id: PreviewBackgroundId
  label: string
  url: string
}

export const PREVIEW_BACKGROUNDS: PreviewBackground[] = [
  { id: 'none', label: 'None', url: '' },
  { id: 'valley-birch', label: 'Birch Valley', url: valleyBirch },
  { id: 'forest-sunset', label: 'Forest Sunset', url: forestSunset },
  { id: 'wheat-field', label: 'Wheat Field', url: wheatField },
  { id: 'mossy-cave', label: 'Mossy Cave', url: mossyCave },
]

export const getPreviewBackground = (id: PreviewBackgroundId): PreviewBackground =>
  PREVIEW_BACKGROUNDS.find((b) => b.id === id) ?? PREVIEW_BACKGROUNDS[0]
