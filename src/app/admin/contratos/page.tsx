import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable } from "@/components/sections/admin/admin-table";
import { ADMIN_CONTRACTS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Contratos" };

export default function AdminContratosPage() {
  return (
    <>
      <SectionHeader title="Contratos" description="Contratos assinados pelos clientes." />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_CONTRACTS}
        columns={[
          { header: "Contrato", accessor: (row) => row.title },
          { header: "Cliente", accessor: (row) => row.client },
          { header: "Assinado em", accessor: (row) => row.signedAt },
        ]}
      />
    </>
  );
}
