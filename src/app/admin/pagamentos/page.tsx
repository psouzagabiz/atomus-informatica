import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable, StatusBadge } from "@/components/sections/admin/admin-table";
import { ADMIN_PAYMENTS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Pagamentos" };

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const STATUS_STYLES: Record<string, string> = {
  APROVADO: "bg-accent/10 text-accent",
  PENDENTE: "bg-secondary text-muted-foreground",
  RECUSADO: "bg-destructive/10 text-destructive",
};

export default function AdminPagamentosPage() {
  return (
    <>
      <SectionHeader title="Pagamentos" description="Todos os pagamentos recebidos e pendentes." />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_PAYMENTS}
        columns={[
          { header: "Cliente", accessor: (row) => row.client },
          { header: "Descrição", accessor: (row) => row.description },
          { header: "Valor", accessor: (row) => currency.format(row.amount) },
          { header: "Data", accessor: (row) => row.date },
          {
            header: "Status",
            accessor: (row) => <StatusBadge status={row.status} styles={STATUS_STYLES} />,
          },
        ]}
      />
    </>
  );
}
