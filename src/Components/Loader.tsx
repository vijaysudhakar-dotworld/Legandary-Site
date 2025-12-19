import React, { useEffect, useState } from "react";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [delayedLoading, setDelayedLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // 1. Wait 1 second before starting the exit animation
      const startExitTimer = setTimeout(() => {
        setDelayedLoading(false);

        // 2. Wait 1 second (duration of transition) before unmounting
        const unmountTimer = setTimeout(() => {
          setShouldRender(false);
        }, 1000);

        return () => clearTimeout(unmountTimer);
      }, 1000);

      return () => clearTimeout(startExitTimer);
    } else {
      setDelayedLoading(true);
      setShouldRender(true);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`bg-gradient-to-b md:bg-gradient-to-l from-[#937fa1] md:from-[#7290bc] via-[#e9aa97ff] to-[#febb8eff] h-screen w-screen fixed inset-0 z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out overflow-hidden ${delayedLoading ? "translate-y-0" : "translate-y-full"
        }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-white  text-5xl md:text-6xl font-stylish tracking-wide mb-4 drop-shadow-md">
            Legendary Builders
            <span className="ml-3 inline-block animate-[bounce_1s_ease-in-out_infinite] text-white">.</span>
            <span className="inline-block animate-[bounce_1s_ease-in-out_0.2s_infinite] text-white">.</span>
            <span className="inline-block animate-[bounce_1s_ease-in-out_0.4s_infinite] text-white">.</span>
          </h2>
          <p className="text-white/80 text-sm tracking-widest uppercase font-montserrat">
            Crafting Your Vision
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-linear-to-r from-white/50 via-white to-white/50 rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
