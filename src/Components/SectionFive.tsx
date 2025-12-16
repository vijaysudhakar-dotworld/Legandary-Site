import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFive: React.FC = () => {
  const sectionFiveRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const sec5 = sectionFiveRef.current;
    if (!sec5) return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      const xValue = isMobile ? -25 : -100;

      const leftTexts = gsap.utils.toArray<HTMLElement>(".s5-text-left");
      const rightTexts = gsap.utils.toArray<HTMLElement>(".s5-text-right");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: sec5,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        })
        .to(leftTexts, { x: xValue, ease: "none" }, 0)
        .to(rightTexts, { x: -xValue, ease: "none" }, 0);
    }, sectionFiveRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionFiveRef}
      id="section-five"
      className="relative h-screen w-full bg-linear-to-b from-blue-400/40 to-transparent overflow-hidden font-montserrat flex items-center justify-center md:justify-end pr-10"
    >
      <div className="flex flex-col gap-2 text-right z-10 uppercase md:pr-16 lg:pr-24 2xl:pr-40">
        <p className="s5-text-left text-xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight -rotate-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          Legendary Pride
        </p>
        <p className="s5-text-right text-xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          Legendary SUPER60
        </p>
        <p className="s5-text-left text-xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight -rotate-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          Legendary MARVEL
        </p>
        <p className="s5-text-right text-xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          Legendary REVA
        </p>
        <p className="s5-text-left text-xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight -rotate-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          Legendary PLATINA
        </p>
        <p className="s5-text-right text-xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
          Legendary BLISS
        </p>
      </div>
    </section>
  );
};

export default SectionFive;
