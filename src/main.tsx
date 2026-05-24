import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'
import { ErrorBoundary } from './components/ErrorBoundary'
import { hydrateStorage } from './state/hydrateStorage'

function dismissBoot() {
  const boot = document.getElementById('boot')
  if (boot) boot.style.display = 'none'
}

function showFatalError(message: string) {
  const boot = document.getElementById('boot')
  if (boot) {
    boot.innerHTML =
      '<div style="max-width:480px;padding:24px;text-align:center;">' +
      '<div style="font-size:28px;margin-bottom:12px;">Could not start</div>' +
      '<div style="margin-bottom:18px;">' +
      message +
      '</div><button onclick="location.reload()" style="font-family:VT323,monospace;font-size:20px;padding:8px 16px;background:#3FB6A8;color:#1B1424;border:3px solid #2A2138;cursor:pointer;">Reload</button></div>'
    boot.style.display = 'flex'
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

  // Give React one tick to commit, then hide the boot screen.
  requestAnimationFrame(() => requestAnimationFrame(dismissBoot))
} catch (error) {
  console.error('Pixel Skin Studio failed to start', error)
  showFatalError(
    error instanceof Error
      ? error.message
      : 'The app failed to load. Check your connection and refresh.',
  )
}
