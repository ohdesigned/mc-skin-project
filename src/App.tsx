import { lazy, Suspense, useState } from 'react'
import { Home } from './pages/Home'
import { Toaster, useToast } from './components/Toaster'
import { DialogHost } from './components/DialogHost'

const Editor = lazy(() =>
  import('./pages/Editor').then((m) => ({ default: m.Editor })),
)

export type Route =
  | { name: 'home' }
  | { name: 'editor'; editId?: string }

export const App = () => {
  const [route, setRoute] = useState<Route>({ name: 'home' })
  const toast = useToast()

  return (
    <div className="app-shell">
      {route.name === 'home' && (
        <Home
          onNew={() => setRoute({ name: 'editor' })}
          onEdit={(id) => setRoute({ name: 'editor', editId: id })}
        />
      )}
      {route.name === 'editor' && (
        <Suspense
          fallback={
            <div className="h-full grid place-items-center panel-text text-accent-cream">
              Opening editor...
            </div>
          }
        >
          <Editor
            editId={route.editId}
            onExit={() => setRoute({ name: 'home' })}
            onSaved={(name) => {
              toast.show(`Saved "${name}" to your project floppy.`)
            }}
          />
        </Suspense>
      )}

      <Toaster />
      <DialogHost />
    </div>
  )
}
