import { useMemo, useState } from 'react'
import { useGallery } from '../state/gallery'
import { SkinPreview } from '../components/SkinPreview'
import { Icon } from '../components/Icon'

interface Props {
  onNew: () => void
  onEdit: (id?: string) => void
}

export const Home = ({ onNew, onEdit }: Props) => {
  const skins = useGallery((s) => s.skins)
  const remove = useGallery((s) => s.remove)
  const rename = useGallery((s) => s.rename)
  const [filter, setFilter] = useState<'all' | 'classic' | 'slim'>('all')
  const [search, setSearch] = useState('')
  const [renamingId, setRenamingId] = useState<string | null>(null)
  const [renameValue, setRenameValue] = useState('')

  const filtered = useMemo(() => {
    return skins
      .filter((s) => (filter === 'all' ? true : s.model === filter))
      .filter((s) =>
        search.trim()
          ? s.name.toLowerCase().includes(search.trim().toLowerCase())
          : true,
      )
  }, [skins, filter, search])

  const today = new Date()
  const day = today.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()
  const time = today
    .toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
    .replace(/\s/g, '')
  const year = today.getFullYear()
  const dateStr = `${day} ${time} ${year}`

  return (
    <div className="h-full w-full p-4 lg:p-6 overflow-hidden flex flex-col">
      <TopBar dateStr={dateStr} />
      <div className="mt-4 flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-4">
        <MainWindow
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
          filtered={filtered}
          onNew={onNew}
          onEdit={onEdit}
          remove={remove}
          rename={rename}
          renamingId={renamingId}
          setRenamingId={setRenamingId}
          renameValue={renameValue}
          setRenameValue={setRenameValue}
        />
        <SideRack onNew={onNew} count={skins.length} />
      </div>
    </div>
  )
}

const TopBar = ({ dateStr }: { dateStr: string }) => (
  <div className="flex items-center justify-between gap-3 px-2">
    <div className="flex items-center gap-3">
      <span className="pixel-text text-[14px] text-accent-cream">
        PIXEL SKIN STUDIO
      </span>
    </div>
    <div className="hidden md:flex items-center gap-3">
      <span className="pixel-text-sm text-accent-cream/80">JAVA 64x64</span>
      <span className="pixel-text-sm text-accent-yellow">{dateStr}</span>
    </div>
  </div>
)

interface MainWindowProps {
  filter: 'all' | 'classic' | 'slim'
  setFilter: (f: 'all' | 'classic' | 'slim') => void
  search: string
  setSearch: (s: string) => void
  filtered: ReturnType<typeof useGallery.getState>['skins']
  onNew: () => void
  onEdit: (id?: string) => void
  remove: (id: string) => void
  rename: (id: string, name: string) => void
  renamingId: string | null
  setRenamingId: (id: string | null) => void
  renameValue: string
  setRenameValue: (s: string) => void
}

const MainWindow = (p: MainWindowProps) => {
  return (
    <div className="pixel-window flex flex-col min-h-0">
      <div className="pixel-title-bar">
        <span>/SKINS/MY-CREATIONS</span>
        <div className="ml-auto flex items-center gap-2">
          <FilterPill
            label="ALL"
            active={p.filter === 'all'}
            onClick={() => p.setFilter('all')}
          />
          <FilterPill
            label="CLASSIC"
            active={p.filter === 'classic'}
            onClick={() => p.setFilter('classic')}
          />
          <FilterPill
            label="SLIM"
            active={p.filter === 'slim'}
            onClick={() => p.setFilter('slim')}
          />
          <button
            aria-label="close"
            className="ml-2 w-6 h-6 grid place-items-center bg-accent-cream text-ink border-2 border-accent-cream"
            onClick={() => {}}
          >
            <Icon name="x" size={10} />
          </button>
        </div>
      </div>

      <div className="px-4 py-3 border-b-[3px] border-ink bg-bg-desk2 flex flex-wrap items-center gap-3">
        <button onClick={p.onNew} className="pixel-button cream flex items-center gap-2">
          <Icon name="plus" /> NEW SKIN
        </button>
        <div className="flex items-center gap-2">
          <span className="pixel-text-sm">SEARCH</span>
          <input
            className="pixel-input w-40"
            placeholder="name..."
            value={p.search}
            onChange={(e) => p.setSearch(e.target.value)}
          />
        </div>
        <div className="ml-auto pixel-text-sm flex items-center gap-2">
          <Icon name="folder" />
          <span>{p.filtered.length} ITEMS</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pixel-scroll bg-bg-desk2 p-5">
        {p.filtered.length === 0 ? (
          <EmptyState onNew={p.onNew} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
            {p.filtered.map((s, i) => (
              <SkinTile
                key={s.id}
                skin={s}
                index={i}
                onEdit={() => p.onEdit(s.id)}
                onDelete={() => p.remove(s.id)}
                renaming={p.renamingId === s.id}
                renameValue={p.renameValue}
                onStartRename={() => {
                  p.setRenamingId(s.id)
                  p.setRenameValue(s.name)
                }}
                onChangeRename={p.setRenameValue}
                onCommitRename={() => {
                  if (p.renameValue.trim()) p.rename(s.id, p.renameValue.trim())
                  p.setRenamingId(null)
                }}
                onCancelRename={() => p.setRenamingId(null)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="h-4 bg-accent-yellow border-t-[3px] border-ink" />
    </div>
  )
}

const FilterPill = ({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className="pixel-button compact"
    style={{
      background: active ? '#F5C04A' : 'transparent',
      color: active ? '#2A2138' : '#F7E6CF',
      borderColor: active ? '#2A2138' : '#F7E6CF',
      boxShadow: active ? '2px 2px 0 0 #1B1424' : '2px 2px 0 0 #F7E6CF',
    }}
  >
    {label}
  </button>
)

const EmptyState = ({ onNew }: { onNew: () => void }) => (
  <div className="h-full min-h-[300px] grid place-items-center">
    <div className="text-center">
      <div className="mx-auto w-20 h-20 mb-3 grid place-items-center">
        <Icon name="folder-big" size={48} />
      </div>
      <div className="pixel-text text-[12px] mb-2">NO SKINS YET</div>
      <div className="font-body text-[18px] mb-4 text-ink/70">
        Boot up your first creation!
      </div>
      <button onClick={onNew} className="pixel-button danger flex items-center gap-2 mx-auto">
        <Icon name="plus" /> CREATE SKIN
      </button>
    </div>
  </div>
)

interface TileProps {
  skin: ReturnType<typeof useGallery.getState>['skins'][number]
  index: number
  onEdit: () => void
  onDelete: () => void
  renaming: boolean
  renameValue: string
  onStartRename: () => void
  onChangeRename: (s: string) => void
  onCommitRename: () => void
  onCancelRename: () => void
}

const SkinTile = ({
  skin,
  index,
  onEdit,
  onDelete,
  renaming,
  renameValue,
  onStartRename,
  onChangeRename,
  onCommitRename,
  onCancelRename,
}: TileProps) => {
  return (
    <div className="slide-in-up" style={{ animationDelay: `${index * 30}ms` }}>
      <div className="pixel-card group cursor-pointer relative overflow-hidden p-0">
        <div
          className="h-44 grid place-items-center"
          style={{
            background:
              'linear-gradient(180deg, #E9D6B4 0%, #C9AC7E 100%)',
            borderBottom: '3px solid #2A2138',
          }}
          onClick={onEdit}
        >
          <SkinPreview
            imageUrl={skin.dataUrl}
            model={skin.model}
            width={120}
            height={160}
            pose="idle"
            rotate
          />
        </div>
        <div className="p-2 flex items-center gap-2 bg-accent-cream">
          {renaming ? (
            <input
              autoFocus
              className="pixel-input flex-1 min-w-0"
              value={renameValue}
              onChange={(e) => onChangeRename(e.target.value)}
              onBlur={onCommitRename}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onCommitRename()
                if (e.key === 'Escape') onCancelRename()
              }}
            />
          ) : (
            <button
              className="pixel-text-sm text-left flex-1 truncate min-w-0"
              onClick={onStartRename}
              title={skin.name}
            >
              {skin.name}
            </button>
          )}
          <button
            className="pixel-chip"
            style={{
              background: skin.model === 'slim' ? '#3FB6A8' : '#F5C04A',
              color: '#2A2138',
            }}
          >
            {skin.model.toUpperCase()}
          </button>
        </div>
        <div className="flex border-t-[3px] border-ink">
          <button
            onClick={onEdit}
            className="flex-1 p-2 pixel-text-sm bg-accent-yellow hover:bg-[#FFCF63] border-r-[3px] border-ink flex items-center justify-center gap-1"
          >
            <Icon name="pencil" /> EDIT
          </button>
          <button
            onClick={() => {
              const a = document.createElement('a')
              a.href = skin.dataUrl
              a.download = `${skin.name}.png`
              a.click()
            }}
            className="flex-1 p-2 pixel-text-sm bg-accent-teal text-ink border-r-[3px] border-ink flex items-center justify-center gap-1"
          >
            <Icon name="download" /> SAVE
          </button>
          <button
            onClick={() => {
              if (confirm(`Delete "${skin.name}"?`)) onDelete()
            }}
            className="flex-1 p-2 pixel-text-sm bg-accent-red text-accent-cream flex items-center justify-center gap-1"
          >
            <Icon name="trash" /> BIN
          </button>
        </div>
      </div>
    </div>
  )
}

const SideRack = ({ onNew, count }: { onNew: () => void; count: number }) => (
  <div className="hidden lg:flex flex-col gap-4">
    <SideSlot
      label="HD"
      sublabel={`${count} skins`}
      onClick={() => {}}
      svg={<HdIcon />}
    />
    <SideSlot
      label="CURRENT PROJECT"
      sublabel="floppy.dat"
      onClick={onNew}
      svg={<FloppyIcon variant="red" />}
    />
    <SideSlot
      label="NEW PROJECT"
      sublabel="64x64 atlas"
      onClick={onNew}
      svg={<FloppyIcon variant="cream" />}
    />
    <SideSlot
      label="CLIPBOARD"
      sublabel="paste skin"
      onClick={() => {
        ;(window as any).__skin_upload?.()
      }}
      svg={<ClipboardIcon />}
    />
    <SideSlot
      label="BIN"
      sublabel="clear cache"
      onClick={() => {
        if (confirm('Clear local cache? This does not delete saved skins.')) {
          location.reload()
        }
      }}
      svg={<BinIcon />}
    />
  </div>
)

const SideSlot = ({
  label,
  sublabel,
  onClick,
  svg,
}: {
  label: string
  sublabel?: string
  onClick: () => void
  svg: React.ReactNode
}) => (
  <button
    onClick={onClick}
    className="pixel-card text-center hover:translate-y-[-2px] transition-transform"
  >
    <div className="h-16 grid place-items-center mb-1 float-anim">{svg}</div>
    <div className="pixel-text-sm">{label}</div>
    {sublabel && <div className="font-body text-[14px] text-ink/70">{sublabel}</div>}
  </button>
)

const FloppyIcon = ({ variant }: { variant: 'red' | 'cream' }) => (
  <svg width="56" height="56" viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="1" y="1" width="14" height="14" fill={variant === 'red' ? '#D54B4B' : '#F5C04A'} />
    <rect x="1" y="1" width="14" height="1" fill="#2A2138" />
    <rect x="1" y="14" width="14" height="1" fill="#2A2138" />
    <rect x="1" y="1" width="1" height="14" fill="#2A2138" />
    <rect x="14" y="1" width="1" height="14" fill="#2A2138" />
    <rect x="3" y="2" width="10" height="4" fill="#F7E6CF" />
    <rect x="5" y="3" width="2" height="2" fill="#2A2138" />
    <rect x="9" y="3" width="2" height="2" fill="#2A2138" />
    <rect x="3" y="8" width="10" height="6" fill="#F7E6CF" />
    <rect x="4" y="9" width="8" height="1" fill="#B07B47" />
    <rect x="4" y="11" width="8" height="1" fill="#B07B47" />
    <rect x="4" y="13" width="8" height="1" fill="#B07B47" />
  </svg>
)

const HdIcon = () => (
  <svg width="56" height="48" viewBox="0 0 16 14" shapeRendering="crispEdges">
    <rect x="0" y="0" width="16" height="14" fill="#2A2138" />
    <rect x="1" y="1" width="14" height="6" fill="#F5C04A" />
    <rect x="2" y="2" width="12" height="4" fill="#E68E2E" />
    <rect x="3" y="3" width="10" height="1" fill="#F7E6CF" />
    <rect x="3" y="5" width="10" height="1" fill="#F7E6CF" />
    <rect x="1" y="8" width="14" height="5" fill="#B07B47" />
    <rect x="2" y="10" width="2" height="2" fill="#3FB6A8" />
    <rect x="5" y="10" width="9" height="2" fill="#2A2138" />
  </svg>
)

const ClipboardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="2" y="2" width="10" height="13" fill="#F5C04A" stroke="#2A2138" />
    <rect x="2" y="2" width="10" height="1" fill="#2A2138" />
    <rect x="2" y="14" width="10" height="1" fill="#2A2138" />
    <rect x="2" y="2" width="1" height="13" fill="#2A2138" />
    <rect x="11" y="2" width="1" height="13" fill="#2A2138" />
    <rect x="4" y="3" width="6" height="2" fill="#2A2138" />
    <rect x="5" y="2" width="4" height="1" fill="#F7E6CF" />
    <rect x="3" y="6" width="8" height="1" fill="#FFFBEA" />
    <rect x="3" y="8" width="8" height="1" fill="#FFFBEA" />
    <rect x="3" y="10" width="6" height="1" fill="#FFFBEA" />
  </svg>
)

const BinIcon = () => (
  <svg width="48" height="48" viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="3" y="3" width="10" height="2" fill="#2A2138" />
    <rect x="6" y="2" width="4" height="1" fill="#2A2138" />
    <rect x="3" y="5" width="10" height="10" fill="#F5C04A" />
    <rect x="3" y="5" width="10" height="1" fill="#2A2138" />
    <rect x="3" y="14" width="10" height="1" fill="#2A2138" />
    <rect x="3" y="5" width="1" height="10" fill="#2A2138" />
    <rect x="12" y="5" width="1" height="10" fill="#2A2138" />
    <rect x="5" y="7" width="2" height="6" fill="#2A2138" />
    <rect x="9" y="7" width="2" height="6" fill="#2A2138" />
    <path d="M7 10 l1 1 -1 1" stroke="#3FB6A8" />
  </svg>
)
