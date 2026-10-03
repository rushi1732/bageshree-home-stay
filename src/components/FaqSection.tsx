import React, { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { FAQS } from "@/data/homestayData"

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id)

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? "" : id)
  }

  return (
    <section id="faq" className="py-24 bg-[#0c1510] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4a373]" />
            <span>Essential Guidance • वारंवार विचारले जाणारे प्रश्न</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#f7f4ee]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#8fa898] mt-3">
            Everything you need to know about planning your journey, meal arrangements, and stay privileges.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-[#111e16] border border-[#2b4232] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#16271c] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#d4a373] uppercase px-2 py-0.5 rounded bg-[#1c2e22] border border-[#2b4232]">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif text-[#f7f4ee]">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#d4a373] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#8fa898] leading-relaxed border-t border-[#2b4232]/50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
