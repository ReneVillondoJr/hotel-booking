export type ExperienceCategory =
  | 'Wellness'
  | 'Dining'
  | 'Adventure'
  | 'Leisure'
  | 'Romance'
  | 'Local';

export interface Experience {
  id: string;
  slug: string;
  name: string;
  category: ExperienceCategory;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  price: number;
  featured: boolean;
  location: string;
  highlights: string[];
}
