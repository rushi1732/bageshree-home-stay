import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { Sparkles, Layers, Zap, Cpu } from "lucide-react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

const features = [
  {
    icon: Zap,
    title: "High Performance Timeline",
    description: "GSAP delivers 60fps buttery-smooth timeline choreography synchronized with hardware acceleration.",
    tag: "GSAP Core",
  },
  {
    icon: Layers,
    title: "ScrollTrigger Dynamics",
    description: "Pin sections, scrub animations on scroll, and create immersive cinematic storytelling.",
    tag: "ScrollTrigger",
  },
  {
    icon: Cpu,
    title: "Lenis Virtual Momentum",
    description: "Decouples wheel & touch events for natural momentum scrolling without browser stutter.",
    tag: "Lenis Smooth",
  },
  {
    icon: Sparkles,
    title: "React Three Fiber 3D",
    description: "Direct WebGL rendering with reactive declarative components for high-end web experiences.",
    tag: "Three.js / R3F",
  },
]

export const GsapShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      // Staggered fade in and slide up when scrolling into view
      gsap.from(cardsRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })
    },
    { scope: containerRef }
  )

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-start gap-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          GSAP + SCROLLTRIGGER
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Engineered for <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Kinetic Excellence</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl">
          Observe how ScrollTrigger orchestrates this section seamlessly as you scroll down. Lenis provides the smooth scroll foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              ref={(el) => { cardsRef.current[index] = el }}
              className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-emerald-400/80 uppercase tracking-wider mb-2">
                  {item.tag}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-slate-500 group-hover:text-emerald-400 transition-colors">
                <span>Production Ready</span>
                <span className="ml-auto font-mono">0{index + 1}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
