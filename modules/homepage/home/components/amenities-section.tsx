import { Separator } from '@/components/ui/separator';

import { amenities } from '../data/home';

export default function AmenitiesSection() {
  return (
    <section id='amenities' className='py-24 lg:py-32'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        {/* Header */}
        <div className='max-w-2xl'>
          <p className='hotel-eyebrow'>Everything you need</p>

          <h2 className='hotel-heading mt-4 text-4xl font-semibold sm:text-5xl'>
            Designed for an effortless stay.
          </h2>
        </div>

        {/* Amenities */}
        <div className='mt-14 grid md:grid-cols-2 lg:grid-cols-3'>
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;

            return (
              <div
                key={amenity.title}
                className='p-6 md:border-b md:nth-[2n]:border-l lg:nth-[2n]:border-l-0 lg:nth-[3n+2]:border-l lg:nth-[3n]:border-l'
              >
                <Icon className='size-6 text-primary' />

                <h3 className='mt-5 font-semibold'>{amenity.title}</h3>

                <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                  {amenity.description}
                </p>

                {index < amenities.length - 1 && (
                  <Separator className='mt-8 lg:hidden' />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
