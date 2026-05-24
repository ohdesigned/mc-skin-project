import { useGallery } from './gallery'
import { usePresets } from './presets'
import { useColorLibrary } from './colors'

/** Load saved skins, presets, and color palettes from this device's localStorage. */
export const hydrateStorage = () => {
  if (typeof window === 'undefined') return
  try {
    useGallery.getState().hydrate()
  } catch (e) {
    console.warn('Could not restore gallery', e)
  }
  try {
    usePresets.getState().hydrate()
  } catch (e) {
    console.warn('Could not restore presets', e)
  }
  try {
    useColorLibrary.getState().hydrate()
  } catch (e) {
    console.warn('Could not restore color palettes', e)
  }
}
