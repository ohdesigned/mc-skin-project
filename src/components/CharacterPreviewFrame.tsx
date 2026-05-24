import type { ReactNode } from 'react'
import {
  getPreviewBackground,
  type PreviewBackgroundId,
} from '../skin/previewBackgrounds'

interface Props {
  backgroundId: PreviewBackgroundId
  children: ReactNode
  className?: string
  /** Inset around the scenic backdrop (px). */
  inset?: number
}

const DEFAULT_BACKDROP =
  'linear-gradient(180deg, #8EC5E8 0%, #6BAF7A 55%, #4A8F5C 100%)'

export const CharacterPreviewFrame = ({
  backgroundId,
  children,
  className,
  inset = 0,
}: Props) => {
  const bg = getPreviewBackground(backgroundId)
  const backdropStyle =
    bg.url !== ''
      ? {
          backgroundImage: `url(${bg.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : { background: DEFAULT_BACKDROP }

  return (
    <div className={`relative h-full w-full min-h-0 ${className ?? ''}`}>
      <div
        className="absolute overflow-hidden border-[2px] border-ink/20 shadow-[inset_0_0_0_1px_rgba(255,251,234,0.15)]"
        style={{
          top: inset,
          right: inset,
          bottom: inset,
          left: inset,
          ...backdropStyle,
        }}
      />
      <div className="absolute inset-0 z-10">{children}</div>
    </div>
  )
}
