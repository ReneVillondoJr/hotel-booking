import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export default function ExperienceCta() {
  return (
    <section className='px-6 pb-24 lg:px-8 lg:pb-32'>
      <div className='relative mx-auto max-w-7xl overflow-hidden rounded-3xl'>
        <Image
          src='/experiences/experience-cta.avif'
          alt='Enjoy your hotel stay'
          fill
          className='object-cover'
        />

        <div className='absolute inset-0 bg-black/50' />

        <div className='relative z-10 px-8 py-20 text-center text-white sm:px-12 lg:py-28'>
          <h2 className='mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl'>
            Make your stay more memorable.
          </h2>

          <p className='mx-auto mt-5 max-w-xl text-white/80'>
            Discover your next experience and create moments worth remembering.
          </p>

          <Link
            href='/booking'
            className='mt-8 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
          >
            Plan Your Stay
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  );
}
