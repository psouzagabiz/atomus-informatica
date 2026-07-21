import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable } from "@/components/sections/admin/admin-table";
import { AdminRowActions } from "@/components/sections/admin/admin-row-actions";
import { AdminNewButton } from "@/components/sections/admin/admin-new-button";
import { SERVICES } from "@/lib/data/services";

export const metadata: Metadata = { title: "Serviços" };

export default function AdminServicosPage() {
  return (
    <>
      <SectionHeader title="Serviços" description="Serviços exibidos no site." />
      <AdminNewButton label="Novo serviço" />
      <AdminTable
        keyField={(row) => row.slug}
        rows={SERVICES}
        columns={[
          { header: "Serviço", accessor: (row) => row.name },
          { header: "Prazo médio", accessor: (row) => row.avgDuration },
          { header: "", accessor: (row) => <AdminRowActions label={row.name} /> },
        ]}
      />
    </>
  );
}
