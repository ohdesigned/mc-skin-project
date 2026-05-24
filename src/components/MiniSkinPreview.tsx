import { useEffect, useState } from 'react'
import { useEditor } from '../state/editor'
import { compositeLayers, toDataURL } from '../skin/canvas'
import { SkinPreview } from './SkinPreview'

/** Compact live 3D preview shown beneath the layer panel. */
export const MiniSkinPreview = () => {
  const layers = useEditor((s) => s.layers)
  const model = useEditor((s) => s.model)
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    const t = window.setTimeout(() => {
      setUrl(toDataURL(compositeLayers(layers)))
    }, 80)
    return () => clearTimeout(t)
  }, [layers])

  return (
    <div className="pixel-window shrink-0">
      <div className="pixel-title-bar">
        <span>PREVIEW</span>
      </div>
      <div
        className="p-2 flex justify-center"
        style={{ background: 'linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)' }}
      >
        <SkinPreview
          imageUrl={url}
          model={model}
          width={100}
          height={140}
          pose="none"
          rotate={false}
          interactive
          zoom={0.88}
        />
      </div>
    </div>
  )
}
