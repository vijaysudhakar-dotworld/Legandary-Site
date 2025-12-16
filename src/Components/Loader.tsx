import React, { useEffect, useState } from "react";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Delay unmounting to allow slide-down animation
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShouldRender(true);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`h-screen w-screen fixed inset-0 z-100 flex items-center justify-center bg-loader-gradient transition-all duration-1000 ease-in-out overflow-hidden  ${
        isLoading ? "translate-y-0 " : "translate-y-full "
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated circles loader */}
        <div className="relative w-32 h-32">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
          
          {/* Animated arc */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin"></div>
          
          {/* Inner pulsing circle */}
          {/* <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div> */}
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-white animate-ping"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wider mb-2">
            LOADED
            <span className="inline-block animate-[bounce_1s_ease-in-out_infinite]">.</span>
            <span className="inline-block animate-[bounce_1s_ease-in-out_0.2s_infinite]">.</span>
            <span className="inline-block animate-[bounce_1s_ease-in-out_0.4s_infinite]">.</span>
          </h2>
          <p className="text-white/60 text-sm tracking-widest uppercase">
            Preparing Experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
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
