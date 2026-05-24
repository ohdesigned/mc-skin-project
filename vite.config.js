var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
// GitHub Pages project sites live at https://<user>.github.io/<repo>/
// Relative base (`./`) keeps asset URLs working when opened from search engines
// and browsers without relying on a hard-coded subpath.
var repoName = 'mc-skin-project';
/** After build, copy index.html → 404.html so GitHub Pages serves the SPA. */
var ghPages404 = function () { return ({
    name: 'gh-pages-404',
    closeBundle: function () {
        var dist = resolve(process.cwd(), 'dist');
        copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
    },
}); };
export default defineConfig(function (_a) {
    var mode = _a.mode;
    return ({
        base: mode === 'ghpages' ? './' : '/',
        plugins: __spreadArray([
            react()
        ], (mode === 'ghpages' ? [ghPages404()] : []), true),
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
            __APP_BASE__: JSON.stringify(mode === 'ghpages' ? "./" : '/'),
            __REPO_PAGES_URL__: JSON.stringify("https://ohdesigned.github.io/".concat(repoName, "/")),
        },
    });
});
