export interface Villa {
  id: string
  name: string
  marathiName: string
  tagline: string
  type: 'courtyard' | 'riverfront' | 'machan' | 'haveli'
  pricePerNight: number
  sqft: number
  capacity: string
  bed: string
  view: string
  featuredImage: string
  gallery: string[]
  amenities: string[]
  description: string
  highlight: string
}

export interface MealItem {
  id: string
  name: string
  marathiName: string
  category: 'breakfast' | 'thali' | 'evening' | 'dinner'
  description: string
  isSpecialty: boolean
  dietary: 'veg' | 'non-veg' | 'both'
  image: string
}

export interface DayRhythmItem {
  time: string
  period: string
  title: string
  marathiTitle: string
  description: string
  sensoryNote: string
  image: string
  tag: string
}

export interface Testimonial {
  id: string
  name: string
  city: string
  role: string
  stayedAt: string
  avatar: string
  rating: number
  quote: string
  highlight: string
  date: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: string
}
