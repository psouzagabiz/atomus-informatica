// Conteúdo de exemplo para a Home. Estatísticas, portfólio e depoimentos
// são placeholders — substitua pelos números e cases reais da Atomus.

export const STATS = [
  { value: "50+", label: "Projetos entregues" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "5 anos", label: "De mercado" },
  { value: "< 24h", label: "Tempo médio de resposta" },
] as const;

export const HOME_SERVICES = [
  {
    slug: "desenvolvimento-de-sites",
    icon: "Globe",
    name: "Desenvolvimento de Sites",
    description:
      "Sites institucionais rápidos, responsivos e otimizados para converter visitantes em clientes.",
  },
  {
    slug: "lojas-virtuais",
    icon: "ShoppingCart",
    name: "Lojas Virtuais",
    description:
      "E-commerces completos, com pagamento integrado e pensados para escalar junto com o seu negócio.",
  },
  {
    slug: "sistemas-web",
    icon: "LayoutDashboard",
    name: "Sistemas Web",
    description:
      "Painéis, ERPs e ferramentas internas sob medida para automatizar processos da sua empresa.",
  },
  {
    slug: "landing-pages",
    icon: "Rocket",
    name: "Landing Pages",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação de leads qualificados.",
  },
  {
    slug: "seo",
    icon: "Search",
    name: "SEO",
    description:
      "Otimização técnica e de conteúdo para o seu site ranquear e ser encontrado no Google.",
  },
  {
    slug: "consultoria-digital",
    icon: "Compass",
    name: "Consultoria Digital",
    description:
      "Diagnóstico e plano de ação para a presença digital da sua empresa, sem enrolação.",
  },
] as const;

export const DIFFERENTIALS = [
  {
    icon: "Gauge",
    title: "Performance de verdade",
    description:
      "Sites otimizados para carregar rápido e passar nas métricas do Google (Core Web Vitals).",
  },
  {
    icon: "ShieldCheck",
    title: "Segurança em primeiro lugar",
    description:
      "HTTPS, proteção contra ataques comuns e boas práticas de LGPD desde o primeiro deploy.",
  },
  {
    icon: "MessagesSquare",
    title: "Fala direto com quem desenvolve",
    description:
      "Sem intermediários ou tickets perdidos — você conversa direto com o time técnico.",
  },
  {
    icon: "CalendarCheck",
    title: "Prazo é compromisso",
    description:
      "Cronograma claro desde o início do projeto, com entregas parciais para você acompanhar.",
  },
  {
    icon: "Blocks",
    title: "Stack moderna",
    description:
      "Next.js, React e TypeScript — tecnologia atual, com código organizado e fácil de manter.",
  },
  {
    icon: "LineChart",
    title: "Pensado para converter",
    description:
      "Cada página é desenhada com um objetivo claro: gerar contato, venda ou cadastro.",
  },
] as const;

export const PORTFOLIO_PREVIEW = [
  {
    slug: "ecommerce-modular",
    title: "E-commerce Modular",
    category: "Loja Virtual",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    slug: "portal-institucional",
    title: "Portal Institucional",
    category: "Site Institucional",
    technologies: ["Next.js", "Tailwind CSS"],
  },
  {
    slug: "sistema-de-gestao",
    title: "Sistema de Gestão Interna",
    category: "Sistema Web",
    technologies: ["Next.js", "Prisma", "PostgreSQL"],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Cliente Atomus",
    role: "Diretor(a) comercial",
    quote:
      "O processo foi transparente do início ao fim — sabíamos exatamente em que etapa o projeto estava a cada semana.",
  },
  {
    name: "Cliente Atomus",
    role: "Fundador(a)",
    quote:
      "Trocamos de agência depois de meses sem retorno. Com a Atomus, o site foi entregue no prazo combinado.",
  },
  {
    name: "Cliente Atomus",
    role: "Gerente de marketing",
    quote:
      "A landing page nova aumentou nossa taxa de conversão de forma visível já no primeiro mês.",
  },
] as const;

export const SECTORS_SERVED = [
  "Varejo",
  "Saúde",
  "Educação",
  "Serviços Financeiros",
  "Imobiliário",
  "Indústria",
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Descoberta",
    description: "Entendemos seu negócio, objetivos e público antes de qualquer linha de código.",
  },
  {
    step: "02",
    title: "Planejamento",
    description: "Definimos escopo, cronograma e tecnologias — tudo alinhado por escrito.",
  },
  {
    step: "03",
    title: "Design",
    description: "Criamos o layout com foco em identidade visual e conversão.",
  },
  {
    step: "04",
    title: "Desenvolvimento",
    description: "Codificamos com entregas parciais para você acompanhar o progresso.",
  },
  {
    step: "05",
    title: "Testes & QA",
    description: "Validamos performance, responsividade e segurança antes do lançamento.",
  },
  {
    step: "06",
    title: "Lançamento & Suporte",
    description: "Colocamos no ar e seguimos disponíveis para ajustes e evolução.",
  },
] as const;

export const HOME_FAQ = [
  {
    question: "Quanto tempo leva para desenvolver meu site?",
    answer:
      "Depende da complexidade: uma landing page fica pronta em poucos dias, enquanto sistemas mais completos podem levar algumas semanas. O prazo exato é combinado no orçamento.",
  },
  {
    question: "O site é responsivo para celular?",
    answer:
      "Sim, todo projeto é desenvolvido para funcionar bem em celular, tablet e desktop desde o início.",
  },
  {
    question: "Vocês oferecem suporte depois da entrega?",
    answer:
      "Sim. Cada plano inclui um período de suporte, e também oferecemos manutenção contínua para quem precisa de atualizações constantes.",
  },
  {
    question: "Posso migrar meu site atual para a Atomus?",
    answer:
      "Sim, cuidamos da migração de conteúdo e configuração de domínio para que a transição não afete a operação do seu negócio.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Aceitamos PIX, cartão e boleto, com condições combinadas no momento da contratação do plano.",
  },
  {
    question: "O código e o domínio ficam no meu nome?",
    answer:
      "Sim. Ao final do projeto, o código-fonte e as configurações ficam sob sua propriedade.",
  },
] as const;
