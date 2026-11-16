import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  BedDouble, 
  ShieldCheck, 
  Star, 
  Calendar, 
  Users, 
  Search, 
  MapPin, 
  Award,
  Sparkles
} from 'lucide-react';
import { HERO_SLIDES, PROPERTY_INFO } from '../data/homestayData';

interface HeroProps {
  onExploreRooms: () => void;
  onBookNow: (dates?: { checkIn: string; checkOut: string; guests: string; roomType: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRooms, onBookNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Quick search bar state
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [roomType, setRoomType] = useState('deluxe-ac-room');

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleQuickCheck = (e: React.FormEvent) => {
    e.preventDefault();
    onBookNow({ checkIn, checkOut, guests, roomType });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slideshow with Parallax Feel & Gradient Overlay */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transform transition-transform duration-10000`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
          {/* Multi-layered cinematic gradient for legibility & warmth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07160e]/90 via-[#0a1e14]/70 to-[#0e2a1c]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091b12] via-transparent to-[#07160e]/40" />
        </div>
      ))}

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-12 flex-1 flex flex-col justify-center">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b4332]/85 text-[#e5c178] border border-[#d4af37]/35 text-xs font-semibold backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>MTDC Approved Homestay</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d2319]/80 text-[#f4efe6] border border-white/10 text-xs backdrop-blur-md">
            <div className="flex text-[#d4af37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37]" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9 / 5.0</span>
            <span className="text-[#a8c2b5]">(140+ Happy Families)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d2319]/80 text-[#d0e4d9] border border-white/10 text-xs backdrop-blur-md hidden sm:inline-flex">
            <MapPin className="w-3.5 h-3.5 text-[#e5c178]" />
            <span>Kaundhar Kalsur, Guhagar, Ratnagiri</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-2">
            Welcome to Bageshree Home Stay
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-5">
            Experience Authentic Konkan Hospitality{' '}
            <span className="italic font-normal text-[#e6c687] block sm:inline">
              amidst Nature's Serenity.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#d4e4db] max-w-2xl font-light leading-relaxed mb-8">
            Cozy, spacious AC rooms, home-cooked local meals, and peaceful family getaways 
            surrounded by lush Alphonso mango and cashew groves in Guhagar.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onExploreRooms}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#c49f28] text-[#0d2319] font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <BedDouble className="w-4 h-4 text-[#0d2319]" />
              <span>Explore Rooms</span>
            </button>

            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Direct WhatsApp Booking</span>
            </a>
          </div>

          {/* Quick Key Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/15 max-w-3xl">
            <div className="flex items-center gap-2 text-white/90 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Spotless Hygiene</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-xs">
              <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Inverter Power Backup</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-xs">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Home-Style Food</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-xs">
              <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
              <span>Compound Parking</span>
            </div>
          </div>
        </div>

      </div>

      {/* Interactive Quick Reservation Booking Bar at Hero Bottom */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-8 w-full">
        <form 
          onSubmit={handleQuickCheck}
          className="bg-[#fbf9f5] rounded-2xl shadow-2xl p-4 sm:p-5 border border-[#e5d8c3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-end"
        >
          {/* Check-In */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#635544] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1b4332]" />
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#d6c7b0] bg-white text-xs text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            />
          </div>

          {/* Check-Out */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#635544] mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#1b4332]" />
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#d6c7b0] bg-white text-xs text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#635544] mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#1b4332]" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#d6c7b0] bg-white text-xs text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            >
              <option value="1">1 Adult (Solo)</option>
              <option value="2">2 Adults (Couple)</option>
              <option value="3">3 Adults (Small Group)</option>
              <option value="4">4 Adults (Family)</option>
              <option value="5">5+ Adults (Large Family)</option>
            </select>
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#635544] mb-1.5 flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#1b4332]" />
              Room Preference
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#d6c7b0] bg-white text-xs text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            >
              <option value="deluxe-ac-room">Deluxe AC Garden Room</option>
              <option value="family-ac-suite">Executive Family AC Suite</option>
              <option value="comfort-nature-room">Comfort Nature Breeze (Non-AC)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#1b4332] hover:bg-[#133426] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg"
            >
              <Search className="w-4 h-4 text-[#d4af37]" />
              <span>Check Availability</span>
            </button>
          </div>
        </form>
      </div>

      {/* Slideshow Controls (Bottom Floating) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex items-center justify-between pb-6 pt-12">
        {/* Indicators */}
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm border border-white/20 transition-colors"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm border border-white/20 transition-colors"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
