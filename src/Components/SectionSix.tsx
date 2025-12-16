import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props { onExplore?: () => void }

const SectionSix: React.FC<Props> = ({ onExplore }) => {
  return (
      <section
        id="section-six"
        className="relative h-screen w-screen flex flex-col justify-center items-center"
      >
        <button
          onClick={onExplore}
          className="h-35 w-35 rounded-full bg-white/80 backdrop:backdrop-blur-3xl text-[#352539] font-semibold tracking-widest uppercase shadow-lg  transition-all duration-200 hover:bg-white/90  flex justify-center items-center hover:scale-105 hover:shadow-xl cursor-pointer hover:translate-y-[-3px]"
        >
          Explore
        </button>
      </section>
  );
};

export default SectionSix;