import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useProgress } from "@react-three/drei";
import Lenis from "lenis";

import Scene from "./Scene";
import Navbar from "./Components/Navbar";
import Loader from "./Components/Loader";

import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import SectionFive from "./Components/SectionFive";
import SectionSix from "./Components/SectionSix";
import SectionSeven from "./Components/SectionSeven";

gsap.registerPlugin(ScrollTrigger);

function LoadingBridge({
  setIsLoading,
}: {
  setIsLoading: (v: boolean) => void;
}) {
  const { active, progress } = useProgress();

  useEffect(() => {
    if (active) {
      setIsLoading(progress < 100);
      return;
    }
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [active, progress, setIsLoading]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSectionSeven, setShowSectionSeven] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const resetCameraRef = useRef<(() => void) | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.6,
      touchMultiplier: 0.8,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;

    if (showSectionSeven) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "auto";
      lenis?.start();
    }
  }, [showSectionSeven]);

  const handleCloseRequest = () => {
    setIsTransitioning(true);
    setShowSectionSeven(false);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
  };

  const handleResetCamera = () => {
    resetCameraRef.current?.();
  };

  return (
    <main
      className={`${
        isLoading ? "h-screen" : ""
      } w-full bg-[#C9D4DD] relative overflow-x-hidden`}
    >
      <Loader isLoading={isLoading} />
      <Navbar />

      {/* 3D CANVAS */}
      <div
        className={`fixed top-0 left-0 w-full h-full overflow-hidden ${
          showSectionSeven ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <Canvas
          shadows="soft"
          dpr={1.5}
          gl={{
            antialias: true,
            alpha: false,
            preserveDrawingBuffer: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.7,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          onCreated={({ gl }) => {
            (gl as any).useLegacyLights = false;
            (gl as any).physicallyCorrectLights = true;
            gl.shadowMap.enabled = true;
            gl.shadowMap.type = THREE.PCFSoftShadowMap;
            gl.localClippingEnabled = true;
          }}
        >
          <LoadingBridge setIsLoading={setIsLoading} />
          <Suspense fallback={null}>
            <Scene
              interactive={showSectionSeven}
              isTransitioning={isTransitioning}
              onTransitionComplete={handleTransitionComplete}
              resetCameraRef={resetCameraRef}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* SECTIONS 1-6 */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          showSectionSeven ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <SectionOne isReady={!isLoading} />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix onExplore={() => setShowSectionSeven(true)} />
      </div>

      {/* SECTION 7 UI */}
      <div
        className={`fixed inset-0 z-20 transition-opacity duration-500 ease-in-out ${
          showSectionSeven && !isTransitioning
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          willChange: isTransitioning || showSectionSeven ? "opacity" : "auto",
        }}
      >
        <SectionSeven
          onClose={handleCloseRequest}
          onResetCamera={handleResetCamera}
        />
      </div>
    </main>
  );
}
