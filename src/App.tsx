import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Attractions } from './components/Attractions';
import { Reviews } from './components/Reviews';
import { LocationMap } from './components/LocationMap';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { LightboxModal } from './components/LightboxModal';
import { GALLERY_ITEMS, type GalleryItem } from './data/homestayData';

export function App() {
  // Lightbox modal state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption?: string;
    currentIndex: number;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
    currentIndex: 0,
  });

  // Booking prefilled state passed from Hero quick bar or Room cards
  const [bookingPrefill, setBookingPrefill] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: string;
    roomType?: string;
  }>({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'deluxe-ac-room',
  });

  const scrollToBooking = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroBooking = (params?: { checkIn: string; checkOut: string; guests: string; roomType: string }) => {
    if (params) {
      setBookingPrefill(params);
    }
    scrollToBooking();
  };

  const handleRoomSelect = (roomId: string) => {
    setBookingPrefill((prev) => ({
      ...prev,
      roomType: roomId,
    }));
    scrollToBooking();
  };

  const handleOpenLightbox = (item: GalleryItem, index: number) => {
    setLightbox({
      isOpen: true,
      imageUrl: item.imageUrl,
      title: item.title,
      caption: item.caption,
      currentIndex: index,
    });
  };

  const handleOpenCustomImageModal = (imageUrl: string, title: string, caption: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title,
      caption,
      currentIndex: -1,
    });
  };

  const handleLightboxPrev = () => {
    if (lightbox.currentIndex < 0) return;
    const prevIndex = (lightbox.currentIndex === 0 ? GALLERY_ITEMS.length - 1 : lightbox.currentIndex - 1);
    const item = GALLERY_ITEMS[prevIndex];
    setLightbox((prev) => ({
      ...prev,
      imageUrl: item.imageUrl,
      title: item.title,
      caption: item.caption,
      currentIndex: prevIndex,
    }));
  };

  const handleLightboxNext = () => {
    if (lightbox.currentIndex < 0) return;
    const nextIndex = (lightbox.currentIndex + 1) % GALLERY_ITEMS.length;
    const item = GALLERY_ITEMS[nextIndex];
    setLightbox((prev) => ({
      ...prev,
      imageUrl: item.imageUrl,
      title: item.title,
      caption: item.caption,
      currentIndex: nextIndex,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1e2822] selection:bg-[#1b4332] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          onExploreRooms={scrollToRooms}
          onBookNow={handleHeroBooking}
        />

        <About />

        <Rooms
          onSelectRoomForBooking={handleRoomSelect}
          onOpenImageModal={handleOpenCustomImageModal}
        />

        <Amenities />

        <Gallery onOpenLightbox={handleOpenLightbox} />

        <Attractions />

        <Reviews />

        <LocationMap />

        <BookingSection initialValues={bookingPrefill} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA buttons */}
      <FloatingCTA onBookClick={scrollToBooking} />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        caption={lightbox.caption}
        onClose={() => setLightbox((prev) => ({ ...prev, isOpen: false }))}
        onPrev={lightbox.currentIndex >= 0 ? handleLightboxPrev : undefined}
        onNext={lightbox.currentIndex >= 0 ? handleLightboxNext : undefined}
      />
    </div>
  );
}

export default App;
