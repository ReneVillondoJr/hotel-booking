import type {
  Booking,
  BookingSource,
  BookingStatus,
  PaymentStatus,
  RoomOption,
} from '../types/booking';

/* -------------------------------------------------------------------------- */
/* Room Options                                                               */
/* -------------------------------------------------------------------------- */

export const rooms: RoomOption[] = [
  {
    id: 'room-001',
    name: 'Deluxe Garden Room',
    price: 4500,
  },
  {
    id: 'room-002',
    name: 'Deluxe Ocean View',
    price: 5800,
  },
  {
    id: 'room-003',
    name: 'Superior King Room',
    price: 5200,
  },
  {
    id: 'room-004',
    name: 'Executive Suite',
    price: 8500,
  },
  {
    id: 'room-005',
    name: 'Family Room',
    price: 6800,
  },
];

/* -------------------------------------------------------------------------- */
/* Guest Options                                                              */
/* -------------------------------------------------------------------------- */

export const adultOptions = ['1', '2', '3', '4', '5', '6'];

export const childOptions = ['0', '1', '2', '3', '4'];

/* -------------------------------------------------------------------------- */
/* Booking Status Options                                                     */
/* -------------------------------------------------------------------------- */

export const bookingStatuses: {
  value: BookingStatus;
  label: string;
}[] = [
  {
    value: 'PENDING',
    label: 'Pending',
  },
  {
    value: 'CONFIRMED',
    label: 'Confirmed',
  },
  {
    value: 'CHECKED_IN',
    label: 'Checked In',
  },
  {
    value: 'CHECKED_OUT',
    label: 'Checked Out',
  },
  {
    value: 'CANCELLED',
    label: 'Cancelled',
  },
];

/* -------------------------------------------------------------------------- */
/* Payment Status Options                                                     */
/* -------------------------------------------------------------------------- */

export const paymentStatuses: {
  value: PaymentStatus;
  label: string;
}[] = [
  {
    value: 'UNPAID',
    label: 'Unpaid',
  },
  {
    value: 'PARTIAL',
    label: 'Partially Paid',
  },
  {
    value: 'PAID',
    label: 'Paid',
  },
  {
    value: 'REFUNDED',
    label: 'Refunded',
  },
];

/* -------------------------------------------------------------------------- */
/* Booking Source Options                                                     */
/* -------------------------------------------------------------------------- */

export const bookingSources: {
  value: BookingSource;
  label: string;
}[] = [
  {
    value: 'WEBSITE',
    label: 'Website',
  },
  {
    value: 'WALK_IN',
    label: 'Walk-in',
  },
  {
    value: 'PHONE',
    label: 'Phone',
  },
  {
    value: 'EMAIL',
    label: 'Email',
  },
  {
    value: 'ADMIN',
    label: 'Admin',
  },
];

/* -------------------------------------------------------------------------- */
/* Initial Booking Form                                                       */
/* -------------------------------------------------------------------------- */

export const initialBookingData = {
  guestName: '',
  email: '',
  phone: '',
  roomId: '',
  checkIn: '',
  checkOut: '',
  adults: '1',
  children: '0',
  bookingStatus: 'CONFIRMED',
  paymentStatus: 'UNPAID',
  specialRequests: '',
};

/* -------------------------------------------------------------------------- */
/* Bookings                                                                   */
/* -------------------------------------------------------------------------- */

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
      id: 'room-002',
      name: 'Deluxe Ocean View',
      type: 'Deluxe Room',
      price: 5800,
    },

    checkIn: '2026-08-28',
    checkOut: '2026-08-30',
    nights: 2,

    guests: 2,
    roomRate: 5800,

    subtotal: 11600,
    tax: 1392,
    discount: 0,
    total: 12992,

    status: 'CONFIRMED',
    paymentStatus: 'PAID',
    source: 'WEBSITE',

    specialRequests: 'Late check-in requested.',
    notes: '',

    createdAt: '2026-08-20T10:00:00.000Z',
    updatedAt: '2026-08-20T10:00:00.000Z',
  },

  {
    id: 'booking-002',
    bookingNumber: 'BK-2026-0002',

    guest: {
      id: 'guest-002',
      firstName: 'Sophia',
      lastName: 'Williams',
      email: 'sophia.williams@example.com',
      contactNumber: '+63 918 234 5678',
    },

    room: {
      id: 'room-004',
      name: 'Executive Suite',
      type: 'Executive Suite',
      price: 8500,
    },

    checkIn: '2026-09-10',
    checkOut: '2026-09-13',
    nights: 3,

    guests: 1,
    roomRate: 8500,

    subtotal: 25500,
    tax: 3060,
    discount: 1000,
    total: 27560,

    status: 'CONFIRMED',
    paymentStatus: 'PARTIAL',
    source: 'WEBSITE',

    specialRequests: 'Quiet room preferred.',
    notes: '',

    createdAt: '2026-09-01T09:00:00.000Z',
    updatedAt: '2026-09-02T10:00:00.000Z',
  },

  {
    id: 'booking-003',
    bookingNumber: 'BK-2026-0003',

    guest: {
      id: 'guest-003',
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@example.com',
      contactNumber: '+63 919 345 6789',
    },

    room: {
      id: 'room-005',
      name: 'Family Room',
      type: 'Family Room',
      price: 6800,
    },

    checkIn: '2026-09-12',
    checkOut: '2026-09-15',
    nights: 3,

    guests: 4,
    roomRate: 6800,

    subtotal: 20400,
    tax: 2448,
    discount: 0,
    total: 22848,

    status: 'PENDING',
    paymentStatus: 'UNPAID',
    source: 'WEBSITE',

    specialRequests: 'Traveling with children.',
    notes: '',

    createdAt: '2026-09-03T13:00:00.000Z',
    updatedAt: '2026-09-03T13:00:00.000Z',
  },

  {
    id: 'booking-004',
    bookingNumber: 'BK-2026-0004',

    guest: {
      id: 'guest-004',
      firstName: 'Emily',
      lastName: 'Johnson',
      email: 'emily.johnson@example.com',
      contactNumber: '+63 920 456 7890',
    },

    room: {
      id: 'room-003',
      name: 'Superior King Room',
      type: 'Superior Room',
      price: 5200,
    },

    checkIn: '2026-09-05',
    checkOut: '2026-09-08',
    nights: 3,

    guests: 2,
    roomRate: 5200,

    subtotal: 15600,
    tax: 1872,
    discount: 500,
    total: 16972,

    status: 'CHECKED_IN',
    paymentStatus: 'PAID',
    source: 'ADMIN',

    specialRequests: 'Quiet room preferred.',
    notes: '',

    createdAt: '2026-08-25T09:00:00.000Z',
    updatedAt: '2026-09-05T14:00:00.000Z',
  },

  {
    id: 'booking-005',
    bookingNumber: 'BK-2026-0005',

    guest: {
      id: 'guest-005',
      firstName: 'Daniel',
      lastName: 'Martinez',
      email: 'daniel.martinez@example.com',
      contactNumber: '+63 921 567 8901',
    },

    room: {
      id: 'room-002',
      name: 'Deluxe Ocean View',
      type: 'Deluxe Room',
      price: 5800,
    },

    checkIn: '2026-08-28',
    checkOut: '2026-08-31',
    nights: 3,

    guests: 2,
    roomRate: 5800,

    subtotal: 17400,
    tax: 2088,
    discount: 0,
    total: 19488,

    status: 'CHECKED_OUT',
    paymentStatus: 'PAID',
    source: 'WEBSITE',

    specialRequests: 'Ocean view requested.',
    notes: '',

    createdAt: '2026-08-15T10:30:00.000Z',
    updatedAt: '2026-08-31T12:00:00.000Z',
  },

  {
    id: 'booking-006',
    bookingNumber: 'BK-2026-0006',

    guest: {
      id: 'guest-006',
      firstName: 'Olivia',
      lastName: 'Taylor',
      email: 'olivia.taylor@example.com',
      contactNumber: '+63 922 678 9012',
    },

    room: {
      id: 'room-001',
      name: 'Deluxe Garden Room',
      type: 'Deluxe Room',
      price: 4500,
    },

    checkIn: '2026-09-15',
    checkOut: '2026-09-17',
    nights: 2,

    guests: 1,
    roomRate: 4500,

    subtotal: 9000,
    tax: 1080,
    discount: 0,
    total: 10080,

    status: 'CONFIRMED',
    paymentStatus: 'PAID',
    source: 'WEBSITE',

    specialRequests: 'Interested in spa services.',
    notes: '',

    createdAt: '2026-09-04T08:00:00.000Z',
    updatedAt: '2026-09-04T08:30:00.000Z',
  },

  {
    id: 'booking-007',
    bookingNumber: 'BK-2026-0007',

    guest: {
      id: 'guest-007',
      firstName: 'William',
      lastName: 'Davis',
      email: 'william.davis@example.com',
      contactNumber: '+63 923 789 0123',
    },

    room: {
      id: 'room-004',
      name: 'Executive Suite',
      type: 'Executive Suite',
      price: 8500,
    },

    checkIn: '2026-09-18',
    checkOut: '2026-09-22',
    nights: 4,

    guests: 1,
    roomRate: 8500,

    subtotal: 34000,
    tax: 4080,
    discount: 2000,
    total: 36080,

    status: 'CONFIRMED',
    paymentStatus: 'PARTIAL',
    source: 'ADMIN',

    specialRequests: 'Frequent business traveler.',
    notes: '',

    createdAt: '2026-09-04T14:00:00.000Z',
    updatedAt: '2026-09-05T09:00:00.000Z',
  },

  {
    id: 'booking-008',
    bookingNumber: 'BK-2026-0008',

    guest: {
      id: 'guest-008',
      firstName: 'Ava',
      lastName: 'Wilson',
      email: 'ava.wilson@example.com',
      contactNumber: '+63 924 890 1234',
    },

    room: {
      id: 'room-003',
      name: 'Superior King Room',
      type: 'Superior Room',
      price: 5200,
    },

    checkIn: '2026-08-20',
    checkOut: '2026-08-22',
    nights: 2,

    guests: 1,
    roomRate: 5200,

    subtotal: 10400,
    tax: 1248,
    discount: 0,
    total: 11648,

    status: 'CANCELLED',
    paymentStatus: 'REFUNDED',
    source: 'WEBSITE',

    specialRequests: '',
    notes: 'Booking cancelled by guest.',

    createdAt: '2026-08-10T10:00:00.000Z',
    updatedAt: '2026-08-18T15:00:00.000Z',
  },
];
