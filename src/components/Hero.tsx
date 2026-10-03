import React, { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Users, Home, Sparkles, ArrowRight, ShieldCheck, Waves, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VILLAS } from "@/data/homestayData"

interface HeroProps {
  onOpenBooking: (villaId?: string) => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedVilla, setSelectedVilla] = useState(VILLAS[0].id)
  const [guests, setGuests] = useState("2")

  const handleHeroBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onOpenBooking(selectedVilla)
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Imagery with Depth Layers */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85"
          alt="Bageshree Homestay Konkan estate landscape"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        {/* Subtle warm gradient masks for editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1510] via-[#0c1510]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c1510]/80 via-transparent to-[#0c1510]/70" />
      </div>

      {/* Floating dust/light subtle effect */}
      <div 
        className="absolute inset-0 -z-10 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(212, 163, 115, 0.25) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Heritage Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#d4a373]/40 bg-[#16291e]/80 backdrop-blur-md mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4a373]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#d4a373] uppercase font-mono font-medium">
              Boutique Eco-Sanctuary • Sahyadri Foothills
            </span>
          </motion.div>

          {/* Majestic Editorial Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[#f7f4ee] leading-[1.08] tracking-tight"
          >
            Where the Sahyadris whisper <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#d4a373]">and time pauses</span> to breathe.
          </motion.h1>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-[#c0cfc6] max-w-2xl font-light leading-relaxed"
          >
            Immerse yourself in 12 acres of secluded spice orchards, perennial mountain streams, and authentic Kokani chulivarcha hospitality in Devrukh, Ratnagiri.
          </motion.p>

          {/* Quick Availability & Booking Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="w-full mt-10"
          >
            <form
              onSubmit={handleHeroBookingSubmit}
              className="bg-[#101c14]/95 border border-[#2b4232] rounded-2xl p-3 sm:p-4 shadow-2xl backdrop-blur-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left"
            >
              {/* Check-in */}
              <div className="bg-[#172b1e]/60 border border-[#2b4232]/60 rounded-xl p-3 hover:border-[#d4a373]/50 transition-colors">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8fa898] block">
                  Dates of Stay
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-[#d4a373] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#f7f4ee]">
                    Flexible / 3 Nights
                  </span>
                </div>
              </div>

              {/* Villa / Suite Type */}
              <div className="bg-[#172b1e]/60 border border-[#2b4232]/60 rounded-xl p-3 hover:border-[#d4a373]/50 transition-colors">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8fa898] block">
                  Accommodation
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Home className="w-4 h-4 text-[#d4a373] shrink-0" />
                  <select
                    value={selectedVilla}
                    onChange={(e) => setSelectedVilla(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#f7f4ee] focus:outline-none cursor-pointer"
                  >
                    {VILLAS.map((v) => (
                      <option key={v.id} value={v.id} className="bg-[#101c14] text-[#f7f4ee]">
                        {v.name.split('The ')[1]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guests */}
              <div className="bg-[#172b1e]/60 border border-[#2b4232]/60 rounded-xl p-3 hover:border-[#d4a373]/50 transition-colors">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8fa898] block">
                  Guests
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Users className="w-4 h-4 text-[#d4a373] shrink-0" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-transparent text-xs sm:text-sm font-medium text-[#f7f4ee] focus:outline-none cursor-pointer"
                  >
                    <option value="1" className="bg-[#101c14] text-[#f7f4ee]">1 Guest (Solo Writer)</option>
                    <option value="2" className="bg-[#101c14] text-[#f7f4ee]">2 Adults (Couples Haven)</option>
                    <option value="4" className="bg-[#101c14] text-[#f7f4ee]">4 Guests (Family Suite)</option>
                    <option value="6" className="bg-[#101c14] text-[#f7f4ee]">6+ Guests (Heritage Wada)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex items-center">
                <Button
                  type="submit"
                  className="w-full h-full min-h-[52px] bg-[#c5705d] hover:bg-[#b05a46] text-[#f7f4ee] rounded-xl font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#c5705d]/20 transition-all cursor-pointer"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Trust markers & Features bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#c0cfc6]"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4a373]" />
              <span>Awarded Best Eco-Homestay 2025</span>
            </div>
            <span className="hidden sm:inline text-[#2b4232]">•</span>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#d4a373]" />
              <span>100% Organic Farm-to-Table Dining</span>
            </div>
            <span className="hidden sm:inline text-[#2b4232]">•</span>
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-[#d4a373]" />
              <span>Natural Stream & Stone Plunge Pools</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
