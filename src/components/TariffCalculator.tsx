import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Calendar, 
  Users, 
  BedDouble, 
  Coffee, 
  MessageCircle 
} from 'lucide-react';
import { ROOMS, PROPERTY_INFO } from '../data/homestayData';
import { PriceTag } from './PriceTag';

export const TariffCalculator: React.FC = () => {
  const [roomId, setRoomId] = useState('deluxe-ac-room');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [nights, setNights] = useState(2);
  const [mealPlan, setMealPlan] = useState<'none' | 'breakfast' | 'full'>('breakfast');

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  const mealAddonPerPersonPerDay = mealPlan === 'breakfast' ? 120 : mealPlan === 'full' ? 650 : 0;
  const totalGuests = adults + (children > 0 ? children * 0.5 : 0);
  const totalMealCost = mealAddonPerPersonPerDay * totalGuests * nights;
  const roomCost = selectedRoom.pricePerNight * nights;
  const grandTotal = Math.round(roomCost + totalMealCost);

  const handleConfettiAndWhatsApp = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#1b4332', '#d4af37', '#25D366', '#ffffff']
      });
    } catch (_) {}

    const message = `*Stay Estimate & Reservation Inquiry - Bageshree Home Stay*
---------------------------------------------
*Selected Room:* ${selectedRoom.name} (₹${selectedRoom.pricePerNight.toLocaleString('en-IN')}/night)
*Stay Duration:* ${nights} Night(s)
*Number of Adults:* ${adults}
*Number of Children:* ${children}
*Meal Option:* ${mealPlan === 'breakfast' ? 'Breakfast Included' : mealPlan === 'full' ? 'Full Meals (Breakfast + Lunch + Dinner)' : 'Room Only'}
---------------------------------------------
*Room Tariff:* ₹${roomCost.toLocaleString('en-IN')}
*Meals Estimate:* ₹${totalMealCost.toLocaleString('en-IN')}
*Total Estimated Tariff:* ₹${grandTotal.toLocaleString('en-IN')}
---------------------------------------------
Kindly confirm if this room is available for our planned dates!`;

    setTimeout(() => {
      window.open(`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }, 600);
  };

  return (
    <section id="calculator" className="py-24 bg-[#f4eee3] relative border-t border-[#e2d5be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/15">
            <Calculator className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Interactive Fare Concierge</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-5">
            Calculate Your Konkan Stay Tariff
          </h2>

          <p className="text-base text-[#4a5850] leading-relaxed">
            Transparent pricing with zero hidden charges. Adjust guests, nights, and meal preferences 
            to generate an instant custom quotation directly verified on WhatsApp.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto bg-[#fbf9f5] rounded-3xl p-6 sm:p-10 border border-[#dfd2be] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Inputs Column */}
            <div className="space-y-5">
              {/* Room Choice */}
              <div>
                <label className="block text-xs font-bold text-[#1e3427] mb-2 uppercase tracking-wide flex items-center gap-1.5">
                  <BedDouble className="w-4 h-4 text-[#1b4332]" />
                  1. Select Room / Suite
                </label>
                <div className="space-y-2">
                  {ROOMS.map((r) => (
                    <label
                      key={r.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                        roomId === r.id
                          ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-sm'
                          : 'bg-white text-[#2c3d32] border-[#d6c7b0] hover:bg-[#f6f0e6]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="radio"
                          name="calc-room"
                          value={r.id}
                          checked={roomId === r.id}
                          onChange={() => setRoomId(r.id)}
                          className="hidden"
                        />
                        <div>
                          <span className="font-bold text-xs block">{r.name}</span>
                          <span className={`text-[10px] ${roomId === r.id ? 'text-[#e5c178]' : 'text-[#6b7b71]'}`}>
                            {r.capacity}
                          </span>
                        </div>
                      </div>
                      <PriceTag 
                        amount={r.pricePerNight} 
                        size="sm" 
                        dark={roomId === r.id} 
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* Nights Slider / Selector */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-[#1e3427] uppercase tracking-wide flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#1b4332]" />
                    2. Stay Duration (Nights)
                  </label>
                  <span className="font-sans font-bold text-sm text-[#1b4332] bg-[#1b4332]/10 px-2.5 py-0.5 rounded-full tabular-nums">
                    {nights} {nights === 1 ? 'Night' : 'Nights'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={nights}
                  onChange={(e) => setNights(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#d6c7b0] rounded-lg appearance-none cursor-pointer accent-[#1b4332]"
                />
                <div className="flex justify-between text-[10px] text-[#718277] mt-1 font-sans tabular-nums">
                  <span>1 Night</span>
                  <span>3 Nights</span>
                  <span>7 Nights</span>
                  <span>10 Nights</span>
                </div>
              </div>

              {/* Adults & Kids */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#1b4332]" />
                    Adults
                  </label>
                  <select
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-xs font-semibold text-[#222]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#1b4332]" />
                    Kids (&lt;10 yrs)
                  </label>
                  <select
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-xs font-semibold text-[#222]"
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Meals Option */}
              <div>
                <label className="block text-xs font-bold text-[#1e3427] mb-2 uppercase tracking-wide flex items-center gap-1.5">
                  <Coffee className="w-4 h-4 text-[#1b4332]" />
                  3. Meal Plan Add-on
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMealPlan('none')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                      mealPlan === 'none'
                        ? 'bg-[#1b4332] text-white border-[#1b4332]'
                        : 'bg-white text-[#4a5850] border-[#d6c7b0]'
                    }`}
                  >
                    Room Only
                  </button>
                  <button
                    type="button"
                    onClick={() => setMealPlan('breakfast')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                      mealPlan === 'breakfast'
                        ? 'bg-[#1b4332] text-white border-[#1b4332]'
                        : 'bg-white text-[#4a5850] border-[#d6c7b0]'
                    }`}
                  >
                    + Breakfast
                  </button>
                  <button
                    type="button"
                    onClick={() => setMealPlan('full')}
                    className={`p-2.5 rounded-xl border text-center text-xs font-bold transition-all ${
                      mealPlan === 'full'
                        ? 'bg-[#1b4332] text-white border-[#1b4332]'
                        : 'bg-white text-[#4a5850] border-[#d6c7b0]'
                    }`}
                  >
                    Full Meals
                  </button>
                </div>
              </div>
            </div>

            {/* Price Summary Breakdown Column */}
            <div className="bg-[#f5efe3] rounded-2xl p-6 sm:p-7 border border-[#e2d5be] flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#996515] block mb-1">
                  Estimated Tariff Breakdown
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#143224] mb-4">
                  {selectedRoom.name}
                </h3>

                <div className="space-y-3 text-xs text-[#445349] border-t border-[#e2d5be] pt-4">
                  <div className="flex justify-between items-center">
                    <span>Room Tariff ({nights} nights):</span>
                    <PriceTag amount={roomCost} size="sm" period="" />
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Meal Package ({mealPlan}):</span>
                    <PriceTag amount={totalMealCost} size="sm" period="" />
                  </div>

                  <div className="flex justify-between items-center text-[#1b4332] font-semibold pt-1">
                    <span>Inverter Backup & Pure Water:</span>
                    <span className="text-[11px] text-[#166534] bg-[#25D366]/20 px-2 py-0.5 rounded">FREE</span>
                  </div>

                  <div className="flex justify-between items-center text-[#1b4332] font-semibold">
                    <span>Compound Parking & Wi-Fi:</span>
                    <span className="text-[11px] text-[#166534] bg-[#25D366]/20 px-2 py-0.5 rounded">FREE</span>
                  </div>
                </div>

                {/* Grand Total Strip */}
                <div className="mt-6 pt-5 border-t-2 border-[#1b4332]/20 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#143224] uppercase block">
                      Estimated Total
                    </span>
                    <span className="text-[10px] text-[#718277]">
                      Direct Host Rate (No OTAs fee)
                    </span>
                  </div>
                  <PriceTag amount={grandTotal} size="lg" period="" />
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={handleConfettiAndWhatsApp}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Lock In Quote on WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-[#718277] mt-2">
                  Triggers immediate chat with Bageshree Home Stay hosts.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
