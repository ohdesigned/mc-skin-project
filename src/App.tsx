import { useEffect, useRef, useState, useCallback } from 'react'
import { Home } from './pages/Home'
import { Editor } from './pages/Editor'
import { WelcomeBoot } from './components/WelcomeBoot'
import { Toaster, useToast } from './components/Toaster'
import { DialogHost } from './components/DialogHost'

export type Route =
  | { name: 'home' }
  | { name: 'editor'; editId?: string }

export const App = () => {
  const [route, setRoute] = useState<Route>({ name: 'home' })
  const [booted, setBooted] = useState(false)
  const toast = useToast()

  const finishBoot = useCallback(() => setBooted(true), [])

  // Safety net: never block the UI behind a hidden boot screen.
  useEffect(() => {
    const t = window.setTimeout(finishBoot, 4000)
    return () => clearTimeout(t)
  }, [finishBoot])

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="h-full w-full">
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

      {!booted && <WelcomeBoot onDone={finishBoot} />}

      <Toaster />
      <DialogHost />
    </div>
  )
}
