import { useEffect, useState } from 'react'
import { useDialogs } from '../state/dialogs'

export const DialogHost = () => {
  const confirm = useDialogs((s) => s.confirm)
  const savePreset = useDialogs((s) => s.savePreset)
  const saveColor = useDialogs((s) => s.saveColor)
  const closeConfirm = useDialogs((s) => s.closeConfirm)
  const closeSavePreset = useDialogs((s) => s.closeSavePreset)
  const closeSaveColor = useDialogs((s) => s.closeSaveColor)

  const [presetName, setPresetName] = useState('')
  const [presetFolderId, setPresetFolderId] = useState<string | null>(null)
  const [colorPaletteId, setColorPaletteId] = useState<string | null>(null)

  useEffect(() => {
    if (savePreset) {
      setPresetName(savePreset.defaultName)
      setPresetFolderId(savePreset.defaultFolderId)
    }
  }, [savePreset])

  useEffect(() => {
    if (saveColor) {
      setColorPaletteId(saveColor.defaultPaletteId ?? saveColor.paletteOptions[0]?.id ?? null)
    }
  }, [saveColor])

  if (!confirm && !savePreset && !saveColor) return null

  return (
    <div className="dialog-backdrop">
      {confirm && (
        <div className="dialog-box">
          <div className="dialog-title-bar">{confirm.title}</div>
          <div className="dialog-body">
            <p className="panel-text">{confirm.message}</p>
          </div>
          <div className="dialog-actions">
            <button
              className="pixel-button compact cream"
              onClick={() => closeConfirm(false)}
            >
              {confirm.cancelLabel ?? 'Cancel'}
            </button>
            <button
              className={`pixel-button compact ${confirm.variant === 'danger' ? 'danger' : 'teal'}`}
              onClick={() => closeConfirm(true)}
            >
              {confirm.confirmLabel ?? 'Confirm'}
            </button>
          </div>
        </div>
      )}

      {savePreset && (
        <div className="dialog-box">
          <div className="dialog-title-bar">Save Preset</div>
          <div className="dialog-body space-y-3">
            <p className="panel-text">
              Save this layer as a reusable preset?
            </p>
            <div>
              <label className="panel-label block mb-1">Preset name</label>
              <input
                autoFocus
                className="pixel-input w-full"
                value={presetName}
                onChange={(e) => setPresetName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    closeSavePreset({
                      name: presetName.trim() || savePreset.defaultName,
                      folderId: presetFolderId,
                    })
                  }
                }}
              />
            </div>
            <div>
              <label className="panel-label block mb-1">Folder</label>
              <select
                className="pixel-input w-full"
                value={presetFolderId ?? ''}
                onChange={(e) =>
                  setPresetFolderId(e.target.value ? e.target.value : null)
                }
              >
                <option value="">Unfiled</option>
                {savePreset.folderOptions
                  .filter((f) => f.id !== null)
                  .map((f) => (
                    <option key={f.id} value={f.id!}>
                      {f.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="dialog-actions">
            <button
              className="pixel-button compact cream"
              onClick={() => closeSavePreset(null)}
            >
              Cancel
            </button>
            <button
              className="pixel-button compact purple"
              onClick={() =>
                closeSavePreset({
                  name: presetName.trim() || savePreset.defaultName,
                  folderId: presetFolderId,
                })
              }
            >
              Save Preset
            </button>
          </div>
        </div>
      )}

      {saveColor && (
        <div className="dialog-box">
          <div className="dialog-title-bar">Save Color</div>
          <div className="dialog-body space-y-3">
            <p className="panel-text">Add this color to a palette?</p>
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 border-[3px] border-ink shrink-0"
                style={{ background: saveColor.color }}
              />
              <span className="panel-text font-mono">{saveColor.color.toUpperCase()}</span>
            </div>
            {saveColor.paletteOptions.length === 0 ? (
              <p className="panel-text text-ink/70">
                Create a palette first in the Colors panel.
              </p>
            ) : (
              <div>
                <label className="panel-label block mb-1">Palette</label>
                <select
                  className="pixel-input w-full"
                  value={colorPaletteId ?? ''}
                  onChange={(e) => setColorPaletteId(e.target.value)}
                >
                  {saveColor.paletteOptions.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <div className="dialog-actions">
            <button
              className="pixel-button compact cream"
              onClick={() => closeSaveColor(null)}
            >
              Cancel
            </button>
            <button
              className="pixel-button compact teal"
              disabled={!colorPaletteId || saveColor.paletteOptions.length === 0}
              onClick={() =>
                colorPaletteId && closeSaveColor({ paletteId: colorPaletteId })
              }
            >
              Save Color
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
