export type BookingStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'CHECKED_IN'
  | 'CHECKED_OUT'
  | 'CANCELLED';

export type PaymentStatus = 'UNPAID' | 'PARTIAL' | 'PAID' | 'REFUNDED';

export type BookingSource = 'WEBSITE' | 'WALK_IN' | 'PHONE' | 'EMAIL' | 'ADMIN';

export interface BookingGuest {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber?: string;
}

export interface BookingRoom {
  id: string;
  name: string;
  type: string;
  price: number;
}

export interface Booking {
  id: string;
  bookingNumber: string;

  guest: BookingGuest;
  room: BookingRoom;

  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;

  roomRate: number;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;

  status: BookingStatus;
  paymentStatus: PaymentStatus;
  source: BookingSource;

  specialRequests?: string;
  notes?: string;

  createdAt: string;
  updatedAt: string;
}
