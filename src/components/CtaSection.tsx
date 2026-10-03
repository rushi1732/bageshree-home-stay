import React from "react"
import { CalendarCheck, Phone, MessageSquare, Sparkles, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CtaSectionProps {
  onOpenBooking: () => void
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-[#0a110d] relative overflow-hidden">
      {/* Background Scenic Image with rich dark overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bageshree-real.jpg"
          alt="Bageshree Home Stay Property - Devrukh, Konkan"
          className="w-full h-full object-cover object-[center_30%] filter brightness-[0.38] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a110d] via-[#0a110d]/75 to-[#0a110d]/90" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-4 px-4 py-1.5 rounded-full bg-[#16271c] border border-[#2b4232]">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a373]" />
          <span>Your Quiet Sanctuary Awaits</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#f7f4ee] font-light leading-tight">
          Disconnect from the noise. <br />
          <span className="italic font-normal text-[#d4a373]">
            Reconnect with yourself.
          </span>
        </h2>

        <p className="font-serif text-xl sm:text-2xl text-[#d4a373] mt-4 font-normal">
          "बागेश्रीमध्ये वेळ थांबतो आणि मन शांत होते."
        </p>

        <p className="text-sm sm:text-base text-[#8fa898] mt-4 max-w-2xl mx-auto leading-relaxed">
          Whether you need a solitary weekend of reading, a romantic anniversary by the river, or a wholesome family retreat with authentic Kokani feasts.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#c5705d] hover:bg-[#b05a46] text-[#f7f4ee] px-8 py-6 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xl shadow-[#c5705d]/25 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Check Dates & Reserve Villa</span>
          </Button>

          <a
            href="https://wa.me/919822481090?text=Hello%20Bageshree%20Home%20Stay%2C%20I%20would%20like%20to%20inquire%20about%20availability."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#2b4232] bg-[#14231a] hover:bg-[#1a2e22] text-[#f7f4ee] text-xs sm:text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all hover:border-[#d4a373]"
          >
            <MessageSquare className="w-4 h-4 text-[#d4a373]" />
            <span>WhatsApp Host Directly</span>
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8fa898]">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#d4a373]" />
            Devrukh, Sangameshwar • Ratnagiri, Konkan
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#d4a373]" />
            +91 98224 81090
          </span>
        </div>
      </div>
    </section>
  )
}
