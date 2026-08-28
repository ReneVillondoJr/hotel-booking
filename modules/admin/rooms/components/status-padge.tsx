import { Badge } from '@/components/ui/badge';

import type { RoomStatus } from '../types/room';

interface RoomStatusBadgeProps {
  status: RoomStatus;
}

const statusConfig: Record<
  RoomStatus,
  {
    label: string;
    className: string;
  }
> = {
  AVAILABLE: {
    label: 'Available',
    className:
      'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50',
  },

  OCCUPIED: {
    label: 'Occupied',
    className: 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-50',
  },

  RESERVED: {
    label: 'Reserved',
    className:
      'border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-50',
  },

  MAINTENANCE: {
    label: 'Maintenance',
    className: 'border-red-200 bg-red-50 text-red-700 hover:bg-red-50',
  },

  CLEANING: {
    label: 'Cleaning',
    className: 'border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-50',
  },

  INACTIVE: {
    label: 'Inactive',
    className: 'border-muted bg-muted text-muted-foreground hover:bg-muted',
  },
};

export default function RoomStatusBadge({ status }: RoomStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant='outline' className={config.className}>
      {config.label}
    </Badge>
  );
}
