import { Star } from 'lucide-react';

import { Card } from '@/components/ui/card';

const reviews = [
  {
    quote:
      'Everything felt intentional, from the room to the service. It was exactly the kind of stay we needed.',
    name: 'Maya R.',
    location: 'Singapore',
  },
  {
    quote:
      'Beautiful spaces, incredibly comfortable rooms, and a genuinely warm team. We will definitely return.',
    name: 'Daniel K.',
    location: 'Sydney',
  },
  {
    quote:
      'The perfect balance between quiet and convenient. The whole experience felt effortless.',
    name: 'Elena T.',
    location: 'Manila',
  },
];

export default function TestimonialsSection() {
  return (
    <section className='bg-stone-900 py-24 text-white lg:py-32'>
      <div className='mx-auto max-w-7xl px-5 lg:px-8'>
        <div className='text-center'>
          <p className='text-xs font-semibold uppercase tracking-[0.16em] text-primary'>
            Guest stories
          </p>

          <h2 className='mt-4 text-4xl font-semibold tracking-tight sm:text-5xl'>
            What our guests say.
          </h2>
        </div>

        <div className='mt-14 grid gap-5 lg:grid-cols-3'>
          {reviews.map((review) => (
            <Card
              key={review.name}
              className='rounded-2xl border-white/10 bg-white/5 p-7 text-white'
            >
              <div className='flex gap-1'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className='size-4 fill-primary text-primary'
                  />
                ))}
              </div>

              <blockquote className='mt-7 text-lg leading-8 text-white/90'>
                “{review.quote}”
              </blockquote>

              <div className='mt-8 border-t border-white/10 pt-5'>
                <p className='font-medium'>{review.name}</p>
                <p className='mt-1 text-sm text-white/50'>{review.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
