export type RoomStatus =
  | 'AVAILABLE'
  | 'OCCUPIED'
  | 'RESERVED'
  | 'MAINTENANCE'
  | 'CLEANING'
  | 'INACTIVE';

export type RoomType =
  | 'STANDARD'
  | 'DELUXE'
  | 'SUPERIOR'
  | 'EXECUTIVE'
  | 'SUITE'
  | 'FAMILY'
  | 'PRESIDENTIAL';

export interface RoomImage {
  id: string;
  url: string;
  alt: string;
  isCover: boolean;
}

export interface RoomAmenity {
  id: string;
  name: string;
  icon?: string;
}

export interface Room {
  id: string;

  // Basic Information
  name: string;
  roomNumber: string;
  slug: string;
  description: string;

  // Room Classification
  type: RoomType;

  // Pricing
  pricePerNight: number;
  currency: 'PHP';

  // Capacity
  maxGuests: number;
  adults: number;
  children: number;

  // Room Details
  beds: number;
  bedType: string;
  bathrooms: number;
  size: number;

  // Availability
  status: RoomStatus;

  // Images
  images: RoomImage[];

  // Amenities
  amenities: RoomAmenity[];

  // Booking
  isBookable: boolean;

  // Display
  isFeatured: boolean;

  // Metadata
  createdAt: string;
  updatedAt: string;
}
