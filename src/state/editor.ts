import { create } from 'zustand'
import { BodyPart, ModelKind } from '../skin/format'
import type { PartLayerMode } from '../skin/partVisibility'
import type { PreviewBackgroundId } from '../skin/previewBackgrounds'

const BASE_PART_KEYS: BodyPart[] = [
  'head',
  'body',
  'right_arm',
  'left_arm',
  'right_leg',
  'left_leg',
]

const emptyPartModes = (): Record<BodyPart, PartLayerMode> =>
  Object.fromEntries(BASE_PART_KEYS.map((k) => [k, 0 as PartLayerMode])) as Record<
    BodyPart,
    PartLayerMode
  >
import {
  buildDefaultBase,
  cloneCanvas,
  compositeLayers,
  createCanvas,
  dataUrlToCanvas,
  getCtx,
  toDataURL,
} from '../skin/canvas'

export interface Layer {
  id: string
  name: string
  visible: boolean
  locked: boolean
  opacity: number
  /** Hue rotation in degrees (-180 to 180). */
  hue: number
  /** Saturation multiplier (0–2, 1 = normal). */
  saturation: number
  /** Brightness multiplier (0–2, 1 = normal). */
  brightness: number
  canvas: HTMLCanvasElement
}

export type ToolKind =
  | 'pencil'
  | 'eraser'
  | 'fill'
  | 'eyedropper'
  | 'shade'
  | 'lighten'

interface HistoryEntry {
  // Per layer DataURL snapshot of the working state at this point.
  layers: { id: string; dataUrl: string }[]
  activeLayerId: string
}

interface EditorState {
  model: ModelKind
  layers: Layer[] // back-to-front order
  activeLayerId: string | null
  tool: ToolKind
  color: string
  recentColors: string[]
  brushSize: number
  mirror: boolean
  showOverlay: boolean
  showGrid: boolean
  showOnlyValid: boolean
  activePart: string // selected body part ("all" or BodyPart key)
  partLayerModes: Record<BodyPart, PartLayerMode>
  previewBackground: PreviewBackgroundId
  history: HistoryEntry[]
  future: HistoryEntry[]

  setModel: (m: ModelKind) => void
  setTool: (t: ToolKind) => void
  setColor: (c: string) => void
  pushRecentColor: (c: string) => void
  setBrushSize: (n: number) => void
  toggleMirror: () => void
  toggleOverlay: () => void
  toggleGrid: () => void
  toggleOnlyValid: () => void
  setActivePart: (k: string) => void
  cyclePartLayerMode: (partKey: BodyPart) => void
  resetPartLayerModes: () => void
  setPreviewBackground: (id: PreviewBackgroundId) => void
  setActiveLayer: (id: string) => void

  addBlankLayer: (name?: string) => void
  addLayerFromCanvas: (canvas: HTMLCanvasElement, name?: string) => void
  addLayerFromDataUrl: (url: string, name?: string) => Promise<void>
  duplicateLayer: (id: string) => void
  deleteLayer: (id: string) => void
  toggleLayerVisible: (id: string) => void
  toggleLayerLocked: (id: string) => void
  setLayerOpacity: (id: string, opacity: number) => void
  setLayerAdjustments: (
    id: string,
    adj: Partial<Pick<Layer, 'hue' | 'saturation' | 'brightness'>>,
  ) => void
  resetLayerAdjustments: (id: string) => void
  renameLayer: (id: string, name: string) => void
  moveLayer: (id: string, dir: 1 | -1) => void
  mergeDown: (id: string) => void

  snapshot: () => void
  undo: () => void
  redo: () => void

  composite: () => HTMLCanvasElement
  reset: (model?: ModelKind) => void
  loadSkinAsBase: (canvas: HTMLCanvasElement) => void
}

const uid = () => Math.random().toString(36).slice(2, 9)

const snapshotEntry = (layers: Layer[], activeLayerId: string | null): HistoryEntry => ({
  layers: layers.map((l) => ({ id: l.id, dataUrl: toDataURL(l.canvas) })),
  activeLayerId: activeLayerId ?? '',
})

const MAX_HISTORY = 40

const initialLayers = (model: ModelKind): Layer[] => {
  const base = buildDefaultBase(model)
  return [
    {
      id: uid(),
      name: 'Base',
      visible: true,
      locked: false,
      opacity: 1,
      hue: 0,
      saturation: 1,
      brightness: 1,
      canvas: base,
    },
    {
      id: uid(),
      name: 'Paint',
      visible: true,
      locked: false,
      opacity: 1,
      hue: 0,
      saturation: 1,
      brightness: 1,
      canvas: createCanvas(),
    },
  ]
}

export const useEditor = create<EditorState>((set, get) => {
  const layers = initialLayers('slim')
  return {
    model: 'slim',
    layers,
    activeLayerId: layers[layers.length - 1].id,
    tool: 'pencil',
    color: '#E68E2E',
    recentColors: [
      '#E68E2E', '#D54B4B', '#F5C04A', '#3FB6A8', '#7E4FB8',
      '#C39979', '#2A2138', '#FFFBEA', '#46367E', '#3D2614',
    ],
    brushSize: 1,
    mirror: false,
    showOverlay: true,
    showGrid: true,
    showOnlyValid: true,
    activePart: 'all',
    partLayerModes: emptyPartModes(),
    previewBackground: 'valley-birch',
    history: [],
    future: [],

    setModel: (m) => set({ model: m }),
    setTool: (t) => set({ tool: t }),
    setColor: (c) => set({ color: c }),
    pushRecentColor: (c) =>
      set((s) => ({
        recentColors: [c, ...s.recentColors.filter((x) => x !== c)].slice(0, 16),
      })),
    setBrushSize: (n) => set({ brushSize: Math.max(1, Math.min(4, n)) }),
    toggleMirror: () => set((s) => ({ mirror: !s.mirror })),
    toggleOverlay: () => set((s) => ({ showOverlay: !s.showOverlay })),
    toggleGrid: () => set((s) => ({ showGrid: !s.showGrid })),
    toggleOnlyValid: () => set((s) => ({ showOnlyValid: !s.showOnlyValid })),
    setActivePart: (k) => set({ activePart: k }),
    cyclePartLayerMode: (partKey) =>
      set((s) => {
        const cur = s.partLayerModes[partKey] ?? 0
        const next = ((cur + 1) % 3) as PartLayerMode
        return {
          activePart: partKey,
          partLayerModes: { ...s.partLayerModes, [partKey]: next },
        }
      }),
    resetPartLayerModes: () =>
      set({ partLayerModes: emptyPartModes(), activePart: 'all' }),
    setPreviewBackground: (id) => set({ previewBackground: id }),
    setActiveLayer: (id) => set({ activeLayerId: id }),

    addBlankLayer: (name = 'Layer') => {
      get().snapshot()
      const layer: Layer = {
        id: uid(),
        name,
        visible: true,
        locked: false,
        opacity: 1,
        hue: 0,
        saturation: 1,
        brightness: 1,
        canvas: createCanvas(),
      }
      set((s) => ({ layers: [...s.layers, layer], activeLayerId: layer.id }))
    },

    addLayerFromCanvas: (canvas, name = 'Imported') => {
      get().snapshot()
      const layer: Layer = {
        id: uid(),
        name,
        visible: true,
        locked: false,
        opacity: 1,
        hue: 0,
        saturation: 1,
        brightness: 1,
        canvas: cloneCanvas(canvas),
      }
      set((s) => ({ layers: [...s.layers, layer], activeLayerId: layer.id }))
    },

    addLayerFromDataUrl: async (url, name = 'Imported') => {
      const canvas = await dataUrlToCanvas(url)
      get().addLayerFromCanvas(canvas, name)
    },

    duplicateLayer: (id) => {
      get().snapshot()
      set((s) => {
        const idx = s.layers.findIndex((l) => l.id === id)
        if (idx === -1) return s
        const src = s.layers[idx]
        const copy: Layer = {
          ...src,
          id: uid(),
          name: `${src.name} copy`,
          canvas: cloneCanvas(src.canvas),
        }
        const next = [...s.layers]
        next.splice(idx + 1, 0, copy)
        return { layers: next, activeLayerId: copy.id }
      })
    },

    deleteLayer: (id) => {
      get().snapshot()
      set((s) => {
        if (s.layers.length <= 1) return s
        const idx = s.layers.findIndex((l) => l.id === id)
        if (idx === -1) return s
        const next = s.layers.filter((l) => l.id !== id)
        const newActive =
          s.activeLayerId === id
            ? next[Math.min(idx, next.length - 1)].id
            : s.activeLayerId
        return { layers: next, activeLayerId: newActive }
      })
    },

    toggleLayerVisible: (id) => {
      set((s) => ({
        layers: s.layers.map((l) =>
          l.id === id ? { ...l, visible: !l.visible } : l,
        ),
      }))
    },

    toggleLayerLocked: (id) => {
      set((s) => ({
        layers: s.layers.map((l) =>
          l.id === id ? { ...l, locked: !l.locked } : l,
        ),
      }))
    },

    setLayerOpacity: (id, opacity) => {
      set((s) => ({
        layers: s.layers.map((l) =>
          l.id === id ? { ...l, opacity } : l,
        ),
      }))
    },

    setLayerAdjustments: (id, adj) => {
      set((s) => ({
        layers: s.layers.map((l) => {
          if (l.id !== id) return l
          return {
            ...l,
            hue: adj.hue ?? l.hue,
            saturation: adj.saturation ?? l.saturation,
            brightness: adj.brightness ?? l.brightness,
          }
        }),
      }))
    },

    resetLayerAdjustments: (id) => {
      set((s) => ({
        layers: s.layers.map((l) =>
          l.id === id ? { ...l, hue: 0, saturation: 1, brightness: 1 } : l,
        ),
      }))
    },

    renameLayer: (id, name) => {
      set((s) => ({
        layers: s.layers.map((l) => (l.id === id ? { ...l, name } : l)),
      }))
    },

    moveLayer: (id, dir) => {
      get().snapshot()
      set((s) => {
        const idx = s.layers.findIndex((l) => l.id === id)
        if (idx === -1) return s
        const ni = idx + dir
        if (ni < 0 || ni >= s.layers.length) return s
        const next = [...s.layers]
        const [moved] = next.splice(idx, 1)
        next.splice(ni, 0, moved)
        return { layers: next }
      })
    },

    mergeDown: (id) => {
      get().snapshot()
      set((s) => {
        const idx = s.layers.findIndex((l) => l.id === id)
        if (idx <= 0) return s
        const top = s.layers[idx]
        const below = s.layers[idx - 1]
        const merged = cloneCanvas(below.canvas)
        const ctx = getCtx(merged)
        ctx.globalAlpha = top.opacity
        ctx.drawImage(top.canvas, 0, 0)
        ctx.globalAlpha = 1
        const next = [...s.layers]
        next.splice(idx, 1)
        next[idx - 1] = { ...below, canvas: merged }
        return { layers: next, activeLayerId: below.id }
      })
    },

    snapshot: () => {
      set((s) => {
        const entry = snapshotEntry(s.layers, s.activeLayerId)
        const next = [...s.history, entry]
        if (next.length > MAX_HISTORY) next.shift()
        return { history: next, future: [] }
      })
    },

    undo: () => {
      const s = get()
      if (s.history.length === 0) return
      const previous = s.history[s.history.length - 1]
      const currentSnap = snapshotEntry(s.layers, s.activeLayerId)
      // Restore canvases by drawing dataUrls back onto fresh canvases keyed by ID.
      Promise.all(
        previous.layers.map(async (rec) => {
          const c = await dataUrlToCanvas(rec.dataUrl)
          return { id: rec.id, canvas: c }
        }),
      ).then((restored) => {
        set((cur) => ({
          layers: restored.map((rec, i) => {
            const matched = cur.layers.find((l) => l.id === rec.id)
            const fallback = cur.layers[i]
            const meta = matched ?? fallback
            return {
              id: rec.id,
              name: meta?.name ?? `Layer ${i + 1}`,
              visible: meta?.visible ?? true,
              locked: meta?.locked ?? false,
              opacity: meta?.opacity ?? 1,
              hue: meta?.hue ?? 0,
              saturation: meta?.saturation ?? 1,
              brightness: meta?.brightness ?? 1,
              canvas: rec.canvas,
            }
          }),
          activeLayerId: previous.activeLayerId || cur.activeLayerId,
          history: cur.history.slice(0, -1),
          future: [...cur.future, currentSnap],
        }))
      })
    },

    redo: () => {
      const s = get()
      if (s.future.length === 0) return
      const nextSnap = s.future[s.future.length - 1]
      const currentSnap = snapshotEntry(s.layers, s.activeLayerId)
      Promise.all(
        nextSnap.layers.map(async (rec) => {
          const c = await dataUrlToCanvas(rec.dataUrl)
          return { id: rec.id, canvas: c }
        }),
      ).then((restored) => {
        set((cur) => ({
          layers: restored.map((rec, i) => {
            const matched = cur.layers.find((l) => l.id === rec.id)
            const fallback = cur.layers[i]
            const meta = matched ?? fallback
            return {
              id: rec.id,
              name: meta?.name ?? `Layer ${i + 1}`,
              visible: meta?.visible ?? true,
              locked: meta?.locked ?? false,
              opacity: meta?.opacity ?? 1,
              hue: meta?.hue ?? 0,
              saturation: meta?.saturation ?? 1,
              brightness: meta?.brightness ?? 1,
              canvas: rec.canvas,
            }
          }),
          activeLayerId: nextSnap.activeLayerId || cur.activeLayerId,
          history: [...cur.history, currentSnap],
          future: cur.future.slice(0, -1),
        }))
      })
    },

    composite: () => compositeLayers(get().layers),

    reset: (model) => {
      const m = model ?? 'slim'
      const layers = initialLayers(m)
      set({
        layers,
        activeLayerId: layers[layers.length - 1].id,
        model: m,
        history: [],
        future: [],
        partLayerModes: emptyPartModes(),
        activePart: 'all',
      })
    },

    loadSkinAsBase: (canvas) => {
      const base: Layer = {
        id: uid(),
        name: 'Base',
        visible: true,
        locked: false,
        opacity: 1,
        hue: 0,
        saturation: 1,
        brightness: 1,
        canvas: cloneCanvas(canvas),
      }
      const paint: Layer = {
        id: uid(),
        name: 'Paint',
        visible: true,
        locked: false,
        opacity: 1,
        hue: 0,
        saturation: 1,
        brightness: 1,
        canvas: createCanvas(),
      }
      set({
        layers: [base, paint],
        activeLayerId: paint.id,
        history: [],
        future: [],
        partLayerModes: emptyPartModes(),
        activePart: 'all',
      })
    },
  }
})
