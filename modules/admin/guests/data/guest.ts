import type { Guest } from '../types/guest';

export const guests: Guest[] = [
  {
    id: 'guest-001',

    firstName: 'James',
    lastName: 'Anderson',
    email: 'james.anderson@example.com',
    phone: '+63 917 123 4567',

    gender: 'MALE',
    dateOfBirth: '1988-04-15',

    address: '123 Ocean Drive',
    city: 'Cebu City',
    state: 'Cebu',
    country: 'Philippines',
    postalCode: '6000',

    nationality: 'Filipino',
    idType: 'Passport',
    idNumber: 'P1234567',

    status: 'ACTIVE',

    totalBookings: 8,
    completedBookings: 7,
    cancelledBookings: 1,
    totalSpent: 62400,

    notes: 'Prefers rooms with ocean views.',

    hasAccount: true,
    emailVerified: true,
    phoneVerified: true,

    createdAt: '2026-01-10T08:30:00.000Z',
    updatedAt: '2026-08-20T10:00:00.000Z',
    lastBookingAt: '2026-08-18T14:00:00.000Z',
  },

  {
    id: 'guest-002',

    firstName: 'Sophia',
    lastName: 'Williams',
    email: 'sophia.williams@example.com',
    phone: '+63 918 234 5678',

    gender: 'FEMALE',
    dateOfBirth: '1992-09-22',

    address: '45 Palm Street',
    city: 'Manila',
    state: 'Metro Manila',
    country: 'Philippines',
    postalCode: '1000',

    nationality: 'Filipino',
    idType: 'Driver License',
    idNumber: 'D9876543',

    status: 'ACTIVE',

    totalBookings: 5,
    completedBookings: 5,
    cancelledBookings: 0,
    totalSpent: 38500,

    notes: 'Usually travels for business.',

    hasAccount: true,
    emailVerified: true,
    phoneVerified: true,

    createdAt: '2026-02-05T09:00:00.000Z',
    updatedAt: '2026-08-21T11:30:00.000Z',
    lastBookingAt: '2026-08-20T15:00:00.000Z',
  },

  {
    id: 'guest-003',

    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@example.com',
    phone: '+63 919 345 6789',

    gender: 'MALE',
    dateOfBirth: '1985-06-11',

    address: '78 Sunset Boulevard',
    city: 'Davao City',
    state: 'Davao del Sur',
    country: 'Philippines',
    postalCode: '8000',

    nationality: 'Filipino',
    idType: 'Passport',
    idNumber: 'P7654321',

    status: 'ACTIVE',

    totalBookings: 3,
    completedBookings: 2,
    cancelledBookings: 1,
    totalSpent: 21900,

    notes: 'Travels with family.',

    hasAccount: true,
    emailVerified: true,
    phoneVerified: false,

    createdAt: '2026-03-12T10:00:00.000Z',
    updatedAt: '2026-08-17T09:30:00.000Z',
    lastBookingAt: '2026-08-15T12:00:00.000Z',
  },

  {
    id: 'guest-004',

    firstName: 'Emily',
    lastName: 'Johnson',
    email: 'emily.johnson@example.com',
    phone: '+63 920 456 7890',

    gender: 'FEMALE',
    dateOfBirth: '1995-01-30',

    address: '21 Garden Road',
    city: 'Cagayan de Oro',
    state: 'Misamis Oriental',
    country: 'Philippines',
    postalCode: '9000',

    nationality: 'Filipino',
    idType: 'Passport',
    idNumber: 'P2468135',

    status: 'ACTIVE',

    totalBookings: 6,
    completedBookings: 6,
    cancelledBookings: 0,
    totalSpent: 47200,

    notes: 'Prefers quiet rooms.',

    hasAccount: true,
    emailVerified: true,
    phoneVerified: true,

    createdAt: '2026-04-01T08:00:00.000Z',
    updatedAt: '2026-08-22T10:00:00.000Z',
    lastBookingAt: '2026-08-21T13:00:00.000Z',
  },

  {
    id: 'guest-005',

    firstName: 'Daniel',
    lastName: 'Martinez',
    email: 'daniel.martinez@example.com',
    phone: '+63 921 567 8901',

    gender: 'MALE',
    dateOfBirth: '1990-11-18',

    address: '56 Coastal Avenue',
    city: 'Iloilo City',
    state: 'Iloilo',
    country: 'Philippines',
    postalCode: '5000',

    nationality: 'Filipino',
    idType: 'Driver License',
    idNumber: 'D1357924',

    status: 'INACTIVE',

    totalBookings: 2,
    completedBookings: 2,
    cancelledBookings: 0,
    totalSpent: 14500,

    notes: 'Account inactive by guest request.',

    hasAccount: true,
    emailVerified: true,
    phoneVerified: true,

    createdAt: '2026-05-02T10:30:00.000Z',
    updatedAt: '2026-08-10T08:00:00.000Z',
    lastBookingAt: '2026-06-12T11:00:00.000Z',
  },

  {
    id: 'guest-006',

    firstName: 'Olivia',
    lastName: 'Taylor',
    email: 'olivia.taylor@example.com',
    phone: '+63 922 678 9012',

    gender: 'FEMALE',
    dateOfBirth: '1998-03-09',

    address: '89 Mountain View Road',
    city: 'Tagaytay',
    state: 'Cavite',
    country: 'Philippines',
    postalCode: '4120',

    nationality: 'Filipino',
    idType: 'Passport',
    idNumber: 'P8642097',

    status: 'ACTIVE',

    totalBookings: 4,
    completedBookings: 4,
    cancelledBookings: 0,
    totalSpent: 29600,

    notes: 'Interested in spa and wellness experiences.',

    hasAccount: true,
    emailVerified: true,
    phoneVerified: true,

    createdAt: '2026-05-18T09:00:00.000Z',
    updatedAt: '2026-08-23T12:00:00.000Z',
    lastBookingAt: '2026-08-22T16:00:00.000Z',
  },

  {
    id: 'guest-007',

    firstName: 'William',
    lastName: 'Davis',
    email: 'william.davis@example.com',
    phone: '+63 923 789 0123',

    gender: 'MALE',
    dateOfBirth: '1982-12-05',

    address: '12 Business Park',
    city: 'Makati',
    state: 'Metro Manila',
    country: 'Philippines',
    postalCode: '1200',

    nationality: 'American',
    idType: 'Passport',
    idNumber: 'US4567890',

    status: 'ACTIVE',

    totalBookings: 10,
    completedBookings: 9,
    cancelledBookings: 1,
    totalSpent: 89500,

    notes: 'Frequent business traveler.',

    hasAccount: true,
    emailVerified: true,
    phoneVerified: true,

    createdAt: '2026-06-01T08:00:00.000Z',
    updatedAt: '2026-08-25T14:00:00.000Z',
    lastBookingAt: '2026-08-24T15:00:00.000Z',
  },

  {
    id: 'guest-008',

    firstName: 'Ava',
    lastName: 'Wilson',
    email: 'ava.wilson@example.com',
    phone: '+63 924 890 1234',

    gender: 'FEMALE',
    dateOfBirth: '1996-07-27',

    address: '34 Riverside Drive',
    city: 'Baguio City',
    state: 'Benguet',
    country: 'Philippines',
    postalCode: '2600',

    nationality: 'Filipino',
    idType: 'Passport',
    idNumber: 'P9753186',

    status: 'BLOCKED',

    totalBookings: 1,
    completedBookings: 0,
    cancelledBookings: 1,
    totalSpent: 0,

    notes: 'Account blocked by administrator.',

    hasAccount: true,
    emailVerified: false,
    phoneVerified: false,

    createdAt: '2026-07-10T09:00:00.000Z',
    updatedAt: '2026-08-12T10:00:00.000Z',
    lastBookingAt: '2026-07-20T13:00:00.000Z',
  },
];
