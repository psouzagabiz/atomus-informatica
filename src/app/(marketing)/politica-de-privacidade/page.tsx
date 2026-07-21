import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de Privacidade"
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: "Política de Privacidade", href: "/politica-de-privacidade" },
        ]}
      />
      <section className="py-16">
        <div className="container-atomus prose max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>Última atualização: julho de 2026.</p>

          <div>
            <h2 className="text-lg font-semibold text-foreground">1. Quem somos</h2>
            <p className="mt-2">
              A {SITE_CONFIG.name} é responsável pelo tratamento dos dados pessoais
              coletados através deste site, em conformidade com a Lei Geral de
              Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">2. Quais dados coletamos</h2>
            <p className="mt-2">
              Coletamos os dados que você nos fornece diretamente em formulários do
              site (nome, email, telefone, empresa, CPF/CNPJ e descrição de
              projeto), além de dados técnicos de navegação coletados
              automaticamente, como endereço IP e tipo de navegador.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">3. Como usamos seus dados</h2>
            <p className="mt-2">
              Utilizamos seus dados para responder solicitações de orçamento e
              contato, processar pagamentos, prestar os serviços contratados e
              enviar comunicações relacionadas ao seu projeto. Não vendemos seus
              dados a terceiros.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">4. Cookies</h2>
            <p className="mt-2">
              Utilizamos cookies essenciais para o funcionamento do site (como
              preferência de tema claro/escuro e autenticação da área do cliente).
              Você pode gerenciar cookies nas configurações do seu navegador.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">5. Seus direitos</h2>
            <p className="mt-2">
              Você pode solicitar a qualquer momento a confirmação, acesso,
              correção ou exclusão dos seus dados pessoais, entrando em contato
              pelo email{" "}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">6. Compartilhamento de dados</h2>
            <p className="mt-2">
              Dados de pagamento são processados diretamente pelos nossos gateways
              parceiros (Mercado Pago, Stripe ou Asaas, conforme o método
              escolhido), que possuem suas próprias políticas de privacidade e
              segurança.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground">7. Contato</h2>
            <p className="mt-2">
              Dúvidas sobre esta política podem ser enviadas para{" "}
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
