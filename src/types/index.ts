export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  avgDuration: string;
  icon?: string;
}

export interface PlanFeatureComparison {
  label: string;
  start: boolean | string;
  business: boolean | string;
  premium: boolean | string;
}

export interface PortfolioFilter {
  label: string;
  value: string;
}

export type ProjectStatus =
  | "ORCAMENTO"
  | "APROVADO"
  | "EM_DESENVOLVIMENTO"
  | "EM_REVISAO"
  | "CONCLUIDO"
  | "CANCELADO";

export type PaymentMethod = "PIX" | "CARTAO" | "BOLETO";
export type PaymentProvider = "MERCADO_PAGO" | "STRIPE" | "ASAAS";
