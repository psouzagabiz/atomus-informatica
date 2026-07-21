import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable } from "@/components/sections/admin/admin-table";
import { ADMIN_CLIENTS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Clientes" };

export default function AdminClientesPage() {
  return (
    <>
      <SectionHeader title="Clientes" description="Todos os clientes cadastrados." />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_CLIENTS}
        columns={[
          { header: "Nome", accessor: (row) => row.name },
          { header: "Empresa", accessor: (row) => row.company },
          { header: "Email", accessor: (row) => row.email },
          { header: "Projetos", accessor: (row) => row.projects },
        ]}
      />
    </>
  );
}
