import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, Users } from 'lucide-react';

import { Card } from '@/components/ui/card';

import type { Room } from '../types/room';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className='group overflow-hidden border-0 bg-card p-0 shadow-sm ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl'>
      {/* Image */}
      <Link
        href={`/guest/rooms/${room.id}`}
        className='block'
        aria-label={`View ${room.name}`}
      >
        <div className='relative aspect-[4/3] overflow-hidden'>
          <Image
            src={room.image}
            alt={room.name}
            fill
            className='object-cover transition-transform duration-700 group-hover:scale-105'
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
          />

          {/* Image overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />

          {/* Room type */}
          <div className='absolute left-4 top-4'>
            <span className='rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur'>
              {room.type}
            </span>
          </div>

          {/* Price */}
          <div className='absolute bottom-4 right-4 rounded-2xl bg-background/95 px-4 py-3 shadow-lg backdrop-blur'>
            <div className='flex items-baseline gap-1'>
              <span className='text-xl font-semibold text-primary'>
                ${room.price}
              </span>

              <span className='text-xs text-muted-foreground'>/ night</span>
            </div>
          </div>

          {/* Hover icon */}
          <div className='absolute bottom-4 left-4 flex size-11 translate-y-3 items-center justify-center rounded-full bg-background/95 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
            <ArrowUpRight className='size-5' />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className='p-6'>
        <div className='flex items-start justify-between gap-4'>
          <div className='min-w-0'>
            <Link href={`/guest/rooms/${room.id}`}>
              <h2 className='text-xl font-semibold tracking-tight transition-colors group-hover:text-primary'>
                {room.name}
              </h2>
            </Link>

            <p className='mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground'>
              {room.description}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className='mt-5 flex items-center justify-between border-t pt-4'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <span className='flex size-8 items-center justify-center rounded-full bg-muted'>
              <Users className='size-4' />
            </span>

            <span>
              Up to {room.maxGuests} {room.maxGuests === 1 ? 'guest' : 'guests'}
            </span>
          </div>

          <Link
            href={`/guest/rooms/${room.id}`}
            className='inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2'
          >
            Explore
            <ArrowUpRight className='size-4' />
          </Link>
        </div>
      </div>
    </Card>
  );
}
