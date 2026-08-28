import ExperienceCard from './experience-card';

import type { Experience } from '@/modules/homepage/experience/types/experience';

interface ExperienceGridProps {
  experiences: Experience[];
}

export default function ExperienceGrid({ experiences }: ExperienceGridProps) {
  if (experiences.length === 0) {
    return (
      <div className='flex min-h-[240px] items-center justify-center rounded-2xl border border-dashed'>
        <p className='text-sm text-muted-foreground'>No experiences found.</p>
      </div>
    );
  }

  return (
    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
