import HeroSection from '@/modules/homepage/home/components/client-section';
import FeaturedRooms from '@/modules/homepage/home/components/featured-rooms';
import ExperienceSection from '@/modules/homepage/home/components/experience-section';
import AmenitiesSection from '@/modules/homepage/home/components/amenities-section';
import TestimonialsSection from '@/modules/homepage/home/components/testimonials-section';
import FinalCta from '@/modules/homepage/home/components/final-cta';
import Navbar from '@/components/home/navbar';
import Footer from '@/components/home/footer';

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
