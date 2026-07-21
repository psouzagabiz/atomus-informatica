import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { ServiceCard } from "@/components/sections/service-card";
import { FinalCta } from "@/components/sections/final-cta";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça todos os serviços da Atomus Informática: sites, lojas virtuais, sistemas web, SEO, identidade visual e muito mais.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Serviços"
        title="Tudo que a sua presença digital precisa"
        description="Do primeiro site até sistemas complexos — cada serviço com escopo, benefícios e prazo claros desde o início."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Serviços", href: "/servicos" },
        ]}
      />

      <section className="py-24">
        <div className="container-atomus grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} delay={(i % 3) * 0.06} />
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
