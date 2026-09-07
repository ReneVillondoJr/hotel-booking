'use client';

import { Settings2 } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';

interface RoomStatusProps {
  isBookable: boolean;
  isFeatured: boolean;
  onChange: (field: 'isBookable' | 'isFeatured', value: boolean) => void;
}

export default function RoomStatus({
  isBookable,
  isFeatured,
  onChange,
}: RoomStatusProps) {
  return (
    <Card>
      <CardHeader className='px-5 py-4'>
        <div className='flex items-center gap-2'>
          <Settings2 className='size-4 text-primary' />

          <CardTitle className='text-base'>Room Settings</CardTitle>
        </div>
      </CardHeader>

      <CardContent className='space-y-4 px-5 pb-5'>
        <div className='flex items-center justify-between gap-4'>
          <div>
            <p className='text-sm font-medium'>Available for Booking</p>

            <p className='text-xs text-muted-foreground'>
              Allow guests to reserve this room.
            </p>
          </div>

          <Switch
            checked={isBookable}
            onCheckedChange={(checked) => onChange('isBookable', checked)}
          />
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div>
            <p className='text-sm font-medium'>Featured Room</p>

            <p className='text-xs text-muted-foreground'>
              Display this room in featured sections.
            </p>
          </div>

          <Switch
            checked={isFeatured}
            onCheckedChange={(checked) => onChange('isFeatured', checked)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
