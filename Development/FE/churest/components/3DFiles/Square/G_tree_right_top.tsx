/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 g_tree_right_top.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    tree1: THREE.Mesh;
    tree1001: THREE.Mesh;
    tree1002: THREE.Mesh;
    tree1003: THREE.Mesh;
    Mesh146: THREE.Mesh;
    Mesh146_1: THREE.Mesh;
    Mesh146_2: THREE.Mesh;
    큐브003: THREE.Mesh;
    큐브004: THREE.Mesh;
    큐브005: THREE.Mesh;
    큐브006: THREE.Mesh;
    큐브007: THREE.Mesh;
    Mesh147: THREE.Mesh;
    Mesh147_1: THREE.Mesh;
    Mesh147_2: THREE.Mesh;
    큐브008: THREE.Mesh;
    큐브009: THREE.Mesh;
    큐브010: THREE.Mesh;
    큐브011: THREE.Mesh;
    큐브012: THREE.Mesh;
    Mesh148: THREE.Mesh;
    Mesh148_1: THREE.Mesh;
    Mesh148_2: THREE.Mesh;
    큐브013: THREE.Mesh;
    큐브014: THREE.Mesh;
    큐브015: THREE.Mesh;
    큐브016: THREE.Mesh;
    큐브017: THREE.Mesh;
    tree1004: THREE.Mesh;
    Mesh150: THREE.Mesh;
    Mesh150_1: THREE.Mesh;
    Mesh150_2: THREE.Mesh;
    큐브018: THREE.Mesh;
    큐브019: THREE.Mesh;
    큐브020: THREE.Mesh;
    큐브021: THREE.Mesh;
    큐브022: THREE.Mesh;
    tree1005: THREE.Mesh;
    tree1006: THREE.Mesh;
  };
  materials: {
    ['Material.034']: THREE.MeshStandardMaterial;
    ['Material.061']: THREE.MeshStandardMaterial;
    ['매테리얼.009']: THREE.MeshStandardMaterial;
    ['매테리얼.010']: THREE.MeshStandardMaterial;
    ['매테리얼.011']: THREE.MeshStandardMaterial;
  };
};

export function G_tree_top_right(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.g_tree_right_top_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.tree1.geometry}
        material={materials['Material.034']}
        position={[13.8, 1.08, -12.82]}
        rotation={[Math.PI, -0.99, Math.PI]}
        scale={0.21}
        castShadow
      />
      <mesh
        geometry={nodes.tree1001.geometry}
        material={materials['Material.034']}
        position={[13.8, 1.08, -10.66]}
        rotation={[0, -0.01, 0]}
        scale={0.17}
        castShadow
      />
      <mesh
        geometry={nodes.tree1002.geometry}
        material={materials['Material.034']}
        position={[11.46, 1.02, -13.34]}
        rotation={[0, -1.33, 0]}
        scale={0.17}
        castShadow
      />
      <mesh
        geometry={nodes.tree1003.geometry}
        material={materials['Material.034']}
        position={[15.66, 0.78, -15.6]}
        rotation={[Math.PI, -0.02, Math.PI]}
        scale={0.27}
        castShadow
      />
      <group
        position={[15.62, 2.28, -12.4]}
        rotation={[0, -1.26, -0.09]}
        scale={0.19}
      >
        <mesh
          geometry={nodes.Mesh146.geometry}
          material={materials['Material.061']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh146_1.geometry}
          material={materials['매테리얼.009']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh146_2.geometry}
          material={materials['매테리얼.010']}
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.큐브003.geometry}
        material={materials['매테리얼.011']}
        position={[14.81, 3.1, -13.55]}
        rotation={[0, -1.26, -0.09]}
        scale={[0.48, 0.43, 0.48]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브004.geometry}
        material={materials['매테리얼.011']}
        position={[16.83, 2.77, -13.3]}
        rotation={[-0.43, -0.29, -1.42]}
        scale={[0.48, 0.43, 0.48]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브005.geometry}
        material={materials['매테리얼.011']}
        position={[16.48, 2.53, -11.53]}
        rotation={[-0.97, -0.17, -1.69]}
        scale={[0.47, 0.42, 0.47]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브006.geometry}
        material={materials['매테리얼.011']}
        position={[15.44, 2.82, -11.12]}
        rotation={[-1.24, 0.43, -2.4]}
        scale={[0.56, 0.5, 0.56]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브007.geometry}
        material={materials['매테리얼.011']}
        position={[14.98, 3.14, -11.92]}
        rotation={[-0.69, 0.64, 3.11]}
        scale={[0.43, 0.38, 0.43]}
        castShadow
      />
      <group
        position={[12.28, 1.99, -12.35]}
        rotation={[-0.08, -1.26, -0.09]}
        scale={0.14}
      >
        <mesh
          geometry={nodes.Mesh147.geometry}
          material={materials['Material.061']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh147_1.geometry}
          material={materials['매테리얼.009']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh147_2.geometry}
          material={materials['매테리얼.010']}
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.큐브008.geometry}
        material={materials['매테리얼.011']}
        position={[11.7, 2.51, -13.22]}
        rotation={[-0.08, -1.26, -0.09]}
        scale={[0.35, 0.31, 0.35]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브009.geometry}
        material={materials['매테리얼.011']}
        position={[13.15, 2.29, -13.02]}
        rotation={[-0.51, -0.29, -1.42]}
        scale={[0.35, 0.31, 0.35]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브010.geometry}
        material={materials['매테리얼.011']}
        position={[12.91, 2.22, -11.73]}
        rotation={[-1.04, -0.17, -1.69]}
        scale={[0.34, 0.3, 0.34]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브011.geometry}
        material={materials['매테리얼.011']}
        position={[12.16, 2.45, -11.46]}
        rotation={[-1.32, 0.43, -2.4]}
        scale={[0.41, 0.36, 0.41]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브012.geometry}
        material={materials['매테리얼.011']}
        position={[11.82, 2.63, -12.05]}
        rotation={[-0.77, 0.64, 3.11]}
        scale={[0.31, 0.28, 0.31]}
        castShadow
      />
      <group
        position={[13.39, 2.37, -14.69]}
        rotation={[-3.12, 0.31, 3.14]}
        scale={0.2}
      >
        <mesh
          geometry={nodes.Mesh148.geometry}
          material={materials['Material.061']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh148_1.geometry}
          material={materials['매테리얼.009']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh148_2.geometry}
          material={materials['매테리얼.010']}
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.큐브013.geometry}
        material={materials['매테리얼.011']}
        position={[14.88, 3.07, -14.65]}
        rotation={[-3.12, 0.31, 3.14]}
        scale={[0.49, 0.43, 0.49]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브014.geometry}
        material={materials['매테리얼.011']}
        position={[13.46, 2.79, -13.15]}
        rotation={[-2.55, -0.53, 2.23]}
        scale={[0.49, 0.44, 0.49]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브015.geometry}
        material={materials['매테리얼.011']}
        position={[12.19, 2.72, -14.49]}
        rotation={[-2.03, -0.29, 2.29]}
        scale={[0.48, 0.43, 0.48]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브016.geometry}
        material={materials['매테리얼.011']}
        position={[12.49, 3.04, -15.57]}
        rotation={[-1.34, -0.42, 1.8]}
        scale={[0.57, 0.51, 0.57]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브017.geometry}
        material={materials['매테리얼.011']}
        position={[13.45, 3.28, -15.47]}
        rotation={[-1.31, -0.93, 1.32]}
        scale={[0.44, 0.39, 0.44]}
        castShadow
      />
      <mesh
        geometry={nodes.tree1004.geometry}
        material={materials['Material.034']}
        position={[11, 1.08, -10.66]}
        rotation={[2.98, -0.65, 2.98]}
        scale={0.25}
        castShadow
      />
      <group
        position={[13.16, 2.6, -9.06]}
        rotation={[-3.03, -1.3, -3.12]}
        scale={0.24}
      >
        <mesh
          geometry={nodes.Mesh150.geometry}
          material={materials['Material.061']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh150_1.geometry}
          material={materials['매테리얼.009']}
          castShadow
        />
        <mesh
          geometry={nodes.Mesh150_2.geometry}
          material={materials['매테리얼.010']}
          castShadow
        />
      </group>
      <mesh
        geometry={nodes.큐브018.geometry}
        material={materials['매테리얼.011']}
        position={[13.13, 3.61, -10.79]}
        rotation={[-3.03, -1.3, -3.12]}
        scale={[0.59, 0.52, 0.59]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브019.geometry}
        material={materials['매테리얼.011']}
        position={[15.03, 3.14, -9.17]}
        rotation={[-0.64, -0.78, -1.79]}
        scale={[0.59, 0.53, 0.59]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브020.geometry}
        material={materials['매테리얼.011']}
        position={[13.46, 2.9, -7.58]}
        rotation={[-1.14, -0.44, -2.24]}
        scale={[0.58, 0.52, 0.58]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브021.geometry}
        material={materials['매테리얼.011']}
        position={[12.13, 3.3, -7.87]}
        rotation={[-1.06, 0.22, -2.97]}
        scale={[0.69, 0.62, 0.69]}
        castShadow
      />
      <mesh
        geometry={nodes.큐브022.geometry}
        material={materials['매테리얼.011']}
        position={[12.2, 3.69, -9]}
        rotation={[-0.54, 0.18, 2.72]}
        scale={[0.53, 0.47, 0.53]}
        castShadow
      />
      <mesh
        geometry={nodes.tree1005.geometry}
        material={materials['Material.034']}
        position={[16.71, 1.08, -9.73]}
        rotation={[0, -0.01, 0]}
        scale={0.22}
        castShadow
      />
      <mesh
        geometry={nodes.tree1006.geometry}
        material={materials['Material.034']}
        position={[11.46, 0.91, -16]}
        rotation={[Math.PI, -0.98, Math.PI]}
        scale={0.2}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.g_tree_right_top_glb);
