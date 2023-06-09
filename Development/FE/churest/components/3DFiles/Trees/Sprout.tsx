/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 SproutSand.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    원형: THREE.Mesh;
    원형_1: THREE.Mesh;
    sprout: THREE.Mesh;
  };
  materials: {
    ['매테리얼.001']: THREE.MeshStandardMaterial;
    ['매테리얼.002']: THREE.MeshStandardMaterial;
    매테리얼: THREE.MeshStandardMaterial;
  };
};

export function Sprout(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.sprout_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.14}>
        <mesh
          geometry={nodes.원형.geometry}
          material={materials['매테리얼.001']}
          receiveShadow
        />
        <mesh
          geometry={nodes.원형_1.geometry}
          material={materials['매테리얼.002']}
          castShadow
          receiveShadow
        />
      </group>
      <mesh
        geometry={nodes.sprout.geometry}
        material={materials.매테리얼}
        position={[0, 0.12, -0.01]}
        rotation={[0, -0.2, -0.15]}
        scale={[0.05, 0.03, 0.02]}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.sprout_glb);
