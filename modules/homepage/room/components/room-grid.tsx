import Link from 'next/link';

import RoomCard from './room-card';

import type { Room } from '../types/room';

interface RoomGridProps {
  rooms: Room[];
}

export default function RoomGrid({ rooms }: RoomGridProps) {
  if (rooms.length === 0) {
    return (
      <div className='rounded-3xl border bg-card px-6 py-20 text-center shadow-sm'>
        <div className='mx-auto max-w-md'>
          <div className='mx-auto flex size-14 items-center justify-center rounded-full bg-muted'>
            <span className='text-xl'>⌂</span>
          </div>

          <h2 className='mt-5 text-xl font-semibold'>
            No rooms match your search
          </h2>

          <p className='mt-2 text-sm leading-6 text-muted-foreground'>
            Try adjusting your search or removing one of the filters to explore
            all available rooms.
          </p>

          <Link
            href='/guest/rooms'
            className='mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/90'
          >
            View all rooms
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='grid gap-7 sm:grid-cols-2 lg:grid-cols-3'>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
