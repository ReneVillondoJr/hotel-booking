export type RoomType = 'DELUXE' | 'SUITE' | 'PREMIER';

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  description: string;
  price: number;
  maxGuests: number;
  image: string;
  amenities: string[];
}
