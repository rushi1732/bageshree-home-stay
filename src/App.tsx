import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { GsapShowcase } from "@/components/GsapShowcase"
import { MotionShowcase } from "@/components/MotionShowcase"
import { ShadcnShowcase } from "@/components/ShadcnShowcase"
import { Footer } from "@/components/Footer"

export function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white relative">
        {/* Subtle grid background */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-20 -z-10" 
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        <Navbar />
        
        <main>
          <Hero />
          
          <div id="gsap">
            <GsapShowcase />
          </div>

          <div id="motion">
            <MotionShowcase />
          </div>

          <ShadcnShowcase />
        </main>

        <Footer />
      </div>
    </SmoothScrollProvider>
  )
}

export default App
