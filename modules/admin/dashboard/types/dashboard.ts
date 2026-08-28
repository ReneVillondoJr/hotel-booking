export type BookingStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'CHECKED_IN'
  | 'CHECKED_OUT'
  | 'CANCELLED';

export interface DashboardBooking {
  id: string;
  bookingNumber: string;

  guest: {
    name: string;
    email: string;
  };

  room: string;

  checkIn: string;
  checkOut: string;

  total: number;

  status: BookingStatus;
}

export interface DashboardStat {
  title: string;
  value: string;
  description: string;
  change?: string;
}

export interface RoomOverview {
  name: string;
  total: number;
  occupied: number;
}
