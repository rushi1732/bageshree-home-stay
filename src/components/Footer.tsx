import React from 'react';
import { 
  Leaf, 
  Phone, 
  Mail, 
  MapPin, 
  Award, 
  MessageCircle, 
  ChevronRight
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1b12] text-[#d4e4db] pt-16 pb-28 sm:pb-16 border-t border-[#1b4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b4332]/60">
          
          {/* Brand & MTDC Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center text-[#d4af37] border border-[#2d6a4f]">
                <Leaf className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white leading-tight">
                  Bageshree
                </span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-medium">
                  Home Stay • Guhagar
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a3bdad] leading-relaxed">
              An MTDC-approved authentic Konkan homestay nestled amidst Alphonso mango and cashew groves in 
              Kaundhar Kalsur, Guhagar, Ratnagiri. Offering immaculate AC family rooms, heartfelt hospitality, 
              and pure tranquility.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b4332] text-[#d4af37] text-xs font-semibold border border-[#d4af37]/30">
              <Award className="w-3.5 h-3.5" />
              <span>MTDC Reg. No. R760 Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#1b4332]" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#1b4332]" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#1b4332]" />
                  <span>Rooms & Tariff</span>
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#1b4332]" />
                  <span>Amenities</span>
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#1b4332]" />
                  <span>Photo Gallery</span>
                </a>
              </li>
              <li>
                <a href="#attractions" className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#1b4332]" />
                  <span>Explore Guhagar</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Rooms */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Accommodations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#a3bdad]">
              <li className="p-2.5 rounded-xl bg-[#112d1f] border border-[#1b4332]/80">
                <span className="font-semibold text-white block">Deluxe AC Garden Room</span>
                <span className="text-[11px] text-[#d4af37]">₹2,200 / night • Inverter Backup</span>
              </li>
              <li className="p-2.5 rounded-xl bg-[#112d1f] border border-[#1b4332]/80">
                <span className="font-semibold text-white block">Executive Family AC Suite</span>
                <span className="text-[11px] text-[#d4af37]">₹3,500 / night • 4-6 Family Capacity</span>
              </li>
              <li className="p-2.5 rounded-xl bg-[#112d1f] border border-[#1b4332]/80">
                <span className="font-semibold text-white block">Comfort Nature Breeze Room</span>
                <span className="text-[11px] text-[#d4af37]">₹1,600 / night • Natural Ventilation</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#a3bdad]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{PROPERTY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${PROPERTY_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {PROPERTY_INFO.phones[0]} / {PROPERTY_INFO.phones[1]}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${PROPERTY_INFO.email}`} className="hover:text-white transition-colors">
                  {PROPERTY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20b858] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#718b7c]">
          <div>
            © {new Date().getFullYear()} Bageshree Home Stay, Guhagar. All Rights Reserved. MTDC Approved.
          </div>

          <div className="flex items-center gap-1 text-center">
            <span>Crafted with hospitality & care for Konkan travelers</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
