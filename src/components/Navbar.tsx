import React from "react"
import { Layers, Terminal, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg tracking-tight text-white font-mono">
              CreativeStack
            </span>
            <Badge variant="outline" className="hidden sm:inline-flex text-[10px] font-mono border-slate-700 text-slate-400">
              v1.0.0
            </Badge>
          </div>
        </div>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
          <a href="#canvas" className="hover:text-white transition-colors">3D Fiber</a>
          <a href="#gsap" className="hover:text-white transition-colors">GSAP</a>
          <a href="#motion" className="hover:text-white transition-colors">Motion</a>
          <a href="#shadcn" className="hover:text-white transition-colors">shadcn/ui</a>
        </nav>

        {/* Quick Action / Dialog */}
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>कसे वापरावे (Guide)</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  नवीन वेबसाइटसाठी कसा वापर करावा?
                </DialogTitle>
                <DialogDescription className="text-slate-400 pt-2">
                  हा स्टार्टर प्रोजेक्ट तुमच्या सर्व नवीन प्रोजेक्ट्ससाठी रेडीमेड बेस म्हणून वापरता येईल:
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 my-2 text-sm">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                    1. नवीन प्रोजेक्टसाठी कॉपी करा:
                  </div>
                  <pre className="text-xs bg-slate-950 p-2.5 rounded-lg text-emerald-400 font-mono overflow-x-auto">
                    cp -r creative-web-starter my-new-website
                  </pre>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                    2. पॅकेजेस चालू करण्यासाठी:
                  </div>
                  <pre className="text-xs bg-slate-950 p-2.5 rounded-lg text-emerald-400 font-mono overflow-x-auto">
                    cd my-new-website &#10;pnpm install &#10;pnpm dev
                  </pre>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-indigo-400 font-semibold uppercase">
                    3. समाविष्ट लायब्ररीज:
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    <li>Tailwind CSS + shadcn/ui components</li>
                    <li>GSAP 3 + ScrollTrigger + @gsap/react</li>
                    <li>Motion (Framer Motion v14)</li>
                    <li>Lenis Smooth Momentum Scrolling</li>
                    <li>React Three Fiber + Drei + Three.js</li>
                    <li>Lucide Icons</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="creative" size="sm" className="font-semibold text-xs tracking-wider uppercase">
            <span>Live Template</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
