import { BedDouble } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { roomOverview } from '../data/dashboard';

export default function RoomOverview() {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-2'>
          <div className='rounded-lg bg-muted p-2'>
            <BedDouble className='size-4' />
          </div>

          <div>
            <CardTitle>Room Overview</CardTitle>

            <p className='mt-1 text-sm text-muted-foreground'>
              Current room occupancy.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-6'>
        {roomOverview.map((room) => {
          const percentage = Math.round((room.occupied / room.total) * 100);

          return (
            <div key={room.name}>
              <div className='mb-2 flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium'>{room.name}</p>

                  <p className='text-xs text-muted-foreground'>
                    {room.occupied} of {room.total} occupied
                  </p>
                </div>

                <span className='text-sm font-semibold'>{percentage}%</span>
              </div>

              <Progress value={percentage} />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
