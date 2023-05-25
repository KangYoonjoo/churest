/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 house_3.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    building004: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
  };
};

export function House3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.house_3_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.building004.geometry}
        material={materials['Material.001']}
        position={[-0.26, 1.86, 0.26]}
        scale={0.57}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.house_3_glb);