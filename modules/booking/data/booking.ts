import type { BookingRoom } from '../types/booking';

export const bookingRooms: BookingRoom[] = [
  {
    id: 'deluxe-garden',
    name: 'Deluxe Garden Room',
    description: 'A peaceful room overlooking the hotel gardens.',
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    price: 120,
    guests: 2,
  },
  {
    id: 'signature-suite',
    name: 'Signature Suite',
    description: 'A spacious suite designed for longer, slower stays.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    price: 180,
    guests: 3,
  },
  {
    id: 'premier-ocean',
    name: 'Premier Ocean Room',
    description: 'Wake up to wide views and natural morning light.',
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    price: 210,
    guests: 3,
  },
];
