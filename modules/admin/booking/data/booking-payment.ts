import type { PaymentStatus } from '../types/booking';

export const PAYMENT_STATUSES: {
  value: PaymentStatus;
  label: string;
}[] = [
  {
    value: 'UNPAID',
    label: 'Unpaid',
  },
  {
    value: 'PARTIAL',
    label: 'Partial',
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
