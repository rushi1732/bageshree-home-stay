import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
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
import { PageBanner } from './components/PageBanner';
import { GALLERY_ITEMS, type GalleryItem } from './data/homestayData';

export function App() {
  // Page routing state: 'home' | 'rooms' | 'dining' | 'amenities' | 'calculator' | 'gallery' | 'attractions' | 'contact'
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isSinglePageMode, setIsSinglePageMode] = useState<boolean>(false);

  // Synchronize with URL hash on load and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'rooms', 'dining', 'amenities', 'calculator', 'gallery', 'attractions', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const changePage = (pageId: string) => {
    setCurrentPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
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
  }, [currentPage, isSinglePageMode]);

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

  // Booking prefill state
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
    if (isSinglePageMode) {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      changePage('contact');
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

  // Render content according to Page Mode
  const renderAnimatedPageContent = () => {
    switch (currentPage) {
      case 'rooms':
        return (
          <div key="page-rooms">
            <PageBanner
              title="Accommodations & Suite Tariffs"
              subtitle="Cozy, impeccably clean AC and nature rooms with uninterrupted inverter backup, plush bedding, and garden views."
              badge="Spotless & Air Conditioned"
              breadcrumb="Rooms & Tariffs"
              bgImage="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1920&q=80"
              onHomeClick={() => changePage('home')}
            />
            <Rooms
              onSelectRoomForBooking={handleRoomSelect}
              onOpenImageModal={handleOpenCustomImageModal}
            />
            <TariffCalculator />
            <Reviews />
          </div>
        );

      case 'dining':
        return (
          <div key="page-dining">
            <PageBanner
              title="Konkan Gastronomy & Food Culture"
              subtitle="Savor steaming hot homemade Pohe, ginger chai, authentic coastal seafood thalis, and sacred Ukadiche Modak."
              badge="100% Home Cooked with Love"
              breadcrumb="Konkan Dining"
              bgImage="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1920&q=80"
              onHomeClick={() => changePage('home')}
            />
            <DiningShowcase />
            <Reviews />
          </div>
        );

      case 'amenities':
        return (
          <div key="page-amenities">
            <PageBanner
              title="Comforts, Amenities & Nature Groves"
              subtitle="Gated compound parking for multiple SUVs, ambient fairy lighting, lush mango orchards, and pure Konkan serenity."
              badge="MTDC Verified Standards"
              breadcrumb="Amenities"
              bgImage="https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1920&q=80"
              onHomeClick={() => changePage('home')}
            />
            <Amenities />
            <Reviews />
          </div>
        );

      case 'calculator':
        return (
          <div key="page-calculator">
            <PageBanner
              title="Interactive Stay & Tariff Calculator"
              subtitle="Calculate transparent tariff for your dates, family members, and meal preferences with instant WhatsApp quote confirmation."
              badge="Direct Host Rates • Zero Booking Fees"
              breadcrumb="Tariff Calculator"
              bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
              onHomeClick={() => changePage('home')}
            />
            <TariffCalculator />
            <Rooms
              onSelectRoomForBooking={handleRoomSelect}
              onOpenImageModal={handleOpenCustomImageModal}
            />
          </div>
        );

      case 'gallery':
        return (
          <div key="page-gallery">
            <PageBanner
              title="Photo Gallery & Visual Tour"
              subtitle="Take a stroll through our bedrooms, lush green orchards, ambient evening courtyard, and authentic culinary spreads."
              badge="High-Resolution Showcase"
              breadcrumb="Photo Gallery"
              bgImage="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80"
              onHomeClick={() => changePage('home')}
            />
            <Gallery onOpenLightbox={handleOpenLightbox} />
          </div>
        );

      case 'attractions':
        return (
          <div key="page-attractions">
            <PageBanner
              title="Explore Guhagar & Ratnagiri Coast"
              subtitle="Discover virgin white sand beaches, ancient Shiva temples, rocky sea gorges, and local Alphonso mango bazaars."
              badge="Tourist & Day-Trip Guide"
              breadcrumb="Explore Guhagar"
              bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
              onHomeClick={() => changePage('home')}
            />
            <Attractions />
            <LocationMap />
          </div>
        );

      case 'contact':
        return (
          <div key="page-contact">
            <PageBanner
              title="Contact, Location & Reservations"
              subtitle="Speak directly with our host family, check availability, or navigate your drive from Mumbai, Pune, or Chiplun."
              badge="Direct Host Reservation"
              breadcrumb="Contact & Map"
              bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80"
              onHomeClick={() => changePage('home')}
            />
            <BookingSection initialValues={bookingPrefill} />
            <LocationMap />
          </div>
        );

      case 'home':
      default:
        return (
          <div key="page-home">
            <Hero
              onExploreRooms={() => changePage('rooms')}
              onExploreDining={() => changePage('dining')}
              onBookNow={handleHeroBooking}
            />
            <About />
            <Rooms
              onSelectRoomForBooking={handleRoomSelect}
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
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1e2822] selection:bg-[#1b4332] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar 
        currentPage={currentPage}
        onPageChange={changePage}
        onBookClick={scrollToBooking}
        isSinglePageMode={isSinglePageMode}
        onTogglePageMode={() => {
          setIsSinglePageMode(!isSinglePageMode);
          if (isSinglePageMode) {
            changePage('home');
          }
        }}
      />

      {/* Main Animated Page Content */}
      <main className="flex-1">
        {isSinglePageMode ? (
          <div>
            <Hero
              onExploreRooms={() => {
                const el = document.getElementById('rooms');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onExploreDining={() => {
                const el = document.getElementById('dining');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onBookNow={handleHeroBooking}
            />
            <About />
            <Rooms
              onSelectRoomForBooking={handleRoomSelect}
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
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(4px)' }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderAnimatedPageContent()}
            </motion.div>
          </AnimatePresence>
        )}
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
