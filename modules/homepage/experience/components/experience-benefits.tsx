import { CalendarCheck, HeartHandshake, Map, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Sparkles,
    title: 'Thoughtfully curated',
    description: 'Every experience is selected to complement your stay.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal service',
    description: 'Our team is here to help make every experience special.',
  },
  {
    icon: Map,
    title: 'Discover more',
    description:
      'Explore local culture, hidden gems, and memorable destinations.',
  },
  {
    icon: CalendarCheck,
    title: 'Easy to arrange',
    description: 'Plan your experiences before arrival or during your stay.',
  },
];

export default function ExperienceBenefits() {
  return (
    <section className='py-24 lg:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center'>
          <div>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground'>
              Why experience with us
            </p>

            <h2 className='mt-3 text-3xl font-semibold tracking-tight sm:text-4xl'>
              More than just a place to stay.
            </h2>

            <p className='mt-5 max-w-lg leading-7 text-muted-foreground'>
              Your stay should be about more than a comfortable room. Discover
              experiences that turn an ordinary trip into something memorable.
            </p>
          </div>

          <div className='grid gap-8 sm:grid-cols-2'>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div key={benefit.title}>
                  <div className='flex h-11 w-11 items-center justify-center rounded-full bg-muted'>
                    <Icon className='h-5 w-5' />
                  </div>

                  <h3 className='mt-4 font-semibold'>{benefit.title}</h3>

                  <p className='mt-2 text-sm leading-6 text-muted-foreground'>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
