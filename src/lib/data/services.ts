export interface ServiceDetail {
  slug: string;
  icon: string;
  name: string;
  description: string;
  benefits: readonly string[];
  avgDuration: string;
}

export const SERVICES: readonly ServiceDetail[] = [
  {
    slug: "desenvolvimento-de-sites",
    icon: "Globe",
    name: "Desenvolvimento de Sites",
    description:
      "Sites institucionais rápidos, responsivos e otimizados para transmitir credibilidade e converter visitantes em clientes.",
    benefits: [
      "Design responsivo para qualquer dispositivo",
      "Otimizado para carregar rápido",
      "SEO técnico incluído desde a estrutura",
    ],
    avgDuration: "2 a 4 semanas",
  },
  {
    slug: "landing-pages",
    icon: "Rocket",
    name: "Landing Pages",
    description:
      "Páginas de alta conversão para campanhas, lançamentos e captação de leads, com foco total em um único objetivo.",
    benefits: [
      "Copy e layout orientados à conversão",
      "Integração com WhatsApp e formulários",
      "Entrega rápida",
    ],
    avgDuration: "3 a 7 dias",
  },
  {
    slug: "lojas-virtuais",
    icon: "ShoppingCart",
    name: "Lojas Virtuais",
    description:
      "E-commerces completos, com catálogo, carrinho e pagamento integrado, prontos para vender online.",
    benefits: [
      "Pagamento via PIX, cartão e boleto",
      "Painel para gerenciar produtos e pedidos",
      "Estrutura pronta para escalar",
    ],
    avgDuration: "4 a 8 semanas",
  },
  {
    slug: "sistemas-web",
    icon: "LayoutDashboard",
    name: "Sistemas Web",
    description:
      "Painéis administrativos, ERPs e ferramentas internas sob medida para automatizar processos da sua empresa.",
    benefits: [
      "Desenvolvido sob medida para o seu processo",
      "Controle de usuários e permissões",
      "Escalável conforme o negócio cresce",
    ],
    avgDuration: "6 a 12 semanas",
  },
  {
    slug: "hospedagem",
    icon: "Server",
    name: "Hospedagem",
    description:
      "Hospedagem gerenciada com monitoramento, backups e certificado de segurança, sem dor de cabeça técnica.",
    benefits: [
      "HTTPS e certificado SSL incluídos",
      "Backups automáticos",
      "Monitoramento de disponibilidade",
    ],
    avgDuration: "Ativação em 24h",
  },
  {
    slug: "manutencao",
    icon: "Wrench",
    name: "Manutenção",
    description:
      "Atualizações, correções e pequenas melhorias contínuas para manter seu site sempre no ar e atualizado.",
    benefits: [
      "Atendimento sob demanda ou mensal",
      "Correção prioritária de bugs",
      "Atualizações de segurança",
    ],
    avgDuration: "Plano contínuo",
  },
  {
    slug: "seo",
    icon: "Search",
    name: "SEO",
    description:
      "Otimização técnica e de conteúdo para o seu site ranquear melhor e ser encontrado no Google.",
    benefits: [
      "Otimização técnica (Core Web Vitals)",
      "Estrutura de dados (Schema.org)",
      "Sitemap e indexação configurados",
    ],
    avgDuration: "Resultados a partir de 4 a 8 semanas",
  },
  {
    slug: "identidade-visual",
    icon: "Palette",
    name: "Identidade Visual",
    description:
      "Paleta de cores, tipografia e diretrizes visuais para a sua marca ter consistência em todos os canais.",
    benefits: [
      "Paleta e tipografia definidas",
      "Guia de aplicação da marca",
      "Arquivos prontos para uso digital",
    ],
    avgDuration: "1 a 2 semanas",
  },
  {
    slug: "criacao-de-logotipos",
    icon: "PenTool",
    name: "Criação de Logotipos",
    description:
      "Logotipo original, desenhado para representar a essência do seu negócio em qualquer aplicação.",
    benefits: [
      "Conceito exclusivo para sua marca",
      "Versões para fundo claro e escuro",
      "Arquivos vetoriais editáveis",
    ],
    avgDuration: "1 a 2 semanas",
  },
  {
    slug: "google-business-profile",
    icon: "MapPin",
    name: "Google Business Profile",
    description:
      "Configuração e otimização do seu perfil no Google para aparecer no mapa e nas buscas locais.",
    benefits: [
      "Perfil completo e verificado",
      "Otimizado para buscas locais",
      "Orientação sobre avaliações",
    ],
    avgDuration: "3 a 5 dias",
  },
  {
    slug: "consultoria-digital",
    icon: "Compass",
    name: "Consultoria Digital",
    description:
      "Diagnóstico completo da sua presença digital, com um plano de ação prático e direto ao ponto.",
    benefits: [
      "Diagnóstico do site e canais atuais",
      "Plano de ação priorizado",
      "Reunião de apresentação dos resultados",
    ],
    avgDuration: "1 semana",
  },
] as const;
