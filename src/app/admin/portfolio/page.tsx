import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable } from "@/components/sections/admin/admin-table";
import { AdminRowActions } from "@/components/sections/admin/admin-row-actions";
import { AdminNewButton } from "@/components/sections/admin/admin-new-button";
import { PORTFOLIO_ITEMS } from "@/lib/data/portfolio";

export const metadata: Metadata = { title: "Portfólio" };

export default function AdminPortfolioPage() {
  return (
    <>
      <SectionHeader title="Portfólio" description="Projetos exibidos no site." />
      <AdminNewButton label="Novo projeto" />
      <AdminTable
        keyField={(row) => row.slug}
        rows={PORTFOLIO_ITEMS}
        columns={[
          { header: "Projeto", accessor: (row) => row.title },
          { header: "Categoria", accessor: (row) => row.category },
          { header: "Tecnologias", accessor: (row) => row.technologies.join(", ") },
          { header: "", accessor: (row) => <AdminRowActions label={row.title} /> },
        ]}
      />
    </>
  );
}
