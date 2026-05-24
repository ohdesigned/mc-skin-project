import { useCallback } from 'react'
import { ModelKind } from '../skin/format'
import { useConfirm } from '../state/dialogs'
import { presetFolderOptions, usePresets } from '../state/presets'

export const useSavePresetFlow = () => {
  const { askSavePreset } = useConfirm()
  const folders = usePresets((s) => s.folders)
  const saveFromLayer = usePresets((s) => s.saveFromLayer)

  const promptSavePreset = useCallback(
    async (opts: {
      defaultName: string
      model: ModelKind
      dataUrl: string
      defaultFolderId?: string | null
    }) => {
      const result = await askSavePreset({
        defaultName: opts.defaultName,
        model: opts.model,
        dataUrl: opts.dataUrl,
        folderOptions: presetFolderOptions(folders),
        defaultFolderId: opts.defaultFolderId ?? null,
      })
      if (!result) return null
      return saveFromLayer({
        name: result.name,
        model: opts.model,
        dataUrl: opts.dataUrl,
        folderId: result.folderId,
      })
    },
    [askSavePreset, folders, saveFromLayer],
  )

  return { promptSavePreset }
}
