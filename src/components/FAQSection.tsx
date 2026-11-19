import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { PROPERTY_INFO } from '../data/homestayData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which is the best homestay in Guhagar Taluka for families?",
      answer: "Bageshree Home Stay is one of the top-rated family homestays in Guhagar, Ratnagiri. Rated 4.9/5 by over 140 families, it offers MTDC-approved standards (Reg. No. R760), spotlessly clean AC and nature rooms with full inverter power backup, safe gated compound parking, and a peaceful environment surrounded by Alphonso mango and cashew groves.",
    },
    {
      question: "How far is Bageshree Home Stay from Guhagar Beach & Vyadeshwar Temple?",
      answer: "The homestay is located in Kaundhar Kalsur along the Shringartali-Abloli route, just 12 km (approx. 15 minutes by car) from Guhagar Beach and the ancient Shri Vyadeshwar Shiva Temple. It offers the perfect quiet retreat away from coastal humidity and crowd noise while remaining easily accessible.",
    },
    {
      question: "Is Bageshree Home Stay officially MTDC approved?",
      answer: "Yes, Bageshree Home Stay is officially recognized and approved by the Maharashtra Tourism Development Corporation under Registration Number R760. This guarantees certified safety, verified hygiene standards, clean drinking water, and ethical tariffs.",
    },
    {
      question: "What types of meals are available at the homestay?",
      answer: "We serve authentic homemade Maharashtrian breakfast (Kande Pohe, Upma, spicy ginger tea, egg dishes) and traditional Konkani lunch/dinner thalis. Guests can enjoy fresh coastal fish fry (Surmai, Pomfret), authentic pink Solkadhi, and pure vegetarian Brahmin thalis with cashew nut curry and Ukadiche Modak prepared upon advance notice.",
    },
    {
      question: "What is the tariff per night at Bageshree Home Stay?",
      answer: "Tariffs start from ₹1,500/night for the Standard Double Room, ₹2,000/night for the Deluxe Ac Double Room, and ₹4,000/night for the Spacious Family AC Room (1 Double Bed + 3 Single Beds). Direct booking with the host via WhatsApp guarantees the best rates with zero OTA commission markups.",
    },
    {
      question: "Is secure car parking available on the property?",
      answer: "Yes, we have an expansive private gated compound that easily accommodates multiple SUVs, large sedans, or tempo travellers with direct, safe room access.",
    },
    {
      question: "How do I reach Bageshree Home Stay from Mumbai, Pune, or Chiplun?",
      answer: "By road from Mumbai (280 km via NH 66 Mumbai-Goa Highway via Chiplun to Shringartali), from Pune (240 km via Kumbharli Ghat to Chiplun), or by train to Chiplun Railway Station (42 km), followed by a 45-minute scenic taxi or state transport bus drive to Kaundhar Kalsur.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-[#fbf9f5] relative border-t border-[#e2d5be]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-4">
            Everything You Need to Know
          </h2>

          <p className="text-sm sm:text-base text-[#4a5850]">
            Planning your trip to Guhagar, Ratnagiri? Here are answers to common questions about 
            staying at Bageshree Home Stay.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#f5efe3] rounded-2xl border border-[#e5d8c3] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#143224] hover:text-[#1b4332] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1b4332] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4a5850] leading-relaxed border-t border-[#e2d5be]/70 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0d2319] text-white border border-[#1b4332] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-lg text-white mb-1">
              Have More Questions About Guhagar or Booking?
            </h4>
            <p className="text-xs text-[#b0c8bb]">
              Feel free to call our host family directly for custom requests, meal preferences, or group rates.
            </p>
          </div>

          <a
            href={`tel:${PROPERTY_INFO.phoneRaw}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d4af37] text-[#0d2319] text-xs font-bold hover:bg-[#c49f28] transition-colors shrink-0 shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span className="font-sans tabular-nums">Call: {PROPERTY_INFO.phones[0]}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
