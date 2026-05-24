# Pixel Skin Studio

A retro 1985-themed Minecraft Java Edition skin editor inspired by classic OS GUIs. Built with React, TypeScript, Vite, Tailwind, Zustand and skinview3d.

![preview](public/favicon.svg)

## Features

- **64x64 Java Edition skin atlas** with safe-mask so you only paint pixels Minecraft actually reads.
- **Classic & Slim** body model toggle (4-pixel and 3-pixel arms).
- **Layers** with visibility, lock, opacity, reorder, duplicate, merge-down, rename, and per-layer thumbnails.
- **Upload-as-layer**: drop any PNG skin in and it becomes its own editable layer.
- **Drawing tools**: pencil, eraser, fill, eyedropper, shade, lighten, with 1-4 px brush sizes and X-axis mirror.
- **Presets** for face, hair, shirt, pants, and shoes (each can be applied as a new layer or merged into the active layer).
- **3D live preview** with idle/walk/wave/no animation.
- **Body-part scope** to lock painting to one region at a time (head, body, arms, legs).
- **Undo/redo** with a 40-step history.
- **PNG download** of the composited Minecraft-ready skin (`64x64` RGBA).
- **Local gallery** with persistent storage and 3D thumbnail previews.
- **Retro CRT aesthetic** with boot animation, scanlines, pixel typography, tape-loading stripes.
- **Touch / tablet first**: pointer events, no double-tap zoom, large pixel buttons, slide-out panels on smaller screens.

## Run

```bash
npm install
npm run dev
```

Then open the URL Vite prints (defaults to `http://localhost:5173`).

For a production build:

```bash
npm run build
npm run preview
```

## Keyboard shortcuts

- `B` Pencil, `E` Eraser, `G` Fill, `I` Eyedropper, `S` Shade, `L` Lighten
- `Ctrl+Z` Undo, `Ctrl+Shift+Z` / `Ctrl+Y` Redo

## How it works

- The Minecraft skin atlas is a 64x64 PNG. `src/skin/format.ts` maps every UV face (top/bottom/front/back/left/right) of every body part to a `Rect` so we can:
  - Build a "safe mask" of pixels the game actually reads.
  - Scope painting to one body part.
  - Procedurally render presets that target individual body parts.
- The editor stores each user layer as its own 64x64 `HTMLCanvasElement` (so they remain editable). On every render they are composited back-to-front into the live painting canvas.
- The 3D preview re-imports the composited PNG into `skinview3d`.
- The gallery persists `{ name, model, dataUrl }` rows to `localStorage`.

## Limitations / Notes

- Skins are pure Java Edition pixel art with transparency support on the second layer (hat, jacket, sleeves, leggings). The "safe mask" is on by default and dims the unused pixels of the 64x64 atlas so you cannot accidentally paint there.
- Legacy 64x32 skins (pre-1.8) you upload are auto-padded to 64x64.
- Storage is local-only. Clearing site data wipes saved skins.
