"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  FileSignature,
  FolderKanban,
  GalleryHorizontal,
  Inbox,
  LayoutDashboard,
  LogOut,
  Newspaper,
  Package,
  ScrollText,
  Settings,
  Tag,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/clientes", label: "Clientes", icon: Users },
  { href: "/admin/projetos", label: "Projetos", icon: FolderKanban },
  { href: "/admin/contratos", label: "Contratos", icon: FileSignature },
  { href: "/admin/pagamentos", label: "Pagamentos", icon: Wallet },
  { href: "/admin/solicitacoes", label: "Solicitações", icon: Inbox },
  { href: "/admin/portfolio", label: "Portfólio", icon: GalleryHorizontal },
  { href: "/admin/blog", label: "Blog", icon: Newspaper },
  { href: "/admin/servicos", label: "Serviços", icon: Package },
  { href: "/admin/planos", label: "Planos", icon: Tag },
  { href: "/admin/usuarios", label: "Usuários", icon: UserCog },
  { href: "/admin/configuracoes", label: "Configurações", icon: Settings },
  { href: "/admin/logs", label: "Logs", icon: ScrollText },
] as const;

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full shrink-0 border-border lg:w-64 lg:border-r">
      <nav className="flex gap-1.5 overflow-x-auto p-3 lg:flex-col lg:overflow-visible">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}

        <button
          type="button"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-2 flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:mt-auto"
        >
          <LogOut className="size-4 shrink-0" />
          Sair
        </button>
      </nav>
    </aside>
  );
}
