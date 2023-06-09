/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 g_branches.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    Mesh324: THREE.Mesh;
    Mesh324_1: THREE.Mesh;
  };
  materials: {
    ['Material.008']: THREE.MeshStandardMaterial;
    ['Material.009']: THREE.MeshStandardMaterial;
  };
};

export function G_branches(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.g_branches_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[12.45, 0.41, 4.9]} scale={0.34}>
        <mesh
          geometry={nodes.Mesh324.geometry}
          material={materials['Material.008']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh324_1.geometry}
          material={materials['Material.009']}
          castShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload(glbs.g_branches_glb);
