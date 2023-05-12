/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 house_5.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    building017: THREE.Mesh;
  };
  materials: {
    ['Material.004']: THREE.MeshStandardMaterial;
  };
};

export function House5(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.house_5_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.building017.geometry}
        material={materials['Material.004']}
        position={[0.18, 1.15, -0.18]}
        scale={0.26}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.house_5_glb);
