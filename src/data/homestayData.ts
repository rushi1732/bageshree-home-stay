import type { Villa, MealItem, DayRhythmItem, Testimonial, FaqItem } from '../types/homestay'

export const VILLAS: Villa[] = [
  {
    id: 'gulmohar-courtyard',
    name: 'The Gulmohar Courtyard Villa',
    marathiName: 'गुलमोहर आंगण व्हिला',
    tagline: 'Ancestral Konkan Courtyard with Open-Sky Stone Bath',
    type: 'courtyard',
    pricePerNight: 8500,
    sqft: 1200,
    capacity: 'Up to 4 Guests',
    bed: 'King Bed + Daybed Lounger',
    view: 'Inner Courtyard & Organic Spice Grove',
    featuredImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Private Verandah with Teakwood Swing',
      'Open-to-Sky Laterite Stone Rain Shower',
      'Handcrafted Brass Fixtures & Copper Carafe',
      'Forest-Infused Ayurvedic Toiletries',
      'High-Speed Wi-Fi & Work Desk',
      'Complimentary Kokani Farm Breakfast'
    ],
    description:
      'Built with hand-chiseled red Chira laterite stone, The Gulmohar Villa centers around a peaceful courtyard. Sunbeams filter through red terracotta eaves while a private antique swing invites afternoon reading.',
    highlight: 'Private shaded verandah overlooking centuries-old betel nut palms.'
  },
  {
    id: 'parijat-riverfront',
    name: 'The Parijat Riverfront Chalet',
    marathiName: 'पारिजात नदीकिनारा कुटीर',
    tagline: 'Secluded Waterside Haven with Private Stone Plunge Pool',
    type: 'riverfront',
    pricePerNight: 11200,
    sqft: 950,
    capacity: '2 Adults (Couples Retreat)',
    bed: 'Four-Poster Teak King Bed',
    view: 'Perennial Mountain Stream & Bamboo Grove',
    featuredImage: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Private Basalt Stone Heated Plunge Pool',
      'Cantilevered Wooden Deck Over Water',
      'Outdoor Riverbed Daybed with Mosquito Netting',
      'Espresso & Artisan Lemongrass Tea Station',
      'Acoustic Marshall Speaker for Classical Ragas',
      'Candlelit Riverfront Dinner Setup'
    ],
    description:
      'Set right at the edge of the murmuring Sahyadri tributary, Parijat is our most romantic sanctuary. Step straight from your warm stone dip pool onto a wooden deck lulled by running water.',
    highlight: 'Private heated plunge pool surrounded by fragrant Parijat night-jasmine blooms.'
  },
  {
    id: 'bakul-machan',
    name: 'The Bakul Treehouse Machan',
    marathiName: 'बकुळ माचण स्वीट',
    tagline: 'Elevated 25ft in Betel Nut Palms with Glass Star Roof',
    type: 'machan',
    pricePerNight: 9800,
    sqft: 850,
    capacity: 'Up to 3 Guests',
    bed: 'King Cloud Bed + Canopy Daybed',
    view: 'Panoramic Spice Canopy & Western Ghats Mist',
    featuredImage: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      '360° Wraparound Timber Balcony',
      'Glass Ceiling Above Bed for Stargazing',
      'Brass Spotting Telescope for Birdwatching',
      'Hanging Cane Egg Chair',
      'Complimentary Binoculars & Estate Bird Guide',
      'Organic Herb Brew Bar'
    ],
    description:
      'Perched amongst tall betel nut palms and mango crowns, the Bakul Machan gives you front-row seats to Malabar Pied Hornbills and emerald drongos. Sleep beneath the constellations through the angled glass attic.',
    highlight: 'Glass skylight above the bed for gazing at unpolluted midnight constellations.'
  },
  {
    id: 'champa-haveli',
    name: 'The Champa Heritage Haveli',
    marathiName: 'चाफा हेरिटेज वाडा',
    tagline: 'Restored 120-Year-Old Konkan Wada for Families',
    type: 'haveli',
    pricePerNight: 15500,
    sqft: 1800,
    capacity: '6 to 8 Guests (Family Estate)',
    bed: '2 Master Suites + Traditional Mezzanine',
    view: 'Estate Courtyard & Organic Vegetable Garden',
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: [
      'Private Heritage Central Chowk (Aangan)',
      'Grand Verandah with Vintage Wooden Pillars',
      'Dedicated Family Dining Table for 8',
      'Fully Equipped Farm Kitchenette with Earthenware',
      'Private Outdoor Firepit & Seating Lounge',
      'Dedicated Estate Butler & Chef Service'
    ],
    description:
      'An authentic ancestral Kokanastha homestead meticulously restored with antique timber pillars, brass urns, and lime-plastered cool walls. The perfect retreat for multi-generational families and reunions.',
    highlight: 'Private inner rain chowk where gentle rain pools in an antique brass cistern.'
  }
]

export const MEALS: MealItem[] = [
  {
    id: 'm1',
    name: 'Chulivarcha Ukdiche Modak',
    marathiName: 'उकडीचे मोदक शुद्ध साजूक तुपासह',
    category: 'breakfast',
    description: 'Steaming fragrant rice-flour dumplings filled with freshly grated Konkan coconut and organic dark jaggery, generously drizzled with pure A2 cow ghee.',
    isSpecialty: true,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    name: 'Konkani Solkadhi with Fresh Kokum',
    marathiName: 'ताजी नारळाची सोलकढी',
    category: 'thali',
    description: 'Refreshing digestive pink nectar pounded by hand using fresh wild kokum fruit, raw pressed coconut milk, garlic, green chilies, and fresh coriander.',
    isSpecialty: true,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    name: 'Woodfire Pithla & Jowar Bhakri',
    marathiName: 'चुलीवरचं पिठलं, भाकरी आणि ठेचा',
    category: 'thali',
    description: 'Spiced gram flour curry simmered slowly over wood embers in cast iron vessels, paired with piping hot jowar bhakri, raw onions, and spicy green chilly thecha.',
    isSpecialty: true,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    name: 'Fresh Malvani Coastal Catch Fry',
    marathiName: 'सुरमई / पापलेट मालवणी रवा फ्राय',
    category: 'dinner',
    description: 'Daily morning catch from nearby coastal fishing boats marinated with triphala, kokum agal, and house-blended Malvani spices, semolina crusted and crisp fried.',
    isSpecialty: true,
    dietary: 'non-veg',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm5',
    name: 'Organic Kaju & Phanas Usal',
    marathiName: 'ओल्या काजूची आणि फणसाची भाजी',
    category: 'dinner',
    description: 'Tender tender raw cashews harvested from our own grove stewed with organic jackfruit cubes in a gently roasted coconut and toasted spice gravy.',
    isSpecialty: false,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm6',
    name: 'Lemongrass Chai & Warm Ghavane',
    marathiName: 'गवती चहा आणि लुसलुशीत घावणे',
    category: 'evening',
    description: 'Freshly plucked plantation lemongrass boiled with organic milk, served alongside lace-soft rice crepes (ghavane) and sweet coconut milk.',
    isSpecialty: false,
    dietary: 'veg',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80'
  }
]

export const DAY_RHYTHM: DayRhythmItem[] = [
  {
    time: '06:30 AM',
    period: 'Dawn Awakening',
    title: 'Birds in the Betel Grove & Lemongrass Chai',
    marathiTitle: 'पहाटेची मंजुळ किलबिल आणि गवती चहा',
    description:
      'Wake up naturally to the symphony of over 40 species of native birds. Sip fresh herbal lemongrass brew on your verandah as morning mist slowly rises from the river stream.',
    sensoryNote: 'Aroma of wet red earth and crisp eucalyptus breezes.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    tag: 'Serene Morning'
  },
  {
    time: '10:00 AM',
    period: 'Late Morning Feast',
    title: 'Chulivarcha Breakfast on the Verandah',
    marathiTitle: 'चुलीवरचा पारंपारिक नाश्ता',
    description:
      'Tender lace-like ghavane, warm ukdiche modak, freshly cracked coconuts, and wild honey collected by local Katkari villagers.',
    sensoryNote: 'Crackling teak firewood and steam of warm rice flour.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80',
    tag: 'Farm Gastronomy'
  },
  {
    time: '02:30 PM',
    period: 'Afternoon Slumber',
    title: 'Hammock Siesta & Natural River Dip',
    marathiTitle: 'नदीकिनारी वाचन आणि झोपाळा',
    description:
      'Dip your feet into cool mineral-rich stream waters or sway gently on a cane hammock with a beloved book while cicadas murmur in the canopy.',
    sensoryNote: 'Cool river stones underfoot and dappled green sunlight.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    tag: 'Deep Slowness'
  },
  {
    time: '05:45 PM',
    period: 'Golden Sunset Hour',
    title: 'Guided Spice Forage & Botanist Trail',
    marathiTitle: 'मसाल्यांच्या बागेतील भ्रमंती',
    description:
      'Walk alongside our resident horticulturist. Touch, crush, and smell wild cardamom pods, fresh black pepper vines, and nutmeg fruit under the golden evening sky.',
    sensoryNote: 'Spicy scent of crushed cinnamon bark and ripe jackfruit.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    tag: 'Nature Walk'
  },
  {
    time: '08:30 PM',
    period: 'Midnight Raga',
    title: 'Courtyard Hearth, Live Flute & Constellations',
    marathiTitle: 'रागांची मैफल, अंगणातील शेकोटी आणि चांदणे',
    description:
      'Gather around the open stone aangan under an ocean of stars. Savor piping hot pithla-bhakri or Malvani fish curry as gentle bansuri melodies echo into the Sahyadri stillness.',
    sensoryNote: 'Glowing brass lanterns and the soothing notes of Raga Bageshree.',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1000&q=80',
    tag: 'Midnight Magic'
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya & Vikram Kulkarni',
    city: 'Pune',
    role: 'Architect & Heritage Enthusiast',
    stayedAt: 'The Parijat Riverfront Chalet',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      'Bageshree is not just a homestay; it is a spiritual reset. Sitting by the basalt plunge pool with river water flowing right below our deck, hearing bansuri tunes at dusk—we forgot Mumbai and Pune even existed.',
    highlight: 'Soul-stirring river plunge pool and authentic Kokani hospitality.',
    date: 'February 2026'
  },
  {
    id: 't2',
    name: 'Dr. Siddharth Deshmukh',
    city: 'Mumbai',
    role: 'Author & Environmentalist',
    stayedAt: 'The Bakul Treehouse Machan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      'As a writer, I needed silence, deep green foliage, and zero interruptions. The glass ceiling over the bed in Bakul Machan let me gaze at the Milky Way while finishing three chapters of my book. And the Ukdiche Modak? Unforgettable.',
    highlight: 'Completed my book manuscript surrounded by betel nut trees.',
    date: 'January 2026'
  },
  {
    id: 't3',
    name: 'Elena & Marcus Weber',
    city: 'Munich, Germany',
    role: 'Sustainable Eco-Travelers',
    stayedAt: 'The Champa Heritage Haveli',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      'We travel across Asia seeking authentic eco-stays. Bageshree is among the top 1% globally. Completely solar powered, organic spice foraging, zero plastic, and the most delicious coconut curries on earth.',
    highlight: 'Pure authentic sustainability without sacrificing 5-star comfort.',
    date: 'December 2025'
  }
]

export const FAQS: FaqItem[] = [
  {
    id: 'faq1',
    category: 'Reaching Us',
    question: 'How do we reach Bageshree Homestay from Mumbai and Pune?',
    answer:
      'Bageshree is situated in the scenic foothill belt of Western Ghats near Devrukh / Sangameshwar (Ratnagiri district). From Pune, it is a pleasant 4.5-hour drive via scenic Varandha or Kumbharli Ghat. From Mumbai, it takes roughly 6 hours via the newly widened NH-66 Mumbai-Goa Highway. The nearest railway station is Sangameshwar Road (25 mins away), where we offer complimentary chauffeur pickup.'
  },
  {
    id: 'faq2',
    category: 'Dining & Kitchen',
    question: 'Do you cater to pure vegetarians, Jains, and dietary allergies?',
    answer:
      'Yes, absolutely! Our kitchen operates with strictly separated preparation areas for vegetarian and non-vegetarian meals. We specialize in authentic Kokani Brahmin satvik delicacies (without onion-garlic on request), gluten-free rice preparations (bhakri, ghavane, amboli), and can customize spice levels for children and elders.'
  },
  {
    id: 'faq3',
    category: 'Work & Connectivity',
    question: 'Is high-speed internet available for remote working or workations?',
    answer:
      'Yes! We have dedicated dual high-speed optical fiber lines (150+ Mbps) covering all villas and common verandahs, backed up by automated solar inverters and a silent generator. Many founders, designers, and authors stay with us for week-long productive retreats.'
  },
  {
    id: 'faq4',
    category: 'Pets & Nature',
    question: 'Is Bageshree Homestay pet-friendly?',
    answer:
      'Yes! We are proud pet lovers. Our 12-acre gated estate offers miles of safe, pesticide-free sniff trails and grassy lawns for your furry companions. Ground-floor courtyard villas have private enclosed patios suitable for pets.'
  },
  {
    id: 'faq5',
    category: 'Seasons',
    question: 'What is the best time of year to visit Bageshree?',
    answer:
      'Every season holds unique beauty. July to October (Monsoons) brings emerald landscapes, mist, and roaring freshwater streams. November to February offers crisp, chilly star-filled nights and daytime pleasant breezes. March to May brings our legendary sweet organic Alphonso mango harvest and refreshing river dip pools.'
  }
]

export const CONTACT_INFO = {
  primaryPhone: '+91 98224 81090',
  secondaryPhone: '+91 94220 54123',
  rawPhone: '919822481090',
  whatsappNumber: '919822481090',
  formattedPhone: '+91 98224 81090',
  email: 'stay@bageshreehomestay.in',
  address: 'Bageshree Agro-Retreat, Post Kondgaon, Near Devrukh, Sangameshwar, Ratnagiri District, Maharashtra – 415804',
  hostName: 'Sahasrabuddhe Family',
  bookingTiming: '8:00 AM – 9:30 PM IST'
}

