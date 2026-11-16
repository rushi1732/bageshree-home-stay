import React from 'react';
import { 
  Trees, 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  SunMedium, 
  Compass, 
  PhoneCall
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';
import { AnimatedCounter } from './AnimatedCounter';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#fbf9f5] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b4332]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/20">
            <Trees className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Our Peaceful Haven</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-5">
            A Tranquil Konkan Retreat <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#c49246]">Tucked Away in Nature</span>
          </h2>

          <p className="text-base text-[#4a5850] leading-relaxed">
            Located in scenic <strong>Kaundhar Kalsur</strong> along the Shringartali-Abloli route in Guhagar, 
            Bageshree Home Stay offers an authentic slice of rustic Konkan warmth, modern hygienic comforts, 
            and rejuvenating silence away from city traffic and noise.
          </p>
        </div>

        {/* Two-Column Storytelling & Visual Collage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Visual Collage with MTDC Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                <img
                  src="/images/property/property-1.jpg"
                  alt="Bageshree Home Stay Surrounded by Greenery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                  Traditional Konkan red-tile homestay amidst tropical coconut & mango foliage
                </div>
              </div>

              {/* Overlapping Floating Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="/images/rooms/family/family-1.jpg"
                  alt="Spotless Room Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-2 left-2 bg-[#0d2319]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] text-[#e3ece6] font-semibold">
                  Spacious Family AC Suite
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-6 -left-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#e5d8c3] flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-[#1b4332]">
                    Official Approval
                  </span>
                  <span className="block font-sans text-sm font-bold text-[#1a2e22] tabular-nums">
                    MTDC Reg. R760
                  </span>
                  <span className="text-[10px] text-[#718277]">
                    Verified Quality Standard
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#143224]">
                Where Pure Fresh Air & Genuine Family Care Meet
              </h3>
              
              <p className="text-sm sm:text-base text-[#4a5850] leading-relaxed">
                Step inside a world shaded by grand <strong>Alphonso (Hapus) mango trees, fragrant cashews, and slender betel nut palms</strong>. 
                At Bageshree Home Stay, our mission is simple: to offer families and travelers a pristine, secure, and stress-free retreat 
                where you can wake up to morning mist and birdsong, savor authentic home-cooked Konkani breakfast, 
                and sleep soundly in clean air-conditioned comfort.
              </p>

              <p className="text-sm sm:text-base text-[#4a5850] leading-relaxed">
                Whether you are exploring the virgin white sand shores of Guhagar Beach, offering prayers at historic Shiva temples, 
                or seeking a peaceful countryside workation, our hospitable hosts ensure every guest feels like an honored family member.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f4eee3] border border-[#e3d5be]">
                <div className="p-2 rounded-lg bg-[#1b4332] text-[#d4af37] shrink-0">
                  <Trees className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wide text-[#1b4332] mb-0.5">
                    Lush Mango & Cashew Orchard
                  </h4>
                  <p className="text-xs text-[#526359]">
                    Natural green canopy, pure unpolluted village breeze.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f4eee3] border border-[#e3d5be]">
                <div className="p-2 rounded-lg bg-[#1b4332] text-[#d4af37] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wide text-[#1b4332] mb-0.5">
                    Family Safety & Comfort
                  </h4>
                  <p className="text-xs text-[#526359]">
                    Gated private compound with power backup support.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f4eee3] border border-[#e3d5be]">
                <div className="p-2 rounded-lg bg-[#1b4332] text-[#d4af37] shrink-0">
                  <SunMedium className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wide text-[#1b4332] mb-0.5">
                    Traditional Konkan Meals
                  </h4>
                  <p className="text-xs text-[#526359]">
                    Hot breakfast, piping tea, and authentic local meals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f4eee3] border border-[#e3d5be]">
                <div className="p-2 rounded-lg bg-[#1b4332] text-[#d4af37] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wide text-[#1b4332] mb-0.5">
                    Close to Key Sights
                  </h4>
                  <p className="text-xs text-[#526359]">
                    15 mins to Guhagar Beach & Vyadeshwar Temple.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact & Host Line */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e2d5c0]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#e7dfcf] flex items-center justify-center text-[#1b4332]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-[#1b4332]">
                    Warm Personal Hospitality
                  </span>
                  <span className="text-[11px] text-[#6d7c73]">
                    Hosted with care by local Konkani family
                  </span>
                </div>
              </div>

              <a
                href={`tel:${PROPERTY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#1b4332] hover:text-[#0d2319] underline underline-offset-4"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#c49246]" />
                <span className="font-sans tabular-nums">Call Us: {PROPERTY_INFO.phones[0]}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Feature Highlights Banner with Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#0d2319] text-[#e3ece6] shadow-xl border border-[#1b4332]">
          <div className="text-center p-3 border-r border-[#1b4332] last:border-none">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] mb-1">
              <AnimatedCounter end={4.9} decimals={1} suffix=" / 5.0" />
            </div>
            <div className="text-xs text-[#a3bdad] font-medium">
              Guest Satisfaction Rating
            </div>
          </div>

          <div className="text-center p-3 border-r border-[#1b4332] last:border-none">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] mb-1">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-xs text-[#a3bdad] font-medium">
              Power & Inverter Backup
            </div>
          </div>

          <div className="text-center p-3 border-r border-[#1b4332] last:border-none">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#d4af37] mb-1">
              <AnimatedCounter end={15} suffix=" Mins" />
            </div>
            <div className="text-xs text-[#a3bdad] font-medium">
              Drive to Guhagar Beach
            </div>
          </div>

          <div className="text-center p-3">
            <div className="font-sans text-2xl sm:text-3xl font-extrabold text-[#d4af37] mb-1 tabular-nums">
              R760
            </div>
            <div className="text-xs text-[#a3bdad] font-medium">
              MTDC Approved Standard
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
