// Dados de exemplo da Área do Cliente. Quando o banco (Prisma/PostgreSQL)
// estiver configurado, troque por consultas reais em src/lib/prisma.ts
// filtradas pelo cliente autenticado (session.user.id).

export const PROJECT_OVERVIEW = {
  name: "Site institucional — Padaria da Maria",
  plan: "Business",
  progress: 60,
  status: "EM_DESENVOLVIMENTO" as const,
};

export const PROJECT_STEPS = [
  { label: "Orçamento aprovado", done: true },
  { label: "Planejamento e escopo", done: true },
  { label: "Design", done: true },
  { label: "Desenvolvimento", done: false, current: true },
  { label: "Testes & QA", done: false },
  { label: "Lançamento", done: false },
] as const;

export const ACTIVITY_HISTORY = [
  { date: "12/07/2026", description: "Design da Home aprovado por você." },
  { date: "05/07/2026", description: "Primeira versão do design enviada para revisão." },
  { date: "28/06/2026", description: "Pagamento da entrada confirmado." },
  { date: "24/06/2026", description: "Escopo do projeto definido e aprovado." },
  { date: "20/06/2026", description: "Orçamento aprovado — projeto iniciado." },
] as const;

export const CLIENT_PAYMENTS = [
  { id: "pay_1", description: "Entrada — Plano Business", amount: 249, status: "APROVADO", date: "28/06/2026" },
  { id: "pay_2", description: "Parcela final — Plano Business", amount: 248, status: "PENDENTE", date: "—" },
] as const;

export const CLIENT_FILES = [
  { id: "file_1", name: "briefing-projeto.pdf", size: "312 KB", date: "20/06/2026" },
  { id: "file_2", name: "logo-padaria-maria.svg", size: "48 KB", date: "24/06/2026" },
  { id: "file_3", name: "design-home-v1.png", size: "1.2 MB", date: "05/07/2026" },
] as const;

export const CLIENT_CONTRACT = {
  title: "Contrato de Prestação de Serviços — Plano Business",
  signedAt: "20/06/2026",
};

export const CLIENT_REQUESTS = [
  { id: "req_1", subject: "Alterar cor do botão principal", status: "RESPONDIDA", date: "10/07/2026" },
  { id: "req_2", subject: "Adicionar seção de depoimentos", status: "EM_ANDAMENTO", date: "13/07/2026" },
] as const;

export const CLIENT_MESSAGES = [
  { id: "msg_1", sender: "ADMIN", content: "Olá! O design da Home já está pronto para sua revisão.", date: "05/07 14:20" },
  { id: "msg_2", sender: "CLIENTE", content: "Ficou ótimo! Só gostaria de ajustar a cor do botão principal.", date: "05/07 16:45" },
  { id: "msg_3", sender: "ADMIN", content: "Perfeito, já ajustamos para o azul da sua marca.", date: "06/07 09:10" },
] as const;
