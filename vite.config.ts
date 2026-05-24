import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages project sites live at https://<user>.github.io/<repo>/
// Relative base (`./`) keeps asset URLs working when opened from search engines
// and browsers without relying on a hard-coded subpath.
const repoName = 'mc-skin-project'

/** After build, copy index.html → 404.html so GitHub Pages serves the SPA. */
const ghPages404 = (): Plugin => ({
  name: 'gh-pages-404',
  closeBundle() {
    const dist = resolve(process.cwd(), 'dist')
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  },
})

export default defineConfig(({ mode }) => ({
  base: mode === 'ghpages' ? './' : '/',
  plugins: [
    react(),
    ...(mode === 'ghpages' ? [ghPages404()] : []),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  define: {
    __APP_BASE__: JSON.stringify(mode === 'ghpages' ? `./` : '/'),
    __REPO_PAGES_URL__: JSON.stringify(
      `https://ohdesigned.github.io/${repoName}/`,
    ),
  },
}))
