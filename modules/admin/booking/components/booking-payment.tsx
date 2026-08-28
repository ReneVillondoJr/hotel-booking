import { Badge } from '@/components/ui/badge';

import type { PaymentStatus } from '../types/booking';

interface BookingPaymentBadgeProps {
  status: PaymentStatus;
}

const config: Record<
  PaymentStatus,
  {
    label: string;
    className: string;
  }
> = {
  UNPAID: {
    label: 'Unpaid',
    className: 'bg-red-50 text-red-700',
  },

  PARTIAL: {
    label: 'Partial',
    className: 'bg-yellow-50 text-yellow-700',
  },

  PAID: {
    label: 'Paid',
    className: 'bg-green-50 text-green-700',
  },

  REFUNDED: {
    label: 'Refunded',
    className: 'bg-gray-100 text-gray-700',
  },
};

export function BookingPaymentBadge({ status }: BookingPaymentBadgeProps) {
  const item = config[status];

  return (
    <Badge variant='secondary' className={item.className}>
      {item.label}
    </Badge>
  );
}
