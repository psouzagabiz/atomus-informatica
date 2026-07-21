import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { CheckoutForm } from "@/components/sections/payment/checkout-form";

export const metadata: Metadata = {
  title: "Pagamento",
  description: "Finalize a contratação do seu plano com a Atomus Informática.",
};

export default async function PagamentoPage({
  searchParams,
}: {
  searchParams: Promise<{ plano?: string }>;
}) {
  const { plano } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Contratação"
        title="Falta pouco para o seu projeto começar"
        description="Escolha o plano, preencha seus dados e finalize o pagamento."
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Pagamento", href: "/pagamento" },
        ]}
      />
      <section className="py-16">
        <div className="container-atomus max-w-2xl">
          <CheckoutForm initialPlan={plano} />
        </div>
      </section>
    </>
  );
}
