// Dados de exemplo do Painel Administrativo. Quando o banco estiver
// configurado, troque por consultas reais via src/lib/prisma.ts.

export const ADMIN_STATS = [
  { label: "Clientes ativos", value: "18", icon: "Users" },
  { label: "Projetos em andamento", value: "6", icon: "FolderKanban" },
  { label: "Receita do mês", value: "R$ 8.940", icon: "TrendingUp" },
  { label: "Solicitações abertas", value: "3", icon: "Inbox" },
] as const;

export const ADMIN_RECENT_ACTIVITY = [
  { date: "13/07/2026", description: "Nova solicitação de Maria Souza — Padaria da Maria." },
  { date: "12/07/2026", description: "Design da Home aprovado por Maria Souza." },
  { date: "10/07/2026", description: "Pagamento aprovado — João Lima (Loja JL Modas)." },
  { date: "08/07/2026", description: "Novo cliente cadastrado — Studio Pilates Ana." },
] as const;

export const ADMIN_CLIENTS = [
  { id: "cli_1", name: "Maria Souza", company: "Padaria da Maria", email: "maria@example.com", projects: 1 },
  { id: "cli_2", name: "João Lima", company: "Loja JL Modas", email: "joao@example.com", projects: 1 },
  { id: "cli_3", name: "Ana Ribeiro", company: "Studio Pilates Ana", email: "ana@example.com", projects: 1 },
  { id: "cli_4", name: "Carlos Mendes", company: "Mendes Contabilidade", email: "carlos@example.com", projects: 2 },
] as const;

export const ADMIN_PROJECTS = [
  { id: "prj_1", name: "Site institucional", client: "Padaria da Maria", plan: "Business", status: "EM_DESENVOLVIMENTO", progress: 60 },
  { id: "prj_2", name: "Loja virtual", client: "Loja JL Modas", plan: "Premium", status: "EM_REVISAO", progress: 85 },
  { id: "prj_3", name: "Landing page", client: "Studio Pilates Ana", plan: "Start", status: "CONCLUIDO", progress: 100 },
  { id: "prj_4", name: "Sistema interno", client: "Mendes Contabilidade", plan: "Premium", status: "ORCAMENTO", progress: 0 },
] as const;

export const ADMIN_CONTRACTS = [
  { id: "ctr_1", title: "Contrato — Padaria da Maria", client: "Maria Souza", signedAt: "20/06/2026" },
  { id: "ctr_2", title: "Contrato — Loja JL Modas", client: "João Lima", signedAt: "02/05/2026" },
  { id: "ctr_3", title: "Contrato — Studio Pilates Ana", client: "Ana Ribeiro", signedAt: "15/03/2026" },
] as const;

export const ADMIN_PAYMENTS = [
  { id: "pay_1", client: "Maria Souza", description: "Entrada — Plano Business", amount: 249, status: "APROVADO", date: "28/06/2026" },
  { id: "pay_2", client: "Maria Souza", description: "Parcela final", amount: 248, status: "PENDENTE", date: "—" },
  { id: "pay_3", client: "João Lima", description: "Pagamento único — Plano Premium", amount: 997, status: "APROVADO", date: "10/07/2026" },
  { id: "pay_4", client: "Ana Ribeiro", description: "Pagamento único — Plano Start", amount: 197, status: "APROVADO", date: "16/03/2026" },
] as const;

export const ADMIN_REQUESTS = [
  { id: "req_1", client: "Maria Souza", subject: "Alterar cor do botão principal", status: "RESPONDIDA", date: "10/07/2026" },
  { id: "req_2", client: "Maria Souza", subject: "Adicionar seção de depoimentos", status: "EM_ANDAMENTO", date: "13/07/2026" },
  { id: "req_3", client: "João Lima", subject: "Dúvida sobre prazo de entrega", status: "ABERTA", date: "13/07/2026" },
] as const;

export const ADMIN_BLOG_POSTS = [
  { id: "post_1", title: "5 sinais de que sua empresa precisa de um site", category: "Marketing Digital", published: true, date: "01/07/2026" },
  { id: "post_2", title: "Como o SEO local ajuda pequenos negócios", category: "SEO", published: true, date: "15/06/2026" },
  { id: "post_3", title: "Guia rápido: WhatsApp Business para vendas", category: "Vendas", published: false, date: "—" },
] as const;

export const ADMIN_USERS = [
  { id: "usr_1", name: "Equipe Atomus", email: "admin@atomusinformatica.com.br", role: "ADMIN" },
  { id: "usr_2", name: "Maria Souza", email: "maria@example.com", role: "CLIENTE" },
  { id: "usr_3", name: "João Lima", email: "joao@example.com", role: "CLIENTE" },
] as const;

export const ADMIN_LOGS = [
  { id: "log_1", action: "Pagamento aprovado", entity: "Payment#pay_3", date: "10/07/2026 14:02" },
  { id: "log_2", action: "Solicitação criada", entity: "Request#req_2", date: "13/07/2026 09:40" },
  { id: "log_3", action: "Cliente cadastrado", entity: "Client#cli_3", date: "08/07/2026 11:15" },
  { id: "log_4", action: "Contrato assinado", entity: "Contract#ctr_1", date: "20/06/2026 16:30" },
] as const;
