import { useState, useEffect } from 'react'
import { useEditor } from '../state/editor'
import { useColorLibrary } from '../state/colors'
import { useConfirm } from '../state/dialogs'
import { useToast } from './Toaster'
import { Icon } from './Icon'

const BUILTIN_PALETTE: string[] = [
  '#FFE0BD', '#FFCB94', '#E6B17A', '#C39979', '#A87B5C', '#7A4F2A', '#5B3A1F', '#3D2614',
  '#FF6B6B', '#D54B4B', '#A82F38', '#7A1A1A',
  '#FFB14A', '#E68E2E', '#B96B16', '#7A4416',
  '#FFEC8B', '#F5C04A', '#C98E20', '#7E5A12',
  '#A6E3C8', '#3FB6A8', '#1F7A70', '#0E4A45',
  '#7EC8F5', '#3B5BA3', '#1F3262', '#0E1A3A',
  '#C7A2F0', '#7E4FB8', '#4A2C6E', '#291643',
  '#FFC0E2', '#FF7AB6', '#B3437E', '#6E1E50',
  '#FFFFFF', '#FFFBEA', '#F7E6CF', '#E9D6B4', '#B07B47', '#7B7F87', '#3B3344', '#2A2138', '#1B1424', '#000000',
]

export const ColorPicker = () => {
  const color = useEditor((s) => s.color)
  const setColor = useEditor((s) => s.setColor)
  const recent = useEditor((s) => s.recentColors)

  const palettes = useColorLibrary((s) => s.palettes)
  const activePaletteId = useColorLibrary((s) => s.activePaletteId)
  const createPalette = useColorLibrary((s) => s.createPalette)
  const removePalette = useColorLibrary((s) => s.removePalette)
  const renamePalette = useColorLibrary((s) => s.renamePalette)
  const setActivePalette = useColorLibrary((s) => s.setActivePalette)
  const addColor = useColorLibrary((s) => s.addColor)
  const removeColor = useColorLibrary((s) => s.removeColor)

  const { askConfirm, askSaveColor } = useConfirm()
  const toast = useToast()

  const [showWheel, setShowWheel] = useState(false)
  const [hex, setHex] = useState(color)
  const [tab, setTab] = useState<'swatches' | 'library'>('swatches')
  const [newPaletteName, setNewPaletteName] = useState('')
  const [renamingPaletteId, setRenamingPaletteId] = useState<string | null>(null)
  const [renameValue, setRenameValue] = useState('')

  const activePalette = palettes.find((p) => p.id === activePaletteId) ?? null

  useEffect(() => setHex(color), [color])

  const saveCurrentColor = async () => {
    let paletteOptions = palettes.map((p) => ({ id: p.id, name: p.name }))
    let defaultPaletteId = activePaletteId

    if (paletteOptions.length === 0) {
      const ok = await askConfirm({
        title: 'Create Palette',
        message: 'You need a palette first. Create "My Colors" now?',
        confirmLabel: 'Create',
      })
      if (!ok) return
      const p = createPalette('My Colors')
      paletteOptions = [{ id: p.id, name: p.name }]
      defaultPaletteId = p.id
    }

    const result = await askSaveColor({
      color,
      paletteOptions,
      defaultPaletteId,
    })
    if (!result) return
    addColor(result.paletteId, color)
    toast.show(`Color ${color.toUpperCase()} saved.`)
  }

  const createNewPalette = async () => {
    const name = newPaletteName.trim()
    if (!name) return
    const ok = await askConfirm({
      title: 'Create Palette',
      message: `Create palette "${name}"?`,
      confirmLabel: 'Create',
    })
    if (!ok) return
    const p = createPalette(name)
    setActivePalette(p.id)
    setNewPaletteName('')
    toast.show(`Palette "${name}" created.`)
  }

  const deletePalette = async (id: string, name: string) => {
    const ok = await askConfirm({
      title: 'Delete Palette',
      message: `Delete palette "${name}" and all saved colors in it?`,
      confirmLabel: 'Delete',
      variant: 'danger',
    })
    if (ok) removePalette(id)
  }

  const deleteSavedColor = async (paletteId: string, c: string) => {
    const ok = await askConfirm({
      title: 'Remove Color',
      message: `Remove ${c.toUpperCase()} from this palette?`,
      confirmLabel: 'Remove',
      variant: 'danger',
    })
    if (ok) removeColor(paletteId, c)
  }

  return (
    <div className="pixel-window flex flex-col min-h-0 h-full">
      <div className="pixel-title-bar">
        <span>COLORS</span>
      </div>

      <div className="p-2 bg-bg-desk2 flex items-center gap-2 border-b-[3px] border-ink">
        <div
          className="w-12 h-12 border-[3px] border-ink shrink-0"
          style={{ background: color }}
        />
        <div className="flex-1 min-w-0">
          <div className="panel-label mb-1">Hex</div>
          <input
            className="pixel-input w-full"
            value={hex}
            onChange={(e) => setHex(e.target.value)}
            onBlur={() => {
              if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(hex)) {
                setColor(hex)
              } else {
                setHex(color)
              }
            }}
          />
        </div>
        <button
          className="pixel-button icon shrink-0"
          title="Open native picker"
          onClick={() => setShowWheel((v) => !v)}
        >
          <ColorWheel />
        </button>
      </div>

      {showWheel && (
        <div className="p-2 bg-bg-desk2 border-b-[3px] border-ink">
          <input
            type="color"
            value={color.slice(0, 7)}
            onChange={(e) => {
              setColor(e.target.value)
              setHex(e.target.value)
            }}
            className="w-full h-12"
          />
        </div>
      )}

      <div className="flex border-b-[3px] border-ink bg-bg-desk">
        <TabBtn active={tab === 'swatches'} onClick={() => setTab('swatches')}>
          Swatches
        </TabBtn>
        <TabBtn active={tab === 'library'} onClick={() => setTab('library')}>
          My palettes
        </TabBtn>
      </div>

      {tab === 'swatches' ? (
        <>
          <div className="p-2 grid grid-cols-8 gap-1 bg-bg-desk flex-1 min-h-0 overflow-y-auto pixel-scroll">
            {BUILTIN_PALETTE.map((c) => (
              <Swatch
                key={c}
                color={c}
                active={c.toLowerCase() === color.toLowerCase()}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
          {recent.length > 0 && (
            <div className="p-2 border-t-[3px] border-ink bg-bg-desk2">
              <div className="panel-label mb-1">Recent</div>
              <div className="grid grid-cols-8 gap-1">
                {recent.map((c, i) => (
                  <Swatch
                    key={c + i}
                    color={c}
                    active={c.toLowerCase() === color.toLowerCase()}
                    onClick={() => setColor(c)}
                  />
                ))}
              </div>
            </div>
          )}
          <div className="p-2 border-t-[3px] border-ink bg-bg-desk2">
            <button
              onClick={saveCurrentColor}
              className="pixel-button compact teal w-full flex items-center justify-center gap-1"
            >
              <Icon name="save" size={12} />
              <span className="panel-btn-text">Save color</span>
            </button>
          </div>
        </>
      ) : (
        <div className="flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk p-2 space-y-3">
          <div className="space-y-2">
            <div className="panel-label">New palette</div>
            <div className="flex gap-2">
              <input
                className="pixel-input flex-1 min-w-0"
                placeholder="Palette name…"
                value={newPaletteName}
                onChange={(e) => setNewPaletteName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && createNewPalette()}
              />
              <button
                onClick={createNewPalette}
                disabled={!newPaletteName.trim()}
                className="pixel-button compact teal shrink-0"
              >
                <span className="panel-btn-text">Add</span>
              </button>
            </div>
          </div>

          {palettes.length === 0 ? (
            <p className="panel-text text-ink/70 text-center py-4">
              No palettes yet. Create one to save your favorite colors.
            </p>
          ) : (
            palettes.map((pal) => (
              <div
                key={pal.id}
                className={`border-[3px] border-ink p-2 ${
                  pal.id === activePaletteId ? 'bg-accent-yellow' : 'bg-accent-cream'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  {renamingPaletteId === pal.id ? (
                    <input
                      autoFocus
                      className="pixel-input flex-1 min-w-0"
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      onBlur={() => {
                        if (renameValue.trim()) renamePalette(pal.id, renameValue)
                        setRenamingPaletteId(null)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          if (renameValue.trim()) renamePalette(pal.id, renameValue)
                          setRenamingPaletteId(null)
                        }
                        if (e.key === 'Escape') setRenamingPaletteId(null)
                      }}
                    />
                  ) : (
                    <button
                      className="panel-text font-bold flex-1 text-left truncate"
                      onClick={() => setActivePalette(pal.id)}
                    >
                      {pal.name}
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setRenamingPaletteId(pal.id)
                      setRenameValue(pal.name)
                    }}
                    className="pixel-button compact icon"
                    title="Rename palette"
                  >
                    <Icon name="pencil" size={10} />
                  </button>
                  <button
                    onClick={() => deletePalette(pal.id, pal.name)}
                    className="pixel-button compact icon danger"
                  >
                    <Icon name="trash" color="#FFFBEA" size={10} />
                  </button>
                </div>
                {pal.colors.length === 0 ? (
                  <p className="panel-text text-ink/60">No colors saved yet.</p>
                ) : (
                  <div className="grid grid-cols-8 gap-1">
                    {pal.colors.map((c) => (
                      <Swatch
                        key={c}
                        color={c}
                        active={c.toLowerCase() === color.toLowerCase()}
                        onClick={() => setColor(c)}
                        onRemove={() => deleteSavedColor(pal.id, c)}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))
          )}

          {activePalette && (
            <button
              onClick={saveCurrentColor}
              className="pixel-button compact purple w-full flex items-center justify-center gap-1"
            >
              <Icon name="save" color="#FFFBEA" size={12} />
              <span className="panel-btn-text">Save current to {activePalette.name}</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

const TabBtn = ({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) => (
  <button
    onClick={onClick}
    className={`flex-1 py-2 panel-btn-text border-r-[3px] last:border-r-0 border-ink ${
      active ? 'bg-accent-yellow' : 'bg-bg-desk2 hover:bg-accent-cream'
    }`}
  >
    {children}
  </button>
)

const Swatch = ({
  color,
  active,
  onClick,
  onRemove,
}: {
  color: string
  active: boolean
  onClick: () => void
  onRemove?: () => void
}) => (
  <div className="relative group">
    <button
      onClick={onClick}
      className="aspect-square w-full border-2"
      style={{
        background: color,
        borderColor: active ? '#D54B4B' : '#2A2138',
        boxShadow: active ? 'inset 0 0 0 2px #FFFBEA' : 'none',
      }}
      title={color}
    />
    {onRemove && (
      <button
        onClick={(e) => {
          e.stopPropagation()
          onRemove()
        }}
        className="absolute -top-1 -right-1 hidden group-hover:flex w-4 h-4 bg-accent-red border border-ink items-center justify-center text-[10px] text-accent-cream leading-none"
        title="Remove color"
      >
        ×
      </button>
    )}
  </div>
)

const ColorWheel = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="6" y="2" width="4" height="3" fill="#D54B4B" />
    <rect x="10" y="3" width="3" height="4" fill="#F5C04A" />
    <rect x="11" y="7" width="3" height="4" fill="#3FB6A8" />
    <rect x="8" y="11" width="4" height="3" fill="#7E4FB8" />
    <rect x="3" y="11" width="4" height="3" fill="#3B5BA3" />
    <rect x="2" y="7" width="3" height="4" fill="#3FB6A8" />
    <rect x="3" y="3" width="3" height="4" fill="#FF7AB6" />
    <rect x="6" y="6" width="4" height="4" fill="#FFFBEA" />
  </svg>
)
