import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { cn } from "@/lib/utils";
import { CLIENT_PAYMENTS } from "@/lib/data/client-dashboard";

export const metadata: Metadata = { title: "Pagamentos" };

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const STATUS_STYLES: Record<string, string> = {
  APROVADO: "bg-accent/10 text-accent",
  PENDENTE: "bg-secondary text-muted-foreground",
  RECUSADO: "bg-destructive/10 text-destructive",
};

export default function PagamentosPage() {
  return (
    <>
      <SectionHeader
        title="Pagamentos"
        description="Acompanhe as parcelas do seu projeto."
      />

      <Card>
        <CardContent className="divide-y divide-border p-0">
          {CLIENT_PAYMENTS.map((payment) => (
            <div
              key={payment.id}
              className="flex items-center justify-between gap-4 p-5"
            >
              <div>
                <p className="text-sm font-medium">{payment.description}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{payment.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">
                  {currency.format(payment.amount)}
                </span>
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium",
                    STATUS_STYLES[payment.status]
                  )}
                >
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
