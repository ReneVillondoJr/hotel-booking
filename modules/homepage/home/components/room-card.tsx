import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

import type { Room } from '@/modules/homepage/room/types/room';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Link
      href={`/guest/rooms/${room.id}`}
      className='block'
      aria-label={`View ${room.name}`}
    >
      <Card className='group overflow-hidden rounded-2xl border-0 bg-card shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
        {/* Image */}
        <div className='relative aspect-[4/3] overflow-hidden'>
          <Image
            src={room.image}
            alt={room.name}
            fill
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />

          {/* Hover overlay */}
          <div className='absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10' />
        </div>

        {/* Content */}
        <div className='p-5'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <Badge variant='secondary' className='rounded-full'>
                Guest favorite
              </Badge>

              <h3 className='mt-3 text-xl font-semibold transition-colors group-hover:text-primary'>
                {room.name}
              </h3>
            </div>

            <ArrowUpRight className='size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary' />
          </div>

          <p className='mt-3 text-sm leading-6 text-muted-foreground'>
            {room.description}
          </p>

          <div className='mt-5 flex items-end justify-between border-t pt-4'>
            <div>
              <span className='text-xl font-semibold'>${room.price}</span>

              <span className='text-sm text-muted-foreground'> / night</span>
            </div>

            <span className='text-sm font-medium text-primary transition-all group-hover:translate-x-1'>
              View room
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
