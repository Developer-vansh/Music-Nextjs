import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import { TestimonialsCards } from "@/components/TestimonialsCards";
import UpcomingWebinarsSection from "@/components/UpcomingWebinarsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FeaturedSection/>
    <WhyChooseUsSection/>
    <TestimonialsCards/>
    <UpcomingWebinarsSection/>
    </main>
  );
}
