import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionFour: React.FC = () => {
  const sectionFourRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstContainerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return; // Skip GSAP animations on mobile

    const section = sectionFourRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth;
      const slideInAnimation = gsap.fromTo(
        firstContainerRef.current,
        {
          x: "95%",
        },
        {
          x: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top top",
            scrub: 1,
          },
        }
      );

      const horizontalScrollAnimation = gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onEnter: () => {
            gsap.set(firstContainerRef.current, { x: "0%" });
          },
        },
      });

      return () => {
        slideInAnimation.scrollTrigger?.kill();
        horizontalScrollAnimation.scrollTrigger?.kill();
      };
    }, sectionFourRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionFourRef}
      id="section-four"
      className={`relative ${isMobile ? "min-h-auto bg-fade" : "h-screen"} w-screen overflow-hidden md:bg-linear-to-t from-blue-400/40 to-transparent`}
    >
      {/* MOBILE LAYOUT - Vertical Stack */}
      {isMobile ? (
        <div className="py-8 px-4">
          {/* First Container for Mobile */}
          <div className="mb-12">
            <h2 className="font-stylish text-4xl text-primary mb-6 text-center">
              Crafted Interiors
            </h2>
            <p className="text-slate-950 text-sm leading-relaxed mb-8 font-semibold text-center px-2">
              Step into homes designed from the inside out. Our interiors
              balance warm ambience with clean, modern lines to create
              spaces that feel inviting, uncluttered, and alive.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Chennai_Bedroom4_View2.jpg"
                  alt="Bedroom"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Chennai_Entrance_Stilt Floor.jpg"
                  alt="Entrance"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="col-span-2 aspect-video group cursor-pointer">
                <img
                  src="/interior/Chennai_Kitchen.jpg"
                  alt="Kitchen"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Chennai_Living Area.jpg"
                  alt="Living Area"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Chennai_Lounge Area.jpg"
                  alt="Lounge Area"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Second Container for Mobile */}
          <div className="mt-12">
            <h2 className="font-stylish text-4xl text-primary mb-6 text-center">
              Everyday Comfort
            </h2>
            <p className="text-slate-950 text-sm leading-relaxed mb-8 font-semibold text-center px-2">
              Behind every beautiful room is thoughtful detailing. Smart
              storage, efficient layouts, durable finishes, and carefully
              chosen materials make each interior both elegant and practical.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Chennai_Master Bedroom01.jpg"
                  alt="Master Bedroom"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Chennai_Master Washroom.jpg"
                  alt="Master Washroom"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="col-span-2 aspect-video group cursor-pointer">
                <img
                  src="/interior/Chennai_PWD Washroom.jpg"
                  alt="PWD Washroom"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Chennai_Washroom4.jpg"
                  alt="Washroom"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="aspect-square group cursor-pointer">
                <img
                  src="/interior/Master_Bedroom.jpg"
                  alt="Master Bedroom"
                  className="w-full h-full object-cover rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* DESKTOP LAYOUT - Original Horizontal Scroll */
        <div className="relative h-screen w-screen md:flex items-center overflow-hidden">
          <div ref={trackRef} className="flex h-full w-[200vw] gap-20 relative">
            {/* FIRST CONTAINER */}
            <div
              ref={firstContainerRef}
              className="w-screen h-full flex items-center justify-center shrink-0 px-10"
            >
              <div className="container mx-auto pt-15">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
                  {/* LEFT COLUMN - Two Images */}
                  <div className="flex flex-col gap-10 lg:gap-20">
                    <div className="w-full max-w-[210px] h-[210px] aspect-video group cursor-pointer">
                      <img
                        src="/interior/Chennai_Bedroom4_View2.jpg"
                        alt="Building 1"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="w-full max-w-[210px] h-[210px] aspect-video group cursor-pointer">
                      <img
                        src="/interior/Chennai_Entrance_Stilt Floor.jpg"
                        alt="Building 3"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105 lg:translate-x-20"
                      />
                    </div>
                  </div>

                  {/* CENTER COLUMN - Text + Image */}
                  <div className="flex flex-col gap-5">
                    <div className="text-start">
                      <h2 className="font-stylish text-5xl md:text-6xl 2xl:text-7xl text-primary mb-4">
                        Crafted Interiors
                      </h2>
                      <p className="text-slate-950 text-sm md:text-md lg:text-base leading-relaxed px-2 font-semibold">
                        Step into homes designed from the inside out. Our interiors
                        balance warm ambience with clean, modern lines to create
                        spaces that feel inviting, uncluttered, and alive. From the
                        living room to the bedroom, every area is planned for real
                        everyday living — where comfort, light, and movement flow
                        naturally together.
                      </p>
                    </div>

                    <div className="w-full max-w-[350px] h-[315px] group cursor-pointer">
                      <img
                        src="/interior/Chennai_Kitchen.jpg"
                        alt="Main Tower"
                        className="w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* RIGHT COLUMN - Two Images */}
                  <div className="flex flex-col gap-10 lg:gap-20">
                    <div className="w-full max-w-[210px] h-[210px] ml-auto aspect-video group cursor-pointer">
                      <img
                        src="/interior/Chennai_Living Area.jpg"
                        alt="Building 2"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="w-full max-w-[210px] h-[210px] ml-auto aspect-video group cursor-pointer">
                      <img
                        src="/interior/Chennai_Lounge Area.jpg"
                        alt="Building 4"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105 lg:-translate-x-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECOND CONTAINER */}
            <div className="w-screen h-full flex items-center justify-center shrink-0 px-20">
              <div className="container mx-auto pt-15">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
                  {/* LEFT COLUMN - Two Images */}
                  <div className="flex flex-col gap-10 lg:gap-20">
                    <div className="w-full max-w-[210px] h-[210px] aspect-video group cursor-pointer">
                      <img
                        src="/interior/Chennai_Master Bedroom01.jpg"
                        alt="Building 1"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="w-full max-w-[210px] h-[210px] aspect-video group cursor-pointer">
                      <img
                        src="/interior/Chennai_Master Washroom.jpg"
                        alt="Building 3"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105 lg:-translate-x-25"
                      />
                    </div>
                  </div>

                  {/* CENTER COLUMN - Text + Image */}
                  <div className="flex flex-col gap-5">
                    <div className="w-full max-w-[350px] h-[315px] group cursor-pointer">
                      <img
                        src="/interior/Chennai_PWD Washroom.jpg"
                        alt="Main Tower"
                        className="w-full h-full object-cover rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-start">
                      <h2 className="font-stylish text-5xl md:text-6xl 2xl:text-7xl text-primary mb-4">
                        Everyday Comfort
                      </h2>
                      <p className="text-slate-950 text-sm md:text-md lg:text-base leading-relaxed px-2 font-semibold">
                        Behind every beautiful room is thoughtful detailing. Smart
                        storage, efficient layouts, durable finishes, and carefully
                        chosen materials make each interior both elegant and
                        practical. From kitchens and washrooms to lounge areas and
                        suites, our designs are built to look stunning and work
                        effortlessly for the people who live in them.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT COLUMN - Two Images */}
                  <div className="flex flex-col gap-10 lg:gap-20">
                    <div className="w-full max-w-[210px] h-[210px] ml-auto aspect-video group cursor-pointer">
                      <img
                        src="/interior/Chennai_Washroom4.jpg"
                        alt="Building 2"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="w-full max-w-[210px] h-[210px] ml-auto aspect-video group cursor-pointer">
                      <img
                        src="/interior/Master_Bedroom.jpg"
                        alt="Building 4"
                        className="w-full h-full object-cover rounded-xl shadow-xl transition-all duration-500 group-hover:scale-105 lg:translate-x-20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionFour;