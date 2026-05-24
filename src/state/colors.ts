import { create } from 'zustand'

export interface ColorPalette {
  id: string
  name: string
  colors: string[]
  createdAt: number
}

interface ColorsState {
  palettes: ColorPalette[]
  activePaletteId: string | null
  hydrate: () => void
  createPalette: (name: string) => ColorPalette
  removePalette: (id: string) => void
  renamePalette: (id: string, name: string) => void
  setActivePalette: (id: string | null) => void
  addColor: (paletteId: string, color: string) => void
  removeColor: (paletteId: string, color: string) => void
}

const STORAGE_KEY = 'pixel-skin-studio:colors:v1'
const uid = () => Math.random().toString(36).slice(2, 10)

const normalizeHex = (c: string) => {
  const v = c.trim().toLowerCase()
  if (/^#[0-9a-f]{6}$/.test(v)) return v
  if (/^#[0-9a-f]{3}$/.test(v)) {
    return `#${v[1]}${v[1]}${v[2]}${v[2]}${v[3]}${v[3]}`
  }
  return null
}

const persist = (palettes: ColorPalette[], activePaletteId: string | null) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ palettes, activePaletteId }),
    )
  } catch (e) {
    console.warn('Could not persist color palettes', e)
  }
}

export const useColorLibrary = create<ColorsState>((set) => ({
  palettes: [],
  activePaletteId: null,

  hydrate: () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as {
        palettes?: ColorPalette[]
        activePaletteId?: string | null
      }
      if (Array.isArray(parsed.palettes)) {
        set({
          palettes: parsed.palettes,
          activePaletteId: parsed.activePaletteId ?? parsed.palettes[0]?.id ?? null,
        })
      }
    } catch {
      // ignore
    }
  },

  createPalette: (name) => {
    const palette: ColorPalette = {
      id: uid(),
      name: name.trim() || 'My Palette',
      colors: [],
      createdAt: Date.now(),
    }
    set((s) => {
      const palettes = [...s.palettes, palette]
      const activePaletteId = s.activePaletteId ?? palette.id
      persist(palettes, activePaletteId)
      return { palettes, activePaletteId }
    })
    return palette
  },

  removePalette: (id) => {
    set((s) => {
      const palettes = s.palettes.filter((p) => p.id !== id)
      const activePaletteId =
        s.activePaletteId === id ? palettes[0]?.id ?? null : s.activePaletteId
      persist(palettes, activePaletteId)
      return { palettes, activePaletteId }
    })
  },

  renamePalette: (id, name) => {
    set((s) => {
      const palettes = s.palettes.map((p) =>
        p.id === id ? { ...p, name: name.trim() || p.name } : p,
      )
      persist(palettes, s.activePaletteId)
      return { palettes }
    })
  },

  setActivePalette: (id) => {
    set((s) => {
      persist(s.palettes, id)
      return { activePaletteId: id }
    })
  },

  addColor: (paletteId, color) => {
    const hex = normalizeHex(color)
    if (!hex) return
    set((s) => {
      const palettes = s.palettes.map((p) => {
        if (p.id !== paletteId) return p
        if (p.colors.some((c) => c.toLowerCase() === hex)) return p
        return { ...p, colors: [hex, ...p.colors] }
      })
      persist(palettes, s.activePaletteId)
      return { palettes }
    })
  },

  removeColor: (paletteId, color) => {
    set((s) => {
      const palettes = s.palettes.map((p) =>
        p.id === paletteId
          ? { ...p, colors: p.colors.filter((c) => c !== color) }
          : p,
      )
      persist(palettes, s.activePaletteId)
      return { palettes }
    })
  },
}))
