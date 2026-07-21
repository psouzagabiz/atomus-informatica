import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable, StatusBadge } from "@/components/sections/admin/admin-table";
import { ADMIN_REQUESTS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Solicitações" };

const STATUS_STYLES: Record<string, string> = {
  ABERTA: "bg-secondary text-muted-foreground",
  EM_ANDAMENTO: "bg-primary/10 text-primary",
  RESPONDIDA: "bg-accent/10 text-accent",
  ENCERRADA: "bg-secondary text-muted-foreground",
};

export default function AdminSolicitacoesPage() {
  return (
    <>
      <SectionHeader title="Solicitações" description="Pedidos enviados pelos clientes." />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_REQUESTS}
        columns={[
          { header: "Cliente", accessor: (row) => row.client },
          { header: "Assunto", accessor: (row) => row.subject },
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
