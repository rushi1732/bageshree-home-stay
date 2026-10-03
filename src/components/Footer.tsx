import React from "react"
import { Layers } from "lucide-react"

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-slate-200">
            Creative Web Starter Kit
          </span>
          <span className="text-xs text-slate-500">|</span>
          <span className="text-xs text-slate-400">
            Tailwind • shadcn • GSAP • Motion • Lenis • R3F
          </span>
        </div>

        <div className="text-xs text-slate-500 text-center md:text-right">
          Ready to clone for your next projects • Production-grade template
        </div>
      </div>
    </footer>
  )
}
