import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Award } from 'lucide-react';
import { TESTIMONIALS, PROPERTY_INFO } from '../data/homestayData';

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#f4eee3] relative overflow-hidden border-t border-[#e2d5be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/15">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Guest Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-4">
            Loved by Families & Road Trippers
          </h2>

          <div className="flex items-center justify-center gap-2 text-sm text-[#4a5850]">
            <div className="flex text-[#d4af37]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
              ))}
            </div>
            <span className="font-bold text-[#143224]">{PROPERTY_INFO.rating} / 5.0</span>
            <span>• Based on authentic guest reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, i) => (
            <div
              key={i}
              className="bg-[#fbf9f5] rounded-3xl p-7 border border-[#e2d5be] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars and Trip Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#d4af37]">
                    {[...Array(review.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full">
                    {review.tripType}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#445349] leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#eee5d8] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#143224]">
                    {review.name}
                  </h4>
                  <span className="text-[11px] text-[#78887e]">
                    from {review.location}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-[#166534] font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-[#166534]" />
                  <span>Verified Stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MTDC Trust Strip */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-white border border-[#dfd2be] shadow-sm text-xs text-[#44534a]">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span className="font-bold text-[#143224]">MTDC Certified Homestay (Reg. No. R760)</span>
            <span className="text-[#a0b0a6]">•</span>
            <span>Inspected for safety, clean drinking water, and authentic Konkan hospitality</span>
          </div>
        </div>

      </div>
    </section>
  );
};
