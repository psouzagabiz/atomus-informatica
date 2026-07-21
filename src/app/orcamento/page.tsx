import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/page-placeholder";

export const metadata: Metadata = { title: "Solicitar Orçamento" };

export default function OrcamentoPage() {
  return (
    <PagePlaceholder
      title="Solicitar Orçamento"
      description="Formulário de orçamento com validação (React Hook Form + Zod) — em desenvolvimento."
    />
  );
}
