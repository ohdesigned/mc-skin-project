import { useEffect, useState } from 'react'
import { Home } from './pages/Home'
import { Editor } from './pages/Editor'
import { useGallery } from './state/gallery'
import { usePresets } from './state/presets'
import { useColorLibrary } from './state/colors'
import { WelcomeBoot } from './components/WelcomeBoot'
import { Toaster, useToast } from './components/Toaster'
import { DialogHost } from './components/DialogHost'

export type Route =
  | { name: 'home' }
  | { name: 'editor'; editId?: string }

export const App = () => {
  const [route, setRoute] = useState<Route>({ name: 'home' })
  const [booted, setBooted] = useState(false)
  const hydrateGallery = useGallery((s) => s.hydrate)
  const hydratePresets = usePresets((s) => s.hydrate)
  const hydrateColors = useColorLibrary((s) => s.hydrate)
  const toast = useToast()

  useEffect(() => {
    hydrateGallery()
    hydratePresets()
    hydrateColors()
  }, [hydrateGallery, hydratePresets, hydrateColors])

  // Never leave the UI hidden if the boot animation fails to finish.
  useEffect(() => {
    const t = window.setTimeout(() => setBooted(true), 12000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {!booted && <WelcomeBoot onDone={() => setBooted(true)} />}
      <div
        className="h-full w-full"
        style={{
          opacity: booted ? 1 : 0,
          transition: 'opacity .25s ease-out .05s',
        }}
      >
        {route.name === 'home' && (
          <Home
            onNew={() => setRoute({ name: 'editor' })}
            onEdit={(id) => setRoute({ name: 'editor', editId: id })}
          />
        )}
        {route.name === 'editor' && (
          <Editor
            editId={route.editId}
            onExit={() => setRoute({ name: 'home' })}
            onSaved={(name) => {
              toast.show(`Saved "${name}" to your project floppy.`)
            }}
          />
        )}
      </div>
      <Toaster />
      <DialogHost />
    </div>
  )
}
