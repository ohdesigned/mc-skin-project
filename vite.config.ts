import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/
const repoName = 'mc-skin-project'
const ghPagesBase = `/${repoName}/`

export default defineConfig(({ mode }) => ({
  // Use the subpath base when building for GitHub Pages (see deploy workflow).
  base: mode === 'ghpages' ? ghPagesBase : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
}))
