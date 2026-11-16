import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Phone, 
  Menu, 
  X, 
  MessageCircle, 
  Award,
  Calendar,
  Compass
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Explore Guhagar', href: '#attractions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <header className="w-full bg-[#0d2319] text-[#e3ece6] text-xs py-2 px-4 border-b border-[#1b4332]/50 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#1b4332] text-[#d4af37] px-2.5 py-0.5 rounded-full font-medium tracking-wide">
              <Award className="w-3.5 h-3.5" />
              <span>MTDC Approved (R760)</span>
            </span>
            <span className="hidden sm:inline text-[#a9c2b4]">
              Authentic Konkan Nature Homestay • Guhagar, Ratnagiri
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${PROPERTY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span className="font-medium">{PROPERTY_INFO.phones[0]}</span>
            </a>
            <span className="text-[#1b4332]">|</span>
            <a 
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20would%20like%20to%20inquire%20about%20booking.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp Inquiry"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span className="hidden md:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-[#fbf9f5]/95 backdrop-blur-md shadow-md py-3 border-b border-[#e8dfcf]' 
            : 'bg-[#fbf9f5] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#1b4332] flex items-center justify-center text-[#d4af37] shadow-inner group-hover:scale-105 transition-transform duration-300 border border-[#2d6a4f]">
              <Leaf className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#173829] leading-tight group-hover:text-[#1b4332] transition-colors">
                Bageshree
              </span>
              <span className="block text-[11px] uppercase tracking-[0.22em] text-[#856d49] font-medium">
                Home Stay • Guhagar
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#2d3b32] hover:text-[#1b4332] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#1b4332] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20am%20interested%20in%20reserving%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#173829] bg-[#e8f1ec] hover:bg-[#d5e7dd] transition-all border border-[#b8d6c7]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1b4332]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold text-white bg-[#1b4332] hover:bg-[#133225] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#173829] hover:bg-[#ede5d8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fbf9f5] border-b border-[#e5dccf] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#1b3b2b] hover:text-[#1b4332] border-b border-[#eee7da] pb-2 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Compass className="w-4 h-4 text-[#8a7a67]" />
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
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
    </>
  );
};
