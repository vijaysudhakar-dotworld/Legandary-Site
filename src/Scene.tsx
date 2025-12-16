import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

import { useScrollAnimation } from "./utils/useScrollAnimation";
import { Cloud } from "./Components/Cloud";
import { Outer } from "./Outer";

type SceneProps = {
  interactive?: boolean;
  isTransitioning?: boolean;
  onTransitionComplete?: () => void;
  resetCameraRef?: React.MutableRefObject<(() => void) | null>;
};

const Scene: React.FC<SceneProps> = ({ interactive = false }) => {
  const buildingRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const controlsRef = useRef<any>(null);

  // Keep your existing scroll animation
  useScrollAnimation({ interactive, cameraRef, buildingRef });

  // Enable cast/receive shadows on all meshes under building
  useEffect(() => {
    const group = buildingRef.current;
    if (!group) return;

    group.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;

        if (obj.material) {
          obj.material.needsUpdate = true;
        }
      }
    });
  }, []);

  return (
    <>
      {/* Camera (unchanged) */}
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        near={5}
        far={4000}
        position={[-800, -310, 1100]}
        fov={21}
        onUpdate={(self) => self.updateProjectionMatrix()}
      />

      {/* Controls (unchanged angles/target) */}
      <OrbitControls
        ref={controlsRef}
        makeDefault
        target={[-90, -50, 0]}
        enableZoom={interactive}
        enablePan={interactive}
        enableRotate={interactive}
        rotateSpeed={0.3}
        enableDamping
        dampingFactor={0.1}
        zoomSpeed={0.35}
        maxDistance={1500}
        minDistance={0}
      />

      {/* Reference-style Lighting */}
      <ambientLight intensity={0.2} />
      <hemisphereLight intensity={0.35} groundColor="#444" />

      {/* Main Light (same angle/point as your old light) */}
      <directionalLight
        castShadow
        position={[-30, 32, -16]}
        intensity={6}
        shadow-mapSize={[4096, 4096]}
        shadow-camera-near={10}
        shadow-camera-far={1500}
        shadow-camera-left={-300}
        shadow-camera-right={300}
        shadow-camera-top={300}
        shadow-camera-bottom={-300}
        shadow-bias={-0.0005}
        shadow-normalBias={0.02}
        shadow-radius={3}
      />

      {/* Subtle fill */}
      <ambientLight intensity={0.65} />
      <directionalLight
        position={[-2000, 200, 900]}
        intensity={0.5}
        color="#d9e6ff"
      />

      {/* Environment (keep your HDRI) */}
      <Environment files="/sky.hdr" background environmentIntensity={0.04} />

      {/* Clouds (unchanged) */}
      <Cloud
        position={[-300, 200, -800]}
        scale={1.2}
        speed={0.2}
        range={60}
        visible={!interactive}
      />
      <Cloud
        position={[400, 200, -900]}
        scale={1}
        speed={0.15}
        range={80}
        visible={!interactive}
      />
      <Cloud
        position={[-100, 300, -1000]}
        scale={1.5}
        speed={0.25}
        range={80}
        visible={!interactive}
      />

      {/* Building (unchanged angles/positions) */}
      <Center
        rotation={[0, -Math.PI / 3.1, 0]}
        ref={buildingRef}
        position={[220, -140, 0]}
      >
        <Outer />
      </Center>

      {/* Soft ground contact shadow */}
      <ContactShadows opacity={0.18} blur={3.5} far={800} />
    </>
  );
};

export default Scene;
