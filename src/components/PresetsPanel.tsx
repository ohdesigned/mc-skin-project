import { useEffect, useRef, useState } from 'react'
import {
  PRESETS,
  PRESET_CATEGORIES,
  PresetCategory,
  presetsByCategory,
  Preset,
} from '../skin/presets'
import { useEditor } from '../state/editor'
import { createCanvas, getCtx } from '../skin/canvas'
import { Icon } from './Icon'
import { ModelKind } from '../skin/format'

export const PresetsPanel = () => {
  const [cat, setCat] = useState<PresetCategory>('face')
  const model = useEditor((s) => s.model)
  const addLayerFromCanvas = useEditor((s) => s.addLayerFromCanvas)
  const layers = useEditor((s) => s.layers)
  const activeLayerId = useEditor((s) => s.activeLayerId)
  const setActive = useEditor((s) => s.setActiveLayer)
  const snapshot = useEditor((s) => s.snapshot)

  const applyPreset = (preset: Preset, mode: 'new-layer' | 'merge') => {
    if (mode === 'merge') {
      const layer = layers.find((l) => l.id === activeLayerId)
      if (!layer || layer.locked) return
      snapshot()
      preset.render(layer.canvas, model)
      useEditor.setState((s) => ({ layers: [...s.layers] }))
      return
    }
    const c = createCanvas()
    preset.render(c, model)
    addLayerFromCanvas(c, preset.name)
  }

  return (
    <div className="pixel-window flex flex-col min-h-0 h-full">
      <div className="pixel-title-bar">
        <span className="stripes" />
        <span>PRESETS</span>
      </div>
      <div className="grid grid-cols-5 gap-1 p-2 bg-bg-desk2 border-b-[3px] border-ink">
        {PRESET_CATEGORIES.map((c) => (
          <button
            key={c.key}
            onClick={() => setCat(c.key)}
            className={`pixel-button compact ${cat === c.key ? 'active' : ''} flex flex-col items-center gap-1 py-2`}
            title={c.label}
          >
            <Icon
              name={c.icon as any}
              size={14}
              color={cat === c.key ? '#F5C04A' : '#2A2138'}
            />
            <span style={{ fontSize: 7 }}>{c.label.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-2 grid grid-cols-2 gap-2 content-start">
        {presetsByCategory(cat).map((p) => (
          <PresetCard
            key={p.id}
            preset={p}
            model={model}
            onAdd={() => applyPreset(p, 'new-layer')}
            onMerge={() => applyPreset(p, 'merge')}
          />
        ))}
      </div>
    </div>
  )
}

const PresetCard = ({
  preset,
  model,
  onAdd,
  onMerge,
}: {
  preset: Preset
  model: ModelKind
  onAdd: () => void
  onMerge: () => void
}) => {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const c = ref.current
    if (!c) return
    const tmp = createCanvas()
    preset.render(tmp, model)
    const ctx = getCtx(c)
    ctx.clearRect(0, 0, c.width, c.height)
    // Checkerboard
    const sz = 4
    for (let y = 0; y < c.height; y += sz) {
      for (let x = 0; x < c.width; x += sz) {
        ctx.fillStyle = (x / sz + y / sz) % 2 === 0 ? '#E9D6B4' : '#B07B47'
        ctx.fillRect(x, y, sz, sz)
      }
    }
    ctx.drawImage(tmp, 0, 0, c.width, c.height)
  }, [preset, model])

  return (
    <div className="pixel-card p-0 group">
      <button
        onClick={onAdd}
        className="block w-full p-2 bg-accent-cream hover:bg-[#FFF1D4] border-b-[3px] border-ink"
        title="Click to add as new layer"
      >
        <canvas
          ref={ref}
          width={64}
          height={64}
          style={{ imageRendering: 'pixelated', width: '100%', height: 'auto' }}
        />
      </button>
      <div className="p-1.5 flex items-center gap-1 bg-accent-yellow">
        <span className="pixel-text-sm flex-1 truncate" title={preset.description}>
          {preset.name}
        </span>
      </div>
      <div className="grid grid-cols-2 border-t-[3px] border-ink">
        <button
          onClick={onAdd}
          className="bg-accent-cream hover:bg-[#FFF1D4] border-r-[3px] border-ink p-1.5 flex items-center justify-center gap-1"
          title="Add as new layer"
        >
          <Icon name="plus" size={10} />
          <span style={{ fontSize: 8 }}>NEW</span>
        </button>
        <button
          onClick={onMerge}
          className="bg-accent-teal hover:brightness-110 p-1.5 flex items-center justify-center gap-1"
          title="Paint into current layer"
        >
          <Icon name="merge" size={10} />
          <span style={{ fontSize: 8 }}>MERGE</span>
        </button>
      </div>
    </div>
  )
}
