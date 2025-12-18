import React, { useEffect, useRef } from "react";

interface SectionSevenProps {
  onClose: () => void;
  onResetCamera?: () => void;
  pointerSelectedRef?: React.MutableRefObject<boolean>;
}

const SectionSeven: React.FC<SectionSevenProps> = ({
  onClose,
  pointerSelectedRef,
}) => {
  const pointerSelected = pointerSelectedRef?.current ?? false;

  const prevPointerSelectedRef = useRef(pointerSelected);

  useEffect(() => {
    prevPointerSelectedRef.current = pointerSelected;
  }, [pointerSelected]);

  return (
    <>
      <iframe
        src="https://d1cesklfj23k3k.cloudfront.net/"
        className="w-screen h-screen border-0 absolute top-0 left-0 overflow-hidden"
        title="Contact Form"
      ></iframe>
      <div className="absolute bottom-10 w-full flex justify-center z-200">
        <button
          className="text-xs pointer-events-auto h-15 w-15 p-8 rounded-full bg-white/95 backdrop:backdrop-blur-3xl text-[#352539] font-semibold tracking-widest shadow-lg transition-all duration-200 hover:bg-white flex justify-center items-center hover:scale-105 hover:shadow-xl cursor-pointer hover:translate-y-[-3px]"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default SectionSeven;
