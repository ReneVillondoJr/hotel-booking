'use client';

import { Sparkles } from 'lucide-react';

import { rooms } from '../data/room';
import { useRoomFilters } from '@/modules/homepage/room/hooks/use-room';

import RoomFilters from './room-filters';
import RoomGrid from './room-grid';

export default function RoomPage() {
  const {
    search,
    setSearch,
    type,
    setType,
    maxGuests,
    setMaxGuests,
    filteredRooms,
    clearFilters,
  } = useRoomFilters(rooms);

  return (
    <main className='min-h-screen bg-background'>
      {/* Hero */}
      <section className='relative overflow-hidden border-b'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.08),transparent_35%)]' />

        <div className='relative mx-auto max-w-7xl px-5 pb-16 pt-16 lg:px-8 lg:pb-20 lg:pt-24'>
          <div className='max-w-3xl'>
            <div className='mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm'>
              <Sparkles className='size-3.5 text-primary' />
              Find your perfect stay
            </div>

            <h1 className='hotel-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl'>
              Rooms designed around
              <span className='block text-primary'>how you travel.</span>
            </h1>

            <p className='mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg'>
              Discover thoughtfully designed rooms and spacious suites, each
              created to make your stay comfortable, calm, and effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16'>
        {/* Filters */}
        <RoomFilters
          search={search}
          setSearch={setSearch}
          type={type}
          setType={setType}
          maxGuests={maxGuests}
          setMaxGuests={setMaxGuests}
          onClear={clearFilters}
        />

        {/* Results header */}
        <div className='mt-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='hotel-eyebrow'>Our rooms</p>

            <h2 className='mt-1 text-2xl font-semibold tracking-tight'>
              Find your space
            </h2>
          </div>

          <p className='text-sm text-muted-foreground'>
            <span className='font-medium text-foreground'>
              {filteredRooms.length}
            </span>{' '}
            {filteredRooms.length === 1 ? 'room' : 'rooms'} available
          </p>
        </div>

        {/* Grid */}
        <div className='mt-7'>
          <RoomGrid rooms={filteredRooms} />
        </div>
      </section>
    </main>
  );
}
