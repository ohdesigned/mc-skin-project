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

const STORAGE_KEY = 'pixel-skin-studio:gallery:v1'
const uid = () => Math.random().toString(36).slice(2, 10)

const persist = (skins: SavedSkin[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(skins))
  } catch (e) {
    console.warn('Could not persist gallery (storage full?)', e)
  }
}

export const useGallery = create<GalleryState>((set, get) => ({
  skins: [],

  hydrate: () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as SavedSkin[]
        if (Array.isArray(parsed)) {
          set({ skins: parsed })
          return
        }
      }
      // First launch: seed a few example skins so the gallery isn't empty.
      // We lazy-load the sample generator so SSR doesn't choke (canvas is DOM).
      import('../skin/samples').then(({ generateSampleSkins }) => {
        const samples = generateSampleSkins()
        const now = Date.now()
        const seeded: SavedSkin[] = samples.map((s, i) => ({
          id: `seed-${i}-${Math.random().toString(36).slice(2, 7)}`,
          name: s.name,
          model: s.model,
          dataUrl: s.dataUrl,
          createdAt: now - i * 60_000,
        }))
        persist(seeded)
        set({ skins: seeded })
      })
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
