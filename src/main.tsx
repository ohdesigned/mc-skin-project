import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { hydrateStorage } from './state/hydrateStorage'

function dismissBootScreen() {
  document.getElementById('boot-fallback')?.remove()
  window.dispatchEvent(new Event('pss-ready'))
}

function showBootError(message: string) {
  const el = document.getElementById('boot-fallback')
  if (el) {
    el.textContent = message
    el.style.padding = '24px'
    el.style.textAlign = 'center'
  }
}

try {
  hydrateStorage()

  const rootEl = document.getElementById('root')
  if (!rootEl) throw new Error('App root element not found.')

  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>,
  )

  dismissBootScreen()
} catch (error) {
  console.error('Pixel Skin Studio failed to start', error)
  showBootError(
    error instanceof Error
      ? `Failed to load: ${error.message}. Please refresh.`
      : 'Failed to load. Please refresh the page.',
  )
}
