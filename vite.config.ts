import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// After build, copy index.html → 404.html so GitHub Pages serves the SPA
// for any direct/refresh load.
const ghPages404 = (outDir: string): Plugin => ({
  name: 'gh-pages-404',
  closeBundle() {
    const out = resolve(process.cwd(), outDir)
    copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
  },
})

export default defineConfig(({ mode }) => {
  const isPages = mode === 'ghpages'
  const outDir = isPages ? 'docs' : 'dist'

  return {
    // Relative base ensures asset URLs resolve correctly when served from
    // any sub-path (e.g. /mc-skin-project/docs/) without manual config.
    base: isPages ? './' : '/',
    build: {
      outDir,
      emptyOutDir: true,
      chunkSizeWarningLimit: 800,
    },
    plugins: [react(), ...(isPages ? [ghPages404(outDir)] : [])],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: 5173,
    },
  }
})
