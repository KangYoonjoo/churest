/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Flower_Pink.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { glbs } from '@/public/assets/glb';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Plane_MaterialFlower_0: THREE.Mesh;
  };
  materials: {
    MaterialFlower: THREE.MeshStandardMaterial;
  };
};

export function PinkFlower(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.flower_pink_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Plane_MaterialFlower_0.geometry}
            material={materials.MaterialFlower}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            castShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(glbs.flower_pink_glb);
