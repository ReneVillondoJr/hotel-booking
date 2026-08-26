'use client';

import { useState } from 'react';

import { experiences } from '@/modules/experience/data/experience';

import ExperienceGrid from './experience-grid';

const categories = [
  'All',
  'Wellness',
  'Dining',
  'Adventure',
  'Leisure',
  'Romance',
  'Local',
] as const;

export default function ExperienceCategoryFilter() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>('All');

  const filteredExperiences =
    activeCategory === 'All' ? experiences : (
      experiences.filter((experience) => experience.category === activeCategory)
    );

  return (
    <section
      id='all-experiences'
      className='border-t bg-muted/30 py-24 lg:py-32'
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='max-w-2xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground'>
            Explore
          </p>

          <h2 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
            Find your experience
          </h2>

          <p className='mt-4 text-muted-foreground'>
            Choose an experience that matches the way you want to spend your
            stay.
          </p>
        </div>

        <div className='mt-10 flex gap-2 overflow-x-auto pb-2'>
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type='button'
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  active ?
                    'border-foreground bg-foreground text-background'
                  : 'border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className='mt-10'>
          <ExperienceGrid experiences={filteredExperiences} />
        </div>
      </div>
    </section>
  );
}
