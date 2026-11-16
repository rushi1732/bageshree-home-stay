import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { DiningShowcase } from './components/DiningShowcase';
import { Amenities } from './components/Amenities';
import { TariffCalculator } from './components/TariffCalculator';
import { Gallery } from './components/Gallery';
import { Attractions } from './components/Attractions';
import { Reviews } from './components/Reviews';
import { LocationMap } from './components/LocationMap';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { LightboxModal } from './components/LightboxModal';
import { BookingModal } from './components/BookingModal';
import { GALLERY_ITEMS, type GalleryItem } from './data/homestayData';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Booking popup modal state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Initialize Lenis smooth scroll for butter-smooth luxury scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

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
    guests: '3 Adults (Small Group)',
    roomType: 'family-ac-suite',
  });

  // Opens the separate popup modal directly without scrolling down
  const handleHeroBooking = (params?: { checkIn: string; checkOut: string; guests: string; roomType: string }) => {
    if (params) {
      setBookingPrefill(params);
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenBookingModal = (roomId?: string) => {
    if (roomId && typeof roomId === 'string') {
      setBookingPrefill((prev) => ({
        ...prev,
        roomType: roomId,
      }));
    }
    setIsBookingModalOpen(true);
  };

  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDining = () => {
    const el = document.getElementById('dining');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
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
      {/* Sticky Navigation with Soundscape Toggle & Direct Modal trigger */}
      <Navbar 
        onBookClick={() => handleOpenBookingModal()} 
        onPageSelect={setActiveSection}
        activePage={activeSection}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          onExploreRooms={scrollToRooms}
          onExploreDining={scrollToDining}
          onBookNow={handleHeroBooking}
        />

        <About />

        <Rooms
          onSelectRoomForBooking={(id) => handleOpenBookingModal(id)}
          onOpenImageModal={handleOpenCustomImageModal}
        />

        <DiningShowcase />

        <Amenities />

        <TariffCalculator />

        <Gallery onOpenLightbox={handleOpenLightbox} />

        <Attractions />

        <Reviews />

        <LocationMap />

        <BookingSection initialValues={bookingPrefill} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CTA buttons */}
      <FloatingCTA onBookClick={() => handleOpenBookingModal()} />

      {/* Separate Luxury Booking Inquiry Popup Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialValues={bookingPrefill}
      />

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
