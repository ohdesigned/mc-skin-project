import { useMemo, useState } from 'react'
import { usePresets, UserPreset, PresetFolder } from '../state/presets'
import { useEditor } from '../state/editor'
import {
  cloneCanvas,
  dataUrlToCanvas,
  getCtx,
  layerToDataUrl,
} from '../skin/canvas'
import { PresetPreview } from './PresetPreview'
import { Icon } from './Icon'
import { useToast } from './Toaster'
import { useSavePresetFlow } from '../hooks/useSavePresetFlow'
import { useConfirm } from '../state/dialogs'
import { ModelKind } from '../skin/format'

export const PresetsPanel = () => {
  const model = useEditor((s) => s.model)
  const layers = useEditor((s) => s.layers)
  const activeLayerId = useEditor((s) => s.activeLayerId)
  const addLayerFromCanvas = useEditor((s) => s.addLayerFromCanvas)
  const snapshot = useEditor((s) => s.snapshot)

  const folders = usePresets((s) => s.folders)
  const presets = usePresets((s) => s.presets)
  const removePreset = usePresets((s) => s.remove)
  const renamePreset = usePresets((s) => s.rename)
  const moveToFolder = usePresets((s) => s.moveToFolder)
  const addFolder = usePresets((s) => s.addFolder)
  const renameFolder = usePresets((s) => s.renameFolder)
  const removeFolder = usePresets((s) => s.removeFolder)

  const { promptSavePreset } = useSavePresetFlow()
  const { askConfirm } = useConfirm()
  const toast = useToast()

  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null)
  const [collapsedFolders, setCollapsedFolders] = useState<Set<string>>(new Set())
  const [renamingPresetId, setRenamingPresetId] = useState<string | null>(null)
  const [renamingFolderId, setRenamingFolderId] = useState<string | null>(null)
  const [renameValue, setRenameValue] = useState('')
  const [newFolderName, setNewFolderName] = useState('')

  const activeLayer = layers.find((l) => l.id === activeLayerId) ?? null

  const unfiledPresets = useMemo(
    () => presets.filter((p) => !p.folderId),
    [presets],
  )

  const presetsByFolder = useMemo(() => {
    const map = new Map<string, UserPreset[]>()
    for (const f of folders) map.set(f.id, [])
    for (const p of presets) {
      if (p.folderId && map.has(p.folderId)) {
        map.get(p.folderId)!.push(p)
      }
    }
    return map
  }, [folders, presets])

  const saveActiveLayer = async () => {
    if (!activeLayer) return
    const saved = await promptSavePreset({
      defaultName: activeLayer.name || 'My Preset',
      model,
      dataUrl: layerToDataUrl(activeLayer),
      defaultFolderId: selectedFolderId,
    })
    if (saved) toast.show(`Preset "${saved.name}" saved.`)
  }

  const createFolder = async () => {
    const name = newFolderName.trim()
    if (!name) return
    const ok = await askConfirm({
      title: 'Create Folder',
      message: `Create folder "${name}"?`,
      confirmLabel: 'Create',
    })
    if (!ok) return
    addFolder(name)
    setNewFolderName('')
    toast.show(`Folder "${name}" created.`)
  }

  const applyPreset = async (preset: UserPreset, mode: 'new-layer' | 'merge') => {
    const canvas = await dataUrlToCanvas(preset.dataUrl)
    if (mode === 'merge') {
      const layer = layers.find((l) => l.id === activeLayerId)
      if (!layer || layer.locked) return
      const ok = await askConfirm({
        title: 'Merge Preset',
        message: `Merge "${preset.name}" into the active layer?`,
        confirmLabel: 'Merge',
      })
      if (!ok) return
      snapshot()
      const ctx = getCtx(layer.canvas)
      ctx.drawImage(canvas, 0, 0)
      useEditor.setState((s) => ({ layers: [...s.layers] }))
      return
    }
    addLayerFromCanvas(cloneCanvas(canvas), preset.name)
  }

  const deletePreset = async (preset: UserPreset) => {
    const ok = await askConfirm({
      title: 'Delete Preset',
      message: `Delete preset "${preset.name}"? This cannot be undone.`,
      confirmLabel: 'Delete',
      variant: 'danger',
    })
    if (ok) removePreset(preset.id)
  }

  const deleteFolder = async (folder: PresetFolder) => {
    const count = presetsByFolder.get(folder.id)?.length ?? 0
    const ok = await askConfirm({
      title: 'Delete Folder',
      message:
        count > 0
          ? `Delete folder "${folder.name}"? ${count} preset(s) will move to Unfiled.`
          : `Delete folder "${folder.name}"?`,
      confirmLabel: 'Delete',
      variant: 'danger',
    })
    if (ok) removeFolder(folder.id)
  }

  const toggleFolder = (id: string) => {
    setCollapsedFolders((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="pixel-window flex flex-col min-h-0 h-full">
      <div className="pixel-title-bar">
        <span>MY PRESETS</span>
        <span className="ml-auto panel-label text-accent-cream/90">
          {presets.length}
        </span>
      </div>

      <div className="p-3 border-b-[3px] border-ink bg-bg-desk2 space-y-2">
        <div className="panel-label">Save active layer</div>
        <div className="flex gap-2">
          <button
            onClick={saveActiveLayer}
            disabled={!activeLayer}
            className="pixel-button compact purple flex items-center gap-1 shrink-0 flex-1 justify-center"
            title="Save the selected layer as a reusable preset"
          >
            <Icon name="star" color="#FFFBEA" size={12} />
            <span className="panel-btn-text">Save preset</span>
          </button>
        </div>
        <div>
          <label className="panel-label block mb-1">Default folder</label>
          <select
            className="pixel-input w-full"
            value={selectedFolderId ?? ''}
            onChange={(e) =>
              setSelectedFolderId(e.target.value ? e.target.value : null)
            }
          >
            <option value="">Unfiled</option>
            {folders.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        </div>
        {!activeLayer && (
          <p className="panel-text text-ink/70">
            Select a layer to save it as a preset.
          </p>
        )}
      </div>

      <div className="p-3 border-b-[3px] border-ink bg-bg-desk space-y-2">
        <div className="panel-label">New folder</div>
        <div className="flex gap-2">
          <input
            className="pixel-input flex-1 min-w-0"
            placeholder="Folder name…"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && createFolder()}
          />
          <button
            onClick={createFolder}
            disabled={!newFolderName.trim()}
            className="pixel-button compact teal flex items-center gap-1 shrink-0"
          >
            <Icon name="folder" size={12} />
            <span className="panel-btn-text">Add</span>
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-3">
        {presets.length === 0 && folders.length === 0 ? (
          <div className="text-center py-8 px-3">
            <Icon name="star" size={28} className="mb-2 opacity-40" />
            <div className="panel-label mb-2">No presets yet</div>
            <p className="panel-text text-ink/75">
              Paint on a layer, create folders to organize, then save presets
              here. Apply them to any skin as a new layer.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {folders.map((folder) => (
              <FolderSection
                key={folder.id}
                folder={folder}
                presets={presetsByFolder.get(folder.id) ?? []}
                model={model}
                collapsed={collapsedFolders.has(folder.id)}
                renaming={renamingFolderId === folder.id}
                renameValue={renameValue}
                onToggle={() => toggleFolder(folder.id)}
                onStartRename={() => {
                  setRenamingFolderId(folder.id)
                  setRenameValue(folder.name)
                }}
                onChangeRename={setRenameValue}
                onCommitRename={() => {
                  if (renameValue.trim()) renameFolder(folder.id, renameValue)
                  setRenamingFolderId(null)
                }}
                onCancelRename={() => setRenamingFolderId(null)}
                onDelete={() => deleteFolder(folder)}
                renamingPresetId={renamingPresetId}
                onStartPresetRename={(id, name) => {
                  setRenamingPresetId(id)
                  setRenameValue(name)
                }}
                onCommitPresetRename={(id) => {
                  if (renameValue.trim()) renamePreset(id, renameValue)
                  setRenamingPresetId(null)
                }}
                onCancelPresetRename={() => setRenamingPresetId(null)}
                onAdd={(p) => applyPreset(p, 'new-layer')}
                onMerge={(p) => applyPreset(p, 'merge')}
                onDeletePreset={deletePreset}
                folders={folders}
                onMovePreset={moveToFolder}
              />
            ))}

            {unfiledPresets.length > 0 && (
              <div>
                <div className="panel-label mb-2 flex items-center gap-2">
                  <Icon name="folder" size={14} />
                  Unfiled
                  <span className="text-ink/60">({unfiledPresets.length})</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {unfiledPresets.map((p) => (
                    <PresetCard
                      key={p.id}
                      preset={p}
                      model={model}
                      folders={folders}
                      renaming={renamingPresetId === p.id}
                      renameValue={renameValue}
                      onStartRename={() => {
                        setRenamingPresetId(p.id)
                        setRenameValue(p.name)
                      }}
                      onChangeRename={setRenameValue}
                      onCommitRename={() => {
                        if (renameValue.trim()) renamePreset(p.id, renameValue)
                        setRenamingPresetId(null)
                      }}
                      onCancelRename={() => setRenamingPresetId(null)}
                      onAdd={() => applyPreset(p, 'new-layer')}
                      onMerge={() => applyPreset(p, 'merge')}
                      onDelete={() => deletePreset(p)}
                      onMoveFolder={(folderId) => moveToFolder(p.id, folderId)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

const FolderSection = ({
  folder,
  presets,
  model,
  collapsed,
  renaming,
  renameValue,
  onToggle,
  onStartRename,
  onChangeRename,
  onCommitRename,
  onCancelRename,
  onDelete,
  renamingPresetId,
  onStartPresetRename,
  onCommitPresetRename,
  onCancelPresetRename,
  onAdd,
  onMerge,
  onDeletePreset,
  folders,
  onMovePreset,
}: {
  folder: PresetFolder
  presets: UserPreset[]
  model: ModelKind
  collapsed: boolean
  renaming: boolean
  renameValue: string
  onToggle: () => void
  onStartRename: () => void
  onChangeRename: (s: string) => void
  onCommitRename: () => void
  onCancelRename: () => void
  onDelete: () => void
  renamingPresetId: string | null
  onStartPresetRename: (id: string, name: string) => void
  onCommitPresetRename: (id: string) => void
  onCancelPresetRename: () => void
  onAdd: (p: UserPreset) => void
  onMerge: (p: UserPreset) => void
  onDeletePreset: (p: UserPreset) => void
  folders: PresetFolder[]
  onMovePreset: (presetId: string, folderId: string | null) => void
}) => (
  <div className="border-[3px] border-ink bg-accent-cream/50">
    <div className="flex items-center gap-2 p-2 bg-accent-yellow border-b-[3px] border-ink">
      <button
        onClick={onToggle}
        className="pixel-button compact icon shrink-0"
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        <Icon name={collapsed ? 'down' : 'up'} size={12} />
      </button>
      <Icon name="folder-big" size={16} />
      {renaming ? (
        <input
          autoFocus
          className="pixel-input flex-1 min-w-0"
          value={renameValue}
          onChange={(e) => onChangeRename(e.target.value)}
          onBlur={onCommitRename}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onCommitRename()
            if (e.key === 'Escape') onCancelRename()
          }}
        />
      ) : (
        <button
          className="panel-text flex-1 truncate text-left font-bold"
          onClick={onStartRename}
          title="Click to rename folder"
        >
          {folder.name}
        </button>
      )}
      <span className="panel-text text-ink/60 shrink-0">{presets.length}</span>
      <button
        onClick={onDelete}
        className="pixel-button compact icon danger shrink-0"
        title="Delete folder"
      >
        <Icon name="trash" color="#FFFBEA" size={10} />
      </button>
    </div>
    {!collapsed && (
      <div className="p-2 space-y-3">
        {presets.length === 0 ? (
          <p className="panel-text text-ink/60 text-center py-2">
            No presets in this folder yet.
          </p>
        ) : (
          presets.map((p) => (
            <PresetCard
              key={p.id}
              preset={p}
              model={model}
              folders={folders}
              renaming={renamingPresetId === p.id}
              renameValue={renameValue}
              onStartRename={() => onStartPresetRename(p.id, p.name)}
              onChangeRename={onChangeRename}
              onCommitRename={() => onCommitPresetRename(p.id)}
              onCancelRename={onCancelPresetRename}
              onAdd={() => onAdd(p)}
              onMerge={() => onMerge(p)}
              onDelete={() => onDeletePreset(p)}
              onMoveFolder={(folderId) => onMovePreset(p.id, folderId)}
            />
          ))
        )}
      </div>
    )}
  </div>
)

const PresetCard = ({
  preset,
  model,
  folders,
  renaming,
  renameValue,
  onStartRename,
  onChangeRename,
  onCommitRename,
  onCancelRename,
  onAdd,
  onMerge,
  onDelete,
  onMoveFolder,
}: {
  preset: UserPreset
  model: ModelKind
  folders: PresetFolder[]
  renaming: boolean
  renameValue: string
  onStartRename: () => void
  onChangeRename: (s: string) => void
  onCommitRename: () => void
  onCancelRename: () => void
  onAdd: () => void
  onMerge: () => void
  onDelete: () => void
  onMoveFolder: (folderId: string | null) => void
}) => (
  <div className="pixel-card p-0">
    <PresetPreview dataUrl={preset.dataUrl} model={model} width={88} height={132} />
    <div className="p-2 bg-accent-yellow border-t-[3px] border-ink space-y-2">
      {renaming ? (
        <input
          autoFocus
          className="pixel-input w-full"
          value={renameValue}
          onChange={(e) => onChangeRename(e.target.value)}
          onBlur={onCommitRename}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onCommitRename()
            if (e.key === 'Escape') onCancelRename()
          }}
        />
      ) : (
        <button
          className="panel-text w-full truncate text-left font-bold"
          onClick={onStartRename}
          title="Click to rename"
        >
          {preset.name}
        </button>
      )}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className="pixel-chip shrink-0 panel-btn-text"
          style={{
            background: preset.model === 'slim' ? '#3FB6A8' : '#F5C04A',
            color: '#2A2138',
            fontSize: 14,
          }}
        >
          {preset.model}
        </span>
        {folders.length > 0 && (
          <select
            className="pixel-input flex-1 min-w-0 text-base py-1"
            value={preset.folderId ?? ''}
            onChange={(e) =>
              onMoveFolder(e.target.value ? e.target.value : null)
            }
            title="Move to folder"
          >
            <option value="">Unfiled</option>
            {folders.map((f) => (
              <option key={f.id} value={f.id}>
                {f.name}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
    <div className="grid grid-cols-3 border-t-[3px] border-ink">
      <button
        onClick={onAdd}
        className="bg-accent-cream hover:bg-[#FFF1D4] border-r-[3px] border-ink p-2 flex items-center justify-center gap-1"
        title="Add as new layer"
      >
        <Icon name="plus" size={12} />
        <span className="panel-btn-text">Layer</span>
      </button>
      <button
        onClick={onMerge}
        className="bg-accent-teal hover:brightness-110 border-r-[3px] border-ink p-2 flex items-center justify-center gap-1"
        title="Merge into active layer"
      >
        <Icon name="merge" size={12} />
        <span className="panel-btn-text">Merge</span>
      </button>
      <button
        onClick={onDelete}
        className="bg-accent-red text-accent-cream p-2 flex items-center justify-center gap-1"
        title="Delete preset"
      >
        <Icon name="trash" color="#FFFBEA" size={12} />
        <span className="panel-btn-text">Del</span>
      </button>
    </div>
  </div>
)
