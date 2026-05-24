import { useEffect, useRef, useState } from 'react'
import { useEditor } from '../state/editor'
import { useGallery } from '../state/gallery'
import { LayerPanel } from '../components/LayerPanel'
import { MiniSkinPreview } from '../components/MiniSkinPreview'
import { ToolBar } from '../components/ToolBar'
import { ColorPicker } from '../components/ColorPicker'
import { PresetsPanel } from '../components/PresetsPanel'
import { SkinPaintCanvas } from '../components/SkinPaintCanvas'
import { Icon } from '../components/Icon'
import { BODY_PART_GROUPS, BodyPart } from '../skin/format'
import { useConfirm } from '../state/dialogs'
import {
  compositeLayers,
  dataUrlToCanvas,
  downloadCanvas,
  toDataURL,
} from '../skin/canvas'
import { PART_LAYER_MODE_LABEL, type PartLayerMode } from '../skin/partVisibility'

interface Props {
  editId?: string
  onExit: () => void
  onSaved: (name: string) => void
}

export const Editor = ({ editId, onExit, onSaved }: Props) => {
  const layers = useEditor((s) => s.layers)
  const model = useEditor((s) => s.model)
  const setModel = useEditor((s) => s.setModel)
  const reset = useEditor((s) => s.reset)
  const loadSkinAsBase = useEditor((s) => s.loadSkinAsBase)
  const setTool = useEditor((s) => s.setTool)
  const activePart = useEditor((s) => s.activePart)
  const partLayerModes = useEditor((s) => s.partLayerModes)
  const cyclePartLayerMode = useEditor((s) => s.cyclePartLayerMode)
  const resetPartLayerModes = useEditor((s) => s.resetPartLayerModes)
  const undo = useEditor((s) => s.undo)
  const redo = useEditor((s) => s.redo)
  const { askConfirm } = useConfirm()

  const galSkins = useGallery((s) => s.skins)
  const saveSkin = useGallery((s) => s.save)
  const updateSkin = useGallery((s) => s.update)

  const [name, setName] = useState('Untitled Skin')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [presetsOpen, setPresetsOpen] = useState(false)
  const [utilityPanel, setUtilityPanel] = useState<
    'tools' | 'colors' | 'layers' | 'preview'
  >('tools')

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      if (editId) {
        const found = galSkins.find((s) => s.id === editId)
        if (!found) return
        if (cancelled) return
        setName(found.name)
        setModel(found.model)
        const c = await dataUrlToCanvas(found.dataUrl)
        if (cancelled) return
        loadSkinAsBase(c)
      } else {
        reset('slim')
        setModel('slim')
      }
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault()
        if (e.shiftKey) redo()
        else undo()
        return
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') {
        e.preventDefault()
        redo()
        return
      }
      const k = e.key.toLowerCase()
      if (k === 'b') setTool('pencil')
      if (k === 'e') setTool('eraser')
      if (k === 'g') setTool('fill')
      if (k === 'i') setTool('eyedropper')
      if (k === 's') setTool('shade')
      if (k === 'l') setTool('lighten')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setTool, undo, redo])

  const handleSave = async () => {
    const dataUrl = toDataURL(compositeLayers(layers))
    const ok = await askConfirm({
      title: 'Save Skin',
      message: `Save "${name}" to your gallery?`,
      confirmLabel: 'Save',
    })
    if (!ok) return
    if (editId) {
      updateSkin(editId, { name, model, dataUrl })
    } else {
      saveSkin({ name, model, dataUrl })
    }
    onSaved(name)
  }

  const handleDownload = async () => {
    const ok = await askConfirm({
      title: 'Download Skin',
      message: `Download "${name || 'minecraft-skin'}.png"?`,
      confirmLabel: 'Download',
    })
    if (!ok) return
    downloadCanvas(compositeLayers(layers), name || 'minecraft-skin')
  }

  const handleUpload = async (file: File) => {
    try {
      const c = await dataUrlToCanvas(URL.createObjectURL(file))
      useEditor.getState().addLayerFromCanvas(c, file.name.replace(/\.[^.]+$/, ''))
    } catch (e) {
      console.warn(e)
    }
  }

  return (
    <div className="h-full w-full p-1 sm:p-2 lg:p-3 grid gap-2 grid-rows-[auto_1fr] overflow-hidden min-h-0">
      <EditorTopBar
        name={name}
        onName={setName}
        model={model}
        setModel={(m) => setModel(m)}
        onExit={onExit}
        onSave={handleSave}
        onDownload={handleDownload}
        onUpload={(f) => handleUpload(f)}
        fileInputRef={fileInputRef}
        presetsOpen={presetsOpen}
        setPresetsOpen={setPresetsOpen}
      />

      <div className="grid gap-2 min-h-0 grid-cols-1 xl:grid-cols-[240px_minmax(0,1fr)_280px_320px]">
        <div className="hidden xl:flex flex-col gap-2 min-h-0">
          <ToolBar />
          <div className="min-h-[200px] flex-1 min-h-0">
            <ColorPicker />
          </div>
        </div>

        <div className="flex flex-col gap-2 min-h-0">
          <div className="pixel-window flex-1 min-h-0 flex flex-col">
            <div className="pixel-title-bar flex-wrap gap-y-1">
              <span>MODEL PAINT</span>
              <span className="ml-auto panel-label text-accent-cream/80 text-sm">
                Tap/click paint · Right-click rotate · Scroll/pinch zoom
              </span>
            </div>
            <BodyPartTabs
              activePart={activePart}
              partLayerModes={partLayerModes}
              onAll={() => resetPartLayerModes()}
              onPart={(key) => cyclePartLayerMode(key)}
            />
            <div className="flex-1 min-h-0 p-2 bg-bg-desk2">
              <SkinPaintCanvas model={model} />
            </div>
          </div>

          <div className="xl:hidden pixel-window">
            <div className="px-2 py-2 bg-bg-desk border-b-[3px] border-ink flex gap-1 flex-wrap">
              <UtilityButton
                active={utilityPanel === 'tools'}
                label="TOOLS"
                onClick={() => setUtilityPanel('tools')}
              />
              <UtilityButton
                active={utilityPanel === 'colors'}
                label="COLORS"
                onClick={() => setUtilityPanel('colors')}
              />
              <UtilityButton
                active={utilityPanel === 'layers'}
                label="LAYERS"
                onClick={() => setUtilityPanel('layers')}
              />
              <UtilityButton
                active={utilityPanel === 'preview'}
                label="PREVIEW"
                onClick={() => setUtilityPanel('preview')}
              />
            </div>
            <div className="h-[38vh] min-h-[220px] max-h-[420px]">
              {utilityPanel === 'tools' && <ToolBar />}
              {utilityPanel === 'colors' && <ColorPicker />}
              {utilityPanel === 'layers' && <LayerPanel />}
              {utilityPanel === 'preview' && <MiniSkinPreview />}
            </div>
          </div>
        </div>

        <div className="hidden xl:flex flex-col gap-2 min-h-0">
          <div className="flex-1 min-h-0">
            <LayerPanel />
          </div>
          <MiniSkinPreview />
        </div>

        <div className="hidden xl:flex flex-col min-h-0 flex-1">
          <PresetsPanel />
        </div>
      </div>

      {presetsOpen && (
        <div className="fixed inset-0 z-40 bg-bg-deep/70 grid place-items-center p-4 xl:hidden">
          <div className="w-[640px] max-w-[96vw] h-[80vh]">
            <div className="relative h-full">
              <PresetsPanel />
              <button
                className="absolute top-2 right-2 pixel-button icon danger"
                onClick={() => setPresetsOpen(false)}
              >
                <Icon name="x" color="#FFFBEA" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

interface TopBarProps {
  name: string
  onName: (n: string) => void
  model: 'classic' | 'slim'
  setModel: (m: 'classic' | 'slim') => void
  onExit: () => void
  onSave: () => void
  onDownload: () => void
  onUpload: (f: File) => void
  fileInputRef: React.RefObject<HTMLInputElement>
  presetsOpen: boolean
  setPresetsOpen: (b: boolean) => void
}

const EditorTopBar = (p: TopBarProps) => (
  <div className="pixel-window">
    <div className="pixel-title-bar">
      <span>EDITOR // /skins/</span>
      <input
        className="pixel-input ml-2 flex-1 min-w-0 max-w-[220px]"
        value={p.name}
        onChange={(e) => p.onName(e.target.value)}
      />
      <div className="ml-auto flex items-center gap-2 flex-wrap">
        <button
          onClick={() => p.setModel('slim')}
          className={`pixel-button compact teal ${p.model === 'slim' ? 'active' : ''}`}
        >
          SLIM
        </button>
        <button
          onClick={() => p.setModel('classic')}
          className={`pixel-button compact ${p.model === 'classic' ? 'active' : ''}`}
        >
          CLASSIC
        </button>
      </div>
    </div>
    <div className="px-3 py-2 bg-bg-desk2 flex items-center gap-2 flex-wrap">
      <button
        onClick={p.onExit}
        className="pixel-button compact flex items-center gap-1"
        title="Back to gallery"
      >
        <Icon name="home" /> HOME
      </button>
      <button
        onClick={() => p.fileInputRef.current?.click()}
        className="pixel-button compact teal flex items-center gap-1"
      >
        <Icon name="upload" /> UPLOAD
      </button>
      <input
        ref={p.fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) p.onUpload(f)
          if (p.fileInputRef.current) p.fileInputRef.current.value = ''
        }}
      />
      <button
        onClick={() => p.setPresetsOpen(!p.presetsOpen)}
        className="pixel-button compact purple flex items-center gap-1 xl:hidden"
      >
        <Icon name="star" color="#FFFBEA" /> MY PRESETS
      </button>
      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <button
          onClick={p.onDownload}
          className="pixel-button compact teal flex items-center gap-1"
        >
          <Icon name="download" /> DOWNLOAD
        </button>
        <button
          onClick={p.onSave}
          className="pixel-button compact danger flex items-center gap-1"
        >
          <Icon name="save" color="#FFFBEA" /> SAVE
        </button>
      </div>
    </div>
  </div>
)

const UtilityButton = ({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`pixel-button compact ${active ? 'active' : ''}`}
  >
    {label}
  </button>
)

const BodyPartTabs = ({
  activePart,
  partLayerModes,
  onAll,
  onPart,
}: {
  activePart: string
  partLayerModes: Record<BodyPart, PartLayerMode>
  onAll: () => void
  onPart: (key: BodyPart) => void
}) => (
  <div className="px-2 py-2 border-b-[3px] border-ink bg-bg-desk overflow-x-auto pixel-scroll flex items-center gap-1">
    <PartTab label="ALL" badge="" active={activePart === 'all'} onClick={onAll} />
    {BODY_PART_GROUPS.map((g) => {
      const mode = partLayerModes[g.key] ?? 0
      return (
        <PartTab
          key={g.key}
          label={g.label.toUpperCase()}
          badge={PART_LAYER_MODE_LABEL[mode]}
          active={activePart === g.key}
          onClick={() => onPart(g.key)}
        />
      )
    })}
  </div>
)

const PartTab = ({
  label,
  badge,
  active,
  onClick,
}: {
  label: string
  badge: string
  active: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`pixel-button compact ${active ? 'active' : ''} whitespace-nowrap flex items-center gap-1`}
    title={
      badge === 'OUT'
        ? 'Outer layer hidden — click again'
        : badge === 'OFF'
          ? 'Both layers hidden — click to restore'
          : 'Click to hide outer layer on this part'
    }
  >
    <span style={{ fontSize: 8 }}>{label}</span>
    {badge && (
      <span className="panel-btn-text text-[10px] opacity-90">{badge}</span>
    )}
  </button>
)
