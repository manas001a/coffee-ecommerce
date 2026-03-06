export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'beans' | 'ground' | 'pods' | 'equipment' | 'merch';
  roastLevel: 'light' | 'medium' | 'dark' | 'espresso';
  origin: string;
  weight: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  featured: boolean;
  flavorNotes: string[];
}

export const products: Product[] = [
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe',
    description: 'Sourced from the lush highlands of Yirgacheffe, this single-origin gem delivers a symphony of bright citrus, fragrant jasmine, and sweet bergamot. Light roasted to preserve its delicate complexity, each sip reveals layers of flavor that dance across your palate.',
    shortDescription: 'Bright citrus & floral notes from Ethiopian highlands',
    price: 24.99,
    image: '/images/coffee-1.jpg',
    category: 'beans',
    roastLevel: 'light',
    origin: 'Ethiopia',
    weight: '340g',
    rating: 4.9,
    reviews: 234,
    badge: 'Best Seller',
    inStock: true,
    featured: true,
    flavorNotes: ['Citrus', 'Jasmine', 'Bergamot'],
  },
  {
    id: 'colombian-supremo',
    name: 'Colombian Supremo',
    description: 'From the misty mountains of Huila, Colombia, this supremo-grade coffee offers a perfectly balanced cup with rich caramel sweetness, bright apple acidity, and a silky chocolate finish. Medium roasted to unlock its full-bodied character.',
    shortDescription: 'Rich caramel & chocolate from Colombian mountains',
    price: 22.99,
    image: '/images/coffee-2.jpg',
    category: 'beans',
    roastLevel: 'medium',
    origin: 'Colombia',
    weight: '340g',
    rating: 4.8,
    reviews: 189,
    inStock: true,
    featured: true,
    flavorNotes: ['Caramel', 'Apple', 'Chocolate'],
  },
  {
    id: 'sumatra-mandheling',
    name: 'Sumatra Mandheling',
    description: 'A bold, full-bodied Indonesian masterpiece. Wet-hulled and dark-roasted to perfection, this Sumatra Mandheling delivers an earthy, complex profile with tobacco undertones, dark chocolate richness, and a lingering spicy finish.',
    shortDescription: 'Bold & earthy with dark chocolate undertones',
    price: 26.99,
    image: '/images/coffee-3.jpg',
    category: 'beans',
    roastLevel: 'dark',
    origin: 'Indonesia',
    weight: '340g',
    rating: 4.7,
    reviews: 156,
    badge: 'New Arrival',
    inStock: true,
    featured: true,
    flavorNotes: ['Dark Chocolate', 'Tobacco', 'Spice'],
  },
  {
    id: 'guatemala-antigua',
    name: 'Guatemala Antigua',
    description: 'Grown in the volcanic soils of Antigua Valley, this distinguished coffee presents a harmonious blend of smoky sweetness, cocoa depth, and subtle spice. The medium-dark roast brings out its signature velvety body.',
    shortDescription: 'Smoky & sweet from volcanic Antigua Valley',
    price: 25.99,
    image: '/images/coffee-4.jpg',
    category: 'beans',
    roastLevel: 'medium',
    origin: 'Guatemala',
    weight: '340g',
    rating: 4.8,
    reviews: 143,
    inStock: true,
    featured: true,
    flavorNotes: ['Cocoa', 'Smoke', 'Spice'],
  },
  {
    id: 'kenya-aa',
    name: 'Kenya AA Reserve',
    description: 'The finest grade from Kenya\'s central highlands, this AA-grade coffee explodes with juicy blackcurrant, grapefruit zest, and a wine-like complexity that defines the excellence of Kenyan coffee cultivation.',
    shortDescription: 'Juicy blackcurrant with wine-like complexity',
    price: 29.99,
    originalPrice: 34.99,
    image: '/images/coffee-5.jpg',
    category: 'beans',
    roastLevel: 'light',
    origin: 'Kenya',
    weight: '340g',
    rating: 4.9,
    reviews: 98,
    badge: 'Limited Edition',
    inStock: true,
    featured: false,
    flavorNotes: ['Blackcurrant', 'Grapefruit', 'Wine'],
  },
  {
    id: 'italian-espresso-blend',
    name: 'Italian Espresso Blend',
    description: 'Our master roaster\'s signature espresso blend, crafted from a carefully curated selection of Brazilian, Colombian, and Indonesian beans. Dark-roasted for a bold, creamy shot with intense cocoa and toasted nut notes.',
    shortDescription: 'Bold & creamy signature espresso blend',
    price: 23.99,
    image: '/images/coffee-6.jpg',
    category: 'beans',
    roastLevel: 'espresso',
    origin: 'Blend',
    weight: '340g',
    rating: 4.7,
    reviews: 312,
    badge: 'Staff Pick',
    inStock: true,
    featured: true,
    flavorNotes: ['Cocoa', 'Toasted Nut', 'Caramel'],
  },
  {
    id: 'costa-rica-tarrazu',
    name: 'Costa Rica Tarrazú',
    description: 'From the renowned Tarrazú region at 1,500 meters elevation, this honey-processed beauty offers a bright, clean cup with honey sweetness, citrus brightness, and a smooth almond finish.',
    shortDescription: 'Honey-sweet with bright citrus notes',
    price: 27.99,
    image: '/images/coffee-7.jpg',
    category: 'ground',
    roastLevel: 'medium',
    origin: 'Costa Rica',
    weight: '340g',
    rating: 4.6,
    reviews: 87,
    inStock: true,
    featured: false,
    flavorNotes: ['Honey', 'Citrus', 'Almond'],
  },
  {
    id: 'brazilian-santos',
    name: 'Brazilian Santos',
    description: 'A quintessential Brazilian coffee from the Santos port region. Naturally processed for a sweet, low-acid cup with nutty overtones, milk chocolate smoothness, and a clean, satisfying finish.',
    shortDescription: 'Sweet & nutty with milk chocolate smoothness',
    price: 19.99,
    image: '/images/coffee-8.jpg',
    category: 'ground',
    roastLevel: 'medium',
    origin: 'Brazil',
    weight: '340g',
    rating: 4.5,
    reviews: 265,
    inStock: true,
    featured: false,
    flavorNotes: ['Nutty', 'Milk Chocolate', 'Clean'],
  },
];

export const categories = [
  { id: 'all', name: 'All Coffee', icon: '☕' },
  { id: 'beans', name: 'Whole Beans', icon: '🫘' },
  { id: 'ground', name: 'Ground Coffee', icon: '⚡' },
  { id: 'pods', name: 'Coffee Pods', icon: '💊' },
  { id: 'equipment', name: 'Equipment', icon: '🔧' },
  { id: 'merch', name: 'Merchandise', icon: '👕' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Coffee Enthusiast',
    text: 'The Ethiopian Yirgacheffe completely changed my morning routine. The floral notes are unlike anything I\'ve tasted from other roasters. Absolutely divine!',
    rating: 5,
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Barista & Café Owner',
    text: 'As a professional barista, I\'m incredibly picky about my beans. Brew Haven\'s Italian Espresso Blend pulls the most beautiful shots — rich crema, complex flavor. My customers love it.',
    rating: 5,
    avatar: 'JR',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Home Brewer',
    text: 'I\'ve been subscribing for 6 months now and every bag has been exceptional. The freshness is unmatched and the flavor profiles are always spot-on. Highly recommend!',
    rating: 5,
    avatar: 'EC',
  },
];
