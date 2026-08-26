import type { Experience } from '@/modules/experience/types/experience';

export const experiences: Experience[] = [
  {
    id: '1',
    slug: 'sunset-dining',
    name: 'Sunset Dining',
    category: 'Dining',
    description:
      'Enjoy an unforgettable dinner while watching the sun set over the horizon.',
    longDescription:
      'Experience an intimate evening of exceptional food, warm hospitality, and beautiful sunset views. Our sunset dining experience is carefully prepared for guests looking to slow down and enjoy the moment.',
    image: '/11.jpg',
    duration: '2 hours',
    price: 2500,
    featured: true,
    location: 'Rooftop Restaurant',
    highlights: [
      'Sunset views',
      'Three-course dinner',
      'Welcome drink',
      'Private table',
    ],
  },
  {
    id: '2',
    slug: 'spa-wellness',
    name: 'Spa & Wellness',
    category: 'Wellness',
    description:
      'Relax, recharge, and restore your body with our signature spa experience.',
    longDescription:
      'Escape from the everyday and enjoy a peaceful wellness experience designed to help you completely relax. Choose from a selection of treatments performed by our experienced therapists.',
    image: '/12.jpg',
    duration: '90 minutes',
    price: 1800,
    featured: true,
    location: 'Hotel Spa',
    highlights: [
      'Full-body massage',
      'Aromatherapy',
      'Private treatment room',
      'Refreshments',
    ],
  },
  {
    id: '3',
    slug: 'island-adventure',
    name: 'Island Adventure',
    category: 'Adventure',
    description:
      'Discover beautiful destinations and experience the best of the surrounding islands.',
    longDescription:
      'Spend the day exploring breathtaking coastal destinations with our guided island adventure. Enjoy crystal-clear waters, scenic views, and plenty of opportunities to discover local attractions.',
    image: '/13.jpg',
    duration: 'Full day',
    price: 3500,
    featured: true,
    location: 'Hotel Lobby Pickup',
    highlights: [
      'Round-trip transport',
      'Professional guide',
      'Island hopping',
      'Lunch included',
    ],
  },
  {
    id: '4',
    slug: 'pool-day',
    name: 'Pool Day',
    category: 'Leisure',
    description:
      'Spend a relaxing day beside the pool with refreshing drinks and comfortable surroundings.',
    longDescription:
      'Enjoy a laid-back day by the pool. Reserve your preferred poolside space and spend the day swimming, relaxing, and enjoying refreshments.',
    image: '/14.jpg',
    duration: 'Full day',
    price: 1200,
    featured: false,
    location: 'Infinity Pool',
    highlights: [
      'Pool access',
      'Poolside lounger',
      'Welcome drink',
      'Towel service',
    ],
  },
  {
    id: '5',
    slug: 'romantic-escape',
    name: 'Romantic Escape',
    category: 'Romance',
    description:
      'Create a memorable evening with a private and romantic experience.',
    longDescription:
      'Celebrate a special occasion with a beautifully prepared romantic experience. From private dining to thoughtful details, every element is designed to make the evening unforgettable.',
    image: '/15.jpg',
    duration: '3 hours',
    price: 4200,
    featured: false,
    location: 'Private Terrace',
    highlights: [
      'Private dining',
      'Decorated table',
      'Welcome champagne alternative',
      'Dessert',
    ],
  },
  {
    id: '6',
    slug: 'local-discovery',
    name: 'Local Discovery',
    category: 'Local',
    description:
      'Explore the culture, food, and hidden gems surrounding the hotel.',
    longDescription:
      'Discover the destination through the eyes of a local guide. Visit popular landmarks, discover hidden spots, and taste local specialties along the way.',
    image: '/16.jpg',
    duration: '4 hours',
    price: 2200,
    featured: false,
    location: 'Hotel Lobby Pickup',
    highlights: [
      'Local guide',
      'Cultural sites',
      'Local food tasting',
      'Transportation',
    ],
  },
];
