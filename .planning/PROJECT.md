# Bageshree Home Stay (बागेश्री होमस्टे)

## Overview
A bespoke, high-end creative website for **Bageshree Home Stay**, a 12-acre boutique eco-sanctuary and spice farmstead located in Devrukh, Ratnagiri (Konkan), Maharashtra. Built on the reusable creative web stack with zero unnecessary reconfigurations.

## Tech Stack
- **Framework**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS v3.4 + Radix UI + Custom Konkan Palette tokens
- **Typography**: Cormorant Garamond (Editorial serif) + Plus Jakarta Sans
- **UI Components**: shadcn/ui design system (`button`, `card`, `dialog`, `badge`)
- **3D Engine**: React Three Fiber v9 (`@react-three/fiber`), `@react-three/drei`, Three.js
- **Animation & Motion**:
  - GSAP 3 + ScrollTrigger (`@gsap/react`)
  - Motion / Framer Motion v14
  - Lenis smooth momentum scrolling synchronized with GSAP ticker
- **Icons**: Lucide React (No emoji icons)
- **Audio Experience**: Interactive Web Audio API Tanpura/nature resonance generator

## Implemented Architecture & Sections
1. **Premium Navbar**: Brand crest logo, dual-language typography (Bageshree • बागेश्री), smooth scroll nav links, telephone hotline, and reservation trigger button.
2. **Atmospheric Hero Section**: High-resolution Konkan photography with editorial typography, live boutique badge, and Fast Booking Bar (Dates, Villa, Guests, "Check Availability").
3. **Brand Story & Philosophy ("The Bageshree Philosophy")**: The story of Raga Bageshree, hand-chiseled red laterite stone (Chira), antique teakwood pillars, and an interactive Web Audio API ambient Tanpura synthesizer.
4. **Interactive 3D Villa Sanctuary (R3F + Drei)**: Stylized Konkan heritage villa with terracotta hipped roof, warm glowing brass lantern, surrounding betel nut palms, freshwater plunge pool, floating fireflies, and interactive lighting modes (Morning / Dusk / Midnight) with OrbitControls.
5. **Villas & Suites Showcase**: Interactive switcher across 4 stays (Gulmohar Courtyard, Parijat Riverfront, Bakul Machan, Champa Haveli) with specifications (sq.ft, guests, beds, views, amenities) and photo gallery selector.
6. **GSAP Scroll-Animation Section ("A Day in Rhythm at Bageshree")**: GSAP ScrollTrigger timeline capturing the rhythm of a day (06:30 AM to 08:30 PM).
7. **Konkan Gastronomy ("Chulivarcha Jevan")**: Farm-to-table cuisine showcase (Ukdiche Modak, Solkadhi, Pithla-Bhakri, Fresh Coastal Catch) with separate pure veg/Jain kitchen guarantee.
8. **Sanctuary Living & Amenities Grid**: Plunge pools, dual fiber Wi-Fi for workations, pet haven, stargazing courtyard, spice foraging trails, and heritage library.
9. **Interactive Tariff & Stay Cost Calculator**: Real-time calculation with villa selection, nights (10-15% extended stay discounts), guest counter, meal plan options, itemized breakdown, and direct WhatsApp inquiry integration.
10. **Statistics & Achievements**: 12+ acres, 4.98/5 rating, 42+ bird species, 100% solar powered.
11. **Guest Memoirs / Testimonials**: Verified guest reviews from Pune, Mumbai, and international travelers.
12. **Interactive FAQ Accordion**: Directions from Mumbai/Pune, pure veg kitchen policies, remote work connectivity, pet policies, and seasonal guide.
13. **Strong CTA Section**: "Disconnect from the noise. Reconnect with yourself."
14. **Comprehensive Luxury Footer**: Full address, road routes, seasonal harvest newsletter signup, and copyright.
15. **Reservation Dialog (shadcn/ui Dialog)**: Direct reservation submission and instant WhatsApp pre-filled booking flow.

## Verification & Build
- `pnpm run lint`: Clean (0 errors)
- `pnpm run build`: Production bundle built successfully (0 errors, 3.32s)
- Local Dev Server: Running at `http://127.0.0.1:5173/`
