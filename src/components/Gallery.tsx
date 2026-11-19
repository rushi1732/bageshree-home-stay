import React, { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  BedDouble, 
  Trees, 
  Lamp, 
  UtensilsCrossed, 
  Compass,
  Sparkles,
  Eye
} from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem } from '../data/homestayData';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Photos', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'rooms', label: 'Rooms & Interiors', icon: <BedDouble className="w-3.5 h-3.5" /> },
    { id: 'garden', label: 'Garden & Orchards', icon: <Trees className="w-3.5 h-3.5" /> },
    { id: 'night', label: 'Night Ambiance', icon: <Lamp className="w-3.5 h-3.5" /> },
    { id: 'dining', label: 'Konkan Food', icon: <UtensilsCrossed className="w-3.5 h-3.5" /> },
    { id: 'surroundings', label: 'Surroundings', icon: <Compass className="w-3.5 h-3.5" /> },
  ];

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#f4eee3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/10 text-[#1b4332] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1b4332]/15">
            <Camera className="w-3.5 h-3.5 text-[#1b4332]" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#143224] tracking-tight mb-4">
            Life at Bageshree Home Stay
          </h2>

          <p className="text-sm sm:text-base text-[#4a5850]">
            Explore our sun-dappled mango orchards, inviting AC rooms, soothing evening lights, 
            and authentic Konkani culinary spreads.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#1b4332] text-white shadow-md'
                  : 'bg-[#fbf9f5] text-[#4a5850] hover:bg-[#ede5d8] border border-[#dcd0bc]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Masonry / Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-[#e4dacb] cursor-pointer aspect-[4/3] border border-[#d9ccb6]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

              {/* Hover Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d4af37] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Always visible subtle label on mobile */}
              <div className="sm:hidden absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white text-xs font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tour Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#fbf9f5] border border-[#e5d8c3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1b4332]/10 flex items-center justify-center text-[#1b4332] shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#143224]">
                Want to see live video walkthroughs?
              </h4>
              <p className="text-xs text-[#526359]">
                Message us on WhatsApp to receive real-time videos of current room availability and garden views.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919403834127?text=Hello%20Bageshree%20Home%20Stay,%20could%20you%20share%20a%20video%20tour%20of%20the%20rooms%20and%20property?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#133225] text-white text-xs font-bold transition-all shadow-sm shrink-0"
          >
            <span>Request Video Tour</span>
          </a>
        </div>

      </div>
    </section>
  );
};
