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
      className="relative h-screen w-full bg-linear-to-b from-orange-400/20 via-transparent to-transparent overflow-hidden font-montserrat flex items-center justify-center md:justify-start pl-10 md:pl-20"
    >
      <div className="flex flex-col gap-2 text-right z-10 uppercase pr-16 lg:pr-24 2xl:pr-40">
        <a
          href="https://www.legendary.in/projects/pride"
          target="_blank"
          className="s5-text-left text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight -rotate-3 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        >
          Legendary Pride
        </a>
        <a
          href="https://www.legendary.in/projects/super60"
          target="_blank"
          className="s5-text-right text-2xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        >
          Legendary SUPER60
        </a>
        <a
          href="https://www.legendary.in/projects/marvel"
          target="_blank"
          className="s5-text-left text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight -rotate-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        >
          Legendary MARVEL
        </a>
        <a
          href="https://www.legendary.in/projects/reva"
          target="_blank"
          className="s5-text-right text-2xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        >
          Legendary REVA
        </a>
        <a
          href="https://www.legendary.in/projects/platina"
          target="_blank"
          className="s5-text-left text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-tight -rotate-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        >
          Legendary PLATINA
        </a>
        <a
          href="https://www.legendary.in/projects/bliss"
          target="_blank"
          className="s5-text-right text-2xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-wide leading-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]"
        >
          Legendary BLISS
        </a>
      </div>
    </section>
  );
};

export default SectionFive;
