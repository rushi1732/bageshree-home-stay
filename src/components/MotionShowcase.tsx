import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Palette, Box, Activity, Compass, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const tabs = [
  { id: "fluid", label: "Fluid Layout", icon: Palette, text: "Shared layout animations with layoutId seamlessly morphing elements between positions." },
  { id: "spring", label: "Spring Physics", icon: Activity, text: "Natural velocity-based spring curves that respond realistically to user velocity." },
  { id: "gestures", label: "Gestures & Drag", icon: Compass, text: "First-class drag, pinch, pan, hover, and press gesture detection." },
  { id: "3d", label: "3D Transforms", icon: Box, text: "GPU-accelerated perspective rotateX, rotateY, and translateZ layers." },
]

export const MotionShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col items-start gap-4 mb-14">
        <Badge variant="glowing" className="uppercase font-mono text-xs">
          Motion (Framer Motion)
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Declarative <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Micro-Interactions</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl">
          Try hovering, clicking tabs, or dragging the interactive floating card to experience Motion's physics simulation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Tab selection with layoutId pill */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-xl backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors select-none ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-indigo-600/30 border border-indigo-500/40 rounded-lg shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>

          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm min-h-[160px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {tabs
                .filter((t) => t.id === activeTab)
                .map((current) => (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2 text-indigo-400 font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{current.label} Capabilities</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {current.text}
                    </p>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Draggable card with 3D tilt and spring reset */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div
            drag
            dragConstraints={{ left: -60, right: 60, top: -40, bottom: 40 }}
            dragElastic={0.2}
            whileHover={{ scale: 1.03, rotateZ: 0.5 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-md p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-slate-900/90 via-indigo-950/20 to-purple-950/30 shadow-2xl backdrop-blur-xl cursor-grab active:cursor-grabbing select-none"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                Interactive Canvas Card
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Draggable
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Feel the Physics
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Click and drag this card anywhere around its container. Notice how it snaps back with realistic damping and momentum.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Spring Damping: 25</span>
              <span className="text-xs font-mono text-emerald-400">● 60 FPS Smooth</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
