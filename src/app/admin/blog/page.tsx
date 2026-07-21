import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { AdminTable } from "@/components/sections/admin/admin-table";
import { AdminRowActions } from "@/components/sections/admin/admin-row-actions";
import { AdminNewButton } from "@/components/sections/admin/admin-new-button";
import { ADMIN_BLOG_POSTS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Blog" };

export default function AdminBlogPage() {
  return (
    <>
      <SectionHeader title="Blog" description="Artigos publicados e rascunhos." />
      <AdminNewButton label="Novo artigo" />
      <AdminTable
        keyField={(row) => row.id}
        rows={ADMIN_BLOG_POSTS}
        columns={[
          { header: "Título", accessor: (row) => row.title },
          { header: "Categoria", accessor: (row) => row.category },
          {
            header: "Status",
            accessor: (row) => (
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                  row.published
                    ? "bg-accent/10 text-accent"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {row.published ? "Publicado" : "Rascunho"}
              </span>
            ),
          },
          { header: "Data", accessor: (row) => row.date },
          { header: "", accessor: (row) => <AdminRowActions label={row.title} /> },
        ]}
      />
    </>
  );
}
