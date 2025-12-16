import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type SectionOneProps = {
  isReady: boolean; // comes from App: !isLoading
};

const SectionOne: React.FC<SectionOneProps> = ({ isReady }) => {
  // const scrollToSectionTwo = () => {
  //   const el = document.getElementById("section-two");
  //   if (!el) return;

  //   const rect = el.getBoundingClientRect();
  //   const start = window.scrollY || window.pageYOffset;
  //   const target = Math.min(
  //     start + rect.top,
  //     document.documentElement.scrollHeight - window.innerHeight
  //   );

  //   // Prefer native smooth scroll for immediate start
  //   try {
  //     window.scrollTo({ top: target, behavior: "smooth" });
  //     return;
  //   } catch {
  //     // Fallback for environments without smooth behavior support
  //     const duration = 1600;
  //     const startTime = performance.now();
  //     const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
  //     const distance = target - start;
  //     const step = (now: number) => {
  //       const elapsed = now - startTime;
  //       const progress = Math.min(elapsed / duration, 1);
  //       const eased = easeOutCubic(progress);
  //       window.scrollTo(0, Math.round(start + distance * eased));
  //       if (elapsed < duration) requestAnimationFrame(step);
  //     };
  //     requestAnimationFrame(step);
  //   }
  // };

  const baseButtonClasses =
    "px-8 py-3 rounded-xl font-bold transition-all duration-300 ease-in-out shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer";
  const primaryButtonClasses = `bg-primary text-white border-3 border-gray-800/10  ${baseButtonClasses} hover:bg-primary/90`;
  const secondaryButtonClasses = `bg-white text-primary border-3 border-gray-800/10 ${baseButtonClasses} hover:bg-primary/10 hover:border-primary/90`;

  // --- GSAP intro animation ---
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isReady || !contentRef.current) return;

    // use gsap.context so React StrictMode doesn't double-animate
    const ctx = gsap.context(() => {
      const elements = contentRef.current!.querySelectorAll(".hero-animate");

      gsap.fromTo(
        elements,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          // delay: 0.5,
          stagger: 0.12,
        }
      );
    }, contentRef);

    return () => {
      ctx.revert();
    };
  }, [isReady]);
  

  return (
    <section
      id="section-one"
      className="bg-overlay text-center md:text-start md:bg-transparent relative h-screen w-full flex flex-col justify-center px-8 md:px-24 z-10 font-common snap-section"
    >
      <div
        
        className="flex flex-col items-center sm:items-start pointer-events-auto select-none lg:w-[60%] xl:w-[50%] md:mt-5 2xl:mt-10"
      >
        <div ref={contentRef} className="relative">
          <h1 className="hero-animate font-stylish text-5xl md:text-7xl 2xl:text-8xl text-primary">
            Legendary Builders
          </h1>

          <p className="hero-animate text-gray-900 lg:text-gray-700 text-xl 2xl:text-2xl my-5">
            Built with precision, designed with purpose. Discover a modern
            living experience shaped around quality, comfort, and smarter
            spaces.
          </p>

          <div className="hero-animate flex flex-col sm:flex-row items-center sm:items-start gap-4 w-[90%] md:w-full mt-8 max-w-md mx-auto sm:mx-0 mb-5">
            {/* BOOK NOW Button */}
            <button
              className={`w-full text-sm 2xl:text-md ${primaryButtonClasses}`}
            >
              BOOK NOW
            </button>

            {/* EXPLORE WEBSITE Button */}
            <button
              className={`w-full text-sm 2xl:text-md ${secondaryButtonClasses}`}
            >
              EXPLORE WEBSITE
            </button>
          </div>
        </div>

        <img
          src="birds.png"
          className="hero-animate absolute bottom-0 2xl:bottom-5 opacity-30 w-120 hidden md:block"
          alt=""
        />
      </div>
    </section>
  );
};

export default SectionOne;
