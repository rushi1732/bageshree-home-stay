import React, { useState } from 'react';
import { 
  UtensilsCrossed, 
  Coffee, 
  Fish, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2
} from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';

export const DiningShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'breakfast' | 'seafood' | 'veg' | 'sweets'>('breakfast');

  const foodMenus = {
    breakfast: {
      title: "Fresh Farmhouse Breakfast (सकाळचा ताजा नाश्ता)",
      timing: "7:30 AM - 10:00 AM",
      desc: "Prepared fresh upon your waking order with pure local ingredients, garden curry leaves, and freshly grated coconut.",
      items: [
        { name: "Traditional Kande Pohe", detail: "Fluffy flattened rice roasted with mustard seeds, green chilies, roasted peanuts, garnished with fresh Konkan coconut & coriander." },
        { name: "Sajuk Tup Til Upma / Shira", detail: "Semolina cooked with subtle tempering, cashews, and a dash of pure homemade ghee." },
        { name: "Konkani Masala Ginger Chai", detail: "Strong aromatic tea brewed with crushed organic ginger, cardamom, and fresh milk." },
        { name: "Farm Fresh Eggs (Omelette / Bhurji)", detail: "Country style spicy scrambled eggs or fluffy omelette served with fresh bread." },
      ],
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80"
    },
    seafood: {
      title: "Authentic Coastal Konkan Seafood (अस्सल कोकणी मासळी थाळी)",
      timing: "Lunch: 12:30 PM - 3:00 PM | Dinner: 8:00 PM - 10:30 PM",
      desc: "Sourced fresh from local Ratnagiri / Guhagar coastal landings and cooked in traditional Konkan coconut gravy (Vatap).",
      items: [
        { name: "Surmai (Kingfish) / Paplet Fry", detail: "Fresh fish fillets coated in spicy red chili agal marinade and rava fried to golden crispness." },
        { name: "Konkani Prawns Koliwada / Masala", detail: "Succulent sea prawns simmered in thick onion-tomato coconut gravy with triphala spices." },
        { name: "Pink Solkadhi (सोलकढी)", detail: "Soul-soothing elixir made from freshly pressed coconut milk, tangy kokum agal, garlic, and fresh green chili." },
        { name: "Steaming Rice & Tandlachi Bhakri", detail: "Fragrant local rice and soft warm rice flatbreads straight off the iron griddle." },
      ],
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80"
    },
    veg: {
      title: "Traditional Konkan Brahmin Veg Thali (शुद्ध शाकाहारी थाळी)",
      timing: "Lunch: 12:30 PM - 3:00 PM | Dinner: 8:00 PM - 10:30 PM",
      desc: "Honoring traditional Satvik Konkan flavors with seasonal vegetables, farm cashew nuts, and coconut.",
      items: [
        { name: "Fresh Cashew Nut Curry (ओल्या काजूची उसळ)", detail: "Plump tender raw cashews harvested from our own orchard simmered in mild coconut gravy." },
        { name: "Alu Wadi & Kothimbir Vadi", detail: "Crispy savory rolled colocasia leaf bites steamed and shallow fried with sesame seeds." },
        { name: "Varan Bhaat & Tup (वरण-भात)", detail: "Comforting yellow lentil curry poured over steaming rice with pure homemade cow ghee and lemon." },
        { name: "Solkadhi & Local Pickle", detail: "Fresh digestive kokum drink, crispy poppadums, and spicy raw mango pickle." },
      ],
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80"
    },
    sweets: {
      title: "Handcrafted Konkan Desserts (पारंपारिक गोडधोड)",
      timing: "Available on advance request",
      desc: "Authentic festival sweets crafted with pure jaggery, freshly grated coconut, and fragrant cardamom.",
      items: [
        { name: "Ukadiche Modak (उकडीचे मोदक)", detail: "Steamed rice flour dumplings filled with succulent grated coconut, organic jaggery, cardamom, and drizzled with hot ghee." },
        { name: "Konkani Puran Poli", detail: "Hand-rolled golden flatbreads filled with spiced sweet chana dal and nutmeg." },
        { name: "Alphonso (Hapus) Mango Pulp / Aamras", detail: "100% pure naturally ripened Ratnagiri Alphonso mango pulp without artificial preservatives (seasonal)." },
        { name: "Kokum Sharbat & Panhe", detail: "Refreshing raw mango Panhe and chilled ruby-red Kokum coolers." },
      ],
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1000&q=80"
    }
  };

  const current = foodMenus[activeTab];

  return (
    <section id="dining" className="py-24 bg-[#fbf9f5] relative overflow-hidden border-t border-[#e2d5be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/20">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Farm-to-Table Gastronomy</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-5">
            Authentic Konkan Food & Home Hospitality
          </h2>

          <p className="text-base text-[#4a5850] leading-relaxed">
            No commercial restaurant food—every meal at Bageshree Home Stay is cooked in our spotless home kitchen 
            with authentic spices, freshly ground coconut, and genuine Maharashtrian love.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveTab('breakfast')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'breakfast'
                ? 'bg-[#1b4332] text-white shadow-lg scale-105'
                : 'bg-[#f4eee3] text-[#4a5850] hover:bg-[#ede5d8] border border-[#d6c7b0]'
            }`}
          >
            <Coffee className="w-4 h-4 text-[#d4af37]" />
            <span>Morning Breakfast</span>
          </button>

          <button
            onClick={() => setActiveTab('seafood')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'seafood'
                ? 'bg-[#1b4332] text-white shadow-lg scale-105'
                : 'bg-[#f4eee3] text-[#4a5850] hover:bg-[#ede5d8] border border-[#d6c7b0]'
            }`}
          >
            <Fish className="w-4 h-4 text-[#d4af37]" />
            <span>Coastal Seafood Special</span>
          </button>

          <button
            onClick={() => setActiveTab('veg')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'veg'
                ? 'bg-[#1b4332] text-white shadow-lg scale-105'
                : 'bg-[#f4eee3] text-[#4a5850] hover:bg-[#ede5d8] border border-[#d6c7b0]'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 text-[#d4af37]" />
            <span>Pure Konkan Veg Thali</span>
          </button>

          <button
            onClick={() => setActiveTab('sweets')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all duration-300 ${
              activeTab === 'sweets'
                ? 'bg-[#1b4332] text-white shadow-lg scale-105'
                : 'bg-[#f4eee3] text-[#4a5850] hover:bg-[#ede5d8] border border-[#d6c7b0]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span>Ukadiche Modak & Sweets</span>
          </button>
        </div>

        {/* Dynamic Menu Card */}
        <div className="bg-[#f5efe3] rounded-3xl p-6 sm:p-10 border border-[#e5d8c3] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Menu Items */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e2d5be] pb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  {current.title}
                </h3>
                <p className="text-xs text-[#526359] mt-1">
                  {current.desc}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b4332] text-[#d4af37] text-xs font-medium shrink-0">
                <Clock className="w-3.5 h-3.5" />
                <span>{current.timing}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.items.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-[#decbb4] shadow-sm hover:border-[#1b4332]/40 transition-colors">
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#1b4332] shrink-0 mt-0.5" />
                    <h4 className="font-bold text-sm text-[#143224]">{item.name}</h4>
                  </div>
                  <p className="text-xs text-[#5a6a60] leading-relaxed pl-6.5">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#e8f1ec] border border-[#b8d6c7] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs text-[#1e3427]">
                  <span className="font-bold block">100% Home Cooked Hygiene</span>
                  <span>Pure water, no artificial food colors, fresh coconut oil & ghee.</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=Hello%20Bageshree%20Home%20Stay,%20I%20would%20like%20to%20know%20more%20about%20your%20food%20menu%20and%20meal%20charges.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20b858] transition-colors shrink-0 shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Ask Food Menu / Rates</span>
              </a>
            </div>
          </div>

          {/* Right: Thematic Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                Authentic preparation crafted with love by our host family
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
