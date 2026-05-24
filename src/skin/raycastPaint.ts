import { Raycaster, Vector2, type Mesh, type Object3D } from 'three'
import type { SkinObject } from 'skinview3d'
import type { PerspectiveCamera } from 'three'
import { SKIN_W, SKIN_H, type BodyPart } from './format'
import type { PartLayerMode } from './partVisibility'

export interface SkinHit {
  px: number
  py: number
  bodyPart: BodyPart
  layer: 'inner' | 'outer'
}

interface PartMeshEntry {
  mesh: Mesh
  bodyPart: BodyPart
  layer: 'inner' | 'outer'
}

const OVERLAY_FOR: Partial<Record<BodyPart, BodyPart>> = {
  head: 'head_overlay',
  body: 'body_overlay',
  right_arm: 'right_arm_overlay',
  left_arm: 'left_arm_overlay',
  right_leg: 'right_leg_overlay',
  left_leg: 'left_leg_overlay',
  head_overlay: 'head_overlay',
  body_overlay: 'body_overlay',
  right_arm_overlay: 'right_arm_overlay',
  left_arm_overlay: 'left_arm_overlay',
  right_leg_overlay: 'right_leg_overlay',
  left_leg_overlay: 'left_leg_overlay',
}

const collectMeshes = (root: Object3D, bodyPart: BodyPart, layer: 'inner' | 'outer', out: PartMeshEntry[]) => {
  root.traverse((obj) => {
    if ((obj as Mesh).isMesh) {
      out.push({ mesh: obj as Mesh, bodyPart, layer })
    }
  })
}

export const buildPaintTargets = (
  skin: SkinObject,
  modes: Partial<Record<BodyPart, PartLayerMode>>,
): PartMeshEntry[] => {
  const entries: PartMeshEntry[] = []
  const parts: { key: BodyPart; inner: Object3D; outer: Object3D }[] = [
    { key: 'head', inner: skin.head.innerLayer, outer: skin.head.outerLayer },
    { key: 'body', inner: skin.body.innerLayer, outer: skin.body.outerLayer },
    { key: 'right_arm', inner: skin.rightArm.innerLayer, outer: skin.rightArm.outerLayer },
    { key: 'left_arm', inner: skin.leftArm.innerLayer, outer: skin.leftArm.outerLayer },
    { key: 'right_leg', inner: skin.rightLeg.innerLayer, outer: skin.rightLeg.outerLayer },
    { key: 'left_leg', inner: skin.leftLeg.innerLayer, outer: skin.leftLeg.outerLayer },
  ]

  for (const p of parts) {
    const mode = modes[p.key] ?? 0
    if (mode < 2) collectMeshes(p.inner, p.key, 'inner', entries)
    if (mode < 1) collectMeshes(p.outer, p.key, 'outer', entries)
  }
  return entries
}

export const uvToSkinPixel = (u: number, v: number): { px: number; py: number } => {
  const px = Math.min(SKIN_W - 1, Math.max(0, Math.floor(u * SKIN_W)))
  const py = Math.min(SKIN_H - 1, Math.max(0, Math.floor((1 - v) * SKIN_H)))
  return { px, py }
}

export const partMatchesFilter = (
  atlasPart: BodyPart,
  activePart: string,
): boolean => {
  if (activePart === 'all') return true
  if (atlasPart === activePart) return true
  const overlay = OVERLAY_FOR[activePart as BodyPart]
  if (overlay && atlasPart === overlay) return true
  return false
}

export const raycastSkin = (
  camera: PerspectiveCamera,
  canvas: HTMLCanvasElement,
  clientX: number,
  clientY: number,
  targets: PartMeshEntry[],
  activePart: string,
): SkinHit | null => {
  const rect = canvas.getBoundingClientRect()
  const ndc = new Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1,
  )
  const raycaster = new Raycaster()
  raycaster.setFromCamera(ndc, camera)
  const meshes = targets.map((t) => t.mesh)
  const hits = raycaster.intersectObjects(meshes, false)
  if (hits.length === 0) return null

  for (const hit of hits) {
    const entry = targets.find((t) => t.mesh === hit.object)
    if (!entry || !hit.uv) continue
    const overlayKey = `${entry.bodyPart}_overlay` as BodyPart
    const atlasPart: BodyPart =
      entry.layer === 'outer' ? (OVERLAY_FOR[entry.bodyPart] ?? overlayKey) : entry.bodyPart
    if (!partMatchesFilter(atlasPart, activePart)) continue

    const { px, py } = uvToSkinPixel(hit.uv.x, hit.uv.y)
    return { px, py, bodyPart: atlasPart, layer: entry.layer }
  }
  return null
}
