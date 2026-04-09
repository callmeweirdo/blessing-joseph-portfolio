import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { CollaborationsPreview } from "@/components/sections/CollaborationsPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedWork />
      <CollaborationsPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
