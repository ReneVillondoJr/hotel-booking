import Link from 'next/link';

import { ArrowUpRight } from 'lucide-react';

import { experiences } from '@/modules/homepage/experience/data/experience';

import ExperienceCard from './experience-card';

export default function ExperienceFeatured() {
  const featuredExperiences = experiences.filter(
    (experience) => experience.featured,
  );

  return (
    <section className='py-24 lg:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground'>
              Curated for you
            </p>

            <h2 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
              Featured experiences
            </h2>

            <p className='mt-4 text-muted-foreground'>
              From relaxing wellness treatments to unforgettable adventures,
              discover experiences designed around your stay.
            </p>
          </div>

          <Link
            href='#all-experiences'
            className='inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground'
          >
            View all
            <ArrowUpRight className='ml-2 h-4 w-4' />
          </Link>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {featuredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
