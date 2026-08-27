import { ArrowRight, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';

import BookingSearch from './booking-search';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id='booking'
      className='relative min-h-[780px] overflow-hidden bg-stone-900'
    >
      <div className='absolute inset-0'>
        <img
          src='/header.avif'
          alt='Luxury hotel'
          className='h-full w-full object-cover'
        />

        <div className='absolute inset-0 bg-black/40' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30' />
      </div>

      <div className='relative flex min-h-[780px] items-center justify-center px-5 pb-32 pt-28 text-center'>
        <div className='max-w-3xl text-white'>
          <div className='mb-6 flex items-center justify-center gap-2 text-sm text-white/75'>
            <MapPin className='size-4' />A quiet place to stay
          </div>

          <h1 className='text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-8xl'>
            Stay somewhere
            <br />
            worth remembering.
          </h1>

          <p className='mx-auto mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg'>
            Thoughtfully designed rooms, warm hospitality, and everything you
            need for a comfortable and memorable stay.
          </p>

          <Button
            size='lg'
            className='mt-8 rounded-full bg-white px-8 text-stone-900 hover:bg-white/90'
          >
            <Link href='/guest/rooms' className='flex items-center gap-2'>
              <span>Explore Rooms</span>
              <ArrowRight className='size-4' />
            </Link>
          </Button>
        </div>
      </div>

      <BookingSearch />
    </section>
  );
}
