import { Badge } from '@/components/ui/badge';

import type { PaymentStatus } from '@/modules/admin/booking/types/booking';

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
    className: 'border-red-200 bg-red-50 text-red-700',
  },

  PARTIAL: {
    label: 'Partial',
    className: 'border-amber-200 bg-amber-50 text-amber-700',
  },

  PAID: {
    label: 'Paid',
    className: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },

  REFUNDED: {
    label: 'Refunded',
    className: 'border-slate-200 bg-slate-50 text-slate-700',
  },
};

export function BookingPaymentBadge({ status }: BookingPaymentBadgeProps) {
  const item = config[status];

  return (
    <Badge variant='outline' className={item.className}>
      {item.label}
    </Badge>
  );
}
