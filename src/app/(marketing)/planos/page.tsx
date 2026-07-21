import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { UrgencyBanner } from "@/components/sections/plans/urgency-banner";
import { PricingCards } from "@/components/sections/plans/pricing-cards";
import { ComparisonTable } from "@/components/sections/plans/comparison-table";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { PLANS_FAQ } from "@/lib/data/plans";

export const metadata: Metadata = {
  title: "Planos",
  description:
    "Conheça os planos Start, Business e Premium da Atomus Informática e escolha a condição ideal para o seu projeto.",
};

export default function PlanosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Planos"
        title="O plano certo custa menos do que parece"
        description="Escolha o plano ideal para o seu momento — sem taxas escondidas, sem letras miúdas."
      />
      <UrgencyBanner />
      <PricingCards />
      <ComparisonTable />
      <Faq items={PLANS_FAQ} title="Dúvidas sobre os planos" className="py-24" />
      <FinalCta />
    </>
  );
}
