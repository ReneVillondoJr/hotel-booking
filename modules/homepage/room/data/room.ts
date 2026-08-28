import type { Room } from '../types/room';

export const rooms: Room[] = [
  {
    id: 'deluxe-garden-room',
    name: 'Deluxe Garden Room',
    type: 'DELUXE',
    description:
      'A peaceful room overlooking the hotel gardens, designed for a comfortable and relaxing stay.',
    price: 120,
    maxGuests: 2,
    image: '/1.avif',
    amenities: [
      'King bed',
      'Garden view',
      'High-speed Wi-Fi',
      'Air conditioning',
      'Smart TV',
      'Private bathroom',
    ],
  },

  {
    id: 'signature-suite',
    name: 'Signature Suite',
    type: 'SUITE',
    description:
      'A spacious suite with a separate living area, thoughtful details, and plenty of room to unwind.',
    price: 180,
    maxGuests: 4,
    image: '/2.avif',
    amenities: [
      'King bed',
      'Living area',
      'Premium Wi-Fi',
      'Air conditioning',
      'Smart TV',
      'Private bathroom',
    ],
  },

  {
    id: 'premier-ocean-room',
    name: 'Premier Ocean Room',
    type: 'PREMIER',
    description:
      'Wake up to wide ocean views and natural morning light in this refined and comfortable room.',
    price: 210,
    maxGuests: 3,
    image: '/3.avif',
    amenities: [
      'King bed',
      'Ocean view',
      'High-speed Wi-Fi',
      'Air conditioning',
      'Smart TV',
      'Private bathroom',
    ],
  },

  {
    id: 'garden-family-room',
    name: 'Garden Family Room',
    type: 'DELUXE',
    description:
      'A generous room created for families and small groups looking for extra space and comfort.',
    price: 155,
    maxGuests: 4,
    image: '/4.avif',
    amenities: [
      'Two beds',
      'Garden view',
      'High-speed Wi-Fi',
      'Air conditioning',
      'Smart TV',
      'Private bathroom',
    ],
  },

  {
    id: 'lumora-premier-suite',
    name: 'Lumora Premier Suite',
    type: 'PREMIER',
    description:
      'Our most spacious accommodation with elegant interiors, a private sitting area, and premium amenities.',
    price: 260,
    maxGuests: 4,
    image: '/1.avif',
    amenities: [
      'King bed',
      'Separate living room',
      'Premium Wi-Fi',
      'Air conditioning',
      'Smart TV',
      'Luxury bathroom',
    ],
  },
];
