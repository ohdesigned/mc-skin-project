import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Pixel Skin Studio failed to render', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          className="min-h-full flex items-center justify-center p-6"
          style={{
            background:
              'radial-gradient(ellipse at center, #2A2138 0%, #1B1424 70%, #0c0712 100%)',
          }}
        >
          <div className="pixel-window max-w-lg w-full">
            <div className="pixel-title-bar">Something went wrong</div>
            <div className="p-4 space-y-3 bg-bg-desk2">
              <p className="panel-text">
                The app hit an error while loading. Try refreshing the page.
              </p>
              <p className="panel-text text-ink/70 text-base break-all">
                {this.state.error.message}
              </p>
              <button
                className="pixel-button compact teal"
                onClick={() => window.location.reload()}
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
