import React from 'react';
import { 
  Compass, 
  MapPin, 
  Clock, 
  Navigation, 
  ExternalLink
} from 'lucide-react';
import { ATTRACTIONS, PROPERTY_INFO } from '../data/homestayData';

export const Attractions: React.FC = () => {
  return (
    <section id="attractions" className="py-24 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/20">
            <Compass className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Konkan Exploration</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-5">
            Discover Guhagar & Ratnagiri
          </h2>

          <p className="text-base text-[#4a5850] leading-relaxed">
            Conveniently situated along the Shringartali-Abloli route in Kaundhar Kalsur, 
            Bageshree Home Stay is the perfect serene base to explore the Konkan coast’s clean beaches, 
            sacred temples, and lush landscapes.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ATTRACTIONS.map((spot) => (
            <div
              key={spot.name}
              className="bg-[#f5efe3] rounded-3xl overflow-hidden border border-[#e5d8c3] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image & Distance Pills */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#e0d8cc]">
                <img
                  src={spot.imageUrl}
                  alt={spot.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0d2319]/85 text-[#e5c178] text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-[#d4af37]/30">
                    {spot.tag}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 text-white text-[11px] font-medium backdrop-blur-md">
                    <Clock className="w-3 h-3 text-[#d4af37]" />
                    {spot.driveTime}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#1b4332] text-white text-[11px] font-semibold">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    {spot.distance}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#143224] mb-2 group-hover:text-[#1b4332] transition-colors">
                    {spot.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5850] leading-relaxed mb-4">
                    {spot.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e2d5be] flex items-center justify-between text-xs">
                  <span className="text-[#697a70] font-medium">Easy day trip from homestay</span>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(spot.name + ' Guhagar Ratnagiri')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#1b4332] font-bold hover:underline"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Tips & Route Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#0d2319] text-[#e3ece6] border border-[#1b4332] shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block mb-2">
                Host's Local Travel Tip
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                Planning a 2 or 3-Day Konkan Road Trip?
              </h4>
              <p className="text-xs sm:text-sm text-[#bed5c8] leading-relaxed">
                We gladly assist all our guests with customized daily itineraries, best times to visit temples, 
                quiet spots on Guhagar and Velneshwar beaches, and connecting with local Alphonso mango orchards.
              </p>
            </div>

            <a
              href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20please%20help%20us%20plan%20our%20Guhagar%20travel%20itinerary.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#c49f28] text-[#0d2319] font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
            >
              <Navigation className="w-4 h-4 text-[#0d2319]" />
              <span>Ask For Itinerary Advice</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
