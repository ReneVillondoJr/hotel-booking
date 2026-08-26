import { ArrowRight, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';

import BookingSearch from './booking-search';

export default function HeroSection() {
  return (
    <section
      id='booking'
      className='relative min-h-[760px] overflow-hidden bg-stone-900'
    >
      <div className='absolute inset-0'>
        <img
          src='/header.avif'
          alt='Luxury hotel'
          className='h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-black/45' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30' />
      </div>

      <div className='relative mx-auto flex min-h-[760px] max-w-7xl flex-col justify-center px-5 pb-36 pt-28 lg:px-8'>
        <div className='max-w-3xl text-white'>
          <div className='mb-5 flex items-center gap-2 text-sm font-medium text-white/80'>
            <MapPin className='size-4' />A quiet place to stay
          </div>

          <h1 className='max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl'>
            Stay somewhere worth remembering.
          </h1>

          <p className='mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg'>
            Thoughtfully designed rooms, warm hospitality, and everything you
            need for a comfortable and memorable stay.
          </p>

          <Button
            size='lg'
            className='mt-8 rounded-full bg-primary px-7 text-white hover:bg-primary/90'
          >
            Explore Rooms
            <ArrowRight />
          </Button>
        </div>
      </div>

      <BookingSearch />
    </section>
  );
}
