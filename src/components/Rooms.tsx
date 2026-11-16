import React, { useState } from 'react';
import { 
  BedDouble, 
  Wind, 
  Zap, 
  ShowerHead, 
  Wifi, 
  Trees, 
  Sparkles, 
  Users, 
  Check, 
  MessageCircle, 
  Calendar,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { ROOMS, type Room, PROPERTY_INFO } from '../data/homestayData';
import { PriceTag } from './PriceTag';

interface RoomsProps {
  onSelectRoomForBooking: (roomId: string) => void;
  onOpenImageModal: (imageUrl: string, title: string, caption: string) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoomForBooking, onOpenImageModal }) => {
  const [selectedImages, setSelectedImages] = useState<{ [roomId: string]: string }>({
    'deluxe-ac-room': ROOMS[0].image,
    'family-ac-suite': ROOMS[1].image,
    'comfort-nature-room': ROOMS[2].image,
  });

  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-3.5 h-3.5" />;
      case 'Zap':
        return <Zap className="w-3.5 h-3.5" />;
      case 'ShowerHead':
        return <ShowerHead className="w-3.5 h-3.5" />;
      case 'Wifi':
        return <Wifi className="w-3.5 h-3.5" />;
      case 'Trees':
        return <Trees className="w-3.5 h-3.5" />;
      case 'Users':
        return <Users className="w-3.5 h-3.5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-3.5 h-3.5" />;
      default:
        return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  const handleThumbnailClick = (roomId: string, img: string) => {
    setSelectedImages((prev) => ({
      ...prev,
      [roomId]: img,
    }));
  };

  const handleWhatsAppRoomInquiry = (room: Room) => {
    const text = encodeURIComponent(
      `Hello Bageshree Home Stay, I am interested in booking the "${room.name}" (₹${room.pricePerNight.toLocaleString('en-IN')}/night). Please let me know current availability.`
    );
    window.open(`https://wa.me/${PROPERTY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="rooms" className="py-24 bg-[#f4eee3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-3 border border-[#1b4332]/15">
              <BedDouble className="w-3.5 h-3.5 text-[#1b4332]" />
              <span>Rooms & Accommodations</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight">
              Comfortable, Spotless & Breezy Stays
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#4a5850]">
            Every room at Bageshree is meticulously maintained, well-ventilated, 
            and backed by uninterrupted inverter power for a worry-free vacation.
          </p>
        </div>

        {/* Room Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => {
            const activeImage = selectedImages[room.id] || room.image;
            const allImages = [room.image, ...room.additionalImages];

            return (
              <div
                key={room.id}
                className="bg-[#fbf9f5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#e2d5be] flex flex-col group"
              >
                {/* Image Container with Thumbnails */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#e0d8cc]">
                  <img
                    src={activeImage}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => onOpenImageModal(activeImage, room.name, room.description)}
                  />
                  
                  {/* Badge: Type */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-[#0d2319]/85 text-[#e5c178] text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-[#d4af37]/30">
                      {room.type}
                    </span>
                  </div>

                  {/* Zoom indicator button */}
                  <button
                    onClick={() => onOpenImageModal(activeImage, room.name, room.description)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
                    aria-label="View Fullscreen"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Bottom Thumbnail Strip for Multi-view */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 p-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                    {allImages.slice(0, 4).map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleThumbnailClick(room.id, thumb)}
                        className={`relative w-12 h-9 rounded-lg overflow-hidden shrink-0 transition-all border ${
                          activeImage === thumb 
                            ? 'border-[#d4af37] ring-1 ring-[#d4af37]' 
                            : 'border-white/40 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={thumb} alt={`${room.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                    <span className="text-[10px] text-white/80 font-medium ml-auto pr-1">
                      {allImages.length} Photos
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Room Capacity & Beds with clean tabular styling */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#526359] mb-3 font-sans">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Users className="w-3.5 h-3.5 text-[#1b4332]" />
                        <span className="tabular-nums">{room.capacity}</span>
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <BedDouble className="w-3.5 h-3.5 text-[#1b4332]" />
                        <span>{room.bedType}</span>
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#143224] mb-2 group-hover:text-[#1b4332] transition-colors">
                      {room.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#526359] leading-relaxed mb-5">
                      {room.description}
                    </p>

                    {/* Key Badges & Amenities Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {room.amenities.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2 rounded-lg bg-[#f0e7d8] text-[#1b3b2b] text-[11px] font-medium"
                        >
                          <span className="text-[#1b4332]">
                            {getAmenityIcon(item.icon)}
                          </span>
                          <span className="truncate">{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Feature bullets */}
                    <ul className="space-y-2 mb-6 border-t border-[#e8ddcb] pt-4">
                      {room.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#44534a]">
                          <Check className="w-3.5 h-3.5 text-[#1b4332] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action CTAs with clean PriceTag component */}
                  <div className="border-t border-[#e8ddcb] pt-5 mt-auto">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-[#718277] uppercase tracking-wide block mb-0.5">
                          Starting from
                        </span>
                        <PriceTag amount={room.pricePerNight} size="md" />
                      </div>
                      <span className="text-[11px] text-[#1b4332] font-semibold bg-[#1b4332]/10 px-2.5 py-1 rounded-full">
                        Best Direct Price
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectRoomForBooking(room.id)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1b4332] hover:bg-[#133225] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>Reserve</span>
                      </button>

                      <button
                        onClick={() => handleWhatsAppRoomInquiry(room)}
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
