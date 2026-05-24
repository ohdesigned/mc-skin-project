import type { BodyPart } from '../skin/format'
import type { ModelKind } from '../skin/format'
import type { PartLayerMode } from '../skin/partVisibility'
import type { PreviewBackgroundId } from '../skin/previewBackgrounds'
import type { ToolKind } from './editor'

export type AppRoute =
  | { name: 'home' }
  | { name: 'editor'; editId?: string }

export interface SerializedLayer {
  id: string
  name: string
  visible: boolean
  locked: boolean
  opacity: number
  hue: number
  saturation: number
  brightness: number
  dataUrl: string
}

export interface EditorDraft {
  editId?: string
  name: string
  model: ModelKind
  activeLayerId: string
  tool: ToolKind
  color: string
  brushSize: number
  mirror: boolean
  previewBackground: PreviewBackgroundId
  partLayerModes: Record<BodyPart, PartLayerMode>
  activePart: string
  layers: SerializedLayer[]
}

const DRAFT_KEY = 'pixel-skin-studio:draft:v1'

export const parseRouteHash = (): AppRoute => {
  if (typeof window === 'undefined') return { name: 'home' }
  const raw = window.location.hash.replace(/^#/, '').replace(/^\/?/, '')
  if (!raw || raw === '/') return { name: 'home' }
  const [section, id] = raw.split('/')
  if (section === 'editor') {
    return { name: 'editor', editId: id || undefined }
  }
  return { name: 'home' }
}

export const hashForRoute = (route: AppRoute): string => {
  if (route.name === 'home') return '#/'
  if (route.editId) return `#/editor/${route.editId}`
  return '#/editor'
}

export const syncRouteHash = (route: AppRoute) => {
  const next = hashForRoute(route)
  if (window.location.hash !== next) {
    window.history.replaceState(null, '', next)
  }
}

export const loadEditorDraft = (): EditorDraft | null => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as EditorDraft
    if (!parsed || !Array.isArray(parsed.layers) || parsed.layers.length === 0) return null
    return parsed
  } catch {
    return null
  }
}

export const saveEditorDraft = (draft: EditorDraft) => {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
  } catch (e) {
    console.warn('Could not persist editor draft', e)
  }
}

export const clearEditorDraft = () => {
  try {
    localStorage.removeItem(DRAFT_KEY)
  } catch {
    // ignore
  }
}

export const draftMatchesRoute = (draft: EditorDraft, editId?: string): boolean =>
  (draft.editId ?? null) === (editId ?? null)
