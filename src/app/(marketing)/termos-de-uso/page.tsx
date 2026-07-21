import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termos de Uso",
  robots: { index: true, follow: true },
};

export default function TermosDeUsoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Termos de Uso"
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Termos de Uso", href: "/termos-de-uso" },
        ]}
      />
      <section className="py-16">
        <div className="container-atomus prose max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Última atualização: julho de 2026.</p>

          <div>
            <h2 className="text-lg font-semibold text-foreground">1. Aceitação dos termos</h2>
            <p className="mt-2">
              Ao utilizar este site ou contratar os serviços da {SITE_CONFIG.name},
              você concorda com os termos descritos nesta página.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">2. Serviços</h2>
            <p className="mt-2">
              Os serviços oferecidos (desenvolvimento de sites, sistemas, lojas
              virtuais e serviços correlatos) são prestados conforme escopo,
              prazo e condições definidos no orçamento aprovado por cada cliente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">3. Pagamentos</h2>
            <p className="mt-2">
              Os valores, formas de pagamento e condições de parcelamento são
              apresentados na página de Planos e confirmados no momento da
              contratação. Atrasos podem impactar o cronograma de entrega.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">4. Propriedade do código</h2>
            <p className="mt-2">
              Ao final do projeto e quitação integral dos valores acordados, o
              código-fonte desenvolvido especificamente para o cliente passa a
              ser de sua propriedade, ressalvadas bibliotecas, frameworks e
              componentes de terceiros sob suas próprias licenças.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">5. Suporte e manutenção</h2>
            <p className="mt-2">
              Cada plano inclui um período de suporte pós-lançamento, conforme
              detalhado na página de Planos. Após esse período, a manutenção
              contínua pode ser contratada separadamente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">6. Cancelamento</h2>
            <p className="mt-2">
              Cancelamentos durante o desenvolvimento do projeto seguem as
              condições acordadas no contrato assinado por cada cliente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">7. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre estes termos podem ser enviadas para{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
