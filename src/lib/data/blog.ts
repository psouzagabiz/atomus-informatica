// Posts de exemplo do blog. Substitua pelo conteúdo real da Atomus —
// veja também o painel administrativo (/admin/blog) para gerenciar posts.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: readonly string[];
  category: string;
  publishedAt: string;
  readingTime: string;
}

export const BLOG_CATEGORIES = [
  "Todos",
  "Marketing Digital",
  "SEO",
  "Vendas",
  "Tecnologia",
] as const;

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "5-sinais-que-sua-empresa-precisa-de-um-site",
    title: "5 sinais de que sua empresa precisa de um site",
    excerpt:
      "Se você depende só das redes sociais pra ser encontrado, talvez esteja perdendo clientes todos os dias. Veja os sinais mais comuns.",
    category: "Marketing Digital",
    publishedAt: "01/07/2026",
    readingTime: "4 min de leitura",
    content: [
      "Muitos negócios pequenos e médios ainda acreditam que uma página no Instagram é suficiente para representar a empresa online. Na prática, isso limita seu alcance e passa uma imagem menos profissional para quem pesquisa por você no Google.",
      "1. Clientes perguntam \"vocês têm site?\" — Se essa pergunta já apareceu mais de uma vez, é sinal de que parte do seu público espera encontrar informações fora das redes sociais.",
      "2. Você não aparece no Google — Redes sociais têm alcance limitado nas buscas. Um site otimizado é o que coloca sua empresa nos resultados quando alguém procura pelo que você vende.",
      "3. Sua concorrência já tem site — Se concorrentes diretos já têm presença própria, isso passa mais credibilidade na hora da decisão de compra.",
      "4. Você perde tempo respondendo as mesmas perguntas — Horário de funcionamento, endereço, formas de pagamento: um site tira esse peso do seu atendimento.",
      "5. Você quer vender além do WhatsApp — Um site com catálogo ou loja virtual permite vender 24 horas por dia, sem depender de alguém disponível para responder.",
      "Se pelo menos dois desses pontos fazem sentido para o seu negócio, provavelmente já passou da hora de investir em um site profissional.",
    ],
  },
  {
    slug: "como-o-seo-local-ajuda-pequenos-negocios",
    title: "Como o SEO local ajuda pequenos negócios",
    excerpt:
      "Aparecer no Google quando alguém busca por um serviço \"perto de mim\" pode ser a diferença entre vender ou não. Entenda como funciona.",
    category: "SEO",
    publishedAt: "15/06/2026",
    readingTime: "5 min de leitura",
    content: [
      "SEO local é o conjunto de práticas que ajuda o seu negócio a aparecer em buscas geograficamente relevantes — como \"padaria perto de mim\" ou \"contador em Goiânia\".",
      "Diferente do SEO tradicional, o foco aqui não é só ranquear bem no Google, mas aparecer no mapa e nos resultados locais, onde a intenção de compra costuma ser mais imediata.",
      "Os pilares principais são: um perfil completo no Google Business Profile, um site com informações consistentes de endereço e telefone, avaliações de clientes reais, e conteúdo que mencione a cidade ou região de atuação.",
      "Para pequenos negócios com atendimento presencial, investir em SEO local costuma trazer retorno mais rápido do que campanhas pagas — porque atinge pessoas que já estão prontas para decidir.",
    ],
  },
  {
    slug: "guia-rapido-whatsapp-business-para-vendas",
    title: "Guia rápido: WhatsApp Business para vendas",
    excerpt:
      "O WhatsApp já é o principal canal de vendas de muitos pequenos negócios no Brasil. Veja como usar melhor os recursos do app.",
    category: "Vendas",
    publishedAt: "20/07/2026",
    readingTime: "3 min de leitura",
    content: [
      "O WhatsApp Business oferece recursos gratuitos que muita gente ainda não usa: catálogo de produtos, respostas rápidas, etiquetas de organização de conversas e mensagens automáticas de ausência.",
      "Configurar um catálogo permite que o cliente veja produtos e preços sem precisar perguntar um por um — economizando tempo dos dois lados.",
      "Etiquetas como \"Novo lead\", \"Aguardando pagamento\" e \"Cliente recorrente\" ajudam a organizar o funil de vendas direto no aplicativo, sem depender de outra ferramenta.",
      "Combinado com um site que direciona o visitante direto para uma conversa no WhatsApp — como fazemos aqui na Atomus — esse canal se torna ainda mais eficiente para fechar vendas.",
    ],
  },
] as const;
