/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 PlantNo.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    큐브001: THREE.Mesh;
    큐브001_1: THREE.Mesh;
  };
  materials: {
    매테리얼: THREE.MeshStandardMaterial;
    ['매테리얼.004']: THREE.MeshStandardMaterial;
  };
};

export function PlantNo(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.plant_no_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 6.8, 0]}
        rotation={[0, Math.PI / 4, 0]}
        scale={[0.12, 0.13, 0.12]}
      >
        <mesh geometry={nodes.큐브001.geometry} material={materials.매테리얼} />
        <mesh
          geometry={nodes.큐브001_1.geometry}
          material={materials['매테리얼.004']}
        />
      </group>
    </group>
  );
}

useGLTF.preload(glbs.plant_no_glb);
