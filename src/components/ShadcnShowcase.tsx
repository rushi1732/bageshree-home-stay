import React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ShieldCheck, Zap, Code2 } from "lucide-react"

export const ShadcnShowcase: React.FC = () => {
  return (
    <section id="shadcn" className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col items-start gap-4 mb-14">
        <Badge variant="outline" className="border-blue-500/30 text-blue-400 font-mono text-xs uppercase">
          shadcn/ui Design System
        </Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-100">
          Tailored <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Accessible Components</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-2xl">
          Pre-configured with Tailwind variables, dark theme aesthetics, Radix primitives, and accessible keyboard navigation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Buttons showcase */}
        <Card className="hover:border-slate-700 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2 text-indigo-400 mb-2">
              <Zap className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-wider">Button Hierarchy</span>
            </div>
            <CardTitle>Action Variants</CardTitle>
            <CardDescription>
              Multiple predefined variants ready for high-converting CTAs.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Button variant="creative" className="w-full">
              <Sparkles className="w-4 h-4 mr-2" />
              Creative Gradient
            </Button>
            <Button variant="default" className="w-full">
              Primary Action
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-slate-500 font-mono">
            src/components/ui/button.tsx
          </CardFooter>
        </Card>

        {/* Card 2: Badges and Tags */}
        <Card className="hover:border-slate-700 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-wider">Status & Metadata</span>
            </div>
            <CardTitle>Badge Variants</CardTitle>
            <CardDescription>
              Compact contextual elements for product status, tags, and highlights.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2.5 items-center">
            <Badge variant="glowing">Glowing Feature</Badge>
            <Badge variant="default">Primary Badge</Badge>
            <Badge variant="secondary">Secondary Tag</Badge>
            <Badge variant="outline">Minimal Outline</Badge>
            <Badge variant="destructive">Critical Alert</Badge>
          </CardContent>
          <CardFooter className="text-xs text-slate-500 font-mono mt-auto">
            src/components/ui/badge.tsx
          </CardFooter>
        </Card>

        {/* Card 3: Code Expansion */}
        <Card className="hover:border-slate-700 transition-colors">
          <CardHeader>
            <div className="flex items-center gap-2 text-purple-400 mb-2">
              <Code2 className="w-5 h-5" />
              <span className="text-xs font-mono uppercase tracking-wider">Expandable CLI</span>
            </div>
            <CardTitle>Add New Components</CardTitle>
            <CardDescription>
              Instantly pull any official shadcn component using the CLI.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
              <p className="text-slate-500"># Add dropdown menu, avatar, etc.</p>
              <p className="text-indigo-400 mt-1">pnpm dlx shadcn@latest add dropdown-menu</p>
              <p className="text-indigo-400">pnpm dlx shadcn@latest add avatar</p>
            </div>
          </CardContent>
          <CardFooter className="text-xs text-slate-500 font-mono">
            components.json configured
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
