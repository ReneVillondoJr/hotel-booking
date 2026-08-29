import { Badge } from '@/components/ui/badge';

import type { GuestStatus } from '../types/guest';

interface GuestStatusBadgeProps {
  status: GuestStatus;
}

const statusConfig: Record<
  GuestStatus,
  {
    label: string;
    className: string;
  }
> = {
  ACTIVE: {
    label: 'Active',
    className:
      'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-50',
  },

  INACTIVE: {
    label: 'Inactive',
    className: 'border-muted bg-muted text-muted-foreground hover:bg-muted',
  },

  BLOCKED: {
    label: 'Blocked',
    className: 'border-red-200 bg-red-50 text-red-700 hover:bg-red-50',
  },
};

export default function GuestStatusBadge({ status }: GuestStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant='outline' className={config.className}>
      {config.label}
    </Badge>
  );
}
