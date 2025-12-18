import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export interface CameraState {
  cameraPos: [number, number, number];
  cameraTarget: [number, number, number];
  fov: number;
  cameraZoom: number;
  cameraRotate: number;
}

export const useScrollAnimation = (
  camera: THREE.PerspectiveCamera,
  controls: any,
  buildingGroup: THREE.Group | null
) => {
  useLayoutEffect(() => {
    if (!camera || !controls || !buildingGroup) return;

    const sections = gsap.utils.toArray('.section-container');
    if (sections.length === 0) return;

    const states: CameraState[] = [
      // Section 1 (Default)
      {
        cameraPos: [13.2678760072932, 9.54023342452855, 64.77327507868063],
        cameraTarget: [-15.6, 20.9, 0],
        fov: 20,
        cameraZoom: 1,
        cameraRotate: 0
      },
      // Section 2
      {
        cameraPos: [-13.408303750702185, 11.066691982639194, 54.60893004017202],
        cameraTarget: [13, 20.9, 0],
        fov: 23,
        cameraZoom: 1,
        cameraRotate: -25.209698848595327
      },
      // Section 3
      {
        cameraPos: [10.568650274904392, 7.136651075700531, 49.85600330088933],
        cameraTarget: [-3.1, 25.2, 0],
        fov: 25,
        cameraZoom: 1,
        cameraRotate: 15.331634260494987
      },
      // Section 4 (Placeholder)
      {
        cameraPos: [14.877977029946356, 1.02899171981047, 67.09472369306603],
        cameraTarget: [-3.1, 18.5, 0],
        fov: 25,
        cameraZoom: 1,
        cameraRotate: 15
      },
      // Section 5 (Placeholder)
      {
        cameraPos: [-13.408303750702185, 11.066691982639194, 54.60893004017202],
        cameraTarget: [13, 20.9, 0],
        fov: 23,
        cameraZoom: 1,
        cameraRotate: -25.209698848595327
      },
      // Section 6 (Placeholder)
      {
        cameraPos: [10.568650274904392, 7.136651075700531, 49.85600330088933],
        cameraTarget: [-3.1, 25.2, 0],
        fov: 25,
        cameraZoom: 1,
        cameraRotate: 15.331634260494987
      },
    ];

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5,
        }
      });

      // Iterate through states to create transitions
      for (let i = 0; i < states.length - 1; i++) {
        const nextState = states[i + 1];

        // Position animation
        tl.to(camera.position, {
          x: nextState.cameraPos[0],
          y: nextState.cameraPos[1],
          z: nextState.cameraPos[2],
          duration: 1,
          ease: "power2.inOut",
        }, i);

        // Target animation
        tl.to(controls.target, {
          x: nextState.cameraTarget[0],
          y: nextState.cameraTarget[1],
          z: nextState.cameraTarget[2],
          duration: 1,
          onUpdate: () => controls.update(),
          ease: "power2.inOut",
        }, i);

        // FOV animation
        tl.to(camera, {
          fov: nextState.fov,
          duration: 1,
          onUpdate: () => camera.updateProjectionMatrix(),
          ease: "power2.inOut",
        }, i);
      }
    });

    return () => ctx.revert();
  }, [camera, controls, buildingGroup]);
};
