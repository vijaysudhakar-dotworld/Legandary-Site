import { useEffect } from 'react'
import Lenis from 'lenis'
import { useProgress } from '@react-three/drei'
import Loader from './Components/Loader'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
// import BuildingViewer from './Components/BuildingViewer'
import ProductionViewer from './Components/ProductionViewer'
import SectionThree from './Components/SectionThree'
import SectionFive from './Components/SectionFive'
import SectionSix from './Components/SectionSix'
import SectionFour from './Components/SectionFour'
import SectionSeven from './Components/SectionSeven'

function LoadingScreen() {
  const { active } = useProgress()
  return <Loader isLoading={active} />
}

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    lenis.on('scroll', () => {
      import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
        ScrollTrigger.update();
      });
    });

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <ProductionViewer />
      {/* <BuildingViewer /> */}



      <div className="relative z-10">
        <div className="pointer-events-auto">
          <div className="section-container">
            <SectionOne isReady={true} />
          </div>
          <div className="section-container">
            <SectionTwo />
          </div>
          <div className="section-container">
            <SectionThree />
          </div>
          <div className="section-container">
            <SectionFour />
          </div>
          <div className="section-container">
            <SectionFive />
          </div>
          <div className="section-container">
            <SectionSix />
          </div>
        </div>
      </div>
      {/* <LoadingScreen /> */}
    </>
  )
}
