import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

const repoName = 'mc-skin-project'
const ghPagesBase = `/${repoName}/`

/** After build, copy index.html → 404.html so GitHub Pages serves the SPA. */
const ghPages404 = (outDir: string): Plugin => ({
  name: 'gh-pages-404',
  closeBundle() {
    const dist = resolve(process.cwd(), outDir)
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  },
})

export default defineConfig(({ mode }) => {
  const isPages = mode === 'ghpages'
  const outDir = isPages ? 'docs' : 'dist'

  return {
    base: isPages ? ghPagesBase : '/',
    build: { outDir },
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
