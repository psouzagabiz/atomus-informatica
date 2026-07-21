import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { BlogGrid } from "@/components/sections/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos sobre tecnologia, SEO, marketing digital e vendas para pequenos e médios negócios.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Conteúdo para o seu negócio crescer online"
        description="Dicas práticas sobre tecnologia, marketing e vendas — sem enrolação."
      />
      <BlogGrid />
    </>
  );
}
