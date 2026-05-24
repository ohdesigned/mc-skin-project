import { useEditor } from '../state/editor'
import { Icon } from './Icon'

interface Tool {
  key: 'pencil' | 'eraser' | 'fill' | 'eyedropper' | 'shade' | 'lighten'
  label: string
  icon: Parameters<typeof Icon>[0]['name']
  shortcut: string
}

const TOOLS: Tool[] = [
  { key: 'pencil', label: 'Pencil', icon: 'pencil', shortcut: 'B' },
  { key: 'eraser', label: 'Eraser', icon: 'eraser', shortcut: 'E' },
  { key: 'fill', label: 'Fill', icon: 'fill', shortcut: 'G' },
  { key: 'eyedropper', label: 'Pick', icon: 'eyedropper', shortcut: 'I' },
  { key: 'shade', label: 'Shade', icon: 'shade', shortcut: 'S' },
  { key: 'lighten', label: 'Lighten', icon: 'lighten', shortcut: 'L' },
]

export const ToolBar = () => {
  const tool = useEditor((s) => s.tool)
  const setTool = useEditor((s) => s.setTool)
  const brushSize = useEditor((s) => s.brushSize)
  const setBrushSize = useEditor((s) => s.setBrushSize)
  const mirror = useEditor((s) => s.mirror)
  const toggleMirror = useEditor((s) => s.toggleMirror)
  const showGrid = useEditor((s) => s.showGrid)
  const toggleGrid = useEditor((s) => s.toggleGrid)
  const showOnlyValid = useEditor((s) => s.showOnlyValid)
  const toggleOnlyValid = useEditor((s) => s.toggleOnlyValid)
  const undo = useEditor((s) => s.undo)
  const redo = useEditor((s) => s.redo)
  const history = useEditor((s) => s.history)
  const future = useEditor((s) => s.future)

  return (
    <div className="pixel-window">
      <div className="pixel-title-bar">
        <span className="stripes" />
        <span>TOOLS</span>
      </div>
      <div className="p-2 grid grid-cols-3 gap-2 bg-bg-desk2">
        {TOOLS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTool(t.key)}
            title={`${t.label} (${t.shortcut})`}
            className={`pixel-button compact ${tool === t.key ? 'active' : ''} flex flex-col items-center gap-1 py-3`}
          >
            <Icon name={t.icon} size={16} color={tool === t.key ? '#F5C04A' : '#2A2138'} />
            <span style={{ fontSize: 8 }}>{t.label.toUpperCase()}</span>
          </button>
        ))}
      </div>
      <div className="p-2 border-t-[3px] border-ink bg-bg-desk space-y-2">
        <div>
          <div className="pixel-text-sm mb-1">BRUSH</div>
          <div className="grid grid-cols-4 gap-1">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setBrushSize(s)}
                className={`pixel-button compact ${brushSize === s ? 'active' : ''} grid place-items-center py-2`}
              >
                <div
                  className="bg-ink"
                  style={{ width: s * 3, height: s * 3 }}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <button
            onClick={toggleMirror}
            className={`pixel-button compact ${mirror ? 'active' : ''} flex items-center justify-center gap-1`}
            title="Mirror across X axis"
          >
            <Icon name="mirror" color={mirror ? '#F5C04A' : '#2A2138'} />
            <span style={{ fontSize: 8 }}>MIRROR</span>
          </button>
          <button
            onClick={toggleGrid}
            className={`pixel-button compact ${showGrid ? 'active' : ''} flex items-center justify-center gap-1`}
          >
            <Icon name="grid" color={showGrid ? '#F5C04A' : '#2A2138'} />
            <span style={{ fontSize: 8 }}>GRID</span>
          </button>
          <button
            onClick={toggleOnlyValid}
            className={`pixel-button compact ${showOnlyValid ? 'active' : ''} flex items-center justify-center gap-1 col-span-2`}
            title="Hide pixels that Minecraft doesn't use"
          >
            <Icon name="mask" color={showOnlyValid ? '#F5C04A' : '#2A2138'} />
            <span style={{ fontSize: 8 }}>SAFE MASK</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <button
            disabled={history.length === 0}
            onClick={undo}
            className="pixel-button compact flex items-center justify-center gap-1"
            title="Undo (Ctrl+Z)"
          >
            <Icon name="undo" /> <span style={{ fontSize: 8 }}>UNDO</span>
          </button>
          <button
            disabled={future.length === 0}
            onClick={redo}
            className="pixel-button compact flex items-center justify-center gap-1"
            title="Redo (Ctrl+Y)"
          >
            <Icon name="redo" /> <span style={{ fontSize: 8 }}>REDO</span>
          </button>
        </div>
      </div>
    </div>
  )
}
