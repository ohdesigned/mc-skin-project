import { useCallback, useEffect, useState } from 'react'
import { Home } from './pages/Home'
import { Editor } from './pages/Editor'
import { Toaster, useToast } from './components/Toaster'
import { DialogHost } from './components/DialogHost'
import {
  clearEditorDraft,
  parseRouteHash,
  syncRouteHash,
  type AppRoute,
} from './state/session'

export type Route = AppRoute

export const App = () => {
  const [route, setRoute] = useState<Route>(() => parseRouteHash())
  const toast = useToast()

  const navigate = useCallback((next: Route) => {
    setRoute(next)
    syncRouteHash(next)
  }, [])

  useEffect(() => {
    const boot = document.getElementById('boot')
    if (boot) boot.style.display = 'none'
  }, [])

  useEffect(() => {
    syncRouteHash(route)
  }, [route])

  useEffect(() => {
    const onHashChange = () => setRoute(parseRouteHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="app-shell">
      {route.name === 'home' && (
        <Home
          onNew={() => {
            clearEditorDraft()
            navigate({ name: 'editor' })
          }}
          onEdit={(id) => navigate({ name: 'editor', editId: id })}
        />
      )}
      {route.name === 'editor' && (
        <Editor
          editId={route.editId}
          onExit={() => navigate({ name: 'home' })}
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
