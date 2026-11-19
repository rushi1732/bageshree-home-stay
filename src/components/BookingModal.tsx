import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  Calendar, 
  Users, 
  BedDouble, 
  Coffee, 
  MessageCircle, 
  Phone, 
  Award,
  Sparkles
} from 'lucide-react';
import { ROOMS, PROPERTY_INFO } from '../data/homestayData';
import { getLocalToday, getNextDay, clampCheckInDate, clampCheckOutDate, calculateNightsBetween } from '../utils/dateUtils';
import { PriceTag } from './PriceTag';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialValues: {
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomType?: string;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialValues,
}) => {
  const today = getLocalToday();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkIn, setCheckIn] = useState(() => clampCheckInDate(initialValues.checkIn));
  const [checkOut, setCheckOut] = useState(() => clampCheckOutDate(initialValues.checkIn, initialValues.checkOut));
  const [guests, setGuests] = useState(initialValues.guests || '3 Adults (Small Group)');
  const [selectedRoomId, setSelectedRoomId] = useState(initialValues.roomType || 'family-ac-suite');
  const [mealPreference, setMealPreference] = useState('both');
  const [specialNotes, setSpecialNotes] = useState('');
  const [dateNotice, setDateNotice] = useState('');

  // Update when initialValues change
  useEffect(() => {
    if (initialValues.checkIn) {
      setCheckIn(clampCheckInDate(initialValues.checkIn));
    }
    if (initialValues.checkOut) {
      setCheckOut(clampCheckOutDate(initialValues.checkIn, initialValues.checkOut));
    }
    if (initialValues.guests) setGuests(initialValues.guests);
    if (initialValues.roomType) setSelectedRoomId(initialValues.roomType);
  }, [initialValues]);

  const handleCheckInChange = (val: string) => {
    if (!val) {
      setCheckIn(today);
      return;
    }
    if (val < today) {
      setDateNotice('आजच्या आधीची तारीख लॉक आहे. आपोआप आजची तारीख निवडली आहे.');
      setCheckIn(today);
      setTimeout(() => setDateNotice(''), 4500);
      return;
    }
    setCheckIn(val);

    const minCheckOut = getNextDay(val, 1);
    if (!checkOut || checkOut < minCheckOut) {
      setCheckOut(minCheckOut);
    }
  };

  const handleCheckOutChange = (val: string) => {
    const minCheckOut = getNextDay(checkIn || today, 1);
    if (!val || val < minCheckOut) {
      setDateNotice('Check-Out तारीख किमान Check-In नंतरची (१ रात्र) असावी.');
      setCheckOut(minCheckOut);
      setTimeout(() => setDateNotice(''), 4500);
      return;
    }
    setCheckOut(val);
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  const calculateNights = () => {
    return calculateNightsBetween(checkIn, checkOut);
  };

  const nights = calculateNights();
  const estimatedTotal = selectedRoom.pricePerNight * nights;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validCheckIn = clampCheckInDate(checkIn);
    const validCheckOut = clampCheckOutDate(validCheckIn, checkOut);
    const safeNights = calculateNightsBetween(validCheckIn, validCheckOut);
    const safeEstimatedTotal = selectedRoom.pricePerNight * safeNights;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#1b4332', '#d4af37', '#25D366', '#ffffff']
      });
    } catch (_) {}

    const formattedMessage = `*New Stay Inquiry - Bageshree Home Stay*
---------------------------------------
*Guest Name:* ${fullName || 'Guest'}
*Contact Phone:* ${phoneNumber || 'Not provided'}
*Room Choice:* ${selectedRoom.name}
*Check-In:* ${validCheckIn}
*Check-Out:* ${validCheckOut}
*Nights:* ${safeNights} Night(s)
*Number of Guests:* ${guests}
*Food Preference:* ${mealPreference}
*Estimated Tariff:* ₹${safeEstimatedTotal.toLocaleString('en-IN')} (${safeNights} night${safeNights > 1 ? 's' : ''})
*Notes:* ${specialNotes || 'None'}
---------------------------------------
Kindly confirm room availability and booking details.`;

    const whatsappUrl = `https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 400);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-2xl bg-[#fbf9f5] rounded-3xl shadow-2xl border border-[#dfd2be] my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#0d2319] text-white p-5 sm:p-6 flex items-start justify-between border-b border-[#1b4332]">
          <div className="flex items-start gap-3.5">
            <img 
              src="/logo.png" 
              alt="Bageshree Logo" 
              className="w-12 h-12 rounded-full object-contain bg-[#fbf9f5] p-0.5 border border-[#d4af37]/40 shrink-0 hidden sm:block shadow-md mt-0.5" 
            />
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1b4332] text-[#d4af37] text-[11px] font-semibold border border-[#d4af37]/30">
                  <Award className="w-3.5 h-3.5" />
                  <span className="font-sans tabular-nums">MTDC Approved (R760)</span>
                </span>
                <span className="text-xs text-[#a9c2b4]">Guhagar, Ratnagiri</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                Direct Booking Inquiry
              </h3>
              <p className="text-xs text-[#c6dad0] mt-0.5">
                Your inquiry formats instantly for direct host confirmation on WhatsApp
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0 -mr-1 -mt-1 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5 max-h-[78vh] overflow-y-auto">
          
          {/* Guest Name & Phone */}
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
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
                className="w-full px-4 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-sm font-sans tabular-nums text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1b4332]" />
                  Check-In Date *
                </span>
                <span className="text-[10px] text-[#856d49] lowercase font-normal">min: today</span>
              </label>
              <input
                type="date"
                required
                min={today}
                value={checkIn}
                onChange={(e) => handleCheckInChange(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-sm font-sans tabular-nums text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#1b4332]" />
                  Check-Out Date *
                </span>
                <span className="text-[10px] text-[#856d49] lowercase font-normal">min: +1 night</span>
              </label>
              <input
                type="date"
                required
                min={getNextDay(checkIn || today, 1)}
                value={checkOut}
                onChange={(e) => handleCheckOutChange(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-sm font-sans tabular-nums text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              />
            </div>
          </div>

          {dateNotice && (
            <div className="p-2.5 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#143224] text-xs font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#856d49] shrink-0" />
              <span>{dateNotice}</span>
            </div>
          )}

          {/* Room Selection & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                <BedDouble className="w-3.5 h-3.5 text-[#1b4332]" />
                Room Preference *
              </label>
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} (₹{r.pricePerNight.toLocaleString('en-IN')}/night)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#1b4332]" />
                Number of Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              >
                <option value="1 Adult (Solo)">1 Adult (Solo)</option>
                <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                <option value="3 Adults (Small Group)">3 Adults (Small Group)</option>
                <option value="4 Adults (Family)">4 Adults (Family)</option>
                <option value="5+ Adults (Large Family)">5+ Adults (Large Family)</option>
              </select>
            </div>
          </div>

          {/* Food / Dining Options */}
          <div>
            <label className="block text-xs font-bold text-[#1e3427] mb-2 uppercase tracking-wide flex items-center gap-1.5">
              <Coffee className="w-3.5 h-3.5 text-[#1b4332]" />
              Food & Meal Preferences
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                mealPreference === 'breakfast' ? 'bg-[#1b4332] text-white border-[#1b4332]' : 'bg-white text-[#444] border-[#d6c7b0]'
              }`}>
                <input
                  type="radio"
                  name="modal-meal"
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
                  name="modal-meal"
                  value="veg"
                  checked={mealPreference === 'veg'}
                  onChange={() => setMealPreference('veg')}
                  className="hidden"
                />
                <span>Konkan Veg</span>
              </label>

              <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                mealPreference === 'seafood' ? 'bg-[#1b4332] text-white border-[#1b4332]' : 'bg-white text-[#444] border-[#d6c7b0]'
              }`}>
                <input
                  type="radio"
                  name="modal-meal"
                  value="seafood"
                  checked={mealPreference === 'seafood'}
                  onChange={() => setMealPreference('seafood')}
                  className="hidden"
                />
                <span>Fish / Seafood</span>
              </label>

              <label className={`p-2.5 rounded-xl border flex items-center gap-2 cursor-pointer transition-colors ${
                mealPreference === 'both' ? 'bg-[#1b4332] text-white border-[#1b4332]' : 'bg-white text-[#444] border-[#d6c7b0]'
              }`}>
                <input
                  type="radio"
                  name="modal-meal"
                  value="both"
                  checked={mealPreference === 'both'}
                  onChange={() => setMealPreference('both')}
                  className="hidden"
                />
                <span>Veg & Non-Veg</span>
              </label>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-[#1e3427] mb-1.5 uppercase tracking-wide">
              Special Requests / Estimated Arrival Time
            </label>
            <input
              type="text"
              placeholder="e.g. Arriving by car around 2 PM, need extra mattress..."
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[#d6c7b0] bg-white text-sm text-[#222] focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
            />
          </div>

          {/* Price Calculation Banner */}
          <div className="p-4 rounded-2xl bg-[#f5efe3] border border-[#e2d5be] flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-[#718277] uppercase tracking-wide block">
                Estimated Tariff ({nights} night{nights > 1 ? 's' : ''})
              </span>
              <PriceTag amount={estimatedTotal} size="md" period={`for ${selectedRoom.name}`} />
            </div>

            <div className="text-right">
              <span className="text-[11px] text-[#166534] bg-[#25D366]/20 px-2.5 py-1 rounded-full font-bold">
                Direct Host Rate
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Confirm & Send Inquiry on WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-4 text-xs text-[#526359] pt-1">
              <span>Or speak directly:</span>
              <a
                href={`tel:${PROPERTY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 font-bold text-[#1b4332] hover:underline"
              >
                <Phone className="w-3.5 h-3.5 text-[#c49246]" />
                <span className="font-sans tabular-nums">{PROPERTY_INFO.phones[0]}</span>
              </a>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
