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
    (marketing)/            Grupo de rotas públicas: /sobre /servicos /portfolio /planos /blog /contato
    orcamento/               Formulário de solicitação de orçamento
    pagamento/                Checkout (seleção de plano + dados + gateway)
    cliente/                  Área do cliente (protegida por middleware)
      login/
    admin/                     Painel administrativo (protegido, role ADMIN)
    api/                       Route Handlers (equivalente a "api/" do pedido original)
      auth/[...nextauth]/
      contato/
      orcamento/
      pagamentos/
    layout.tsx                 Layout raiz (fontes, metadata, providers)
    page.tsx                   Home
    sitemap.ts / robots.ts      SEO técnico

  components/
    ui/                       Componentes base shadcn/ui (button, card, input...)
    layout/                   Navbar, Footer
    sections/                 Seções de página (Hero, Stats, Depoimentos... — próxima etapa)
    forms/                    Formulários (orçamento, contato, checkout — próxima etapa)
    shared/                   WhatsApp float button, back-to-top, theme toggle, JSON-LD...

  hooks/                      Hooks reutilizáveis (use-media-query, use-scroll-position)
  services/
    payments/                 Integração com Mercado Pago, Stripe e Asaas (stubs prontos p/ chaves)
  lib/
    prisma.ts                 Cliente Prisma singleton
    auth.ts                   Configuração do NextAuth
    constants.ts               Configurações do site (nome, WhatsApp, navegação)
    utils.ts                   Helper `cn`
    validations/                Schemas Zod (auth, contact, payment)
  types/                       Tipos TypeScript compartilhados
  styles/                      Reservado para estilos adicionais (globals.css vive em app/)
  middleware.ts                 Proteção de rotas /admin e /cliente

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
- [x] Design system (paleta azul escuro/branco/laranja), Navbar, Footer, WhatsApp flutuante, dark/light mode
- [x] Modelagem do banco de dados (Prisma)
- [x] Autenticação (NextAuth) e middleware de proteção de rotas
- [x] Stubs de integração de pagamento (Mercado Pago, Stripe, Asaas)
- [x] SEO técnico base (metadata, sitemap, robots, JSON-LD)
- [ ] Home completa (Hero, estatísticas, serviços, diferenciais, portfólio, depoimentos, processo, FAQ, CTA)
- [ ] Página Sobre
- [ ] Página Serviços (cards com benefícios, prazo e contratação)
- [ ] Página Portfólio (com filtros)
- [ ] Página Planos (comparação)
- [ ] Página de Pagamento (checkout completo)
- [ ] Área do Cliente (dashboard)
- [ ] Painel Administrativo (dashboard completo)
- [ ] Blog (listagem, categorias, busca, post individual)
- [ ] Página de Contato
- [ ] Política de Privacidade / Termos de Uso (LGPD)
