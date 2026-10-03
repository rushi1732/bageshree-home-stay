import React, { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { Clock } from "lucide-react"
import { DAY_RHYTHM } from "@/data/homestayData"

gsap.registerPlugin(ScrollTrigger)

export const GsapExperienceScroll: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Check for prefers-reduced-motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      if (prefersReducedMotion) return

      // Animate cards on scroll entrance
      cardsRef.current.forEach((card) => {
        if (!card) return
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="rhythm"
      ref={sectionRef}
      className="py-24 bg-[#0c1510] relative overflow-hidden"
    >
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#2b4232] to-transparent hidden lg:block -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-2">
            <Clock className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>GSAP Scroll Experience • निसर्गाची लय</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#f7f4ee]">
            A Day in Rhythm at Bageshree
          </h2>
          <p className="text-sm sm:text-base text-[#8fa898] mt-3">
            Without alarms or schedules. Let the sun, birdsong, and the murmuring stream guide the peaceful cadence of your day.
          </p>
        </div>

        {/* Timeline Sequence */}
        <div ref={trackRef} className="space-y-16 lg:space-y-24">
          {DAY_RHYTHM.map((item, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el
                }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Photo Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-[#2b4232] shadow-2xl group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 sm:h-96 object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1510] via-transparent to-transparent opacity-70" />

                    <div className="absolute top-4 left-4 bg-[#0c1510]/85 border border-[#2b4232] px-3 py-1 rounded-full backdrop-blur-md">
                      <span className="text-[10px] font-mono text-[#d4a373] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-xs text-[#c0cfc6] italic">
                      "{item.sensoryNote}"
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132219] border border-[#2b4232] text-xs font-mono text-[#d4a373] mb-3">
                    <Clock className="w-3 h-3" />
                    <span>{item.time} • {item.period}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#f7f4ee]">
                    {item.title}
                  </h3>

                  <span className="text-xs font-serif text-[#d4a373] mt-1 block">
                    {item.marathiTitle}
                  </span>

                  <p className="text-sm text-[#8fa898] mt-4 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
