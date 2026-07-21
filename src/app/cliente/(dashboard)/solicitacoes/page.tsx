import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { NewRequestForm } from "@/components/sections/client/new-request-form";
import { cn } from "@/lib/utils";
import { CLIENT_REQUESTS } from "@/lib/data/client-dashboard";

export const metadata: Metadata = { title: "Solicitações" };

const STATUS_STYLES: Record<string, string> = {
  ABERTA: "bg-secondary text-muted-foreground",
  EM_ANDAMENTO: "bg-primary/10 text-primary",
  RESPONDIDA: "bg-accent/10 text-accent",
  ENCERRADA: "bg-secondary text-muted-foreground",
};

export default function SolicitacoesPage() {
  return (
    <>
      <SectionHeader
        title="Solicitações"
        description="Pedidos de ajuste ou dúvidas sobre o seu projeto."
      />

      <div className="mb-6">
        <NewRequestForm />
      </div>

      <Card>
        <CardContent className="divide-y divide-border p-0">
          {CLIENT_REQUESTS.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 p-5">
              <div>
                <p className="text-sm font-medium">{item.subject}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{item.date}</p>
              </div>
              <span
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium",
                  STATUS_STYLES[item.status]
                )}
              >
                {item.status.replace("_", " ")}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
