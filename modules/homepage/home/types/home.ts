import type { LucideIcon } from 'lucide-react';

export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}
export interface Room {
  name: string;
  description: string;
  price: number;
  image: string;
}
