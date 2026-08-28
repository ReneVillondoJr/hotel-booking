import RoomCard from './room-card';

import type { Room } from '../types/room';

interface RoomListProps {
  rooms: Room[];
}

export default function RoomList({ rooms }: RoomListProps) {
  if (rooms.length === 0) {
    return (
      <div className='rounded-2xl border border-dashed p-12 text-center'>
        <h3 className='font-semibold'>No rooms found</h3>

        <p className='mt-2 text-sm text-muted-foreground'>
          Try changing your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
