import type { BookingStatus, PaymentStatus } from './booking';

export interface BookingFilters {
  search: string;
  status: BookingStatus | 'ALL';
  paymentStatus: PaymentStatus | 'ALL';
  room: string;
  dateFrom?: string;
  dateTo?: string;
}
