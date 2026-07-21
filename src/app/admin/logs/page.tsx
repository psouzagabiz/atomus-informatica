import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable } from "@/components/sections/admin/admin-table";
import { ADMIN_LOGS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Logs" };

export default function AdminLogsPage() {
  return (
    <>
      <SectionHeader title="Logs" description="Histórico de ações realizadas no sistema." />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_LOGS}
        columns={[
          { header: "Ação", accessor: (row) => row.action },
          { header: "Entidade", accessor: (row) => row.entity },
          { header: "Data", accessor: (row) => row.date },
        ]}
      />
    </>
  );
}
