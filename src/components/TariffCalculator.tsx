import React, { useState } from "react"
import { Calculator, Send, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VILLAS, CONTACT_INFO } from "@/data/homestayData"

interface TariffCalculatorProps {
  onOpenBookingWithDetails: (villaId: string) => void
}

export const TariffCalculator: React.FC<TariffCalculatorProps> = ({ onOpenBookingWithDetails }) => {
  const [selectedVillaId, setSelectedVillaId] = useState<string>(VILLAS[0].id)
  const [nights, setNights] = useState<number>(2)
  const [guests, setGuests] = useState<number>(2)
  const [mealPlan, setMealPlan] = useState<'bb' | 'allInclusive'>('allInclusive')

  const currentVilla = VILLAS.find((v) => v.id === selectedVillaId) || VILLAS[0]

  // Pricing logic
  const baseRatePerNight = currentVilla.pricePerNight
  const rawStayCost = baseRatePerNight * nights

  // Long stay retreat discount: 3+ nights = 10% off, 5+ nights = 15% off
  const discountPercent = nights >= 5 ? 15 : nights >= 3 ? 10 : 0
  const discountAmount = Math.round((rawStayCost * discountPercent) / 100)
  const discountedStayCost = rawStayCost - discountAmount

  // Meal Plan: allInclusive is ₹1,200/guest/day
  const mealRatePerPersonPerDay = mealPlan === 'allInclusive' ? 1200 : 0
  const totalMealCost = mealRatePerPersonPerDay * guests * nights

  const estimatedTotal = discountedStayCost + totalMealCost

  const handleSendInquiry = () => {
    const mealLabel = mealPlan === 'allInclusive' ? 'All-Inclusive Kokani Culinary Journey' : 'Bed & Breakfast'
    const text = encodeURIComponent(
      `Hello Bageshree Home Stay Team,\n\nI calculated a stay estimate on your website:\n• Villa: ${currentVilla.name}\n• Duration: ${nights} Nights\n• Guests: ${guests} Guests\n• Meal Plan: ${mealLabel}\n• Estimated Total: ₹${estimatedTotal.toLocaleString('en-IN')}\n\nPlease let me know availability for these dates. Thank you!`
    )
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, "_blank")
  }

  return (
    <section id="calculator" className="py-24 bg-[#0e1913] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Explanation Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase">
              <Calculator className="w-3.5 h-3.5 text-[#d4a373]" />
              <span>Transparent Tariff • दर आणि अंदाज</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f7f4ee] leading-tight">
              Calculate Your Stay & Meal Estimate
            </h2>

            <p className="text-sm text-[#8fa898] leading-relaxed">
              No hidden fees, no surge pricing. Transparent seasonal tariffs with generous extended-stay discounts for writers, families, and remote work retreats.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#c0cfc6]">
                <Check className="w-4 h-4 text-[#d4a373] shrink-0" />
                <span>Complimentary farm breakfast, lemongrass tea, and estate walking tours.</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#c0cfc6]">
                <Check className="w-4 h-4 text-[#d4a373] shrink-0" />
                <span>10% off on 3+ nights, 15% off on 5+ nights workation stays.</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#c0cfc6]">
                <Check className="w-4 h-4 text-[#d4a373] shrink-0" />
                <span>Child policy: Children under 6 stay complimentary.</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Calculator Box */}
          <div className="lg:col-span-7 bg-[#111e16] border border-[#2b4232] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Choose Villa */}
              <div>
                <label className="text-[11px] uppercase font-mono tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                  1. Select Villa
                </label>
                <select
                  value={selectedVillaId}
                  onChange={(e) => setSelectedVillaId(e.target.value)}
                  className="w-full bg-[#17271d] border border-[#2b4232] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d4a373]"
                >
                  {VILLAS.map((v) => (
                    <option key={v.id} value={v.id} className="bg-[#111e16] text-[#f7f4ee]">
                      {v.name} (₹{v.pricePerNight.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              {/* Number of Nights */}
              <div>
                <label className="text-[11px] uppercase font-mono tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                  2. Number of Nights
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5, 7].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setNights(num)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        nights === num
                          ? "bg-[#c5705d] text-white border-[#c5705d]"
                          : "bg-[#17271d] text-[#c0cfc6] border-[#2b4232] hover:border-[#d4a373]"
                      }`}
                    >
                      {num} {num === 1 ? 'Nt' : 'Nts'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Guests & Meal Option */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Guests Count */}
              <div>
                <label className="text-[11px] uppercase font-mono tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                  3. Total Guests
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 6].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGuests(g)}
                      className={`flex-1 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        guests === g
                          ? "bg-[#2b4232] text-[#f7f4ee] border-[#d4a373]"
                          : "bg-[#17271d] text-[#c0cfc6] border-[#2b4232] hover:border-[#8fa898]"
                      }`}
                    >
                      {g} {g === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Meal Plan Choice */}
              <div>
                <label className="text-[11px] uppercase font-mono tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                  4. Meal Plan Choice
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setMealPlan('bb')}
                    className={`p-2 text-left rounded-lg border transition-all cursor-pointer ${
                      mealPlan === 'bb'
                        ? "bg-[#2b4232] border-[#d4a373] text-[#f7f4ee]"
                        : "bg-[#17271d] border-[#2b4232] text-[#8fa898]"
                    }`}
                  >
                    <div className="text-[11px] font-semibold">Breakfast Only</div>
                    <div className="text-[9px] text-[#8fa898]">Included in stay</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMealPlan('allInclusive')}
                    className={`p-2 text-left rounded-lg border transition-all cursor-pointer ${
                      mealPlan === 'allInclusive'
                        ? "bg-[#2b4232] border-[#d4a373] text-[#f7f4ee]"
                        : "bg-[#17271d] border-[#2b4232] text-[#8fa898]"
                    }`}
                  >
                    <div className="text-[11px] font-semibold">All 3 Meals + Tea</div>
                    <div className="text-[9px] text-[#d4a373]">+₹1,200/guest/day</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Itemized Calculation Summary Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0c1510] border border-[#2b4232] space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-[#8fa898]">
                <span>Accommodation ({nights} nights × ₹{baseRatePerNight.toLocaleString('en-IN')})</span>
                <span className="text-[#f7f4ee]">₹{rawStayCost.toLocaleString('en-IN')}</span>
              </div>

              {discountPercent > 0 && (
                <div className="flex items-center justify-between text-emerald-400">
                  <span>Extended Stay Privilege ({discountPercent}% Discount)</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-[#8fa898]">
                <span>
                  Culinary Experience ({mealPlan === 'allInclusive' ? `3 Meals × ${guests} Guests × ${nights} Days` : 'Farm Breakfast Included'})
                </span>
                <span className="text-[#f7f4ee]">₹{totalMealCost.toLocaleString('en-IN')}</span>
              </div>

              <div className="pt-3 border-t border-[#2b4232] flex items-baseline justify-between">
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-[#d4a373] block">
                    Estimated Total Tariff
                  </span>
                  <span className="text-[10px] text-[#8fa898]">All taxes included</span>
                </div>
                <span className="text-2xl sm:text-3xl font-serif text-[#f7f4ee] font-semibold">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Button
                onClick={handleSendInquiry}
                className="bg-[#c5705d] hover:bg-[#b05a46] text-[#f7f4ee] py-6 text-xs uppercase tracking-wider font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c5705d]/20"
              >
                <Send className="w-4 h-4" />
                <span>Reserve on WhatsApp</span>
              </Button>

              <Button
                variant="outline"
                onClick={() => onOpenBookingWithDetails(selectedVillaId)}
                className="border-[#2b4232] bg-[#17271d] text-[#f7f4ee] hover:bg-[#203728] hover:border-[#d4a373] py-6 text-xs uppercase tracking-wider font-semibold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Fill Booking Form</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
