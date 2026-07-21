import { Flame, ShieldCheck, Timer } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { MONTHLY_PROJECT_SLOTS } from "@/lib/data/plans";

export function UrgencyBanner() {
  return (
    <Reveal className="container-atomus -mt-8 mb-4">
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-6 py-4 text-center sm:flex-row sm:justify-center sm:gap-6 sm:text-left">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <Flame className="size-4" />
          Condição de lançamento por tempo limitado
        </span>
        <span className="hidden h-4 w-px bg-border sm:block" />
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <Timer className="size-4" />
          Só fechamos {MONTHLY_PROJECT_SLOTS} projetos novos por mês
        </span>
        <span className="hidden h-4 w-px bg-border sm:block" />
        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="size-4" />
          Escopo alinhado antes de qualquer cobrança
        </span>
      </div>
    </Reveal>
  );
}
