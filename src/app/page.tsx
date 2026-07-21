import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { DifferentialsSection } from "@/components/sections/differentials";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { SectorsMarquee } from "@/components/sections/sectors-marquee";
import { Process } from "@/components/sections/process";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <DifferentialsSection />
      <PortfolioPreview />
      <Testimonials />
      <SectorsMarquee />
      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}
