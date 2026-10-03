import React from "react"
import { ThreeCanvas } from "@/components/ThreeCanvas"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-mono tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Complete Modern Web Stack Active</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Creative Web <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Starter Foundation
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
            सर्व हाय-एंड क्रिएटिव्ह टूल्स आधीच इन्स्टॉल आणि कॉन्फिगर केलेले आहेत. नवीन वेबसाइट किंवा 3D पोर्टफोलिओ सुरू करण्यासाठी परिपूर्ण स्टार्टर.
          </p>

          {/* Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Tailwind CSS",
              "shadcn/ui",
              "GSAP 3",
              "Motion",
              "Lenis",
              "React Three Fiber",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 shadow-sm"
              >
                ✓ {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#canvas">
              <Button variant="creative" size="lg" className="gap-2">
                <span>Explore 3D Canvas</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#gsap">
              <Button variant="outline" size="lg" className="border-slate-800 hover:bg-slate-900">
                View GSAP & Motion
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: React Three Fiber Canvas */}
        <div id="canvas" className="lg:col-span-5 w-full">
          <ThreeCanvas />
        </div>
      </div>
    </section>
  )
}
