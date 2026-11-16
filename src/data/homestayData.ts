export interface Room {
  id: string;
  name: string;
  tagline: string;
  type: string;
  capacity: string;
  bedType: string;
  pricePerNight: number;
  image: string;
  additionalImages: string[];
  description: string;
  features: string[];
  amenities: {
    icon: string;
    label: string;
  }[];
  bookingCode?: string;
  maxGuests?: number;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'rooms' | 'garden' | 'night' | 'dining' | 'surroundings';
  imageUrl: string;
  caption: string;
}

export interface Attraction {
  name: string;
  distance: string;
  driveTime: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tripType: string;
}

export const PROPERTY_INFO = {
  name: "Bageshree Home Stay",
  tagline: "Experience Authentic Konkan Hospitality amidst Nature's Serenity",
  subheadline: "Cozy, spacious AC rooms, home-cooked local meals, and peaceful family getaways in Guhagar.",
  mtdcRegNo: "MTDC Approved (Reg. No. R760)",
  rating: 4.9,
  reviewsCount: 148,
  phones: ["+91 94038 34127", "+91 70838 08483"],
  phoneRaw: "9403834127",
  phoneSecondaryRaw: "7083808483",
  whatsappNumber: "919403834127",
  email: "bageshreehomestay@gmail.com",
  address: "Near Saticha Mal, Kaundhar Kalsur, Shringartali - Abloli Road, Taluka Guhagar, District Ratnagiri, Maharashtra - 415724",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234.823908868114!2d73.2384732!3d17.4851239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be9ebba1619623b%3A0xe54dbf117c4627ef!2sBageshree%20Home%20Stay!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsUrl: "https://maps.app.goo.gl/9Wv2V8PjKjZ4gD5W7",
};

export const HERO_SLIDES = [
  {
    image: "/images/property/property-1.jpg",
    title: "Sanctuary of Peace in Ratnagiri",
    subtitle: "Wake up to birdsong and the rustle of mango & cashew groves in Kaundhar Kalsur, Guhagar.",
    accent: "Authentic Nature Retreat",
  },
  {
    image: "/images/rooms/family/family-1.jpg",
    title: "Warm, Spotless Family Comfort",
    subtitle: "Spacious air-conditioned rooms designed with cozy warmth and 24/7 power backup.",
    accent: "Comfort & Cleanliness",
  },
  {
    image: "/images/night/night-3.jpg",
    title: "Enchanting Evening Ambience",
    subtitle: "Relax under warm fairy-lit gardens surrounded by pure country air and starry Konkan skies.",
    accent: "Magical Garden Evenings",
  },
  {
    image: "/images/property/property-4.jpg",
    title: "Authentic Konkan Nature Living",
    subtitle: "Traditional red-tile roof retreat nestled in sprawling Alphonso mango and betel nut trees.",
    accent: "Pure Village Serenity",
  },
];

export const ROOMS: Room[] = [
  {
    id: "family-ac-suite",
    name: "Spacious Family AC Room (1 Double Bed + 3 Single Beds)",
    tagline: "Spacious 4-Bed Layout for Large Families & Groups",
    type: "Family AC (Max 5 Guests)",
    capacity: "Max 5 Guests (5 Adults • 4 Children)",
    bedType: "1 Double Bed + 3 Single Beds (4 Beds Total)",
    bookingCode: "1524295401",
    maxGuests: 5,
    pricePerNight: 3500,
    image: "/images/rooms/family/family-1.jpg",
    additionalImages: [
      "/images/rooms/family/family-2.jpg",
      "/images/rooms/family/family-3.jpg",
      "/images/rooms/family/family-4.jpg",
    ],
    description: "Designed specifically for relaxed family vacations and groups. Features 1 Double Bed plus 3 Single Beds (4 beds total, comfortably sleeping up to 5 adults), powerful Split AC, spotlessly clean attached bathroom with 24-hr hot water geyser, and uninterrupted inverter backup power.",
    features: [
      "1 Double Bed + 3 Single Beds (Sleeps up to 5 guests with individual bedding)",
      "Powerful Split AC with continuous inverter backup support",
      "Sparkling clean attached private bathroom with 24-hour hot water",
      "Large airy room with peaceful garden surroundings",
      "Complimentary high-speed Wi-Fi and direct compound parking access",
    ],
    amenities: [
      { icon: "Users", label: "Max 5 Guests Capacity" },
      { icon: "BedDouble", label: "1 Double + 3 Single Beds" },
      { icon: "Wind", label: "Split Air Conditioning" },
      { icon: "Zap", label: "Inverter Power Backup" },
      { icon: "ShowerHead", label: "24h Hot Water Geyser" },
      { icon: "Wifi", label: "High-Speed Wi-Fi" },
    ],
  },
  {
    id: "deluxe-ac-room",
    name: "Deluxe Ac Double Room",
    tagline: "Serene Garden Views & Modern Comfort for Couples",
    type: "Deluxe AC (Max 2 Guests)",
    capacity: "Max 2 Guests (2 Adults • 1 Child)",
    bedType: "1 Large Double Bed (+ Extra Mattress on request)",
    bookingCode: "1524295402",
    maxGuests: 2,
    pricePerNight: 2200,
    image: "/images/rooms/deluxe/deluxe-3.jpg",
    additionalImages: [
      "/images/rooms/deluxe/deluxe-1.jpg",
      "/images/rooms/deluxe/deluxe-2.jpg",
    ],
    description: "Immaculately maintained, air-conditioned bedroom with premium double bed, crisp white linens, private bathroom with hot water, and large windows looking out onto our lush garden and mango trees. Fitted with full inverter backup for continuous comfort.",
    features: [
      "1 Large Double Bed with cozy mattress & clean fresh linens",
      "High-efficiency Split AC with inverter power support",
      "Spotlessly clean private bathroom with 24-hr hot water geyser",
      "Large garden-facing windows with mosquito mesh screens",
      "Complimentary high-speed Wi-Fi and direct parking access",
    ],
    amenities: [
      { icon: "Users", label: "Max 2 Guests" },
      { icon: "BedDouble", label: "1 Large Double Bed" },
      { icon: "Wind", label: "Split Air Conditioning" },
      { icon: "Zap", label: "Inverter Power Backup" },
      { icon: "ShowerHead", label: "24h Hot Water Geyser" },
      { icon: "Trees", label: "Garden Views" },
    ],
  },
  {
    id: "comfort-nature-room",
    name: "Standard Double Room",
    tagline: "Naturally Breezy & Pocket-Friendly Konkan Stay",
    type: "Standard Non-AC (Max 2 Guests)",
    capacity: "Max 2 Guests (2 Adults • 1 Child)",
    bedType: "1 Comfortable Double Bed",
    bookingCode: "1524295403",
    maxGuests: 2,
    pricePerNight: 1600,
    image: "/images/rooms/standard/standard-1.jpg",
    additionalImages: [
      "/images/rooms/standard/standard-2.jpg",
      "/images/rooms/standard/standard-3.jpg",
    ],
    description: "Nestled beneath the natural shade of our tall mango and betel nut trees, this cozy double room features a sturdy wooden bed with floral bedding, ceiling fan, and an attached sanitized bathroom with hot water provision. Ideal for budget travelers and nature enthusiasts seeking authentic rustic simplicity.",
    features: [
      "1 Comfortable Double Bed with wooden headboard & fresh floral linens",
      "Surrounded by cooling green foliage and gentle cross-ventilation breezes",
      "High-speed ceiling fans with continuous inverter power backup",
      "Spotlessly sanitized attached private bathroom with hot water facility",
      "Complimentary high-speed Wi-Fi & quiet rural atmosphere",
    ],
    amenities: [
      { icon: "Users", label: "Max 2 Guests" },
      { icon: "BedDouble", label: "1 Double Bed" },
      { icon: "Trees", label: "Nature Canopy Breeze" },
      { icon: "Zap", label: "Inverter Backup" },
      { icon: "ShowerHead", label: "Hot Water Facility" },
      { icon: "Wifi", label: "High-Speed Wi-Fi" },
    ],
  },
];

export const AMENITIES: AmenityItem[] = [
  {
    id: "food",
    title: "Homely Food & Breakfast",
    description: "Start your morning with piping hot Konkani Pohe, Upma, boiled/omelette eggs, and authentic masala chai. Enjoy traditional homemade vegetarian & coastal seafood thalis made with fresh local ingredients and Solkadhi.",
    iconName: "UtensilsCrossed",
    highlight: "Authentic Home-Cooked Konkan Delights",
  },
  {
    id: "parking",
    title: "Ample Secure Parking",
    description: "Expansive gated compound parking with easy turning space. Safely park multiple SUVs, family cars, or tempo travellers right in front of your stay without any congestion.",
    iconName: "Car",
    highlight: "Private Gated Compound",
  },
  {
    id: "lighting",
    title: "Ambient Evening Lighting",
    description: "As the sun sets over the Konkan hills, the garden glows with warm fairy lighting and architectural lamps, creating an enchanting, tranquil atmosphere to unwind with your family.",
    iconName: "Lamp",
    highlight: "Fairy Lights & Magical Ambiance",
  },
  {
    id: "garden",
    title: "Expansive Mango & Cashew Orchard",
    description: "Stroll through our peaceful grounds filled with Alphonso mango trees, cashew nuts, and betel nut palms. Enjoy pure unpolluted oxygen and morning chirping of exotic local birds.",
    iconName: "Trees",
    highlight: "Private Green Nature Groves",
  },
  {
    id: "power",
    title: "Continuous Inverter Backup",
    description: "Never worry about Konkan coastal power fluctuations. Our reliable inverter backup system keeps your fans, lights, and essential charging ports running seamlessly 24/7.",
    iconName: "Zap",
    highlight: "Uninterrupted Peace of Mind",
  },
  {
    id: "hygiene",
    title: "Spotless Bathrooms & Hot Water",
    description: "Every room features a sparkling, sanitized private western bathroom with instant hot water geysers, 24-hour pure water supply, and fresh towels for total hygiene.",
    iconName: "Droplets",
    highlight: "24-Hour Hot & Cold Water Supply",
  },
  {
    id: "wifi",
    title: "Complimentary High-Speed Wi-Fi",
    description: "Stay connected with family or comfortably take remote work meetings amidst tranquil nature with reliable high-speed wireless internet across rooms and the verandah.",
    iconName: "Wifi",
    highlight: "Workation & Streaming Ready",
  },
  {
    id: "mtdc",
    title: "MTDC Approved Standards",
    description: "Officially certified under Maharashtra Tourism Development Corporation (Reg. No. R760), ensuring verified safety, genuine hospitality, and transparent guest service.",
    iconName: "Award",
    highlight: "Verified & Government Approved",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Homestay Building & Red Tiled Verandah",
    category: "garden",
    imageUrl: "/images/property/property-1.jpg",
    caption: "Traditional Konkan nature retreat facade surrounded by coconut and betel nut groves in Kaundhar Kalsur.",
  },
  {
    id: "g2",
    title: "Fairy-Lit Evening Garden Illumination",
    category: "night",
    imageUrl: "/images/night/night-1.jpg",
    caption: "Warm decorative ambient lights glowing across the lush garden in the evening.",
  },
  {
    id: "g3",
    title: "Spacious Family AC Suite (4 Beds)",
    category: "rooms",
    imageUrl: "/images/rooms/family/family-1.jpg",
    caption: "Real interior photo of the Family Suite with 1 Double Bed + 3 Single Beds, easily hosting 5 guests.",
  },
  {
    id: "g4",
    title: "Lush Green Compound & Orchard Paths",
    category: "garden",
    imageUrl: "/images/property/property-2.jpg",
    caption: "Expansive green orchard grounds filled with Alphonso mango and cashew trees.",
  },
  {
    id: "g5",
    title: "Enchanting Night Courtyard",
    category: "night",
    imageUrl: "/images/night/night-2.jpg",
    caption: "Relax under starry Konkan skies with family in a magical ambient atmosphere.",
  },
  {
    id: "g6",
    title: "Deluxe AC Double Room Interior",
    category: "rooms",
    imageUrl: "/images/rooms/deluxe/deluxe-1.jpg",
    caption: "Real photo of the spotlessly clean Deluxe AC room with double bed and modern comfort.",
  },
  {
    id: "g7",
    title: "Spacious Dining Area & Verandah",
    category: "dining",
    imageUrl: "/images/dining/dining-1.jpg",
    caption: "Open-air airy dining area where fresh home-cooked Konkan meals and breakfast are served.",
  },
  {
    id: "g8",
    title: "Garden Pathway Ambient Glow",
    category: "night",
    imageUrl: "/images/night/night-3.jpg",
    caption: "Beautiful nighttime walkway lighting providing safe, scenic strolls after dinner.",
  },
  {
    id: "g9",
    title: "Standard Double Room",
    category: "rooms",
    imageUrl: "/images/rooms/standard/standard-1.jpg",
    caption: "Real photo of the Standard Double Room with wooden bed, natural ventilation, and ceiling fan.",
  },
  {
    id: "g10",
    title: "Front Driveway & Safe Parking Space",
    category: "surroundings",
    imageUrl: "/images/property/property-4.jpg",
    caption: "Wide private gated compound accommodating multiple family SUVs and travellers safely.",
  },
  {
    id: "g11",
    title: "Family Dining Seating",
    category: "dining",
    imageUrl: "/images/dining/dining-2.jpg",
    caption: "Comfortable tables and chairs for relaxed family breakfast, lunch, and dinner gatherings.",
  },
  {
    id: "g12",
    title: "Peaceful Verandah Walkway",
    category: "surroundings",
    imageUrl: "/images/property/property-3.jpg",
    caption: "Peaceful morning walkways surrounded by fresh country breeze.",
  },
];

export const ATTRACTIONS: Attraction[] = [
  {
    name: "Guhagar Beach",
    distance: "12 km",
    driveTime: "15 mins",
    description: "One of Maharashtra's longest and cleanest white-sand beaches, lined with Suru trees. Ideal for peaceful evening strolls, camel rides, and breathtaking sunsets.",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tag: "Pristine White Sands",
  },
  {
    name: "Shri Vyadeshwar Shiva Temple",
    distance: "11 km",
    driveTime: "14 mins",
    description: "Ancient Panchayatan Shiva temple located in the heart of Guhagar town, celebrated for its spiritual tranquility and magnificent stone carvings.",
    imageUrl: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
    tag: "Spiritual Heritage",
  },
  {
    name: "Velneshwar Beach & Temple",
    distance: "18 km",
    driveTime: "25 mins",
    description: "A scenic crescent bay with gentle azure waters suitable for safe swimming, flanked by coconut palms and the revered Velneshwar Shiva shrine.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    tag: "Crescent Beach Cove",
  },
  {
    name: "Hedvi Beach & Dashbhuja Ganpati",
    distance: "24 km",
    driveTime: "35 mins",
    description: "Historic Dashbhuja (ten-handed) Lakshmi Ganesh temple carved from white marble, and the dramatic natural rocky sea gorge 'Brahman Ghal'.",
    imageUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
    tag: "Natural Wonder & Temple",
  },
  {
    name: "Shringartali Local Bazaar",
    distance: "3 km",
    driveTime: "5 mins",
    description: "The primary local market hub for buying authentic GI-tagged Alphonso mangoes, freshly roasted cashew nuts, Kokum syrup, and Konkan spices.",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    tag: "Local Shopping Hub",
  },
  {
    name: "Durga Devi Temple",
    distance: "11 km",
    driveTime: "15 mins",
    description: "Surrounded by ancient trees and a serene pushkarni (temple pond), this revered goddess temple is an epitome of calm Konkan temple architecture.",
    imageUrl: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    tag: "Ancient Kuldaivat",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sanjay Deshmukh",
    location: "Pune",
    rating: 5,
    date: "October 2024",
    comment: "Outstanding experience at Bageshree! The rooms are super clean and the AC worked perfectly without any interruptions. The host family prepared hot pohe and delicious solkadhi for us. Surrounded by peaceful mango trees, our kids loved playing in the garden.",
    tripType: "Family Vacation",
  },
  {
    name: "Pooja & Amit Kulkarni",
    location: "Mumbai",
    rating: 5,
    date: "December 2024",
    comment: "If you want true Konkan peace away from crowded hotels, this is the place. Secure parking was a big relief for our car. The evening fairy lights in the garden created such a soothing vibe. Guhagar beach is just 15 minutes away. Will visit again!",
    tripType: "Couples Getaway",
  },
  {
    name: "Rohan Sawant",
    location: "Thane",
    rating: 5,
    date: "January 2025",
    comment: "MTDC approved and genuinely top standard. Spotless bathrooms with hot water, comfortable beds, and very polite hosts. The silence at night under the stars was pure bliss. Highly recommended for families visiting Guhagar.",
    tripType: "Family Road Trip",
  },
];
