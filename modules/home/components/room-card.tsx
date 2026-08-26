import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Room {
  name: string;
  description: string;
  price: number;
  image: string;
}

interface Props {
  room: Room;
}

export default function RoomCard({ room }: Props) {
  return (
    <Card className='group overflow-hidden rounded-2xl border-0 bg-card shadow-none'>
      <div className='hotel-image aspect-[4/3]'>
        <img
          src={room.image}
          alt={room.name}
          className='h-full w-full object-cover'
        />
      </div>

      <div className='p-5'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <Badge variant='secondary' className='rounded-full'>
              Guest favorite
            </Badge>

            <h3 className='mt-3 text-xl font-semibold'>{room.name}</h3>
          </div>

          <ArrowUpRight className='size-5 text-muted-foreground transition group-hover:text-primary' />
        </div>

        <p className='mt-3 text-sm leading-6 text-muted-foreground'>
          {room.description}
        </p>

        <div className='mt-5 flex items-end justify-between border-t pt-4'>
          <div>
            <span className='text-xl font-semibold'>${room.price}</span>
            <span className='text-sm text-muted-foreground'> / night</span>
          </div>

          <span className='text-sm font-medium text-primary'>View room</span>
        </div>
      </div>
    </Card>
  );
}
