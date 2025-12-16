import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

type UseScrollAnimationProps = {
  interactive: boolean;
  cameraRef: React.RefObject<THREE.PerspectiveCamera | null>;
  buildingRef: React.RefObject<THREE.Group | null>;
};

export const useScrollAnimation = ({
  interactive,
  cameraRef,
  buildingRef,
}: UseScrollAnimationProps) => {
  useLayoutEffect(() => {
    if (interactive) return;
    ScrollTrigger.refresh();

    // --- Section One Animation ---
    // const secOne = document.getElementById("section-one");
    // if (secOne && cameraRef.current && buildingRef.current) {
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#section-one",
    //       start: "top bottom",
    //       end: "center center",
    //       scrub: 1,
    //       immediateRender: false,
    //     },
    //   });

    //   // camera framing for Section One
    //   tl.to(cameraRef.current.position, {
    //     x: 200,
    //     y: -140,
    //     z: 800,
    //     ease: "power1.inOut",
    //   });
    //   tl.to(
    //     cameraRef.current,
    //     {
    //       fov: 45,
    //       ease: "power1.inOut",
    //       onUpdate: () => cameraRef.current?.updateProjectionMatrix(),
    //     },
    //     0
    //   );

    //   // use positions/rotation from Scene.tsx for the SectionOne center
    //   tl.to(
    //     buildingRef.current.rotation,
    //     { y: -Math.PI / 3.1, ease: "power1.inOut" },
    //     0
    //   );
    //   tl.to(
    //     buildingRef.current.position,
    //     { x: 220, y: -140, z: 0, ease: "power1.inOut" },
    //     0
    //   );
    // }

    // --- Section Two Animation ---
    const secTwo = document.getElementById("section-two");
    if (secTwo && cameraRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-two",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          immediateRender: false,
        },
      });

      tl.to(cameraRef.current.position, {
        x: -1100,
        y: -450,
        z: 800,
        ease: "power1.inOut",
      });
      tl.to(
        cameraRef.current,
        {
          fov: 35,
          ease: "power1.inOut",
          onUpdate: () => cameraRef.current?.updateProjectionMatrix(),
        },
        0
      );
      if (buildingRef.current) {
        tl.to(
          buildingRef.current.rotation,
          { y: -0.1, ease: "power1.inOut" },
          0
        );
        tl.to(
          buildingRef.current.position,
          { x: -650, y: -330, ease: "power1.inOut" },
          0
        );
      }
    }

    // --- Section Three Animation ---
    const secThree = document.getElementById("section-three");
    if (secThree && cameraRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-three",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          immediateRender: false,
        },
      });

      tl.to(cameraRef.current.position, {
        x: -1200,
        y: -450,
        z: 1000,
        ease: "power1.inOut",
      });
      tl.to(
        cameraRef.current,
        {
          fov: 16,
          ease: "power1.inOut",
          onUpdate: () => cameraRef.current?.updateProjectionMatrix(),
        },
        0
      );
      if (buildingRef.current) {
        tl.to(
          buildingRef.current.rotation,
          { y: -Math.PI / 2.8, ease: "power1.inOut" },
          0
        );
        tl.to(
          buildingRef.current.position,
          { x: -50, y: -270, ease: "power1.inOut" },
          0
        );
      }
    }

    // --- Section Four Animation ---
    const secFour = document.getElementById("section-four");
    if (secFour && cameraRef.current && buildingRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-four",
          start: "top bottom",
          end: "center center",
          scrub: 1,
          immediateRender: false,
        },
      });

      tl.to(
        cameraRef.current,
        {
          fov: 20,
          ease: "power1.inOut",
          onUpdate: () => cameraRef.current?.updateProjectionMatrix(),
        },
        0
      );
    }

    // --- Section Five Animation ---
    const secFive = document.getElementById("section-five");
    if (secFive && cameraRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-five",
          start: "top center",
          end: "center center",
          scrub: 1,
          immediateRender: false,
        },
      });

      tl.to(cameraRef.current.position, {
        x: -1200,
        y: -450,
        z: 1000,
        ease: "power1.inOut",
      });
      if (buildingRef.current) {
        tl.to(
          buildingRef.current.rotation,
          { y: -Math.PI / 3, ease: "power1.inOut" },
          0
        );
        tl.to(
          buildingRef.current.position,
          { x: -250, y: -270, ease: "power1.inOut" },
          0
        );
      }
    }

    // --- Section Six Animation ---
    const secSix = document.getElementById("section-six");
    if (secSix && cameraRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#section-six",
          start: "top center",
          end: "center center",
          scrub: 1,
          immediateRender: false,
        },
      });

      tl.to(cameraRef.current.position, {
        x: -1200,
        y: -300,
        z: 1000,
        ease: "power1.inOut",
      });
      tl.to(
        cameraRef.current,
        {
          fov: 20,
          ease: "power1.inOut",
          onUpdate: () => cameraRef.current?.updateProjectionMatrix(),
        },
        0
      );
      if (buildingRef.current) {
        tl.to(
          buildingRef.current.rotation,
          { y: -Math.PI / 3, ease: "power1.inOut" },
          0
        );
        tl.to(
          buildingRef.current.position,
          { x: -30, y: -150, ease: "power1.inOut" },
          0
        );
      }
    }
  }, [interactive, cameraRef, buildingRef]);
};
