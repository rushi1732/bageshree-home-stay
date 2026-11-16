import React from 'react';
import { 
  UtensilsCrossed, 
  Car, 
  Lamp, 
  Trees, 
  Zap, 
  Droplets, 
  Wifi, 
  Award,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Comforts & Amenities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-5">
            Crafted for Unhurried Peace & Warmth
          </h2>

          <p className="text-base text-[#4a5850] leading-relaxed">
            From hot morning Pohe and tea to generous compound car parking and ambient evening garden lighting, 
            every detail at Bageshree is designed for a relaxing, carefree stay.
          </p>
        </div>

        {/* Featured 4 Hero Amenities (Large Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* 1. Food & Breakfast Feature Card */}
          <div className="bg-[#f5efe3] rounded-3xl p-8 border border-[#e5d8c3] relative overflow-hidden group hover:border-[#1b4332]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0 shadow-md">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#996515]">
                  Authentic Konkan Flavors
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  Homely Food & Fresh Breakfast
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#4a5850] leading-relaxed mb-6">
              Savor traditional Maharashtrian breakfast: freshly prepared <strong>Kande Pohe</strong> garnished with wet coconut, 
              piping hot tea made with local spices, Upma, and egg preparations. On advance notice, relish mouth-watering authentic 
              Konkan veg meals and coastal fish curry thalis served with authentic <strong>Solkadhi</strong>.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#e2d4bc]">
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Piping Hot Pohe</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Fresh Egg Dishes</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Konkani Tea</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Local Veg Thalis</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Solkadhi Special</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Hygienic Home Kitchen</span>
              </div>
            </div>
          </div>

          {/* 2. Ample Parking Feature Card */}
          <div className="bg-[#f5efe3] rounded-3xl p-8 border border-[#e5d8c3] relative overflow-hidden group hover:border-[#1b4332]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0 shadow-md">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#996515]">
                  Hassle-Free Road Trips
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  Ample Secure Compound Parking
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#4a5850] leading-relaxed mb-6">
              Driving down from Mumbai, Pune, or Kolhapur? Our homestay features an expansive, level gated compound. 
              Safely park multiple SUVs, large sedans, or tempo travellers directly inside the property without cramped street parking 
              or reversing stress.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#e2d4bc]">
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Multiple SUV Capacity</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Gated Security</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Wide Turning Area</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Direct Room Access</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Well-Lit at Night</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Driver-Friendly</span>
              </div>
            </div>
          </div>

          {/* 3. Ambient Lighting Feature Card */}
          <div className="bg-[#f5efe3] rounded-3xl p-8 border border-[#e5d8c3] relative overflow-hidden group hover:border-[#1b4332]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0 shadow-md">
                <Lamp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#996515]">
                  Enchanting Nights
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  Ambient Evening Garden Lighting
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#4a5850] leading-relaxed mb-6">
              When dusk settles, our courtyard and garden come alive with warm illumination. Delicate fairy lights draped across 
              foliage and landscape lamps cast a welcoming glow—perfect for late-evening tea, laughter, and board games under the clear starry Konkan sky.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#e2d4bc]">
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Fairy Lit Trees</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Warm Patio Lamps</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Open Evening Seating</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Stargazing Haven</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Safe Night Pathway</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Photogenic Ambiance</span>
              </div>
            </div>
          </div>

          {/* 4. Expansive Garden Feature Card */}
          <div className="bg-[#f5efe3] rounded-3xl p-8 border border-[#e5d8c3] relative overflow-hidden group hover:border-[#1b4332]/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0 shadow-md">
                <Trees className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#996515]">
                  Botanical Serenity
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  Expansive Green Mango & Cashew Orchard
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#4a5850] leading-relaxed mb-6">
              Immerse yourself in authentic Konkan flora. Walk between authentic Ratnagiri Alphonso mango trees, cashew groves, 
              flowering hibiscus, and coconut palms. Let children explore natural open spaces safely while elders relax in the shade.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#e2d4bc]">
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Hapus Mango Trees</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Cashew Nut Groves</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Kids Play Space</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Tropical Birds Calling</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Fresh Unpolluted Air</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#1e3427] font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1b4332]" />
                <span>Morning Yoga / Walks</span>
              </div>
            </div>
          </div>

        </div>

        {/* Additional 4 Essential Services Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#fbf9f5] p-6 rounded-2xl border border-[#e5d8c3] shadow-sm flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#e8f1ec] text-[#1b4332] shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#143224] mb-1">Inverter Backup</h4>
              <p className="text-xs text-[#526359] leading-relaxed">
                Continuous battery inverter support for lights, fans, and phone charging.
              </p>
            </div>
          </div>

          <div className="bg-[#fbf9f5] p-6 rounded-2xl border border-[#e5d8c3] shadow-sm flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#e8f1ec] text-[#1b4332] shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#143224] mb-1">Hot Water Geysers</h4>
              <p className="text-xs text-[#526359] leading-relaxed">
                24-hour pure water supply with dedicated hot water geysers in all bathrooms.
              </p>
            </div>
          </div>

          <div className="bg-[#fbf9f5] p-6 rounded-2xl border border-[#e5d8c3] shadow-sm flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#e8f1ec] text-[#1b4332] shrink-0">
              <Wifi className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#143224] mb-1">High-Speed Wi-Fi</h4>
              <p className="text-xs text-[#526359] leading-relaxed">
                Complimentary wireless internet to stay connected or work remotely in peace.
              </p>
            </div>
          </div>

          <div className="bg-[#fbf9f5] p-6 rounded-2xl border border-[#e5d8c3] shadow-sm flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-[#e8f1ec] text-[#1b4332] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#143224] mb-1">MTDC Certified</h4>
              <p className="text-xs text-[#526359] leading-relaxed">
                Maharashtra Tourism Approved (Reg. No. R760) for guaranteed security & ethics.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
