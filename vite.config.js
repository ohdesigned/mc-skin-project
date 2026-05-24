import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
// GitHub Pages serves project sites from https://<user>.github.io/<repo>/
var repoName = 'mc-skin-project';
var ghPagesBase = "/".concat(repoName, "/");
export default defineConfig(function (_a) {
    var mode = _a.mode;
    return ({
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
    });
});
