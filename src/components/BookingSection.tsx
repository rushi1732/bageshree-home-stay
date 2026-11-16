import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  BedDouble, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  Coffee,
  Award
} from 'lucide-react';
import { PROPERTY_INFO, ROOMS } from '../data/homestayData';

interface BookingSectionProps {
  initialValues?: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomType?: string;
  };
}

export const BookingSection: React.FC<BookingSectionProps> = ({ initialValues }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkIn, setCheckIn] = useState(initialValues?.checkIn || '');
  const [checkOut, setCheckOut] = useState(initialValues?.checkOut || '');
  const [guests, setGuests] = useState(initialValues?.guests || '2');
  const [selectedRoomId, setSelectedRoomId] = useState(initialValues?.roomType || 'deluxe-ac-room');
  const [mealPreference, setMealPreference] = useState('both');
  const [specialNotes, setSpecialNotes] = useState('');

  useEffect(() => {
    if (initialValues?.checkIn) setCheckIn(initialValues.checkIn);
    if (initialValues?.checkOut) setCheckOut(initialValues.checkOut);
    if (initialValues?.guests) setGuests(initialValues.guests);
    if (initialValues?.roomType) setSelectedRoomId(initialValues.roomType);
  }, [initialValues]);

  // Calculate nights and estimated price
  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];
  
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const estimatedTotal = selectedRoom.pricePerNight * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*New Stay Inquiry - Bageshree Home Stay*
---------------------------------------
*Guest Name:* ${fullName || 'Guest'}
*Contact Phone:* ${phoneNumber || 'Not provided'}
*Room Choice:* ${selectedRoom.name}
*Check-In:* ${checkIn || 'To be decided'}
*Check-Out:* ${checkOut || 'To be decided'}
*Nights:* ${nights}
*Number of Guests:* ${guests}
*Food Preference:* ${mealPreference}
*Estimated Tariff:* ₹${estimatedTotal} (${nights} night${nights > 1 ? 's' : ''})
*Notes:* ${specialNotes || 'None'}
---------------------------------------
Kindly confirm room availability and payment details.`;

    const whatsappUrl = `https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#fbf9f5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/20">
            <Calendar className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Reservations & Inquiries</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-5">
            Plan Your Konkan Getaway
          </h2>

          <p className="text-base text-[#4a5850] leading-relaxed">
            Fill out your trip details below for an instant tariff estimate and direct WhatsApp confirmation. 
            No middleman fees—book directly with the host family for the best guaranteed rate.
          </p>
        </div>

        {/* Form and Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#f5efe3] rounded-3xl p-6 sm:p-10 border border-[#e5d8c3] shadow-xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#e2d5be]">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#143224]">
                  Direct Booking Inquiry
                </h3>
                <p className="text-xs text-[#526359] mt-0.5">
                  Sends structured inquiry directly to host WhatsApp
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#166534] bg-[#25D366]/15 px-3 py-1.5 rounded-full border border-[#25D366]/30 font-medium">
                <MessageCircle className="w-3.5 h-3.5 text-[#166534]" />
                <span>Instant WhatsApp Connect</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rakesh Patil"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide">
                    Mobile / WhatsApp No. *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98200 XXXXX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#1b4332]" />
                    Check-In Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#1b4332]" />
                    Check-Out Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  />
                </div>
              </div>

              {/* Room Preference & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1">
                    <BedDouble className="w-3.5 h-3.5 text-[#1b4332]" />
                    Room Selection *
                  </label>
                  <select
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  >
                    {ROOMS.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} (₹{r.pricePerNight}/night)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#1b4332]" />
                    Number of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests (Couple)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Family)</option>
                    <option value="5">5 Guests</option>
                    <option value="6+">6+ Guests (Group)</option>
                  </select>
                </div>
              </div>

              {/* Meal Preferences */}
              <div>
                <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1">
                  <Coffee className="w-3.5 h-3.5 text-[#1b4332]" />
                  Food & Dining Interest
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                    mealPreference === 'breakfast' ? 'bg-[#1b4332] text-white border-[#1b4332]' : 'bg-white text-[#444] border-[#d6c7b0]'
                  }`}>
                    <input
                      type="radio"
                      name="meal"
                      value="breakfast"
                      checked={mealPreference === 'breakfast'}
                      onChange={() => setMealPreference('breakfast')}
                      className="hidden"
                    />
                    <span>Breakfast Only</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                    mealPreference === 'veg' ? 'bg-[#1b4332] text-white border-[#1b4332]' : 'bg-white text-[#444] border-[#d6c7b0]'
                  }`}>
                    <input
                      type="radio"
                      name="meal"
                      value="veg"
                      checked={mealPreference === 'veg'}
                      onChange={() => setMealPreference('veg')}
                      className="hidden"
                    />
                    <span>Konkan Veg Meals</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                    mealPreference === 'seafood' ? 'bg-[#1b4332] text-white border-[#1b4332]' : 'bg-white text-[#444] border-[#d6c7b0]'
                  }`}>
                    <input
                      type="radio"
                      name="meal"
                      value="seafood"
                      checked={mealPreference === 'seafood'}
                      onChange={() => setMealPreference('seafood')}
                      className="hidden"
                    />
                    <span>Fish / Non-Veg</span>
                  </label>

                  <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                    mealPreference === 'both' ? 'bg-[#1b4332] text-white border-[#1b4332]' : 'bg-white text-[#444] border-[#d6c7b0]'
                  }`}>
                    <input
                      type="radio"
                      name="meal"
                      value="both"
                      checked={mealPreference === 'both'}
                      onChange={() => setMealPreference('both')}
                      className="hidden"
                    />
                    <span>Veg & Non-Veg</span>
                  </label>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide">
                  Special Notes / Arrival Time
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Arriving by car around 3 PM, need extra mattress for kid..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
                />
              </div>

              {/* Price Calculation Summary Strip */}
              <div className="p-4 rounded-2xl bg-white border border-[#decbb4] flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-[#718277] block">Estimated Base Tariff</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-2xl font-bold text-[#143224]">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-[#526359]">
                      ({nights} night{nights > 1 ? 's' : ''} for {selectedRoom.name})
                    </span>
                  </div>
                </div>

                <div className="text-right text-[11px] text-[#1b4332] font-semibold bg-[#1b4332]/10 px-3 py-1.5 rounded-xl">
                  Direct Booking Guarantee
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Send Booking Inquiry on WhatsApp</span>
              </button>

              <p className="text-center text-[11px] text-[#718277]">
                Your details are private and used solely to communicate your reservation with the host family.
              </p>
            </form>
          </div>

          {/* Right Column: Host Card, Direct Calls & Accreditations */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Host Details Card */}
            <div className="bg-[#0d2319] text-[#e3ece6] rounded-3xl p-7 border border-[#1b4332] shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#1b4332] text-[#d4af37] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block">
                    MTDC Approved Homestay
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Registration No: R760
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#bed5c8] leading-relaxed mb-6">
                Official accreditation by the Maharashtra Tourism Development Corporation assures safe drinking water, 
                clean hygienic rooms, power backup, and honest pricing.
              </p>

              {/* Direct Phone Numbers Strip */}
              <div className="space-y-3 pt-4 border-t border-[#1b4332]">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-bold block">
                  Speak Directly With Host:
                </span>

                <a
                  href={`tel:${PROPERTY_INFO.phoneRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#1b4332]/60 hover:bg-[#1b4332] text-white transition-colors border border-white/10 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span className="font-mono text-sm font-semibold">{PROPERTY_INFO.phones[0]}</span>
                  </div>
                  <span className="text-xs text-[#d4af37] group-hover:translate-x-0.5 transition-transform">
                    Call Now
                  </span>
                </a>

                <a
                  href={`tel:${PROPERTY_INFO.phoneSecondaryRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#1b4332]/60 hover:bg-[#1b4332] text-white transition-colors border border-white/10 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#d4af37]" />
                    <span className="font-mono text-sm font-semibold">{PROPERTY_INFO.phones[1]}</span>
                  </div>
                  <span className="text-xs text-[#d4af37] group-hover:translate-x-0.5 transition-transform">
                    Call Now
                  </span>
                </a>

                <a
                  href={`mailto:${PROPERTY_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#1b4332]/60 hover:bg-[#1b4332] text-white transition-colors border border-white/10 group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-xs font-semibold truncate max-w-[200px]">{PROPERTY_INFO.email}</span>
                  </div>
                  <span className="text-xs text-[#d4af37] group-hover:translate-x-0.5 transition-transform">
                    Email
                  </span>
                </a>
              </div>
            </div>

            {/* Timings & House Policies */}
            <div className="bg-[#f5efe3] rounded-3xl p-6 border border-[#e5d8c3] shadow-sm">
              <h4 className="font-serif font-bold text-base text-[#143224] mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1b4332]" />
                <span>Check-in & Stay Policies</span>
              </h4>

              <div className="space-y-2.5 text-xs text-[#4a5850]">
                <div className="flex justify-between py-1 border-b border-[#e2d5be]">
                  <span className="font-medium">Check-In Time:</span>
                  <span className="font-bold text-[#143224]">12:00 PM (Flexible upon request)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e2d5be]">
                  <span className="font-medium">Check-Out Time:</span>
                  <span className="font-bold text-[#143224]">10:30 AM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#e2d5be]">
                  <span className="font-medium">Fresh Meals:</span>
                  <span className="font-bold text-[#143224]">Prepared fresh on order</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium">Pets:</span>
                  <span className="font-bold text-[#143224]">Please inquire before booking</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
