import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Maximize2, Bed, Eye, Check, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VILLAS } from "@/data/homestayData"
import type { Villa } from "@/types/homestay"

interface VillaShowcaseProps {
  onOpenBooking: (villaId: string) => void
}

export const VillaShowcase: React.FC<VillaShowcaseProps> = ({ onOpenBooking }) => {
  const [activeType, setActiveType] = useState<string>("all")
  const [selectedVilla, setSelectedVilla] = useState<Villa>(VILLAS[0])
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0)

  const filteredVillas = activeType === "all" 
    ? VILLAS 
    : VILLAS.filter((v) => v.type === activeType)

  const handleSelectVilla = (villa: Villa) => {
    setSelectedVilla(villa)
    setActiveImageIndex(0)
  }

  return (
    <section id="villas" className="py-24 bg-[#0c1510] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>Curated Sanctuaries • राहण्याची सोय</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#f7f4ee]">
            Villas & Cottages Crafted in Laterite & Teak
          </h2>
          <p className="text-sm sm:text-base text-[#8fa898] mt-3">
            Each dwelling is secluded in its own private clearing amidst the spice orchard, ensuring pure acoustic stillness and unhindered forest views.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Stays (4)" },
              { id: "courtyard", label: "Courtyard Villas" },
              { id: "riverfront", label: "Riverfront Chalet" },
              { id: "machan", label: "Treehouse Machan" },
              { id: "haveli", label: "Heritage Wada" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveType(tab.id)
                  const matching = tab.id === "all" ? VILLAS[0] : VILLAS.find(v => v.type === tab.id)
                  if (matching) setSelectedVilla(matching)
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeType === tab.id
                    ? "bg-[#c5705d] text-white shadow-md shadow-[#c5705d]/20"
                    : "bg-[#132219] text-[#8fa898] hover:text-[#f7f4ee] hover:bg-[#1b2f23] border border-[#2b4232]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Villa Deep Dive Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVilla.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#101c14] border border-[#2b4232] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl items-center"
          >
            {/* Left Gallery & Preview */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Image with Zoom effect */}
              <div className="relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#2b4232]">
                <img
                  src={selectedVilla.gallery[activeImageIndex] || selectedVilla.featuredImage}
                  alt={selectedVilla.name}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                
                {/* Highlight Badge */}
                <div className="absolute top-4 left-4 bg-[#0c1510]/85 border border-[#2b4232] px-3.5 py-1.5 rounded-full backdrop-blur-md">
                  <span className="text-[11px] font-mono text-[#d4a373] tracking-wide">
                    {selectedVilla.highlight}
                  </span>
                </div>

                {/* Marathi Subtitle */}
                <div className="absolute bottom-4 right-4 bg-[#0c1510]/90 border border-[#2b4232] px-3.5 py-1.5 rounded-lg backdrop-blur-md">
                  <span className="text-xs font-serif text-[#f7f4ee]">
                    {selectedVilla.marathiName}
                  </span>
                </div>
              </div>

              {/* Thumbnail Selector */}
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {selectedVilla.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      activeImageIndex === idx
                        ? "border-[#d4a373] scale-105 shadow-md"
                        : "border-[#2b4232] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Information & Amenities */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#d4a373] uppercase">
                  {selectedVilla.tagline}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f7f4ee] mt-1">
                  {selectedVilla.name}
                </h3>
                <p className="text-sm text-[#8fa898] mt-3 leading-relaxed">
                  {selectedVilla.description}
                </p>
              </div>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#2b4232]/80">
                <div className="flex items-center gap-2.5">
                  <Maximize2 className="w-4 h-4 text-[#d4a373]" />
                  <div>
                    <span className="text-[10px] text-[#8fa898] uppercase block">Space</span>
                    <span className="text-xs font-semibold text-[#f7f4ee]">{selectedVilla.sqft} sq.ft</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-[#d4a373]" />
                  <div>
                    <span className="text-[10px] text-[#8fa898] uppercase block">Capacity</span>
                    <span className="text-xs font-semibold text-[#f7f4ee]">{selectedVilla.capacity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Bed className="w-4 h-4 text-[#d4a373]" />
                  <div>
                    <span className="text-[10px] text-[#8fa898] uppercase block">Bedding</span>
                    <span className="text-xs font-semibold text-[#f7f4ee]">{selectedVilla.bed}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Eye className="w-4 h-4 text-[#d4a373]" />
                  <div>
                    <span className="text-[10px] text-[#8fa898] uppercase block">Aspect</span>
                    <span className="text-xs font-semibold text-[#f7f4ee]">{selectedVilla.view}</span>
                  </div>
                </div>
              </div>

              {/* Key Amenities */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#d4a373] mb-2.5">
                  Included Sanctuary Amenities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#c0cfc6]">
                  {selectedVilla.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#d4a373] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-[#8fa898] uppercase block">
                    Starting Tariff
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-serif text-[#f7f4ee]">
                      ₹{selectedVilla.pricePerNight.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#8fa898]">/ night + taxes</span>
                  </div>
                </div>

                <Button
                  onClick={() => onOpenBooking(selectedVilla.id)}
                  className="bg-[#c5705d] hover:bg-[#b05a46] text-[#f7f4ee] px-6 py-6 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#c5705d]/25 transition-all cursor-pointer"
                >
                  <span>Reserve This Villa</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Small Switcher Strip for remaining villas */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredVillas.map((villa) => (
            <button
              key={villa.id}
              onClick={() => handleSelectVilla(villa)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                selectedVilla.id === villa.id
                  ? "bg-[#16271c] border-[#d4a373] shadow-md shadow-[#d4a373]/10"
                  : "bg-[#111e16] border-[#2b4232] hover:border-[#8fa898]/40"
              }`}
            >
              <div>
                <span className="text-[10px] font-mono text-[#d4a373] uppercase">
                  {villa.marathiName}
                </span>
                <h4 className="text-sm font-serif font-medium text-[#f7f4ee] mt-0.5">
                  {villa.name}
                </h4>
                <p className="text-[11px] text-[#8fa898] mt-1 line-clamp-1">
                  {villa.tagline}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#2b4232]/60 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#f7f4ee]">
                  ₹{villa.pricePerNight.toLocaleString('en-IN')}/night
                </span>
                <span className="text-[#d4a373] font-medium text-[11px]">
                  View Details →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
