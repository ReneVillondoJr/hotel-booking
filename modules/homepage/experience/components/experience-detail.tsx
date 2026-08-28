import Image from 'next/image';
import Link from 'next/link';

import { ArrowLeft, CalendarDays, Check, Clock, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';

import type { Experience } from '@/modules/homepage/experience/types/experience';

interface ExperienceDetailProps {
  experience: Experience;
}

export default function ExperienceDetail({
  experience,
}: ExperienceDetailProps) {
  return (
    <main>
      <section className='border-b'>
        <div className='mx-auto max-w-7xl px-6 py-6 lg:px-8'>
          <Link
            href='/experience'
            className='-ml-3 inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to experiences
          </Link>
        </div>
      </section>

      <section className='mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20'>
        <div className='grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start'>
          {/* Image */}
          <div>
            <div className='relative aspect-[4/3] overflow-hidden rounded-2xl'>
              <Image
                src={experience.image}
                alt={experience.name}
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <Badge variant='secondary'>{experience.category}</Badge>

            <h1 className='mt-4 text-4xl font-semibold tracking-tight sm:text-5xl'>
              {experience.name}
            </h1>

            <p className='mt-5 text-lg leading-8 text-muted-foreground'>
              {experience.longDescription}
            </p>

            {/* Experience Information */}
            <div className='mt-8 grid grid-cols-2 gap-4 border-y py-6'>
              <div className='flex gap-3'>
                <Clock className='mt-0.5 h-5 w-5 text-muted-foreground' />

                <div>
                  <p className='text-sm text-muted-foreground'>Duration</p>

                  <p className='font-medium'>{experience.duration}</p>
                </div>
              </div>

              <div className='flex gap-3'>
                <MapPin className='mt-0.5 h-5 w-5 text-muted-foreground' />

                <div>
                  <p className='text-sm text-muted-foreground'>Location</p>

                  <p className='font-medium'>{experience.location}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className='mt-8'>
              <h2 className='font-semibold'>Experience includes</h2>

              <ul className='mt-4 space-y-3'>
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className='flex items-center gap-3 text-sm'
                  >
                    <span className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted'>
                      <Check className='h-3 w-3' />
                    </span>

                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking Card */}
            <div className='mt-10 rounded-2xl border bg-muted/30 p-6'>
              <div className='flex items-end justify-between gap-4'>
                <div>
                  <p className='text-sm text-muted-foreground'>Starting from</p>

                  <p className='mt-1 text-3xl font-semibold'>
                    ₱{experience.price.toLocaleString()}
                  </p>
                </div>

                <p className='text-sm text-muted-foreground'>per experience</p>
              </div>

              <Link
                href={`/booking?experience=${experience.slug}`}
                className='mt-6 inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90'
              >
                <CalendarDays className='mr-2 h-4 w-4' />
                Book This Experience
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
