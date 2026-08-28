import Image from 'next/image';
import Link from 'next/link';

import { ArrowDown } from 'lucide-react';

export default function ExperienceHero() {
  return (
    <section className='relative flex min-h-[70vh] items-center overflow-hidden'>
      <Image
        src='/header.avif'
        alt='Hotel experience'
        fill
        priority
        className='object-cover'
      />

      <div className='absolute inset-0 bg-black/45' />

      <div className='relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8'>
        <div className='max-w-2xl text-white'>
          <p className='mb-5 text-sm font-medium uppercase tracking-[0.25em] text-white/80'>
            Experiences
          </p>

          <h1 className='text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl'>
            Make your stay unforgettable.
          </h1>

          <p className='mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg'>
            Discover thoughtfully curated experiences designed to help you
            relax, explore, celebrate, and make lasting memories.
          </p>

          <div className='mt-8 flex flex-wrap gap-3'>
            <Link
              href='#all-experiences'
              className='inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
            >
              Explore Experiences
            </Link>

            <Link
              href='/rooms'
              className='inline-flex h-11 items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-black'
            >
              View Rooms
            </Link>
          </div>
        </div>
      </div>

      <a
        href='#all-experiences'
        className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white'
        aria-label='Scroll to experiences'
      >
        <ArrowDown className='h-5 w-5 animate-bounce' />
      </a>
    </section>
  );
}
