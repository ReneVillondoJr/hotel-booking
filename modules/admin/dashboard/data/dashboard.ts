import type { DashboardBooking, RoomOverview } from '../types/dashboard';

export const dashboardBookings: DashboardBooking[] = [
  {
    id: '1',
    bookingNumber: 'BK-2026-001',
    guest: {
      name: 'Maria Santos',
      email: 'maria@example.com',
    },
    room: 'Deluxe Ocean View',
    checkIn: 'Aug 28, 2026',
    checkOut: 'Aug 31, 2026',
    total: 18500,
    status: 'CONFIRMED',
  },
  {
    id: '2',
    bookingNumber: 'BK-2026-002',
    guest: {
      name: 'John Cruz',
      email: 'john@example.com',
    },
    room: 'Premium Suite',
    checkIn: 'Aug 28, 2026',
    checkOut: 'Aug 30, 2026',
    total: 24000,
    status: 'CHECKED_IN',
  },
  {
    id: '3',
    bookingNumber: 'BK-2026-003',
    guest: {
      name: 'Angela Reyes',
      email: 'angela@example.com',
    },
    room: 'Garden Villa',
    checkIn: 'Aug 29, 2026',
    checkOut: 'Sep 2, 2026',
    total: 32000,
    status: 'PENDING',
  },
  {
    id: '4',
    bookingNumber: 'BK-2026-004',
    guest: {
      name: 'Michael Tan',
      email: 'michael@example.com',
    },
    room: 'Deluxe Room',
    checkIn: 'Aug 30, 2026',
    checkOut: 'Sep 1, 2026',
    total: 14000,
    status: 'CONFIRMED',
  },
];

export const roomOverview: RoomOverview[] = [
  {
    name: 'Deluxe Rooms',
    total: 20,
    occupied: 15,
  },
  {
    name: 'Ocean View',
    total: 12,
    occupied: 10,
  },
  {
    name: 'Premium Suites',
    total: 8,
    occupied: 6,
  },
  {
    name: 'Garden Villas',
    total: 6,
    occupied: 4,
  },
];
