export const SITE_CONFIG = {
  name: "Atomus Informática",
  description:
    "Desenvolvimento de sites, sistemas e lojas virtuais. Tecnologia, inovação e performance para o seu negócio.",
  url: "https://atomusinformatica.com.br",
  whatsapp: "5562920010434",
  email: "contato@atomusinformatica.com.br",
  phone: "(62) 92001-0434",
  address: "A definir",
  social: {
    instagram: "https://instagram.com/atomusinformatica",
    linkedin: "https://linkedin.com/company/atomusinformatica",
    facebook: "https://facebook.com/atomusinformatica",
  },
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Atomus Informática e gostaria de solicitar um orçamento.";

export function buildWhatsappLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;
}

// Gateway usado por padrão no checkout — altere para o provedor que você
// configurar em produção (as chaves ficam em .env, ver services/payments/).
export const DEFAULT_PAYMENT_PROVIDER = "MERCADO_PAGO" as const;

export const BUSINESS_HOURS = [
  { day: "Segunda a sexta", hours: "9h às 18h" },
  { day: "Sábado", hours: "9h às 13h" },
  { day: "Domingo", hours: "Fechado" },
] as const;

export const MAIN_NAV = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Planos", href: "/planos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
] as const;
