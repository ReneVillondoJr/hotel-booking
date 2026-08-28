import Link from 'next/link';

import { ArrowRight } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id='experience' className='bg-secondary py-24 lg:py-32'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
          <div className='hotel-image overflow-hidden rounded-3xl'>
            <img
              src='https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85'
              alt='Hotel pool'
              className='aspect-[4/5] w-full object-cover'
            />
          </div>

          <div className='max-w-xl'>
            <p className='hotel-eyebrow'>The experience</p>

            <h2 className='hotel-heading mt-4 text-4xl font-semibold sm:text-5xl'>
              More than a room. A place to slow down.
            </h2>

            <p className='mt-6 text-base leading-8 text-muted-foreground'>
              Start the morning slowly, spend the afternoon by the water, and
              end the evening with good food. Every part of Lumora is designed
              around simple moments that make a stay memorable.
            </p>

            <Link
              href='/guest/experience'
              className='mt-8 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground'
            >
              Discover the experience
              <ArrowRight className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
