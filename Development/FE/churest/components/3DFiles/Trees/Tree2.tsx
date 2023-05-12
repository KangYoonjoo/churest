/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Tree2.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    tree2: THREE.Mesh;
  };
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial;
  };
};

export function Tree2(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.tree_2_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.tree2.geometry}
        material={materials['Material.006']}
        position={[0, 1.44, 0.07]}
        scale={0.2}
      />
    </group>
  );
}

useGLTF.preload(glbs.tree_2_glb);
