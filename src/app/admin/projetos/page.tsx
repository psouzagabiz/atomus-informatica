import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable, StatusBadge } from "@/components/sections/admin/admin-table";
import { ADMIN_PROJECTS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Projetos" };

const STATUS_STYLES: Record<string, string> = {
  ORCAMENTO: "bg-secondary text-muted-foreground",
  APROVADO: "bg-primary/10 text-primary",
  EM_DESENVOLVIMENTO: "bg-primary/10 text-primary",
  EM_REVISAO: "bg-accent/10 text-accent",
  CONCLUIDO: "bg-accent/10 text-accent",
  CANCELADO: "bg-destructive/10 text-destructive",
};

export default function AdminProjetosPage() {
  return (
    <>
      <SectionHeader title="Projetos" description="Todos os projetos em andamento e concluídos." />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_PROJECTS}
        columns={[
          { header: "Projeto", accessor: (row) => row.name },
          { header: "Cliente", accessor: (row) => row.client },
          { header: "Plano", accessor: (row) => row.plan },
          { header: "Progresso", accessor: (row) => `${row.progress}%` },
          {
            header: "Status",
            accessor: (row) => <StatusBadge status={row.status} styles={STATUS_STYLES} />,
          },
        ]}
      />
    </>
  );
}
