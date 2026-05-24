import { create } from 'zustand'
import { ModelKind } from '../skin/format'

export interface PresetFolder {
  id: string
  name: string
  createdAt: number
}

export interface UserPreset {
  id: string
  name: string
  model: ModelKind
  dataUrl: string
  folderId: string | null
  createdAt: number
}

interface PresetsState {
  folders: PresetFolder[]
  presets: UserPreset[]
  hydrate: () => void
  saveFromLayer: (opts: {
    name: string
    model: ModelKind
    dataUrl: string
    folderId?: string | null
  }) => UserPreset
  remove: (id: string) => void
  rename: (id: string, name: string) => void
  moveToFolder: (presetId: string, folderId: string | null) => void
  addFolder: (name: string) => PresetFolder
  renameFolder: (id: string, name: string) => void
  removeFolder: (id: string) => void
}

const STORAGE_KEY = 'pixel-skin-studio:presets:v2'
const LEGACY_KEY = 'pixel-skin-studio:presets:v1'
const uid = () => Math.random().toString(36).slice(2, 10)

interface StoredData {
  folders: PresetFolder[]
  presets: UserPreset[]
}

const persist = (data: StoredData) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (e) {
    console.warn('Could not persist presets', e)
  }
}

const migrateLegacy = (): UserPreset[] => {
  try {
    const raw = localStorage.getItem(LEGACY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as UserPreset[]
    if (!Array.isArray(parsed)) return []
    return parsed.map((p) => ({
      ...p,
      folderId: p.folderId ?? null,
    }))
  } catch {
    return []
  }
}

export const usePresets = create<PresetsState>((set) => ({
  folders: [],
  presets: [],

  hydrate: () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as StoredData
        if (parsed && Array.isArray(parsed.presets)) {
          set({
            folders: Array.isArray(parsed.folders) ? parsed.folders : [],
            presets: parsed.presets.map((p) => ({
              ...p,
              folderId: p.folderId ?? null,
            })),
          })
          return
        }
      }
      const legacy = migrateLegacy()
      if (legacy.length > 0) {
        const data = { folders: [], presets: legacy }
        persist(data)
        set(data)
      }
    } catch {
      // ignore
    }
  },

  saveFromLayer: ({ name, model, dataUrl, folderId = null }) => {
    const entry: UserPreset = {
      id: uid(),
      name: name.trim() || 'Untitled Preset',
      model,
      dataUrl,
      folderId,
      createdAt: Date.now(),
    }
    set((s) => {
      const next = [entry, ...s.presets]
      persist({ folders: s.folders, presets: next })
      return { presets: next }
    })
    return entry
  },

  remove: (id) => {
    set((s) => {
      const next = s.presets.filter((p) => p.id !== id)
      persist({ folders: s.folders, presets: next })
      return { presets: next }
    })
  },

  rename: (id, name) => {
    set((s) => {
      const next = s.presets.map((p) =>
        p.id === id ? { ...p, name: name.trim() || p.name } : p,
      )
      persist({ folders: s.folders, presets: next })
      return { presets: next }
    })
  },

  moveToFolder: (presetId, folderId) => {
    set((s) => {
      const next = s.presets.map((p) =>
        p.id === presetId ? { ...p, folderId } : p,
      )
      persist({ folders: s.folders, presets: next })
      return { presets: next }
    })
  },

  addFolder: (name) => {
    const folder: PresetFolder = {
      id: uid(),
      name: name.trim() || 'New Folder',
      createdAt: Date.now(),
    }
    set((s) => {
      const folders = [...s.folders, folder]
      persist({ folders, presets: s.presets })
      return { folders }
    })
    return folder
  },

  renameFolder: (id, name) => {
    set((s) => {
      const folders = s.folders.map((f) =>
        f.id === id ? { ...f, name: name.trim() || f.name } : f,
      )
      persist({ folders, presets: s.presets })
      return { folders }
    })
  },

  removeFolder: (id) => {
    set((s) => {
      const folders = s.folders.filter((f) => f.id !== id)
      const presets = s.presets.map((p) =>
        p.folderId === id ? { ...p, folderId: null } : p,
      )
      persist({ folders, presets })
      return { folders, presets }
    })
  },
}))

/** Folder options for save dialogs */
export const presetFolderOptions = (
  folders: PresetFolder[],
): { id: string | null; name: string }[] => [
  { id: null, name: 'Unfiled' },
  ...folders.map((f) => ({ id: f.id, name: f.name })),
]
