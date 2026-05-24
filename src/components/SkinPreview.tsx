import { useEffect, useRef } from 'react'
import * as skinview3d from 'skinview3d'
import { ModelKind } from '../skin/format'

interface Props {
  imageUrl: string | null
  model: ModelKind
  width?: number
  height?: number
  pose?: 'walk' | 'idle' | 'wave' | 'none'
  rotate?: boolean
  interactive?: boolean
  zoom?: number
  className?: string
}

export const SkinPreview = ({
  imageUrl,
  model,
  width = 220,
  height = 320,
  pose = 'walk',
  rotate = true,
  interactive = false,
  zoom = 0.95,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<skinview3d.SkinViewer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.imageRendering = 'pixelated'
    containerRef.current.innerHTML = ''
    containerRef.current.appendChild(canvas)

    const viewer = new skinview3d.SkinViewer({
      canvas,
      width,
      height,
      preserveDrawingBuffer: true,
    })
    viewer.zoom = zoom
    viewer.fov = 50
    viewer.background = null
    viewer.controls.enableRotate = interactive
    viewer.controls.enableZoom = interactive
    viewer.controls.enablePan = false
    viewer.autoRotate = rotate
    viewer.autoRotateSpeed = 0.6
    if (pose === 'walk') {
      viewer.animation = new skinview3d.WalkingAnimation()
    } else if (pose === 'wave') {
      viewer.animation = new skinview3d.WaveAnimation()
    } else if (pose === 'idle') {
      viewer.animation = new skinview3d.IdleAnimation()
    } else {
      viewer.animation = null
    }
    viewerRef.current = viewer
    return () => {
      viewer.dispose()
      viewerRef.current = null
    }
    // We intentionally re-create viewer on size changes to keep canvas crisp.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, pose, rotate, interactive, zoom])

  useEffect(() => {
    const viewer = viewerRef.current
    if (!viewer) return
    if (!imageUrl) {
      viewer.resetSkin()
      return
    }
    viewer
      .loadSkin(imageUrl, { model: model === 'slim' ? 'slim' : 'default' })
      .catch(() => {})
  }, [imageUrl, model])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width, height, lineHeight: 0 }}
    />
  )
}
