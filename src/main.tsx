import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { hydrateStorage } from './state/hydrateStorage'

function showFatalError(message: string) {
  const root = document.getElementById('root')
  if (!root) return
  root.innerHTML = `
    <div style="
      min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;
      background:radial-gradient(ellipse at center,#2A2138 0%,#1B1424 70%,#0c0712 100%);
      color:#F7E6CF;font-family:VT323,monospace;font-size:22px;text-align:center;
    ">
      <div style="max-width:480px;background:#F7E6CF;color:#2A2138;border:3px solid #2A2138;padding:20px;">
        <strong style="display:block;margin-bottom:12px;font-size:26px;">Could not start</strong>
        <span>${message}</span>
        <br/><br/>
        <button onclick="location.reload()" style="
          font-family:VT323,monospace;font-size:20px;padding:8px 16px;
          background:#3FB6A8;border:3px solid #2A2138;cursor:pointer;
        ">Reload</button>
      </div>
    </div>`
}

async function bootstrap() {
  try {
    hydrateStorage()

    const [{ App }, { ErrorBoundary }] = await Promise.all([
      import('./App'),
      import('./components/ErrorBoundary'),
    ])

    const rootEl = document.getElementById('root')
    if (!rootEl) throw new Error('App root element not found.')

    ReactDOM.createRoot(rootEl).render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>,
    )
  } catch (error) {
    console.error('Pixel Skin Studio failed to start', error)
    showFatalError(
      error instanceof Error
        ? error.message
        : 'The app failed to load. Check your connection and refresh.',
    )
  }
}

bootstrap()
