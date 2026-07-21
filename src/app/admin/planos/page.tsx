import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable } from "@/components/sections/admin/admin-table";
import { AdminRowActions } from "@/components/sections/admin/admin-row-actions";
import { PLANS } from "@/lib/data/plans";

export const metadata: Metadata = { title: "Planos" };

const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export default function AdminPlanosPage() {
  return (
    <>
      <SectionHeader title="Planos" description="Planos exibidos na página de preços." />
      <AdminTable
        keyField={(row) => row.slug}
        rows={PLANS}
        columns={[
          { header: "Plano", accessor: (row) => row.name },
          { header: "Preço", accessor: (row) => currency.format(row.price) },
          { header: "De", accessor: (row) => currency.format(row.priceFrom) },
          { header: "Destaque", accessor: (row) => (row.popular ? "Sim" : "—") },
          { header: "", accessor: (row) => <AdminRowActions label={row.name} /> },
        ]}
      />
    </>
  );
}
