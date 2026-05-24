import { create } from 'zustand'
import { ModelKind } from '../skin/format'

export interface SavedSkin {
  id: string
  name: string
  model: ModelKind
  dataUrl: string // 64x64 PNG data URL
  createdAt: number
}

interface GalleryState {
  skins: SavedSkin[]
  hydrate: () => void
  save: (skin: Omit<SavedSkin, 'id' | 'createdAt'>) => SavedSkin
  remove: (id: string) => void
  rename: (id: string, name: string) => void
  update: (id: string, patch: Partial<Omit<SavedSkin, 'id' | 'createdAt'>>) => void
}

const STORAGE_KEY = 'pixel-skin-studio:gallery:v2'
const LEGACY_KEY = 'pixel-skin-studio:gallery:v1'
const uid = () => Math.random().toString(36).slice(2, 10)

const persist = (skins: SavedSkin[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skins))
  } catch (e) {
    console.warn('Could not persist gallery (storage full?)', e)
  }
}

const withoutSeeds = (skins: SavedSkin[]) =>
  skins.filter((s) => !s.id.startsWith('seed-'))

export const useGallery = create<GalleryState>((set, get) => ({
  skins: [],

  hydrate: () => {
    try {
      let raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        const legacy = localStorage.getItem(LEGACY_KEY)
        if (legacy) {
          const parsed = JSON.parse(legacy) as SavedSkin[]
          if (Array.isArray(parsed)) {
            const cleaned = withoutSeeds(parsed)
            persist(cleaned)
            localStorage.removeItem(LEGACY_KEY)
            set({ skins: cleaned })
            return
          }
        }
        set({ skins: [] })
        return
      }
      const parsed = JSON.parse(raw) as SavedSkin[]
      if (Array.isArray(parsed)) {
        const cleaned = withoutSeeds(parsed)
        if (cleaned.length !== parsed.length) persist(cleaned)
        set({ skins: cleaned })
      }
    } catch {
      // ignore
    }
  },

  save: (skin) => {
    const entry: SavedSkin = {
      ...skin,
      id: uid(),
      createdAt: Date.now(),
    }
    set((s) => {
      const next = [entry, ...s.skins]
      persist(next)
      return { skins: next }
    })
    return entry
  },

  remove: (id) => {
    set((s) => {
      const next = s.skins.filter((sk) => sk.id !== id)
      persist(next)
      return { skins: next }
    })
  },

  rename: (id, name) => {
    set((s) => {
      const next = s.skins.map((sk) => (sk.id === id ? { ...sk, name } : sk))
      persist(next)
      return { skins: next }
    })
  },

  update: (id, patch) => {
    set((s) => {
      const next = s.skins.map((sk) => (sk.id === id ? { ...sk, ...patch } : sk))
      persist(next)
      return { skins: next }
    })
  },
}))
