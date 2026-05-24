import { useEffect, useState } from 'react'
import { ModelKind } from '../skin/format'
import { buildMannequinBase, toDataURL } from '../skin/canvas'
import { SkinPreview } from './SkinPreview'

interface Props {
  /** Preset layer as a PNG data URL (64×64). */
  dataUrl: string | null
  model: ModelKind
  width?: number
  height?: number
}

/** Shows a tiny 3D preview of a preset layer on the mannequin. */
export const PresetPreview = ({
  dataUrl,
  model,
  width = 88,
  height = 132,
}: Props) => {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    if (!dataUrl) {
      setUrl(null)
      return
    }
    const base = buildMannequinBase(model)
    const img = new Image()
    img.onload = () => {
      const ctx = base.getContext('2d')!
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(img, 0, 0)
      setUrl(toDataURL(base))
    }
    img.src = dataUrl
  }, [dataUrl, model])

  return (
    <div
      className="grid place-items-center overflow-hidden"
      style={{
        width: '100%',
        height: height + 8,
        background: 'linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)',
      }}
    >
      <SkinPreview
        imageUrl={url}
        model={model}
        width={width}
        height={height}
        pose="idle"
        rotate={false}
        zoom={0.9}
      />
    </div>
  )
}
