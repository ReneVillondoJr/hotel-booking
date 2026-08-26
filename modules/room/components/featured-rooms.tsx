import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import { rooms } from '../data/room';

import RoomCard from './room-card';

export default function FeaturedRooms() {
  const featuredRooms = rooms.slice(0, 3);

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

        {/* Featured Rooms */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* View All */}
        <div className='mt-10 flex justify-center'>
          <Link
            href='/guest/rooms'
            className='inline-flex h-10 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-muted'
          >
            View All Rooms
            <ArrowUpRight className='size-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}
