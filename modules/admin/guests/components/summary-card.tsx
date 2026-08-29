import type { ReactNode } from 'react';

import { Card, CardContent } from '@/components/ui/card';

interface GuestSummaryCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: ReactNode;
}

export default function GuestSummaryCard({
  title,
  value,
  description,
  icon,
}: GuestSummaryCardProps) {
  return (
    <Card>
      <CardContent className='flex items-start justify-between p-6'>
        <div className='min-w-0'>
          <p className='text-sm font-medium text-muted-foreground'>{title}</p>

          <h3 className='mt-2 text-3xl font-semibold tracking-tight'>
            {value}
          </h3>

          <p className='mt-1 text-xs text-muted-foreground'>{description}</p>
        </div>

        <div className='flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted'>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
}
