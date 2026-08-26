import {
  Coffee,
  Dumbbell,
  Sparkles,
  Utensils,
  Waves,
  Wifi,
} from 'lucide-react';

import type { Amenity } from '../types/home';

export const amenities: Amenity[] = [
  {
    icon: Wifi,
    title: 'High-speed Wi-Fi',
    description: 'Stay connected wherever you are.',
  },
  {
    icon: Coffee,
    title: 'Morning breakfast',
    description: 'Fresh breakfast served every morning.',
  },
  {
    icon: Utensils,
    title: 'Dining',
    description: 'Seasonal food and thoughtful cocktails.',
  },
  {
    icon: Waves,
    title: 'Pool',
    description: 'A quiet space to relax and recharge.',
  },
  {
    icon: Dumbbell,
    title: 'Fitness',
    description: 'A modern space for your daily routine.',
  },
  {
    icon: Sparkles,
    title: 'Guest service',
    description: 'Thoughtful support whenever you need it.',
  },
];
import type { Room } from '../types/home';

export const rooms: Room[] = [
  {
    name: 'Deluxe Garden Room',
    description: 'A peaceful room overlooking the hotel gardens.',
    price: 120,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Signature Suite',
    description: 'A spacious suite designed for longer, slower stays.',
    price: 180,
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Premier Ocean Room',
    description: 'Wake up to wide views and natural morning light.',
    price: 210,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
  },
];
