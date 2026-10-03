import React, { useState } from "react"
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { BrandStory } from "@/components/BrandStory"
import { VillaShowcase } from "@/components/VillaShowcase"
import { GsapExperienceScroll } from "@/components/GsapExperienceScroll"
import { KonkanCuisine } from "@/components/KonkanCuisine"
import { AmenitiesGrid } from "@/components/AmenitiesGrid"
import { TariffCalculator } from "@/components/TariffCalculator"
import { Statistics } from "@/components/Statistics"
import { Testimonials } from "@/components/Testimonials"
import { FaqSection } from "@/components/FaqSection"
import { CtaSection } from "@/components/CtaSection"
import { Footer } from "@/components/Footer"
import { ReservationDialog } from "@/components/ReservationDialog"

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedVillaId, setSelectedVillaId] = useState<string | undefined>(undefined)

  const handleOpenBooking = (villaId?: string) => {
    setSelectedVillaId(villaId)
    setBookingOpen(true)
  }

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#0c1510] text-[#f7f4ee] selection:bg-[#c5705d] selection:text-white relative">
        {/* Subtle warm paper grain & forest atmosphere background */}
        <div
          className="fixed inset-0 pointer-events-none opacity-20 -z-10"
          style={{
            backgroundImage: `radial-gradient(rgba(212, 163, 115, 0.15) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Global Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        <main>
          {/* 1. Hero Section */}
          <Hero onOpenBooking={handleOpenBooking} />

          {/* 2. Brand Introduction & Philosophy (with Web Audio Tanpura generator) */}
          <BrandStory />

          {/* 3. Interactive Villas & Suites Showcase */}
          <VillaShowcase onOpenBooking={handleOpenBooking} />

          {/* 5. GSAP Scroll Animation: A Day in Rhythm at Bageshree */}
          <GsapExperienceScroll />

          {/* 6. Farm to Table Konkani Cuisine Section */}
          <KonkanCuisine />

          {/* 7. Sanctuary Living Features & Amenities */}
          <AmenitiesGrid />

          {/* 8. Interactive Tariff & Stay Calculator */}
          <TariffCalculator onOpenBookingWithDetails={handleOpenBooking} />

          {/* 9. Key Achievements & Milestones */}
          <Statistics />

          {/* 10. Guest Memoirs & Testimonials */}
          <Testimonials />

          {/* 11. Frequently Asked Questions */}
          <FaqSection />

          {/* 12. Strong Final CTA Banner */}
          <CtaSection onOpenBooking={() => handleOpenBooking()} />
        </main>

        {/* 13. Comprehensive Premium Footer */}
        <Footer />

        {/* Modal Reservation Dialog */}
        <ReservationDialog
          open={bookingOpen}
          onOpenChange={setBookingOpen}
          selectedVillaId={selectedVillaId}
        />
      </div>
    </SmoothScrollProvider>
  )
}

export default App
