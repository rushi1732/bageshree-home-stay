import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Car, 
  Train, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';

export const LocationMap: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(PROPERTY_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-24 bg-[#f4eee3] relative border-t border-[#e2d5be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/15">
            <MapPin className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Finding Us</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-5">
            How to Reach Bageshree Home Stay
          </h2>

          <p className="text-base text-[#4a5850] leading-relaxed">
            Nestled peacefully in <strong>Kaundhar Kalsur</strong> along the Shringartali-Abloli route, 
            conveniently connected by smooth paved roads with ample space for your private vehicles.
          </p>
        </div>

        {/* Map & Direction Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[#fbf9f5] rounded-3xl p-4 sm:p-5 border border-[#e2d5be] shadow-lg flex flex-col justify-between">
            <div className="relative w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-[#d6c7b0]">
              <iframe
                title="Bageshree Home Stay Location Map"
                src="https://maps.google.com/maps?q=Bageshree%20Home%20Stay%20Kalsur%20Kaundhar%20Guhagar%20Ratnagiri&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Address Bar */}
            <div className="mt-4 p-4 rounded-xl bg-[#f5efe3] border border-[#e2d5be] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
                <span className="text-xs text-[#2c3d32] font-medium leading-relaxed">
                  {PROPERTY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#d0c2ad] text-xs font-semibold text-[#1b4332] hover:bg-[#ede5d8] transition-colors"
                >
                  {copied ? <Check className="w-3 h-3 text-[#166534]" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(PROPERTY_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1b4332] text-white text-xs font-semibold hover:bg-[#133225] transition-colors"
                >
                  <Navigation className="w-3 h-3 text-[#d4af37]" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Route Highlights & Road Access */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Route Cards */}
            <div className="space-y-4">
              
              {/* From Mumbai */}
              <div className="p-5 rounded-2xl bg-[#fbf9f5] border border-[#e2d5be] shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#1b4332]/10 text-[#1b4332]">
                    <Car className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#143224]">
                    From Mumbai (Approx. 280 km)
                  </h4>
                </div>
                <p className="text-xs text-[#526359] leading-relaxed">
                  Travel via NH 66 (Mumbai-Goa 4-lane expressway) through Mangaon and Khed to Chiplun, 
                  then turn towards Guhagar via Shringartali. Scenic 5.5 to 6.5 hour drive.
                </p>
              </div>

              {/* From Pune */}
              <div className="p-5 rounded-2xl bg-[#fbf9f5] border border-[#e2d5be] shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#1b4332]/10 text-[#1b4332]">
                    <Car className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#143224]">
                    From Pune (Approx. 240 km)
                  </h4>
                </div>
                <p className="text-xs text-[#526359] leading-relaxed">
                  Travel via Satara, Patan, and the picturesque Kumbharli Ghat descent to Chiplun, 
                  then 40 km to Kaundhar Kalsur, Guhagar. Around 5 to 6 hour drive.
                </p>
              </div>

              {/* Train & Public Transit */}
              <div className="p-5 rounded-2xl bg-[#fbf9f5] border border-[#e2d5be] shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#1b4332]/10 text-[#1b4332]">
                    <Train className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-[#143224]">
                    Nearest Railway Station: Chiplun (42 km)
                  </h4>
                </div>
                <p className="text-xs text-[#526359] leading-relaxed">
                  Chiplun is well connected on the Konkan Railway network. Regular state transport buses (MSRTC) 
                  and private cabs frequently run from Chiplun to Shringartali / Guhagar.
                </p>
              </div>

            </div>

            {/* Parking Assurance Banner */}
            <div className="p-5 rounded-2xl bg-[#1b4332] text-white border border-[#2d6a4f] shadow-md">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>Zero Parking Hassles</span>
              </div>
              <p className="text-xs text-[#d0e4d9] leading-relaxed">
                Direct road access right up to our wide entrance gate with ample internal compound parking for 
                multiple cars, SUVs, or traveller vans.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
