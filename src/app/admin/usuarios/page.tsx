import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable, StatusBadge } from "@/components/sections/admin/admin-table";
import { ADMIN_USERS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Usuários" };

const ROLE_STYLES: Record<string, string> = {
  ADMIN: "bg-primary/10 text-primary",
  CLIENTE: "bg-secondary text-muted-foreground",
};

export default function AdminUsuariosPage() {
  return (
    <>
      <SectionHeader title="Usuários" description="Contas com acesso ao site." />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_USERS}
        columns={[
          { header: "Nome", accessor: (row) => row.name },
          { header: "Email", accessor: (row) => row.email },
          {
            header: "Papel",
            accessor: (row) => <StatusBadge status={row.role} styles={ROLE_STYLES} />,
          },
        ]}
      />
    </>
  );
}
