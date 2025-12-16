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
  const appliedOffset = useRef({ x: 0, y: 0 });

  const parallaxCam = useRef({
    targetX: 0,
    targetY: 0,
    targetZ: 0,
    currentX: 0,
    currentY: 0,
    currentZ: 0,
  });
  const appliedCamOffset = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const maxOffsetX = 15;
    const maxOffsetY = 10;

    const onPointerMove = (e: PointerEvent) => {
      // Calculate normalized coordinates
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;

      // Update Targets
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

    const animate = () => {
      // 1. IF ROOM SELECTED: FORCE TARGETS TO 0 (Disable movement)
      if (selectedRoom) {
        parallax.current.targetX = 0;
        parallax.current.targetY = 0;
      }

      // --- Building Parallax ---
      if (buildingRef.current) {
        // Smoothly interpolate current -> target
        parallax.current.currentX +=
          (parallax.current.targetX - parallax.current.currentX) * 0.08;
        parallax.current.currentY +=
          (parallax.current.targetY - parallax.current.currentY) * 0.08;

        // Remove previous offset, add new offset
        const base = buildingRef.current.position
          .clone()
          .sub(
            new THREE.Vector3(
              appliedOffset.current.x,
              appliedOffset.current.y,
              0
            )
          );
        const newPos = base.add(
          new THREE.Vector3(
            parallax.current.currentX,
            parallax.current.currentY,
            0
          )
        );

        buildingRef.current.position.copy(newPos);
        appliedOffset.current.x = parallax.current.currentX;
        appliedOffset.current.y = parallax.current.currentY;
      }

      // --- Camera Parallax (Only if NOT interactive) ---
      if (cameraRef.current && !interactive) {
        parallaxCam.current.currentX +=
          (parallaxCam.current.targetX - parallaxCam.current.currentX) * 0.06;
        parallaxCam.current.currentY +=
          (parallaxCam.current.targetY - parallaxCam.current.currentY) * 0.06;
        parallaxCam.current.currentZ +=
          (parallaxCam.current.targetZ - parallaxCam.current.currentZ) * 0.06;

        const camBase = cameraRef.current.position
          .clone()
          .sub(
            new THREE.Vector3(
              appliedCamOffset.current.x,
              appliedCamOffset.current.y,
              appliedCamOffset.current.z
            )
          );
        const camNew = camBase.add(
          new THREE.Vector3(
            parallaxCam.current.currentX,
            parallaxCam.current.currentY,
            parallaxCam.current.currentZ
          )
        );
        cameraRef.current.position.copy(camNew);
        appliedCamOffset.current.x = parallaxCam.current.currentX;
        appliedCamOffset.current.y = parallaxCam.current.currentY;
        appliedCamOffset.current.z = parallaxCam.current.currentZ;
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