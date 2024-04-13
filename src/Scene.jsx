import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Trees } from "./Trees";
import { Color } fromm "Three";

export function Scene() {
  const refTrees = useRef(null);

  useFrame(() => {
    const { current: group } = refTrees;
    if (group) {
      group.rotation.x = group.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-with={2048}
        shadow-mapSize-height={2048}
      />

    <Trees
    ref={refTrees}
    position={[0,0,-2]}
    colors = {[
      new Color("#427062").converLinearToSRGB(),
      new Color("#33594e").converLinearToSRGB(),
      new Color("#234549").converLinearToSRGB(),
      new Color("#1e363f").converLinearToSRGB(),
    ]}
    />
    <Trees
    position={[0,0,4]}
    colors={[
      new Color("#4a8d7e").converLinearToSRGB(),
      new Color("#377f6a").converLinearToSRGB(),
      new Color('#184f52').converLinearToSRGB(),
      new Color('#143b36').converLinearToSRGB(),
    ]}
    />
    </>
  );
}
