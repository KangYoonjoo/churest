/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 bird3.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    Sphere001: THREE.Mesh;
    Sphere001_1: THREE.Mesh;
    Sphere001_2: THREE.Mesh;
    Sphere001_3: THREE.Mesh;
    Sphere001_4: THREE.Mesh;
    Sphere001_5: THREE.Mesh;
    Sphere001_6: THREE.Mesh;
  };
  materials: {
    ['Material.014']: THREE.MeshStandardMaterial;
    ['Material.015']: THREE.MeshStandardMaterial;
    ['Material.016']: THREE.MeshStandardMaterial;
    ['Material.017']: THREE.MeshStandardMaterial;
    ['Material.018']: THREE.MeshStandardMaterial;
    ['Material.019']: THREE.MeshStandardMaterial;
    ['Material.020']: THREE.MeshStandardMaterial;
  };
};

export function Bird3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.bird_3_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[0.19, 1.82, 0.71]} scale={0.04}>
        <mesh
          geometry={nodes.Sphere001.geometry}
          material={materials['Material.014']}
        />
        <mesh
          geometry={nodes.Sphere001_1.geometry}
          material={materials['Material.015']}
        />
        <mesh
          geometry={nodes.Sphere001_2.geometry}
          material={materials['Material.016']}
        />
        <mesh
          geometry={nodes.Sphere001_3.geometry}
          material={materials['Material.017']}
        />
        <mesh
          geometry={nodes.Sphere001_4.geometry}
          material={materials['Material.018']}
        />
        <mesh
          geometry={nodes.Sphere001_5.geometry}
          material={materials['Material.019']}
        />
        <mesh
          geometry={nodes.Sphere001_6.geometry}
          material={materials['Material.020']}
        />
      </group>
    </group>
  );
}

useGLTF.preload(glbs.bird_3_glb);
