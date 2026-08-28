import type { Booking } from '../types/booking';

export const bookings: Booking[] = [
  {
    id: 'booking-001',
    bookingNumber: 'BK-2026-0001',

    guest: {
      id: 'guest-001',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      contactNumber: '+63 912 345 6789',
    },

    room: {
      id: 'room-001',
      name: 'Deluxe Ocean View',
      type: 'Deluxe Room',
      price: 8500,
    },

    checkIn: '2026-08-28',
    checkOut: '2026-08-30',
    nights: 2,
    guests: 2,

    roomRate: 8500,
    subtotal: 17000,
    tax: 2040,
    discount: 0,
    total: 19040,

    status: 'CONFIRMED',
    paymentStatus: 'PAID',
    source: 'WEBSITE',

    specialRequests: 'Late check-in',
    notes: '',

    createdAt: '2026-08-20T10:00:00Z',
    updatedAt: '2026-08-20T10:00:00Z',
  },
];
