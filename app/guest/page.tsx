import HeroSection from '@/modules/home/components/client-section';
import FeaturedRooms from '@/modules/home/components/featured-rooms';
import ExperienceSection from '@/modules/home/components/experience-section';
import AmenitiesSection from '@/modules/home/components/amenities-section';
import TestimonialsSection from '@/modules/home/components/testimonials-section';
import FinalCta from '@/modules/home/components/final-cta';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-background text-foreground'>
      <Navbar />
      <HeroSection />

      <FeaturedRooms />

      <ExperienceSection />

      <AmenitiesSection />

      <TestimonialsSection />

      <FinalCta />
      <Footer />
    </main>
  );
}
