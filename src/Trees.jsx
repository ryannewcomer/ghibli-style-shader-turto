import React, { forwardRef, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Vector3 } from 'three'
import { GhibliShader } from "./GhibliShader"
export function Trees = forwardRef((props, ref) => {
  const { nodes } = useGLTF('/trees.glb');

  const uniforms = useMemo(() => ({
    colorMap: {
      value: props.colors,
    },
    brightnessThresholds: {
      value: [0.6, 0.35, 0.001],
    },
    lightPosition: { value: new Vector3(15, 15, 15)},
  }),
  [props.colors])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        material={materials['Stylized Foliage']}
        position={[0.327, -0.046, -0.684]}
      >
    <shaderMaterial attach="material"
    {...GhibliShader}
    uniforms={uniforms}
    />
    </mesh>
    </group>
  );
});

useGLTF.preload('/trees.glb');
