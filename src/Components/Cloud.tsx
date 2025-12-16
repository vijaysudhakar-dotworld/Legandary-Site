import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

interface CloudProps {
  position?: [number, number, number];
  scale?: number;
  speed?: number;
  range?: number;
  visible?: boolean;
}

export const Cloud: React.FC<CloudProps> = ({
  position = [0, 0, -500],
  scale = 1,
  speed = 0.3,
  range = 50,
  visible = true,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(Math.random() * Math.PI * 2); // Random start offset
  const targetOpacity = visible ? 0.5 : 0;
  const currentOpacity = useRef(visible ? 0.5 : 0);

  const texture = useLoader(THREE.TextureLoader, "/cloud.png");

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    
    timeRef.current += delta * speed;
    
    // Smooth left-right oscillation using sine wave
    const offsetX = Math.sin(timeRef.current) * range;
    meshRef.current.position.x = position[0] + offsetX;
    
    // Smooth opacity transition
    const opacitySpeed = 1.5; // Speed of fade in/out
    currentOpacity.current += (targetOpacity - currentOpacity.current) * delta * opacitySpeed;
    
    if (meshRef.current.material instanceof THREE.Material) {
      (meshRef.current.material as THREE.MeshBasicMaterial).opacity = currentOpacity.current;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[400 * scale, 200 * scale]} />
      <meshBasicMaterial
        map={texture}
        transparent={true}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
};
