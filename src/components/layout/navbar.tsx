"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Logo } from "@/components/shared/logo";
import { MAIN_NAV, buildWhatsappLink } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-atomus flex h-18 items-center justify-between py-4">
        <Link href="/" aria-label="Atomus Informática">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                pathname === item.href && "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button variant="outline" size="sm" asChild>
            <Link href="/orcamento">Solicitar Orçamento</Link>
          </Button>
          <Button variant="whatsapp" size="sm" asChild>
            <a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer">
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="flex size-10 items-center justify-center rounded-lg border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-atomus flex flex-col gap-1 py-4">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" asChild>
                <Link href="/orcamento" onClick={() => setOpen(false)}>
                  Solicitar Orçamento
                </Link>
              </Button>
              <Button variant="whatsapp" asChild>
                <a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
