import { useEffect, useRef, useState } from 'react'

const BOOT_LINES = [
  '> Booting PIXEL SKIN STUDIO v1.0...',
  '> Loading palette.dat ........... OK',
  '> Mounting /skins ............... OK',
  '> Loading preset library ........ OK',
  '> Calibrating 64x64 atlas ....... OK',
  '> Ready.',
]

interface Props {
  onDone: () => void
}

export const WelcomeBoot = ({ onDone }: Props) => {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [done, setDone] = useState(false)
  const onDoneRef = useRef(onDone)
  onDoneRef.current = onDone

  // Typewriter animation — separate from the finish callback so React effect
  // cleanup doesn't cancel onDone when `done` flips to true.
  useEffect(() => {
    if (done) return
    if (lineIdx >= BOOT_LINES.length) {
      setDone(true)
      return
    }
    const line = BOOT_LINES[lineIdx]
    if (charIdx >= line.length) {
      const t = setTimeout(() => {
        setLineIdx((i) => i + 1)
        setCharIdx(0)
      }, 90)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setCharIdx((c) => c + 1), 14)
    return () => clearTimeout(t)
  }, [charIdx, lineIdx, done])

  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => onDoneRef.current(), 750)
    return () => clearTimeout(t)
  }, [done])

  const skip = () => onDoneRef.current()

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      onClick={skip}
      role="presentation"
      title="Click to skip"
      style={{
        background:
          'radial-gradient(ellipse at center, #2A2138 0%, #1B1424 70%, #0c0712 100%)',
        opacity: done ? 0 : 1,
        transition: 'opacity .4s ease-in',
        pointerEvents: done ? 'none' : 'auto',
      }}
    >
      <div className="w-[640px] max-w-[92vw]">
        <div className="pixel-window">
          <div className="pixel-title-bar">
            <span>PIXEL SKIN STUDIO</span>
            <span className="ml-auto animate-blink">|</span>
          </div>
          <div className="p-6 font-body text-[18px] leading-tight min-h-[260px]">
            <div className="flex items-center gap-4 mb-4">
              <BootFloppy />
              <div>
                <div className="pixel-text text-[14px] mb-1">WELCOME, CREATOR</div>
                <div className="text-ink-soft">Initializing your pixel studio...</div>
              </div>
            </div>
            <div className="text-ink">
              {BOOT_LINES.slice(0, lineIdx).map((l, i) => (
                <div key={i}>{l}</div>
              ))}
              {lineIdx < BOOT_LINES.length && (
                <div>
                  {BOOT_LINES[lineIdx].slice(0, charIdx)}
                  <span className="animate-blink">_</span>
                </div>
              )}
            </div>
          </div>
          <div className="px-4 py-2 flex items-center gap-2 border-t-[3px] border-ink">
            <div className="h-3 flex-1 bg-bg-desk2 border-2 border-ink overflow-hidden">
              <div
                className="h-full bg-accent-yellow transition-all"
                style={{
                  width: `${Math.min(
                    100,
                    ((lineIdx + charIdx / Math.max(1, BOOT_LINES[lineIdx]?.length ?? 1)) /
                      BOOT_LINES.length) *
                      100,
                  )}%`,
                }}
              />
            </div>
            <span className="pixel-text-sm text-ink">
              {done
                ? 'READY'
                : Math.floor(
                    ((lineIdx + charIdx / Math.max(1, BOOT_LINES[lineIdx]?.length ?? 1)) /
                      BOOT_LINES.length) *
                      100,
                  )}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const BootFloppy = () => (
  <svg width="56" height="56" viewBox="0 0 16 16" className="float-anim" shapeRendering="crispEdges">
    <rect x="1" y="1" width="14" height="14" fill="#D54B4B" />
    <rect x="3" y="2" width="10" height="4" fill="#F7E6CF" />
    <rect x="5" y="3" width="2" height="2" fill="#2A2138" />
    <rect x="9" y="3" width="2" height="2" fill="#2A2138" />
    <rect x="3" y="8" width="10" height="6" fill="#F7E6CF" />
    <rect x="4" y="9" width="8" height="1" fill="#B07B47" />
    <rect x="4" y="11" width="8" height="1" fill="#B07B47" />
    <rect x="1" y="1" width="14" height="1" fill="#2A2138" />
    <rect x="1" y="14" width="14" height="1" fill="#2A2138" />
    <rect x="1" y="1" width="1" height="14" fill="#2A2138" />
    <rect x="14" y="1" width="1" height="14" fill="#2A2138" />
  </svg>
)
