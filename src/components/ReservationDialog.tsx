import React, { useState } from "react"
import { Calendar, Users, Phone, CheckCircle, Sparkles, Send } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VILLAS, CONTACT_INFO } from "@/data/homestayData"

interface ReservationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedVillaId?: string
}

export const ReservationDialog: React.FC<ReservationDialogProps> = ({
  open,
  onOpenChange,
  selectedVillaId,
}) => {
  const [internalVillaId, setInternalVillaId] = useState<string>(selectedVillaId || VILLAS[0].id)
  const [checkIn, setCheckIn] = useState<string>("2026-10-15")
  const [checkOut, setCheckOut] = useState<string>("2026-10-18")
  const [guests, setGuests] = useState<number>(2)
  const [name, setName] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)

  const villaId = selectedVillaId || internalVillaId

  const selectedVilla = VILLAS.find((v) => v.id === villaId) || VILLAS[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Construct WhatsApp prefilled message
    const message = encodeURIComponent(
      `Hello Bageshree Home Stay Team,\n\nI would like to inquire about a booking:\n• Name: ${name || 'Guest'}\n• Phone: ${phone || 'Not provided'}\n• Villa: ${selectedVilla.name} (${selectedVilla.marathiName})\n• Dates: ${checkIn} to ${checkOut}\n• Guests: ${guests} Adults\n• Special Notes: ${notes || 'None'}\n\nPlease confirm availability and tariff details. Thank you!`
    )
    
    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`
    setTimeout(() => {
      window.open(waUrl, "_blank")
    }, 1200)
  }

  const handleReset = () => {
    setSubmitted(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl bg-[#111e16] border-[#2b4232] text-[#f7f4ee] p-6 sm:p-8">
        {!submitted ? (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#d4a373] uppercase">
                <Sparkles className="w-4 h-4 text-[#d4a373]" />
                <span>Private Booking Sanctuary</span>
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-serif font-normal text-[#f7f4ee] mt-1">
                Reserve Your Stay at Bageshree
              </DialogTitle>
              <DialogDescription className="text-[#8fa898] text-sm">
                Fill in your preferred dates. Our host will confirm availability and welcome you to the tranquility of Sahyadri.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              {/* Villa Selection */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                  Select Villa or Suite
                </label>
                <div className="relative">
                  <select
                    value={villaId}
                    onChange={(e) => setInternalVillaId(e.target.value)}
                    className="w-full bg-[#17271d] border border-[#2b4232] rounded-lg px-3.5 py-2.5 text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d4a373] transition-colors"
                  >
                    {VILLAS.map((v) => (
                      <option key={v.id} value={v.id} className="bg-[#111e16] text-[#f7f4ee]">
                        {v.name} • ₹{v.pricePerNight.toLocaleString('en-IN')}/night
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Pickers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                    Check-in Date
                  </label>
                  <div className="relative flex items-center">
                    <Calendar className="w-4 h-4 text-[#d4a373] absolute left-3 pointer-events-none" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      required
                      className="w-full bg-[#17271d] border border-[#2b4232] rounded-lg pl-9 pr-3 py-2 text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d4a373]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                    Check-out Date
                  </label>
                  <div className="relative flex items-center">
                    <Calendar className="w-4 h-4 text-[#d4a373] absolute left-3 pointer-events-none" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      required
                      className="w-full bg-[#17271d] border border-[#2b4232] rounded-lg pl-9 pr-3 py-2 text-sm text-[#f7f4ee] focus:outline-none focus:border-[#d4a373]"
                    />
                  </div>
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                  Number of Guests
                </label>
                <div className="flex items-center gap-3 bg-[#17271d] border border-[#2b4232] rounded-lg px-4 py-2">
                  <Users className="w-4 h-4 text-[#d4a373]" />
                  <span className="text-sm font-medium flex-1">Adults & Children:</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-7 h-7 rounded border border-[#2b4232] bg-[#111e16] text-[#f7f4ee] hover:border-[#d4a373] flex items-center justify-center font-bold"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">{guests}</span>
                    <button
                      type="button"
                      onClick={() => setGuests(Math.min(8, guests + 1))}
                      className="w-7 h-7 rounded border border-[#2b4232] bg-[#111e16] text-[#f7f4ee] hover:border-[#d4a373] flex items-center justify-center font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Aditya Joshi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-[#17271d] border border-[#2b4232] rounded-lg px-3 py-2 text-sm text-[#f7f4ee] placeholder-[#8fa898]/50 focus:outline-none focus:border-[#d4a373]"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                    WhatsApp / Phone
                  </label>
                  <div className="relative flex items-center">
                    <Phone className="w-4 h-4 text-[#d4a373] absolute left-3 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-[#17271d] border border-[#2b4232] rounded-lg pl-9 pr-3 py-2 text-sm text-[#f7f4ee] placeholder-[#8fa898]/50 focus:outline-none focus:border-[#d4a373]"
                    />
                  </div>
                </div>
              </div>

              {/* Special notes */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#8fa898] block mb-1.5 font-medium">
                  Special Notes or Dietary Preferences (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Vegetarian meal preference, anniversary celebration, early check-in request..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#17271d] border border-[#2b4232] rounded-lg px-3 py-2 text-sm text-[#f7f4ee] placeholder-[#8fa898]/50 focus:outline-none focus:border-[#d4a373] resize-none"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full bg-[#c5705d] hover:bg-[#b35e4b] text-[#f7f4ee] py-6 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-[#c5705d]/20 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Reservation Request via WhatsApp</span>
                </Button>
                <p className="text-[11px] text-center text-[#8fa898] mt-2">
                  No payment charged today. Direct host confirmation within 30 minutes.
                </p>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#213527] border border-[#d4a373] flex items-center justify-center mx-auto text-[#d4a373]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#f7f4ee]">धन्यवाद • Booking Request Sent!</h3>
            <p className="text-sm text-[#8fa898] max-w-md mx-auto">
              Your request for <span className="text-[#f7f4ee] font-medium">{selectedVilla.name}</span> has been forwarded to our estate manager. WhatsApp will open momentarily with your pre-filled inquiry.
            </p>
            <p className="text-xs text-[#8fa898] pt-1">
              Direct Host Desk:{' '}
              <a href={`tel:+${CONTACT_INFO.rawPhone}`} className="text-[#d4a373] font-mono hover:underline">
                {CONTACT_INFO.primaryPhone}
              </a>
            </p>
            <div className="pt-3">
              <Button
                variant="outline"
                onClick={handleReset}
                className="border-[#2b4232] text-[#f7f4ee] hover:bg-[#17271d]"
              >
                Close Window
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
