import { useEffect, useRef } from "react";
import * as THREE from "three";

type UseParallaxEffectProps = {
  interactive: boolean;
  selectedRoom?: boolean; // 👈 Added this prop
  buildingRef: React.RefObject<THREE.Group | null>;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
};

export const useParallaxEffect = ({
  interactive,
  selectedRoom = false, // Default to false
  buildingRef,
  cameraRef,
}: UseParallaxEffectProps) => {
  const parallax = useRef({
    targetX: 0,
    targetY: 0,
    currentX: 0,
    currentY: 0,
  });
  const appliedOffset = useRef(new THREE.Vector3(0, 0, 0));

  const parallaxCam = useRef({
    targetX: 0,
    targetY: 0,
    targetZ: 0,
    currentX: 0,
    currentY: 0,
    currentZ: 0,
  });
  const appliedCamOffset = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const maxOffsetX = 15;
    const maxOffsetY = 10;

    const onPointerMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      parallax.current.targetX = nx * maxOffsetX;
      parallax.current.targetY = -ny * maxOffsetY;

      const camMaxX = 30;
      const camMaxY = 20;
      const camMaxZ = 40;
      parallaxCam.current.targetX = nx * camMaxX;
      parallaxCam.current.targetY = -ny * camMaxY;
      parallaxCam.current.targetZ = -ny * camMaxZ;
    };

    window.addEventListener("pointermove", onPointerMove);
    let rafId: number;

    let lastTime = performance.now();
    const animate = (time: number) => {
      const dt = Math.max(0, (time - lastTime) / 1000);
      lastTime = time;

      // frame-rate independent smoothing factor helper
      const smoothFactor = (k: number) => 1 - Math.exp(-k * dt);
      // 1. IF ROOM SELECTED: FORCE TARGETS TO 0 (Disable movement)
      if (selectedRoom) {
        parallax.current.targetX = 0;
        parallax.current.targetY = 0;
      }

      // --- Building Parallax ---
      if (buildingRef.current) {
        const s = smoothFactor(6);
        parallax.current.currentX +=
          (parallax.current.targetX - parallax.current.currentX) * s;
        parallax.current.currentY +=
          (parallax.current.targetY - parallax.current.currentY) * s;

        // Compute new position by removing previous applied offset then adding current
        const base = buildingRef.current.position.clone().sub(appliedOffset.current);
        appliedOffset.current.set(parallax.current.currentX, parallax.current.currentY, 0);
        const newPos = base.add(appliedOffset.current);
        buildingRef.current.position.copy(newPos);
      }

      // --- Camera Parallax (Only if NOT interactive) ---
      if (cameraRef.current && !interactive) {
        const sCam = smoothFactor(4);
        parallaxCam.current.currentX +=
          (parallaxCam.current.targetX - parallaxCam.current.currentX) * sCam;
        parallaxCam.current.currentY +=
          (parallaxCam.current.targetY - parallaxCam.current.currentY) * sCam;
        parallaxCam.current.currentZ +=
          (parallaxCam.current.targetZ - parallaxCam.current.currentZ) * sCam;

        const camBase = cameraRef.current.position.clone().sub(appliedCamOffset.current);
        appliedCamOffset.current.set(
          parallaxCam.current.currentX,
          parallaxCam.current.currentY,
          parallaxCam.current.currentZ
        );
        const camNew = camBase.add(appliedCamOffset.current);
        cameraRef.current.position.copy(camNew);
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
    };
  }, [interactive, buildingRef, cameraRef, selectedRoom]);
};