import { useEffect, useState } from 'react'
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
  const { active, progress } = useProgress()
  // Stay loading as long as THREE is active OR progress is not 100%
  const loading = active || progress < 100
  return <Loader isLoading={loading} />
}

export default function App() {
  const [isExploring, setIsExploring] = useState(false)
  const [savedScrollPos, setSavedScrollPos] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [activeExploring, setActiveExploring] = useState(false)

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle delayed unmount for SectionSeven to allow for fade-out animation
  useEffect(() => {
    if (isExploring) {
      setActiveExploring(true)
    } else {
      const timer = setTimeout(() => {
        setActiveExploring(false)
      }, 500) // Match the transition duration
      return () => clearTimeout(timer)
    }
  }, [isExploring])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    })

    if (isExploring) {
      lenis.destroy()
    } else {
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

      // Restore scroll position if returning from exploration
      if (savedScrollPos > 0) {
        lenis.scrollTo(savedScrollPos, { immediate: true })
        // Force a refresh of all scroll animations
        setTimeout(() => {
          import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
            ScrollTrigger.refresh()
          })
        }, 100)
      }
    }

    return () => {
      lenis.destroy()
    }
  }, [isExploring, savedScrollPos])

  const handleExplore = () => {
    setSavedScrollPos(window.scrollY)
    setIsExploring(true)
  }

  const handleClose = () => {
    setIsExploring(false)
  }

  return (
    <>
      <ProductionViewer />

      <div
        className="relative z-10 overflow-hidden transition-opacity duration-300 bg-[#ab8294]/20"
        style={{
          opacity: isExploring ? 0 : 1,
          pointerEvents: isExploring ? 'none' : 'auto',
          visibility: isExploring ? 'hidden' : 'visible'
        }}
      >
        <div className="section-container">
          <SectionOne />
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
          <SectionSix onExplore={handleExplore} />
        </div>
      </div>

      <div className={`fixed inset-0 z-50 transition-all duration-500 ${isExploring ? ' opacity-100' : ' opacity-0 pointer-events-none'}`}>
        {(activeExploring || !isMobile) && <SectionSeven onClose={handleClose} />}
      </div>

      <LoadingScreen />
    </>
  )
}
