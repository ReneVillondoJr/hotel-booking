import type { BookingStatus } from '../types/booking';

export const BOOKING_STATUSES: {
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
