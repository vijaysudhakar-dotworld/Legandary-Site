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
  buildingPos: [number, number, number];
  buildingRot: [number, number, number];
  buildingScale: [number, number, number];
  directionalPos: [number, number, number];
  directionalTarget: [number, number, number];
}

export const useScrollAnimation = (
  camera: THREE.PerspectiveCamera,
  controls: any,
  buildingGroup: THREE.Group | null,
  dirLight: THREE.DirectionalLight | null
) => {
  useLayoutEffect(() => {
    if (!camera || !controls || !buildingGroup || !dirLight) return;

    const sections = gsap.utils.toArray('.section-container');
    if (sections.length === 0) return;

    const isMobile = window.innerWidth < 1024;

    const desktopStates: CameraState[] = [
      // Section 1 (Default)
      {
        cameraPos: [13.2678760072932, 9.54023342452855, 64.77327507868063],
        cameraTarget: [-15.6, 20.9, 0],
        fov: 20,
        cameraZoom: 1,
        cameraRotate: 0,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },


      // Section 2
      // {
      //   cameraPos: [-31.849688341268234, 11.074351876414864, 47.767035322199405],
      //   cameraTarget: [23.1, 22, 0],
      //   fov: 23,
      //   cameraZoom: 1,
      //   cameraRotate: -49
      // },

      {
        cameraPos: [50.45827950656461, 9.317623833634247, 39.44330438720455],
        cameraTarget: [-21, 26.8, -50],
        fov: 24,
        cameraZoom: 1,
        cameraRotate: 38.6,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },

      // Section 3
      // {
      //   cameraPos: [10.568650274904392, 7.136651075700531, 49.85600330088933],
      //   cameraTarget: [-3.1, 25.2, 0],
      //   fov: 25,
      //   cameraZoom: 1,
      //   cameraRotate: 15.331634260494987
      // },

      {
        cameraPos: [46.520047071617, 13.0333711835925, 5.11132569933106],
        cameraTarget: [-21.1, 25.3, 2.8],
        fov: 23,
        cameraZoom: 1,
        cameraRotate: 88.4,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },

      // Section 4 
      // {
      //   cameraPos: [14.877977029946356, 1.02899171981047, 67.09472369306603],
      //   cameraTarget: [-3.1, 18.5, 0],
      //   fov: 25,
      //   cameraZoom: 1,
      //   cameraRotate: 15
      // },

      {
        cameraPos: [73.94751072782529, 7.717741343329404, 3.7206901424512435],
        cameraTarget: [-21.4, 22.9, 4.57],
        fov: 23,
        cameraZoom: 1,
        cameraRotate: 90,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },


      // Section 5
      // {
      //   cameraPos: [19.417440374640652, 9.375940816039863, 60.64278185359906],
      //   cameraTarget: [-18.8, 20.9, 0],
      //   fov: 23,
      //   cameraZoom: 1,
      //   cameraRotate: 23
      // },

      {
        cameraPos: [53.05222007324192, 12.589195120439197, 3.39],
        cameraTarget: [-21.3, 23.3, 17.2],
        fov: 23,
        cameraZoom: 1,
        cameraRotate: 99,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },


      // Section 6
      {
        cameraPos: [69.87595080476576, 6.6661334252587565, -32.05700900825077],
        cameraTarget: [-21.3, 24.5, 12.2],
        fov: 23,
        cameraZoom: 105.15395255813087,
        cameraRotate: 118.3797468354438,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, -0.1, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 5.5, -4],
        directionalTarget: [0, 0, 0]
      },
    ];

    const mobileStates: CameraState[] = [
      // Section 1 (Default)
      {
        cameraPos: [59.139083684664286, 12, 2.543414437743856],
        cameraTarget: [-21, 22.6, 17],
        fov: 23,
        cameraZoom: 1,
        cameraRotate: 0,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },


      // Section 2
      // {
      //   cameraPos: [-31.849688341268234, 11.074351876414864, 47.767035322199405],
      //   cameraTarget: [23.1, 22, 0],
      //   fov: 23,
      //   cameraZoom: 1,
      //   cameraRotate: -49
      // },

      {
        cameraPos: [50.45827950656461, 9.317623833634247, 39.44330438720455],
        cameraTarget: [-21, 23, -30],
        fov: 30,
        cameraZoom: 1,
        cameraRotate: 38.6,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },

      // Section 3
      // {
      //   cameraPos: [10.568650274904392, 7.136651075700531, 49.85600330088933],
      //   cameraTarget: [-3.1, 25.2, 0],
      //   fov: 25,
      //   cameraZoom: 1,
      //   cameraRotate: 15.331634260494987
      // },

      {
        cameraPos: [50.45827950656461, 9.317623833634247, 39.44330438720455],
        cameraTarget: [-21, 26.8, -30],
        fov: 30,
        cameraZoom: 1,
        cameraRotate: 38.6,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },

      // Section 4 
      // {
      //   cameraPos: [14.877977029946356, 1.02899171981047, 67.09472369306603],
      //   cameraTarget: [-3.1, 18.5, 0],
      //   fov: 25,
      //   cameraZoom: 1,
      //   cameraRotate: 15
      // },

      {
        cameraPos: [50.45827950656461, 9.317623833634247, 39.44330438720455],
        cameraTarget: [-21, 26.8, -30],
        fov: 30,
        cameraZoom: 1,
        cameraRotate: 38.6,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },


      // Section 5
      // {
      //   cameraPos: [19.417440374640652, 9.375940816039863, 60.64278185359906],
      //   cameraTarget: [-18.8, 20.9, 0],
      //   fov: 23,
      //   cameraZoom: 1,
      //   cameraRotate: 23
      // },

      {
        cameraPos: [59.139083684664286, 12, 2.543414437743856],
        cameraTarget: [-21, 22.6, 17],
        fov: 23,
        cameraZoom: 1,
        cameraRotate: 0,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, 1.28, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 11, -30],
        directionalTarget: [0, 0, 0]
      },


      // Section 6
      {
        cameraPos: [69.87595080476576, 6.6661334252587565, -32.05700900825077],
        cameraTarget: [-21.3, 24.5, 12.2],
        fov: 27,
        cameraZoom: 105.15395255813087,
        cameraRotate: 118.3797468354438,
        buildingPos: [0, -0.6, 0],
        buildingRot: [0, -0.1, 0],
        buildingScale: [1, 1, 1],
        directionalPos: [50, 5.5, -4],
        directionalTarget: [0, 0, 0]
      },
    ];

    const states = isMobile ? mobileStates : desktopStates;

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

        // Building animation
        tl.to(buildingGroup.position, {
          x: nextState.buildingPos[0],
          y: nextState.buildingPos[1],
          z: nextState.buildingPos[2],
          duration: 1,
          ease: "power2.inOut",
        }, i);

        tl.to(buildingGroup.rotation, {
          x: nextState.buildingRot[0],
          y: nextState.buildingRot[1],
          z: nextState.buildingRot[2],
          duration: 1,
          ease: "power2.inOut",
        }, i);

        tl.to(buildingGroup.scale, {
          x: nextState.buildingScale[0],
          y: nextState.buildingScale[1],
          z: nextState.buildingScale[2],
          duration: 1,
          ease: "power2.inOut",
        }, i);

        // Directional Light animation
        tl.to(dirLight.position, {
          x: nextState.directionalPos[0],
          y: nextState.directionalPos[1],
          z: nextState.directionalPos[2],
          duration: 1,
          ease: "power2.inOut",
        }, i);

        if (dirLight.target) {
          tl.to(dirLight.target.position, {
            x: nextState.directionalTarget[0],
            y: nextState.directionalTarget[1],
            z: nextState.directionalTarget[2],
            duration: 1,
            onUpdate: () => dirLight.target.updateMatrixWorld(),
            ease: "power2.inOut",
          }, i);
        }
      }
    });

    return () => ctx.revert();
  }, [camera, controls, buildingGroup, dirLight]);
};
