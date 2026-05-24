import { Icon } from './Icon'
import { useEditor } from '../state/editor'
import { useEffect, useRef, useState } from 'react'
import { fileToCanvas, drawLayerComposite, getCtx, layerToDataUrl } from '../skin/canvas'
import { useToast } from './Toaster'
import { useSavePresetFlow } from '../hooks/useSavePresetFlow'
import { useConfirm } from '../state/dialogs'

export const LayerPanel = () => {
  const layers = useEditor((s) => s.layers)
  const activeLayerId = useEditor((s) => s.activeLayerId)
  const setActive = useEditor((s) => s.setActiveLayer)
  const addBlank = useEditor((s) => s.addBlankLayer)
  const duplicate = useEditor((s) => s.duplicateLayer)
  const remove = useEditor((s) => s.deleteLayer)
  const toggleVis = useEditor((s) => s.toggleLayerVisible)
  const toggleLock = useEditor((s) => s.toggleLayerLocked)
  const setOpacity = useEditor((s) => s.setLayerOpacity)
  const setAdjustments = useEditor((s) => s.setLayerAdjustments)
  const resetAdjustments = useEditor((s) => s.resetLayerAdjustments)
  const moveLayer = useEditor((s) => s.moveLayer)
  const rename = useEditor((s) => s.renameLayer)
  const mergeDown = useEditor((s) => s.mergeDown)
  const addLayerFromCanvas = useEditor((s) => s.addLayerFromCanvas)
  const model = useEditor((s) => s.model)
  const { promptSavePreset } = useSavePresetFlow()
  const { askConfirm } = useConfirm()
  const toast = useToast()

  const fileRef = useRef<HTMLInputElement>(null)
  const [openAdjustLayerId, setOpenAdjustLayerId] = useState<string | null>(null)

  if (typeof window !== 'undefined') {
    ;(window as any).__skin_upload = () => fileRef.current?.click()
  }

  const displayLayers = [...layers].reverse()

  const saveLayerAsPreset = async (layerId: string, layerName: string) => {
    const layer = layers.find((l) => l.id === layerId)
    if (!layer) return
    const saved = await promptSavePreset({
      defaultName: layerName,
      model,
      dataUrl: layerToDataUrl(layer),
    })
    if (saved) toast.show(`Preset "${saved.name}" saved.`)
  }

  const deleteLayer = async (id: string, name: string) => {
    if (layers.length <= 1) return
    const ok = await askConfirm({
      title: 'Delete Layer',
      message: `Delete layer "${name}"? This cannot be undone.`,
      confirmLabel: 'Delete',
      variant: 'danger',
    })
    if (ok) remove(id)
  }

  return (
    <div className="pixel-window flex flex-col min-h-0 h-full">
      <div className="pixel-title-bar">
        <span>LAYERS</span>
        <span className="ml-auto panel-label text-accent-cream/90">
          {layers.length}
        </span>
      </div>
      <div className="p-2 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-1">
        <button
          onClick={() => addBlank('Layer')}
          className="pixel-button compact flex items-center gap-1"
          title="New blank layer"
        >
          <Icon name="plus" /> NEW
        </button>
        <button
          onClick={() => fileRef.current?.click()}
          className="pixel-button compact teal flex items-center gap-1"
          title="Upload skin as a layer"
        >
          <Icon name="upload" /> UPLOAD
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg"
          hidden
          onChange={async (e) => {
            const files = Array.from(e.target.files ?? [])
            for (const file of files) {
              try {
                const c = await fileToCanvas(file)
                addLayerFromCanvas(c, file.name.replace(/\.[^.]+$/, ''))
              } catch (err) {
                console.warn('Could not load file', err)
              }
            }
            if (fileRef.current) fileRef.current.value = ''
          }}
          multiple
        />
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk">
        {displayLayers.map((l) => {
          const active = l.id === activeLayerId
          const hasAdjust =
            l.hue !== 0 || l.saturation !== 1 || l.brightness !== 1
          return (
            <div
              key={l.id}
              className={`relative border-b-[3px] border-ink ${
                active ? 'bg-accent-yellow' : 'bg-accent-cream'
              }`}
            >
              <div className="flex items-center gap-2 p-2">
                <button
                  className="pixel-button compact icon"
                  onClick={() => toggleVis(l.id)}
                  title={l.visible ? 'Hide' : 'Show'}
                >
                  <Icon name={l.visible ? 'eye' : 'eye-off'} />
                </button>
                <button
                  onClick={() => setActive(l.id)}
                  className="flex items-center gap-2 flex-1 min-w-0 text-left"
                >
                  <LayerThumb layer={l} active={active} />
                  <input
                    className="bg-transparent outline-none w-full truncate panel-text"
                    value={l.name}
                    onChange={(e) => rename(l.id, e.target.value)}
                    onFocus={() => setActive(l.id)}
                  />
                </button>
                <button
                  className="pixel-button compact icon"
                  onClick={() => toggleLock(l.id)}
                  title={l.locked ? 'Unlock' : 'Lock'}
                >
                  <Icon name={l.locked ? 'lock' : 'unlock'} />
                </button>
                <button
                  className="pixel-button compact icon purple"
                  onClick={() => saveLayerAsPreset(l.id, l.name)}
                  title="Save this layer as a preset"
                >
                  <Icon name="star" color="#FFFBEA" size={10} />
                </button>
                <button
                  className={`pixel-button compact ${openAdjustLayerId === l.id ? 'active' : ''}`}
                  onClick={() =>
                    setOpenAdjustLayerId((prev) => (prev === l.id ? null : l.id))
                  }
                  title="Show layer adjustments"
                >
                  FX
                </button>
              </div>
              {openAdjustLayerId === l.id && (
                <div className="px-2 pb-2 space-y-2 border-t border-ink/20 pt-2 mx-2">
                  <div className="panel-label flex items-center justify-between">
                    <span>Adjustments</span>
                    {hasAdjust && (
                      <button
                        className="panel-text underline opacity-80 hover:opacity-100"
                        onClick={() => resetAdjustments(l.id)}
                      >
                        Reset
                      </button>
                    )}
                  </div>
                  <AdjSlider
                    label="Opacity"
                    min={0}
                    max={1}
                    step={0.05}
                    value={l.opacity}
                    display={`${Math.round(l.opacity * 100)}%`}
                    onChange={(v) => setOpacity(l.id, v)}
                  />
                  <AdjSlider
                    label="Hue"
                    min={-180}
                    max={180}
                    step={1}
                    value={l.hue}
                    display={`${l.hue}°`}
                    onChange={(v) => setAdjustments(l.id, { hue: v })}
                  />
                  <AdjSlider
                    label="Saturation"
                    min={0}
                    max={2}
                    step={0.05}
                    value={l.saturation}
                    display={`${Math.round(l.saturation * 100)}%`}
                    onChange={(v) => setAdjustments(l.id, { saturation: v })}
                  />
                  <AdjSlider
                    label="Brightness"
                    min={0}
                    max={2}
                    step={0.05}
                    value={l.brightness}
                    display={`${Math.round(l.brightness * 100)}%`}
                    onChange={(v) => setAdjustments(l.id, { brightness: v })}
                  />
                </div>
              )}
              <div className="px-2 pb-2 flex items-center gap-1 flex-wrap">
                <button
                  className="pixel-button compact icon"
                  onClick={() => moveLayer(l.id, 1)}
                  title="Move up"
                >
                  <Icon name="up" />
                </button>
                <button
                  className="pixel-button compact icon"
                  onClick={() => moveLayer(l.id, -1)}
                  title="Move down"
                >
                  <Icon name="down" />
                </button>
                <button
                  className="pixel-button compact icon"
                  onClick={() => duplicate(l.id)}
                  title="Duplicate"
                >
                  <Icon name="duplicate" />
                </button>
                <button
                  className="pixel-button compact icon"
                  onClick={() => mergeDown(l.id)}
                  title="Merge down"
                >
                  <Icon name="merge" />
                </button>
                <button
                  className="pixel-button compact icon danger ml-auto"
                  onClick={() => deleteLayer(l.id, l.name)}
                  title="Delete"
                  disabled={layers.length <= 1}
                >
                  <Icon name="trash" color="#FFFBEA" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const AdjSlider = ({
  label,
  min,
  max,
  step,
  value,
  display,
  onChange,
}: {
  label: string
  min: number
  max: number
  step: number
  value: number
  display: string
  onChange: (v: number) => void
}) => (
  <div className="flex items-center gap-2">
    <span className="panel-text w-20 shrink-0 opacity-80">{label}</span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="flex-1 pixel-range"
    />
    <span className="panel-text w-12 text-right shrink-0">{display}</span>
  </div>
)

const LayerThumb = ({
  layer,
  active,
}: {
  layer: import('../state/editor').Layer
  active: boolean
}) => {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')!
    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, c.width, c.height)
    const sz = 4
    for (let y = 0; y < c.height; y += sz) {
      for (let x = 0; x < c.width; x += sz) {
        ctx.fillStyle = (x / sz + y / sz) % 2 === 0 ? '#E9D6B4' : '#B07B47'
        ctx.fillRect(x, y, sz, sz)
      }
    }
    const tmp = document.createElement('canvas')
    tmp.width = c.width
    tmp.height = c.height
    const tctx = getCtx(tmp)
    drawLayerComposite(tctx, { ...layer, opacity: 1 })
    ctx.drawImage(tmp, 0, 0)
  }, [layer])
  return (
    <canvas
      ref={ref}
      width={32}
      height={32}
      className={`border-2 ${active ? 'border-ink' : 'border-ink/70'}`}
      style={{ imageRendering: 'pixelated' }}
    />
  )
}
