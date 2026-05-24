import {
  PREVIEW_BACKGROUNDS,
} from '../skin/previewBackgrounds'
import { useEditor } from '../state/editor'

export const PreviewBackgroundPicker = () => {
  const previewBackground = useEditor((s) => s.previewBackground)
  const setPreviewBackground = useEditor((s) => s.setPreviewBackground)

  return (
    <div className="px-2 py-2 border-b-[3px] border-ink bg-bg-desk flex items-center gap-2 overflow-x-auto pixel-scroll">
      <span className="panel-label text-[10px] shrink-0 text-accent-cream/80">
        SCENE
      </span>
      {PREVIEW_BACKGROUNDS.map((bg) => (
        <button
          key={bg.id}
          type="button"
          onClick={() => setPreviewBackground(bg.id)}
          className={`shrink-0 w-12 h-9 border-[2px] border-ink overflow-hidden ${
            previewBackground === bg.id
              ? 'ring-2 ring-accent-gold ring-offset-1 ring-offset-bg-desk'
              : 'opacity-85 hover:opacity-100'
          }`}
          title={bg.label}
        >
          {bg.url ? (
            <img
              src={bg.url}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  'linear-gradient(180deg, #8EC5E8 0%, #6BAF7A 100%)',
              }}
            />
          )}
        </button>
      ))}
    </div>
  )
}
