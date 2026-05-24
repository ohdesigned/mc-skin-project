import { Icon } from './Icon'
import { useEditor } from '../state/editor'
import { useEffect, useRef } from 'react'
import { fileToCanvas } from '../skin/canvas'

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
  const moveLayer = useEditor((s) => s.moveLayer)
  const rename = useEditor((s) => s.renameLayer)
  const mergeDown = useEditor((s) => s.mergeDown)
  const addLayerFromCanvas = useEditor((s) => s.addLayerFromCanvas)

  const fileRef = useRef<HTMLInputElement>(null)

  // Expose upload trigger globally so the side rack on Home can also trigger.
  if (typeof window !== 'undefined') {
    ;(window as any).__skin_upload = () => fileRef.current?.click()
  }

  // Display layers top-to-bottom (top of list = top of stack, but we store back-to-front)
  const displayLayers = [...layers].reverse()

  return (
    <div className="pixel-window flex flex-col min-h-0 h-full">
      <div className="pixel-title-bar">
        <span className="stripes" />
        <span>LAYERS</span>
        <span className="ml-auto pixel-text-sm text-accent-cream/80">
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
                  <LayerThumb canvas={l.canvas} active={active} />
                  <input
                    className="bg-transparent outline-none w-full truncate pixel-text-sm"
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
              </div>
              <div className="px-2 pb-2 flex items-center gap-2">
                <span className="pixel-text-sm opacity-70">OPACITY</span>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={l.opacity}
                  onChange={(e) => setOpacity(l.id, Number(e.target.value))}
                  className="flex-1"
                />
                <span className="pixel-text-sm w-8 text-right">
                  {Math.round(l.opacity * 100)}
                </span>
              </div>
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
                  onClick={() => remove(l.id)}
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

const LayerThumb = ({
  canvas,
  active,
}: {
  canvas: HTMLCanvasElement
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
    ctx.drawImage(canvas, 0, 0, c.width, c.height)
  })
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
