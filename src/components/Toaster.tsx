import { create } from 'zustand'
import { useEffect } from 'react'

interface ToastItem {
  id: number
  message: string
}

interface ToastState {
  items: ToastItem[]
  show: (message: string) => void
  dismiss: (id: number) => void
}

let nextId = 1

const useToastStore = create<ToastState>((set) => ({
  items: [],
  show: (message) => {
    const id = nextId++
    set((s) => ({ items: [...s.items, { id, message }] }))
    setTimeout(() => {
      set((s) => ({ items: s.items.filter((t) => t.id !== id) }))
    }, 2400)
  },
  dismiss: (id) =>
    set((s) => ({ items: s.items.filter((t) => t.id !== id) })),
}))

export const useToast = () => {
  const show = useToastStore((s) => s.show)
  return { show }
}

export const Toaster = () => {
  const items = useToastStore((s) => s.items)
  const dismiss = useToastStore((s) => s.dismiss)
  useEffect(() => {}, [items])
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 items-center pointer-events-none">
      {items.map((t) => (
        <div
          key={t.id}
          className="pixel-window slide-in-up pointer-events-auto"
          style={{ background: '#F5C04A' }}
        >
          <div className="px-4 py-2 flex items-center gap-3">
            <span className="pixel-text-sm">{t.message}</span>
            <button
              className="pixel-text-sm hover:underline"
              onClick={() => dismiss(t.id)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
