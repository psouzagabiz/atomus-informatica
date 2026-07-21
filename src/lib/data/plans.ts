// Preços de exemplo — ajuste para os valores reais praticados pela Atomus.
// A condição "de/por" e o limite de vagas mensais devem refletir uma
// oferta real; edite ou remova caso não se aplique.

export interface Plan {
  slug: string;
  name: string;
  tagline: string;
  priceFrom: number;
  price: number;
  installment?: string;
  popular?: boolean;
  features: readonly string[];
  ctaLabel: string;
}

export const PLANS: readonly Plan[] = [
  {
    slug: "start",
    name: "Start",
    tagline: "Para quem precisa sair do papel rápido",
    priceFrom: 297,
    price: 197,
    installment: "ou 2x de R$ 99",
    features: [
      "Landing Page profissional",
      "100% responsivo",
      "SEO básico",
      "Botão de WhatsApp integrado",
      "Entrega em até 7 dias",
    ],
    ctaLabel: "Quero o plano Start",
  },
  {
    slug: "business",
    name: "Business",
    tagline: "O mais escolhido por pequenas empresas",
    priceFrom: 797,
    price: 497,
    installment: "ou 3x de R$ 166",
    popular: true,
    features: [
      "Tudo do plano Start",
      "Até 5 páginas",
      "Painel administrativo",
      "SEO completo",
      "Google Maps integrado",
      "Google Analytics configurado",
    ],
    ctaLabel: "Quero o plano Business",
  },
  {
    slug: "premium",
    name: "Premium",
    tagline: "Para quem quer a solução completa",
    priceFrom: 1497,
    price: 997,
    installment: "ou 4x de R$ 250",
    features: [
      "Tudo do plano Business",
      "Até 10 páginas",
      "Blog integrado",
      "Área administrativa completa",
      "E-mail profissional",
      "Suporte prioritário por 90 dias",
    ],
    ctaLabel: "Quero o plano Premium",
  },
] as const;

export const MONTHLY_PROJECT_SLOTS = 4;

export const PLANS_FAQ = [
  {
    question: "Os valores são fixos ou podem mudar conforme o projeto?",
    answer:
      "Os planos cobrem o escopo descrito. Necessidades fora do escopo são orçadas à parte, sempre alinhadas com você antes de qualquer cobrança adicional.",
  },
  {
    question: "Posso trocar de plano depois de contratar?",
    answer:
      "Sim, você pode fazer upgrade a qualquer momento — pagando apenas a diferença entre os planos.",
  },
  {
    question: "As formas de pagamento incluem parcelamento?",
    answer:
      "Sim, aceitamos PIX, boleto e cartão de crédito parcelado nas condições exibidas em cada plano.",
  },
] as const;

export const COMPARISON_ROWS = [
  { label: "Páginas inclusas", start: "1 (landing page)", business: "Até 5", premium: "Até 10" },
  { label: "Design responsivo", start: true, business: true, premium: true },
  { label: "SEO", start: "Básico", business: "Completo", premium: "Completo + avançado" },
  { label: "Painel administrativo", start: false, business: true, premium: true },
  { label: "Google Maps integrado", start: false, business: true, premium: true },
  { label: "Google Analytics", start: false, business: true, premium: true },
  { label: "Blog integrado", start: false, business: false, premium: true },
  { label: "E-mail profissional", start: false, business: false, premium: true },
  { label: "Suporte incluso", start: "7 dias", business: "30 dias", premium: "90 dias" },
  { label: "Prazo de entrega", start: "Até 7 dias", business: "2 a 3 semanas", premium: "4 a 6 semanas" },
] as const;
