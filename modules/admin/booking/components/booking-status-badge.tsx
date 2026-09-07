import { Badge } from '@/components/ui/badge';

import type { BookingStatus } from '@/modules/admin/booking/types/booking';

interface BookingStatusBadgeProps {
  status: BookingStatus;
}

const statusConfig: Record<
  BookingStatus,
  {
    label: string;
    className: string;
  }
> = {
  PENDING: {
    label: 'Pending',
    className: 'border-amber-200 bg-amber-50 text-amber-700',
  },

  CONFIRMED: {
    label: 'Confirmed',
    className: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },

  CHECKED_IN: {
    label: 'Checked In',
    className: 'border-blue-200 bg-blue-50 text-blue-700',
  },

  CHECKED_OUT: {
    label: 'Checked Out',
    className: 'border-slate-200 bg-slate-50 text-slate-700',
  },

  CANCELLED: {
    label: 'Cancelled',
    className: 'border-red-200 bg-red-50 text-red-700',
  },
};

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant='outline' className={config.className}>
      {config.label}
    </Badge>
  );
}
