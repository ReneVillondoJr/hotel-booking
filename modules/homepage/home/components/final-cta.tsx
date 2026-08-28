import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FinalCta() {
  return (
    <section id='about' className='py-24 lg:py-32'>
      <div className='mx-auto max-w-5xl px-5 text-center lg:px-8'>
        <p className='hotel-eyebrow'>Your next stay</p>

        <h2 className='hotel-heading mx-auto mt-4 max-w-3xl text-5xl font-semibold sm:text-6xl'>
          Make room for something memorable.
        </h2>

        <p className='mx-auto mt-6 max-w-xl text-base leading-7 text-muted-foreground'>
          Find your room, choose your dates, and let us take care of the rest.
        </p>
        <Button>
          <Link
            href='/guest/booking'
            className='flex items-center gap-2 rounded-full px-4 py-3'
          >
            <span>Book Your Stay</span>
            <ArrowRight className='size-4' />
          </Link>
        </Button>
      </div>
    </section>
  );
}
