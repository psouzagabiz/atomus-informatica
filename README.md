# Atomus Informática — Site Institucional

Site institucional em Next.js (App Router) com área do cliente, painel
administrativo, blog, portfólio, planos e checkout de pagamentos.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (componentes manuais em `src/components/ui`)
- **Framer Motion** para animações
- **Lucide Icons**
- **Prisma ORM** + **PostgreSQL**
- **NextAuth v5** (Credentials, estratégia JWT)
- **Zod** + **React Hook Form** para validação de formulários
- **next-themes** para modo claro/escuro
- **sonner** para notificações (toasts)

## Arquitetura de pastas

```
src/
  app/                      Rotas (App Router)
    (marketing)/            Grupo de rotas públicas: /sobre /servicos /portfolio /planos
                            /blog /contato /politica-de-privacidade /termos-de-uso
    orcamento/               Formulário de solicitação de orçamento
    pagamento/                Checkout (seleção de plano + dados + gateway)
    cliente/                  Área do cliente (protegida pelo proxy)
      login/
      (dashboard)/            Dashboard, contrato, arquivos, mensagens, pagamentos, solicitações
    admin/                     Painel administrativo (protegido, role ADMIN): dashboard,
                                clientes, projetos, contratos, pagamentos, solicitações,
                                portfólio, blog, serviços, planos, usuários, logs
    api/                       Route Handlers (equivalente a "api/" do pedido original)
      auth/[...nextauth]/
      contato/ orcamento/ pagamentos/ comentarios/ solicitacoes/
    layout.tsx                 Layout raiz (fontes, metadata, providers)
    page.tsx                   Home
    manifest.ts                 PWA
    sitemap.ts / robots.ts      SEO técnico

  components/
    ui/                       Componentes base shadcn/ui (button, card, input...)
    layout/                   Navbar, Footer
    sections/                 Seções de página (Hero, Stats, Depoimentos, Portfólio, FAQ...)
    forms/                    Formulários (orçamento, contato, checkout)
    shared/                   WhatsApp float button, back-to-top, theme toggle, JSON-LD...

  hooks/                      Hooks reutilizáveis (use-media-query, use-scroll-position)
  services/
    payments/                 Mercado Pago via Payment Brick (real, só falta a chave em .env);
                                Stripe e Asaas em stub, prontos para receber a chave
  lib/
    prisma.ts                 Cliente Prisma singleton
    auth.ts                   Configuração do NextAuth
    constants.ts               Configurações do site (nome, WhatsApp, navegação)
    utils.ts                   Helper `cn`
    validations/                Schemas Zod (auth, contact, payment)
  types/                       Tipos TypeScript compartilhados
  styles/                      Reservado para estilos adicionais (globals.css vive em app/)
  proxy.ts                      Middleware: proteção de rotas /admin e /cliente

prisma/
  schema.prisma                Modelos: User, Client, Project, Plan, Service, Contract,
                                Payment, Request, Message, File, PortfolioItem, BlogPost,
                                BlogComment, ContactMessage, AuditLog

public/
  images/logo, images/portfolio, icons
```

> Observação: o pedido original citava pastas `pages/`, `database/` e `api/` na
> raiz. Como o projeto usa o **App Router** do Next.js (recomendado atualmente),
> essas responsabilidades vivem em `src/app/**/page.tsx` (rotas), `prisma/`
> (banco de dados) e `src/app/api/**/route.ts` (API) — mantendo a mesma
> separação de responsabilidades pedida, mas seguindo a convenção do Next.js.

## Como rodar localmente

```bash
npm install
cp .env.example .env       # preencher DATABASE_URL, AUTH_SECRET e chaves de pagamento
npx prisma generate
npx prisma migrate dev     # cria as tabelas no PostgreSQL
npm run dev
```

## Roadmap (construção por etapas)

- [x] Estrutura do projeto e arquitetura de pastas
- [x] Design system (paleta azul: #1E40AF / #2563EB / #0F2A6B / #060B18 / #EDEFF5, fonte Space Grotesk, logo em átomo), Navbar, Footer, WhatsApp flutuante, dark/light mode
- [x] Modelagem do banco de dados (Prisma)
- [x] Autenticação (NextAuth) e middleware (`proxy.ts`) de proteção de rotas
- [x] Pagamento com Mercado Pago (Payment Brick embutido, PIX/Cartão/Boleto); Stripe e Asaas em stub
- [x] SEO técnico base (metadata, sitemap, robots, JSON-LD, breadcrumbs)
- [x] Home completa (Hero, estatísticas, serviços, diferenciais, portfólio, depoimentos, processo, FAQ, CTA)
- [x] Página Sobre
- [x] Página Serviços (cards com benefícios, prazo e contratação)
- [x] Página Portfólio (com filtros e previews visuais dos projetos)
- [x] Página Planos (comparação, preços não redondos)
- [x] Página de Pagamento (checkout completo)
- [x] Área do Cliente (dashboard, contrato, arquivos, mensagens, pagamentos, solicitações)
- [x] Painel Administrativo (dashboard completo: clientes, projetos, contratos, pagamentos, solicitações, portfólio, blog, serviços, planos, usuários, logs)
- [x] Blog (listagem, categorias, busca, post individual, comentários)
- [x] Página de Contato
- [x] Política de Privacidade / Termos de Uso (LGPD) e aviso de cookies
- [x] PWA (manifest) e rate limiting nas rotas públicas

## Próximos passos sugeridos (fora do escopo já entregue)

- Mercado Pago: preencher `MERCADO_PAGO_ACCESS_TOKEN` e `NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY` em `.env` com as chaves de sandbox/produção e testar os 3 métodos (PIX, cartão, boleto)
- Stripe e Asaas: os arquivos em `src/services/payments/` têm stubs prontos, faltando a implementação real e as chaves de API
- Configurar um banco PostgreSQL real e rodar `npx prisma migrate dev`
- Trocar o rate limit em memória (`src/lib/rate-limit.ts`) por uma solução distribuída (ex: Upstash Redis) antes de rodar em múltiplas instâncias
- Escrever testes automatizados (o projeto ainda não tem suíte de testes)
