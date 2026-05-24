import { create } from 'zustand'
import { ModelKind } from '../skin/format'

export interface ConfirmRequest {
  title: string
  message: string
  confirmLabel?: string
  cancelLabel?: string
  variant?: 'default' | 'danger'
  resolve: (confirmed: boolean) => void
}

export interface SavePresetRequest {
  defaultName: string
  model: ModelKind
  dataUrl: string
  folderOptions: { id: string | null; name: string }[]
  defaultFolderId: string | null
  resolve: (result: { name: string; folderId: string | null } | null) => void
}

export interface SaveColorRequest {
  color: string
  paletteOptions: { id: string; name: string }[]
  defaultPaletteId: string | null
  resolve: (result: { paletteId: string } | null) => void
}

interface DialogState {
  confirm: ConfirmRequest | null
  savePreset: SavePresetRequest | null
  saveColor: SaveColorRequest | null
  askConfirm: (opts: Omit<ConfirmRequest, 'resolve'>) => Promise<boolean>
  askSavePreset: (
    opts: Omit<SavePresetRequest, 'resolve'>,
  ) => Promise<{ name: string; folderId: string | null } | null>
  askSaveColor: (
    opts: Omit<SaveColorRequest, 'resolve'>,
  ) => Promise<{ paletteId: string } | null>
  closeConfirm: (confirmed: boolean) => void
  closeSavePreset: (result: { name: string; folderId: string | null } | null) => void
  closeSaveColor: (result: { paletteId: string } | null) => void
}

export const useDialogs = create<DialogState>((set, get) => ({
  confirm: null,
  savePreset: null,
  saveColor: null,

  askConfirm: (opts) =>
    new Promise((resolve) => {
      set({ confirm: { ...opts, resolve } })
    }),

  askSavePreset: (opts) =>
    new Promise((resolve) => {
      set({ savePreset: { ...opts, resolve } })
    }),

  askSaveColor: (opts) =>
    new Promise((resolve) => {
      set({ saveColor: { ...opts, resolve } })
    }),

  closeConfirm: (confirmed) => {
    const req = get().confirm
    if (req) req.resolve(confirmed)
    set({ confirm: null })
  },

  closeSavePreset: (result) => {
    const req = get().savePreset
    if (req) req.resolve(result)
    set({ savePreset: null })
  },

  closeSaveColor: (result) => {
    const req = get().saveColor
    if (req) req.resolve(result)
    set({ saveColor: null })
  },
}))

export const useConfirm = () => {
  const askConfirm = useDialogs((s) => s.askConfirm)
  const askSavePreset = useDialogs((s) => s.askSavePreset)
  const askSaveColor = useDialogs((s) => s.askSaveColor)
  return { askConfirm, askSavePreset, askSaveColor }
}
