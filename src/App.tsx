import { useEffect, useState } from 'react'
import { Home } from './pages/Home'
import { Editor } from './pages/Editor'
import { useGallery } from './state/gallery'
import { WelcomeBoot } from './components/WelcomeBoot'
import { Toaster, useToast } from './components/Toaster'

export type Route =
  | { name: 'home' }
  | { name: 'editor'; editId?: string }

export const App = () => {
  const [route, setRoute] = useState<Route>({ name: 'home' })
  const [booted, setBooted] = useState(false)
  const hydrate = useGallery((s) => s.hydrate)
  const toast = useToast()

  useEffect(() => {
    hydrate()
  }, [hydrate])

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
    </div>
  )
}
