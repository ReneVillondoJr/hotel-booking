import RoomCard from './room-card';

import { rooms } from '../data/home';

export default function FeaturedRooms() {
  return (
    <section id='rooms' className='py-24 lg:py-32'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        {/* Header */}
        <div className='mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end'>
          <div>
            <p className='hotel-eyebrow'>Stay your way</p>

            <h2 className='hotel-heading mt-3 max-w-xl text-4xl font-semibold sm:text-5xl'>
              Rooms designed around how you travel.
            </h2>
          </div>

          <p className='max-w-md text-sm leading-6 text-muted-foreground'>
            From quiet garden rooms to spacious suites, every space is designed
            to make your stay feel effortless.
          </p>
        </div>

        {/* Rooms */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {rooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
