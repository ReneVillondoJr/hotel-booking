import { Badge } from '@/components/ui/badge';

import type { BookingStatus } from '../types/booking';

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
    className: 'bg-yellow-50 text-yellow-700',
  },

  CONFIRMED: {
    label: 'Confirmed',
    className: 'bg-green-50 text-green-700',
  },

  CHECKED_IN: {
    label: 'Checked In',
    className: 'bg-blue-50 text-blue-700',
  },

  CHECKED_OUT: {
    label: 'Checked Out',
    className: 'bg-gray-100 text-gray-700',
  },

  CANCELLED: {
    label: 'Cancelled',
    className: 'bg-red-50 text-red-700',
  },
};

export function BookingStatusBadge({ status }: BookingStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant='secondary' className={config.className}>
      {config.label}
    </Badge>
  );
}
