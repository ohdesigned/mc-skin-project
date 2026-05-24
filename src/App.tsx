import { useEffect, useState } from 'react'
import { Home } from './pages/Home'
import { Editor } from './pages/Editor'
import { Toaster, useToast } from './components/Toaster'
import { DialogHost } from './components/DialogHost'

export type Route =
  | { name: 'home' }
  | { name: 'editor'; editId?: string }

export const App = () => {
  const [route, setRoute] = useState<Route>({ name: 'home' })
  const toast = useToast()

  useEffect(() => {
    const boot = document.getElementById('boot')
    if (boot) boot.style.display = 'none'
  }, [])

  return (
    <div className="app-shell">
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

      <Toaster />
      <DialogHost />
    </div>
  )
}
