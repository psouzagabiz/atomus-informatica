import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { FinalCta } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Conheça alguns dos projetos desenvolvidos pela Atomus Informática.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfólio"
        title="Projetos que já colocamos no ar"
        description="Filtre por categoria para ver o tipo de projeto mais parecido com o que você precisa."
      />
      <PortfolioGrid />
      <FinalCta />
    </>
  );
}
