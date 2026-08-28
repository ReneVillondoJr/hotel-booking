import { notFound } from 'next/navigation';

import ExperienceDetail from '@/modules/homepage/experience/components/experience-detail';
import { experiences } from '@/modules/homepage/experience/data/experience';

interface ExperiencePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: ExperiencePageProps) {
  const { slug } = await params;

  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetail experience={experience} />;
}
