"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  FileSignature,
  FolderOpen,
  Inbox,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/cliente", label: "Andamento do projeto", icon: LayoutDashboard },
  { href: "/cliente/pagamentos", label: "Pagamentos", icon: Wallet },
  { href: "/cliente/arquivos", label: "Arquivos", icon: FolderOpen },
  { href: "/cliente/contrato", label: "Contrato", icon: FileSignature },
  { href: "/cliente/solicitacoes", label: "Solicitações", icon: Inbox },
  { href: "/cliente/mensagens", label: "Mensagens", icon: MessageCircle },
] as const;

export function ClientSidebar() {
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
