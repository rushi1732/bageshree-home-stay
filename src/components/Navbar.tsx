import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Menu, 
  X, 
  MessageCircle, 
  Award, 
  Calendar, 
  Compass
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';
import { SoundscapeToggle } from './SoundscapeToggle';

interface NavbarProps {
  onBookClick: () => void;
  onPageSelect?: (pageId: string) => void;
  activePage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onPageSelect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sleek, well-proportioned navigation items that never wrap or crowd
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'rooms', label: 'Rooms & Rates', href: '#rooms' },
    { id: 'dining', label: 'Dining', href: '#dining' },
    { id: 'amenities', label: 'Amenities', href: '#amenities' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'attractions', label: 'Explore', href: '#attractions' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (id: string, href: string) => {
    setMobileMenuOpen(false);
    if (onPageSelect) {
      onPageSelect(id);
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full relative z-50">
      {/* Top Essential Information Strip */}
      <div className="w-full bg-[#0a1d13] text-[#e3ece6] text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#1b4332]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: MTDC Certification */}
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 bg-[#1b4332] text-[#e5c178] px-2.5 py-0.5 rounded-full font-semibold tracking-wide text-[11px] border border-[#d4af37]/30">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-sans tabular-nums">MTDC Approved (R760)</span>
            </span>
            <span className="hidden md:inline text-[#a9c2b4] text-xs font-normal">
              Authentic Konkan Nature Homestay • Guhagar, Ratnagiri
            </span>
          </div>

          {/* Right: Soundscape & Direct Contact */}
          <div className="flex items-center gap-3 text-xs shrink-0">
            <SoundscapeToggle />

            <span className="text-[#1b4332] hidden sm:inline">|</span>

            <a 
              href={`tel:${PROPERTY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-white hover:text-[#d4af37] transition-colors font-medium"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span className="font-sans font-bold tabular-nums text-xs">{PROPERTY_INFO.phones[0]}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#fbf9f5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#e5dccf]' 
            : 'bg-[#fbf9f5] py-4 border-b border-[#ece4d6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Brand Logo - Fixed size, never squeezed */}
          <a 
            href="#home" 
            className="flex items-center gap-3 shrink-0 group select-none"
            aria-label="Bageshree Home Stay Homepage"
          >
            <img 
              src="/logo.png" 
              alt="Bageshree Home Stay Logo" 
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-contain shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-md border border-[#1b4332]/20 bg-[#fbf9f5]" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#143224] leading-tight group-hover:text-[#1b4332] transition-colors">
                Bageshree
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#856d49] font-semibold uppercase whitespace-nowrap">
                Home Stay • Guhagar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Centered, non-wrapping, clean typography */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id, link.href)}
                className="text-[13px] font-semibold text-[#2d3b32] hover:text-[#1b4332] transition-colors whitespace-nowrap relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1b4332] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Action CTAs - Fixed and crisp */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20am%20interested%20in%20reserving%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#173829] bg-[#e8f1ec] hover:bg-[#d5e7dd] transition-all border border-[#b8d6c7] whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1b4332]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-[#1b4332] hover:bg-[#133225] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#173829] hover:bg-[#ede5d8] transition-colors shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fbf9f5] border-b border-[#e5dccf] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id, link.href)}
                  className="text-left text-sm font-semibold text-[#1b3b2b] hover:text-[#1b4332] border-b border-[#eee7da] pb-2.5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Compass className="w-4 h-4 text-[#8a7a67]" />
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1b4332] text-white font-semibold text-sm shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  <span>Book Your Stay (Direct Inquiry)</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${PROPERTY_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#ede6da] text-[#1b3b2b] font-medium text-xs border border-[#ddd3c3]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1b4332]" />
                    <span>Call Host</span>
                  </a>
                  <a
                    href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20want%20to%20check%20room%20availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366]/15 text-[#166534] font-medium text-xs border border-[#25D366]/30"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#166534]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
