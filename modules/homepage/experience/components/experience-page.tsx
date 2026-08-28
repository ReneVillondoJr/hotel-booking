import ExperienceBenefits from './experience-benefits';
import ExperienceCategoryFilter from './experience-category-filter';
import ExperienceCta from './experience-cta';
import ExperienceFeatured from './experience-featured';
import ExperienceHero from './experience-hero';

export default function ExperiencePage() {
  return (
    <main>
      <ExperienceFeatured />

      <ExperienceCategoryFilter />

      <ExperienceBenefits />

      <ExperienceCta />
    </main>
  );
}
