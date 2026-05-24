import { useGallery } from './gallery'
import { usePresets } from './presets'
import { useColorLibrary } from './colors'

/** Load saved skins, presets, and color palettes from this device's localStorage. */
export const hydrateStorage = () => {
  if (typeof window === 'undefined') return
  useGallery.getState().hydrate()
  usePresets.getState().hydrate()
  useColorLibrary.getState().hydrate()
}
