import React, { useState, useEffect } from "react"
import { Phone, Menu, X, CalendarCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onOpenBooking: (villaId?: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "The Estate", href: "#story" },
    { name: "Villas & Suites", href: "#villas" },
    { name: "3D Retreat", href: "#sanctuary-3d" },
    { name: "Daily Rhythm", href: "#rhythm" },
    { name: "Konkani Feast", href: "#cuisine" },
    { name: "Tariff Calculator", href: "#calculator" },
    { name: "Guest Memoirs", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c1510]/90 backdrop-blur-md border-b border-[#2b4232]/80 shadow-lg shadow-black/30 py-3"
          : "bg-gradient-to-b from-[#0c1510]/90 via-[#0c1510]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Emblem */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          {/* Handcrafted Emblem */}
          <div className="w-10 h-10 rounded-full bg-[#192b20] border border-[#d4a373]/60 flex items-center justify-center p-2 group-hover:border-[#d4a373] transition-colors shadow-inner">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M20 5C14 12 11 20 11 27C11 32 15 36 20 36C25 36 29 32 29 27C29 20 26 12 20 5Z"
                fill="#273d2f"
                stroke="#d4a373"
                strokeWidth="1.5"
              />
              <path
                d="M20 9V32"
                stroke="#d4a373"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="20" cy="28" r="2.5" fill="#c5705d" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-[0.2em] text-[#f7f4ee] group-hover:text-[#d4a373] transition-colors uppercase leading-none">
              Bageshree
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] tracking-widest text-[#d4a373] uppercase font-mono">
                बागेश्री
              </span>
              <span className="text-[10px] text-[#8fa898] tracking-widest">
                • Luxury Konkan Farmstead
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="text-xs uppercase tracking-wider font-medium text-[#c0cfc6] hover:text-[#d4a373] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4a373] hover:after:w-full after:transition-all cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Quick Call pill */}
          <a
            href="tel:+919822481090"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2b4232] bg-[#132219]/80 text-[#8fa898] hover:text-[#f7f4ee] hover:border-[#d4a373] transition-all text-xs font-mono"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>+91 98224 81090</span>
          </a>

          {/* Reserve Stay Button */}
          <Button
            onClick={() => onOpenBooking()}
            className="bg-[#c5705d] hover:bg-[#b05a46] text-[#f7f4ee] text-xs font-semibold uppercase tracking-wider px-4 sm:px-5 py-2 h-auto rounded-full shadow-md shadow-[#c5705d]/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Reserve Stay</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#f7f4ee] hover:text-[#d4a373] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1913]/98 border-b border-[#2b4232] px-6 py-6 mt-3 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 text-xs text-[#d4a373] uppercase tracking-widest font-mono">
            <MapPin className="w-3.5 h-3.5" />
            <span>Devrukh, Ratnagiri • Western Ghats</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm py-2 text-[#c0cfc6] hover:text-[#d4a373] transition-colors border-b border-[#2b4232]/40"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919822481090"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-[#2b4232] bg-[#16271c] text-[#f7f4ee] text-xs font-mono"
            >
              <Phone className="w-4 h-4 text-[#d4a373]" />
              <span>Call Host: +91 98224 81090</span>
            </a>

            <Button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenBooking()
              }}
              className="w-full bg-[#c5705d] hover:bg-[#b05a46] text-[#f7f4ee] py-2.5 text-xs uppercase tracking-wider font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Check Availability & Dates</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
