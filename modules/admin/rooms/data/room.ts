import type { Room, RoomAmenity } from '../types/room';

export const roomAmenities: RoomAmenity[] = [
  {
    id: 'wifi',
    name: 'Free Wi-Fi',
    icon: 'Wifi',
  },
  {
    id: 'air-conditioning',
    name: 'Air Conditioning',
    icon: 'Snowflake',
  },
  {
    id: 'tv',
    name: 'Smart TV',
    icon: 'Tv',
  },
  {
    id: 'breakfast',
    name: 'Breakfast Included',
    icon: 'Utensils',
  },
  {
    id: 'minibar',
    name: 'Mini Bar',
    icon: 'GlassWater',
  },
  {
    id: 'safe',
    name: 'In-Room Safe',
    icon: 'Lock',
  },
  {
    id: 'balcony',
    name: 'Private Balcony',
    icon: 'Building',
  },
  {
    id: 'ocean-view',
    name: 'Ocean View',
    icon: 'Waves',
  },
  {
    id: 'city-view',
    name: 'City View',
    icon: 'Building2',
  },
  {
    id: 'bathtub',
    name: 'Bathtub',
    icon: 'Bath',
  },
  {
    id: 'shower',
    name: 'Rain Shower',
    icon: 'ShowerHead',
  },
  {
    id: 'workspace',
    name: 'Work Desk',
    icon: 'Monitor',
  },
  {
    id: 'coffee',
    name: 'Coffee Maker',
    icon: 'Coffee',
  },
  {
    id: 'hairdryer',
    name: 'Hair Dryer',
    icon: 'Wind',
  },
  {
    id: 'room-service',
    name: 'Room Service',
    icon: 'ConciergeBell',
  },
  {
    id: 'parking',
    name: 'Free Parking',
    icon: 'Car',
  },
];

export const rooms: Room[] = [
  {
    id: 'room-001',
    name: 'Deluxe Garden Room',
    roomNumber: '101',
    slug: 'deluxe-garden-room-101',
    description:
      'A comfortable and elegant room with relaxing garden views, modern amenities, and a peaceful atmosphere.',

    type: 'DELUXE',

    pricePerNight: 4500,
    currency: 'PHP',

    maxGuests: 2,
    adults: 2,
    children: 1,

    beds: 1,
    bedType: '1 King Bed',
    bathrooms: 1,
    size: 32,

    status: 'AVAILABLE',

    images: [
      {
        id: 'img-001',
        url: '/1.avif',
        alt: 'Deluxe Garden Room',
        isCover: true,
      },
    ],

    amenities: [
      roomAmenities[0],
      roomAmenities[1],
      roomAmenities[2],
      roomAmenities[3],
      roomAmenities[10],
      roomAmenities[12],
      roomAmenities[13],
    ],

    isBookable: true,
    isFeatured: true,

    createdAt: '2026-08-01T08:00:00.000Z',
    updatedAt: '2026-08-20T10:30:00.000Z',
  },

  {
    id: 'room-002',
    name: 'Deluxe Ocean View',
    roomNumber: '102',
    slug: 'deluxe-ocean-view-102',
    description:
      'Enjoy beautiful ocean views from a spacious and stylish room designed for comfort and relaxation.',

    type: 'DELUXE',

    pricePerNight: 5800,
    currency: 'PHP',

    maxGuests: 2,
    adults: 2,
    children: 1,

    beds: 1,
    bedType: '1 King Bed',
    bathrooms: 1,
    size: 38,

    status: 'OCCUPIED',

    images: [
      {
        id: 'img-002',
        url: '/2.avif',
        alt: 'Deluxe Ocean View',
        isCover: true,
      },
    ],

    amenities: [
      roomAmenities[0],
      roomAmenities[1],
      roomAmenities[2],
      roomAmenities[7],
      roomAmenities[10],
      roomAmenities[12],
      roomAmenities[14],
    ],

    isBookable: true,
    isFeatured: true,

    createdAt: '2026-08-02T08:00:00.000Z',
    updatedAt: '2026-08-21T09:00:00.000Z',
  },

  {
    id: 'room-003',
    name: 'Superior King Room',
    roomNumber: '201',
    slug: 'superior-king-room-201',
    description:
      'A refined and spacious room featuring a king-sized bed and modern comforts for a relaxing stay.',

    type: 'SUPERIOR',

    pricePerNight: 5200,
    currency: 'PHP',

    maxGuests: 2,
    adults: 2,
    children: 1,

    beds: 1,
    bedType: '1 King Bed',
    bathrooms: 1,
    size: 40,

    status: 'AVAILABLE',

    images: [
      {
        id: 'img-003',
        url: '/3.avif',
        alt: 'Superior King Room',
        isCover: true,
      },
    ],

    amenities: [
      roomAmenities[0],
      roomAmenities[1],
      roomAmenities[2],
      roomAmenities[4],
      roomAmenities[5],
      roomAmenities[11],
      roomAmenities[12],
      roomAmenities[13],
    ],

    isBookable: true,
    isFeatured: false,

    createdAt: '2026-08-03T08:00:00.000Z',
    updatedAt: '2026-08-22T12:00:00.000Z',
  },

  {
    id: 'room-004',
    name: 'Executive Suite',
    roomNumber: '301',
    slug: 'executive-suite-301',
    description:
      'A premium suite offering generous space, elegant furnishings, and exclusive amenities for business or leisure.',

    type: 'EXECUTIVE',

    pricePerNight: 8500,
    currency: 'PHP',

    maxGuests: 3,
    adults: 3,
    children: 2,

    beds: 2,
    bedType: '1 King Bed, 1 Sofa Bed',
    bathrooms: 1,
    size: 65,

    status: 'RESERVED',

    images: [
      {
        id: 'img-004',
        url: '/4.avif',
        alt: 'Executive Suite',
        isCover: true,
      },
    ],

    amenities: [
      roomAmenities[0],
      roomAmenities[1],
      roomAmenities[2],
      roomAmenities[4],
      roomAmenities[5],
      roomAmenities[7],
      roomAmenities[11],
      roomAmenities[12],
      roomAmenities[14],
    ],

    isBookable: true,
    isFeatured: true,

    createdAt: '2026-08-04T08:00:00.000Z',
    updatedAt: '2026-08-23T08:45:00.000Z',
  },

  {
    id: 'room-005',
    name: 'Family Room',
    roomNumber: '202',
    slug: 'family-room-202',
    description:
      'A spacious room designed for families, offering comfortable beds and enough space for everyone.',

    type: 'FAMILY',

    pricePerNight: 6800,
    currency: 'PHP',

    maxGuests: 5,
    adults: 4,
    children: 3,

    beds: 3,
    bedType: '1 King Bed, 2 Single Beds',
    bathrooms: 1,
    size: 58,

    status: 'AVAILABLE',

    images: [
      {
        id: 'img-005',
        url: '/5.avif',
        alt: 'Family Room',
        isCover: true,
      },
    ],

    amenities: [
      roomAmenities[0],
      roomAmenities[1],
      roomAmenities[2],
      roomAmenities[3],
      roomAmenities[12],
      roomAmenities[13],
      roomAmenities[15],
    ],

    isBookable: true,
    isFeatured: true,

    createdAt: '2026-08-05T08:00:00.000Z',
    updatedAt: '2026-08-24T11:20:00.000Z',
  },
];
