import { useEffect, useState } from 'react'
import { useEditor } from '../state/editor'
import { compositeLayers, hasVisibleLayers, toDataURL } from '../skin/canvas'
import { SkinPreview } from './SkinPreview'

/** Compact live 3D preview shown beneath the layer panel. */
export const MiniSkinPreview = () => {
  const layers = useEditor((s) => s.layers)
  const model = useEditor((s) => s.model)
  const previewBackground = useEditor((s) => s.previewBackground)
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (!hasVisibleLayers(layers)) {
        setUrl(null)
        return
      }
      setUrl(toDataURL(compositeLayers(layers)))
    }, 80)
    return () => clearTimeout(t)
  }, [layers])

  return (
    <div className="pixel-window shrink-0">
      <div className="pixel-title-bar">
        <span>PREVIEW</span>
      </div>
      <div className="p-2 flex justify-center bg-bg-desk2">
        <SkinPreview
          imageUrl={url}
          model={model}
          width={100}
          height={140}
          pose="none"
          rotate
          interactive
          zoom={0.88}
          backgroundId={previewBackground}
        />
      </div>
    </div>
  )
}
