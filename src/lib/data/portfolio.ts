// Projetos de exemplo — substitua pelos cases reais da Atomus assim que
// estiverem disponíveis (imagens em /public/images/portfolio).

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  /** Caminho da imagem de prévia em /public. Se ausente, usa o card com gradiente. */
  image?: string;
}

export const PORTFOLIO_CATEGORIES = [
  "Todos",
  "Site Institucional",
  "Loja Virtual",
  "Sistema Web",
  "Landing Page",
] as const;

export const PORTFOLIO_ITEMS: readonly PortfolioItem[] = [
  {
    slug: "ecommerce-modular",
    title: "E-commerce Modular",
    category: "Loja Virtual",
    description:
      "Loja virtual completa com catálogo dinâmico, carrinho e checkout integrado ao Stripe.",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    image: "/images/portfolio/ecommerce-modular.png",
  },
  {
    slug: "portal-institucional",
    title: "Portal Institucional",
    category: "Site Institucional",
    description:
      "Site institucional multi-página com blog integrado e otimização de SEO.",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/images/portfolio/portal-institucional.png",
  },
  {
    slug: "sistema-de-gestao",
    title: "Sistema de Gestão Interna",
    category: "Sistema Web",
    description:
      "Painel interno para controle de estoque, pedidos e relatórios em tempo real.",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
    image: "/images/portfolio/sistema-de-gestao.png",
  },
  {
    slug: "landing-lancamento",
    title: "Landing Page de Lançamento",
    category: "Landing Page",
    description:
      "Página de captação de leads para lançamento de produto, com formulário e WhatsApp.",
    technologies: ["Next.js", "React Hook Form"],
    image: "/images/portfolio/landing-lancamento.png",
  },
  {
    slug: "plataforma-de-cursos",
    title: "Plataforma de Cursos",
    category: "Sistema Web",
    description:
      "Área de membros com controle de acesso, progresso do aluno e emissão de certificados.",
    technologies: ["Next.js", "NextAuth", "PostgreSQL"],
    image: "/images/portfolio/plataforma-de-cursos.png",
  },
  {
    slug: "sistema-de-agendamento",
    title: "Sistema de Agendamento",
    category: "Sistema Web",
    description:
      "Agenda online com confirmação automática e lembretes via WhatsApp.",
    technologies: ["Next.js", "Prisma"],
    image: "/images/portfolio/sistema-de-agendamento.png",
  },
  {
    slug: "site-institucional-servicos",
    title: "Site para Prestadora de Serviços",
    category: "Site Institucional",
    description:
      "Site institucional com formulário de orçamento e integração com Google Maps.",
    technologies: ["Next.js", "Tailwind CSS"],
    image: "/images/portfolio/site-institucional-servicos.png",
  },
  {
    slug: "landing-evento",
    title: "Landing Page de Evento",
    category: "Landing Page",
    description:
      "Página de inscrição para evento com contagem regressiva e checkout integrado.",
    technologies: ["Next.js", "Stripe"],
    image: "/images/portfolio/landing-evento.png",
  },
] as const;
