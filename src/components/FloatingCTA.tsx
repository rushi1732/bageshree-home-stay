import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';

interface FloatingCTAProps {
  onBookClick: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onBookClick }) => {
  return (
    <>
      {/* Floating Circular WhatsApp Button for Desktop & Tablet */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        <a
          href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20would%20like%20to%20inquire%20about%20booking.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/60"
          aria-label="Direct WhatsApp Inquiry"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="font-semibold tracking-wide">WhatsApp Us</span>
        </a>
      </aside>

      {/* Sticky Bottom Quick Action Bar on Mobile Screens (Fixed at bottom) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d2319]/95 backdrop-blur-md border-t border-[#1b4332] px-3 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${PROPERTY_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#1b4332] text-white text-xs font-semibold border border-[#2d6a4f]"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Call Host</span>
        </a>

        <a
          href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20want%20to%20book%20a%20room.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-semibold shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookClick}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#d4af37] text-[#0d2319] text-xs font-bold shadow-md"
        >
          <Calendar className="w-3.5 h-3.5 text-[#0d2319]" />
          <span>Book Stay</span>
        </button>
      </div>
    </>
  );
};
