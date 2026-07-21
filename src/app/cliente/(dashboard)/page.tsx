import type { Metadata } from "next";
import { CircleCheck, CircleDashed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";
import { ACTIVITY_HISTORY, PROJECT_OVERVIEW, PROJECT_STEPS } from "@/lib/data/client-dashboard";

export const metadata: Metadata = { title: "Painel do Cliente" };

export default function ClienteDashboardPage() {
  return (
    <>
      <SectionHeader
        title="Andamento do projeto"
        description={`${PROJECT_OVERVIEW.name} — Plano ${PROJECT_OVERVIEW.plan}`}
      />

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Progresso geral</span>
            <span className="text-muted-foreground">{PROJECT_OVERVIEW.progress}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${PROJECT_OVERVIEW.progress}%` }}
            />
          </div>

          <ul className="mt-8 space-y-4">
            {PROJECT_STEPS.map((step) => (
              <li key={step.label} className="flex items-center gap-3">
                {step.done ? (
                  <CircleCheck className="size-5 shrink-0 text-accent" />
                ) : (
                  <CircleDashed
                    className={cn(
                      "size-5 shrink-0",
                      "current" in step && step.current
                        ? "text-primary"
                        : "text-muted-foreground/40"
                    )}
                  />
                )}
                <span
                  className={cn(
                    "text-sm",
                    step.done
                      ? "text-foreground"
                      : "current" in step && step.current
                        ? "font-medium text-foreground"
                        : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8">
        <h2 className="text-lg font-semibold">Histórico</h2>
        <ol className="mt-4 space-y-4 border-l border-border pl-5">
          {ACTIVITY_HISTORY.map((item) => (
            <li key={item.date + item.description} className="relative">
              <span className="absolute -left-[1.65rem] top-1 size-2.5 rounded-full bg-primary" />
              <p className="text-xs text-muted-foreground">{item.date}</p>
              <p className="mt-0.5 text-sm">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
