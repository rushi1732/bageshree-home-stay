import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Phone, 
  Menu, 
  X, 
  MessageCircle, 
  Award, 
  Calendar, 
  ChevronRight,
  Layers
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';
import { SoundscapeToggle } from './SoundscapeToggle';

interface NavbarProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
  onBookClick: () => void;
  isSinglePageMode: boolean;
  onTogglePageMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onPageChange, 
  onBookClick,
  isSinglePageMode,
  onTogglePageMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'rooms', label: 'Rooms & Tariff' },
    { id: 'dining', label: 'Konkan Dining' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'calculator', label: 'Tariff Calculator' },
    { id: 'gallery', label: 'Photo Tour' },
    { id: 'attractions', label: 'Explore Guhagar' },
    { id: 'contact', label: 'Contact & Map' },
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Bar */}
      <header className="w-full bg-[#0d2319] text-[#e3ece6] text-xs py-2 px-4 border-b border-[#1b4332]/50 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#1b4332] text-[#d4af37] px-2.5 py-0.5 rounded-full font-medium tracking-wide">
              <Award className="w-3.5 h-3.5" />
              <span className="font-sans tabular-nums">MTDC Approved (R760)</span>
            </span>
            <span className="hidden sm:inline text-[#a9c2b4]">
              Authentic Konkan Nature Homestay • Guhagar, Ratnagiri
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            {/* View Mode Toggle Button */}
            <button
              onClick={onTogglePageMode}
              title="Switch between animated separate pages & continuous single-page view"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1b4332]/80 hover:bg-[#1b4332] text-[#e5c178] border border-[#d4af37]/30 transition-all font-medium"
            >
              <Layers className="w-3 h-3 text-[#d4af37]" />
              <span className="hidden sm:inline">
                {isSinglePageMode ? 'View: Continuous Scroll' : 'View: Animated Pages'}
              </span>
            </button>

            {/* Ambient Nature Soundscape Player Toggle */}
            <SoundscapeToggle />

            <span className="text-[#1b4332]">|</span>

            <a 
              href={`tel:${PROPERTY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
              aria-label="Direct Phone Call"
            >
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <span className="font-sans font-bold tabular-nums">{PROPERTY_INFO.phones[0]}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled 
            ? 'bg-[#fbf9f5]/95 backdrop-blur-md shadow-md py-2.5 border-b border-[#e8dfcf]' 
            : 'bg-[#fbf9f5] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-full bg-[#1b4332] flex items-center justify-center text-[#d4af37] shadow-inner group-hover:scale-105 transition-transform duration-300 border border-[#2d6a4f]">
              <Leaf className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#173829] leading-tight group-hover:text-[#1b4332] transition-colors">
                Bageshree
              </span>
              <span className="block text-[10px] uppercase tracking-[0.24em] text-[#856d49] font-semibold">
                Home Stay • Guhagar
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Animated Active Indicator */}
          <div className="hidden xl:flex items-center gap-1 bg-[#ede5d8]/60 p-1.5 rounded-2xl border border-[#dfd3bf]">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 z-10 ${
                    isActive
                      ? 'text-white'
                      : 'text-[#35463b] hover:text-[#143224]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-[#1b4332] rounded-xl -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20am%20interested%20in%20reserving%20a%20stay.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#173829] bg-[#e8f1ec] hover:bg-[#d5e7dd] transition-all border border-[#b8d6c7]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1b4332]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onBookClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold text-white bg-[#1b4332] hover:bg-[#133225] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-[#173829] hover:bg-[#ede5d8] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer with Animated Stagger */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden bg-[#fbf9f5] border-b border-[#e5dccf] px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-sm font-semibold rounded-xl px-3 py-2.5 flex items-center justify-between transition-colors ${
                      isActive 
                        ? 'bg-[#1b4332] text-white shadow-sm' 
                        : 'text-[#1b3b2b] hover:bg-[#ede6da]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#d4af37]' : 'text-[#8a7a67]'}`} />
                  </button>
                );
              })}

              <div className="pt-3 flex flex-col gap-3 border-t border-[#e2d5be] mt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onTogglePageMode();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#ede5d8] text-[#143224] font-medium text-xs border border-[#d8ccb8]"
                >
                  <Layers className="w-3.5 h-3.5 text-[#1b4332]" />
                  <span>
                    {isSinglePageMode ? 'Switch to Animated Pages Mode' : 'Switch to Continuous Scroll'}
                  </span>
                </button>

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
          </motion.div>
        )}
      </nav>
    </>
  );
};
