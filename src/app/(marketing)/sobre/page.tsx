import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Story } from "@/components/sections/about/story";
import { MissionVisionValues } from "@/components/sections/about/mission-vision-values";
import { CompanyDifferentials } from "@/components/sections/about/company-differentials";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/about/tech-stack";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a história, missão, visão, valores e a metodologia de trabalho da Atomus Informática.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre a Atomus"
        title="Tecnologia com propósito"
        description="Somos uma equipe focada em transformar ideias em produtos digitais que realmente funcionam para o seu negócio."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Sobre", href: "/sobre" },
        ]}
      />
      <Story />
      <MissionVisionValues />
      <CompanyDifferentials />
      <Process
        title="Nossa metodologia"
        description="Um processo estruturado que garante previsibilidade em cada etapa do projeto."
        className="bg-secondary/50 py-24"
      />
      <TechStack />
    </>
  );
}
