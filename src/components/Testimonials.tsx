import React from "react"
import { Star, Quote, MapPin, CheckCircle } from "lucide-react"
import { TESTIMONIALS } from "@/data/homestayData"

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#0a110d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-2">
            <Quote className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>Guest Memoirs • पाहुण्यांचे अनुभव</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#f7f4ee]">
            Words Written from Our Verandahs
          </h2>
          <p className="text-sm sm:text-base text-[#8fa898] mt-3">
            Read authentic impressions from writers, families, and weary city travelers who found deep rest at Bageshree.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#111e16] border border-[#2b4232] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#d4a373]/60 transition-all duration-300 shadow-xl relative group"
            >
              <div>
                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#d4a373]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4a373]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#8fa898]">{t.date}</span>
                </div>

                {/* Highlight Tag */}
                <div className="text-xs font-serif text-[#d4a373] italic mb-3">
                  "{t.highlight}"
                </div>

                {/* Main Quote */}
                <p className="text-sm text-[#c0cfc6] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Guest Profile Details */}
              <div className="mt-6 pt-5 border-t border-[#2b4232]/60 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#d4a373]/50"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#f7f4ee] flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#d4a373]" />
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-[#8fa898]">
                    <span>{t.role}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5">
                      <MapPin className="w-3 h-3 text-[#d4a373]" />
                      {t.city}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8fa898] block mt-0.5">
                    Stayed at: {t.stayedAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
