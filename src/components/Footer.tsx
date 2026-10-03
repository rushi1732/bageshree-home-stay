import React, { useState } from "react"
import { MapPin, Phone, Mail, ArrowUp, Send, CheckCircle, Leaf, MessageSquare } from "lucide-react"
import { CONTACT_INFO } from "@/data/homestayData"

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#080d0a] text-[#8fa898] border-t border-[#2b4232]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2b4232]/60">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#192b20] border border-[#d4a373]/60 flex items-center justify-center p-2">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path
                    d="M20 5C14 12 11 20 11 27C11 32 15 36 20 36C25 36 29 32 29 27C29 20 26 12 20 5Z"
                    fill="#273d2f"
                    stroke="#d4a373"
                    strokeWidth="1.5"
                  />
                  <circle cx="20" cy="28" r="2.5" fill="#c5705d" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-xl text-[#f7f4ee] tracking-widest uppercase block">
                  Bageshree
                </span>
                <span className="text-[10px] font-mono text-[#d4a373] uppercase tracking-wider">
                  बागेश्री होमस्टे • कोकण
                </span>
              </div>
            </div>

            <p className="text-xs text-[#8fa898] leading-relaxed">
              A serene 12-acre boutique eco-farmstead nestled in the foothills of Sahyadri, Devrukh, Ratnagiri. Dedicated to timeless Konkani hospitality, organic gastronomy, and slow living.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#c0cfc6]">
              <Leaf className="w-3.5 h-3.5 text-[#d4a373]" />
              <span>Certified Sustainable Eco-Sanctuary (No Plastic Zone)</span>
            </div>
          </div>

          {/* Location & Directions */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4a373] font-semibold">
              Estate Location & Direct Desk
            </h4>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#d4a373] shrink-0 mt-0.5" />
              <span className="text-[#c0cfc6] leading-relaxed">
                {CONTACT_INFO.address}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#d4a373] shrink-0" />
              <div className="flex items-center gap-2">
                <a href={`tel:+${CONTACT_INFO.rawPhone}`} className="hover:text-[#f7f4ee] font-mono transition-colors">
                  {CONTACT_INFO.primaryPhone}
                </a>
                <span className="text-[#2b4232]">•</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-mono inline-flex items-center gap-1 transition-colors"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#d4a373] shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#f7f4ee] font-mono transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>
            <p className="text-[11px] text-[#8fa898] pt-1">
              Host Desk Timings: {CONTACT_INFO.bookingTiming}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4a373] font-semibold mb-3">
              Sanctuary
            </h4>
            <ul className="space-y-2">
              <li><a href="#story" className="hover:text-[#f7f4ee] transition-colors">Our Story</a></li>
              <li><a href="#villas" className="hover:text-[#f7f4ee] transition-colors">Villas & Cottages</a></li>
              <li><a href="#rhythm" className="hover:text-[#f7f4ee] transition-colors">Daily Rhythm</a></li>
              <li><a href="#cuisine" className="hover:text-[#f7f4ee] transition-colors">Kokani Cuisine</a></li>
              <li><a href="#calculator" className="hover:text-[#f7f4ee] transition-colors">Tariff Calculator</a></li>
              <li><a href="#faq" className="hover:text-[#f7f4ee] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Seasonal Harvest Bulletin */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#d4a373] font-semibold">
              Seasonal Harvest Bulletin
            </h4>
            <p className="text-xs text-[#8fa898] leading-relaxed">
              Subscribe to receive private invitations for the May Alphonso mango harvest, monsoon stream trails, and winter raga retreats.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#111e16] border border-[#2b4232] rounded-xl px-3.5 py-2.5 text-xs text-[#f7f4ee] placeholder-[#8fa898]/50 focus:outline-none focus:border-[#d4a373]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-[#c5705d] hover:bg-[#b05a46] text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-[#111e16] p-2.5 rounded-xl border border-[#2b4232]">
                <CheckCircle className="w-4 h-4" />
                <span>धन्यवाद! You are subscribed to our seasonal letters.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Bageshree Home Stay (बागेश्री होमस्टे). All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-[#d4a373]">Konkan Heritage Hospitality</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#f7f4ee] hover:text-[#d4a373] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
