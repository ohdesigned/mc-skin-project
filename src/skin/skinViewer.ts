import type { SkinViewer } from 'skinview3d'
import type { Mesh, Material } from 'three'

/** Let inner/outer skin meshes respect PNG alpha (avoids black where pixels are transparent). */
export const enableSkinAlphaMaterials = (viewer: SkinViewer) => {
  viewer.playerObject.skin.traverse((obj) => {
    const mesh = obj as Mesh
    if (!mesh.isMesh || !mesh.material) return
    const mats = (
      Array.isArray(mesh.material) ? mesh.material : [mesh.material]
    ) as Material[]
    for (const mat of mats) {
      mat.transparent = true
      mat.alphaTest = 0.01
      mat.depthWrite = true
      mat.needsUpdate = true
    }
  })
}
