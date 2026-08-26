import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight, Clock, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import type { Experience } from '@/modules/experience/types/experience';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className='group overflow-hidden border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='relative aspect-[4/3] overflow-hidden'>
        <Image
          src={experience.image}
          alt={experience.name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
        />

        <div className='absolute left-4 top-4'>
          <Badge className='border-0 bg-white/90 text-gray-900 backdrop-blur-sm'>
            {experience.category}
          </Badge>
        </div>
      </div>

      <CardContent className='p-6'>
        <div className='mb-3 flex items-center gap-4 text-sm text-muted-foreground'>
          <span className='flex items-center gap-1.5'>
            <Clock className='h-4 w-4' />
            {experience.duration}
          </span>

          <span className='flex items-center gap-1.5'>
            <MapPin className='h-4 w-4' />
            {experience.location}
          </span>
        </div>

        <h3 className='text-xl font-semibold tracking-tight'>
          {experience.name}
        </h3>

        <p className='mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground'>
          {experience.description}
        </p>

        <div className='mt-6 flex items-center justify-between'>
          <div>
            <p className='text-xs text-muted-foreground'>Starting from</p>

            <p className='text-lg font-semibold'>
              ₱{experience.price.toLocaleString()}
            </p>
          </div>

          <Link
            href={`/experience/${experience.slug}`}
            className='inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground'
          >
            Explore
            <ArrowUpRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
