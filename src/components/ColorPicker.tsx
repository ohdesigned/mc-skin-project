import { useState, useEffect } from 'react'
import { useEditor } from '../state/editor'

// A curated retro palette plus a native HTML color picker.
const PALETTE: string[] = [
  // Skin tones
  '#FFE0BD', '#FFCB94', '#E6B17A', '#C39979', '#A87B5C', '#7A4F2A', '#5B3A1F', '#3D2614',
  // Reds
  '#FF6B6B', '#D54B4B', '#A82F38', '#7A1A1A',
  // Oranges
  '#FFB14A', '#E68E2E', '#B96B16', '#7A4416',
  // Yellows
  '#FFEC8B', '#F5C04A', '#C98E20', '#7E5A12',
  // Greens
  '#A6E3C8', '#3FB6A8', '#1F7A70', '#0E4A45',
  // Cool blues
  '#7EC8F5', '#3B5BA3', '#1F3262', '#0E1A3A',
  // Purples
  '#C7A2F0', '#7E4FB8', '#4A2C6E', '#291643',
  // Pinks
  '#FFC0E2', '#FF7AB6', '#B3437E', '#6E1E50',
  // Neutrals
  '#FFFFFF', '#FFFBEA', '#F7E6CF', '#E9D6B4', '#B07B47', '#7B7F87', '#3B3344', '#2A2138', '#1B1424', '#000000',
]

export const ColorPicker = () => {
  const color = useEditor((s) => s.color)
  const setColor = useEditor((s) => s.setColor)
  const recent = useEditor((s) => s.recentColors)
  const [showWheel, setShowWheel] = useState(false)
  const [hex, setHex] = useState(color)

  useEffect(() => setHex(color), [color])

  return (
    <div className="pixel-window">
      <div className="pixel-title-bar">
        <span className="stripes" />
        <span>COLORS</span>
      </div>
      <div className="p-2 bg-bg-desk2 flex items-center gap-2">
        <div
          className="w-12 h-12 border-[3px] border-ink"
          style={{ background: color }}
        />
        <div className="flex-1">
          <div className="pixel-text-sm mb-1">HEX</div>
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
          className="pixel-button icon"
          title="Open native picker"
          onClick={() => setShowWheel((v) => !v)}
        >
          <ColorWheel />
        </button>
      </div>
      {showWheel && (
        <div className="p-2 bg-bg-desk2 border-t-[3px] border-ink">
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
      <div className="p-2 grid grid-cols-8 gap-1 bg-bg-desk">
        {PALETTE.map((c) => (
          <Swatch key={c} color={c} active={c.toLowerCase() === color.toLowerCase()} onClick={() => setColor(c)} />
        ))}
      </div>
      {recent.length > 0 && (
        <div className="p-2 border-t-[3px] border-ink bg-bg-desk2">
          <div className="pixel-text-sm mb-1">RECENT</div>
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
    </div>
  )
}

const Swatch = ({
  color,
  active,
  onClick,
}: {
  color: string
  active: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className="aspect-square border-2"
    style={{
      background: color,
      borderColor: active ? '#D54B4B' : '#2A2138',
      boxShadow: active ? 'inset 0 0 0 2px #FFFBEA' : 'none',
    }}
    title={color}
  />
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
