import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { PORTFOLIO_ITEMS } from "@/lib/data/portfolio";

export function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find((item) => item.slug === slug);
  return { title: project?.title ?? "Projeto" };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-24">
      <div className="container-atomus max-w-3xl">
        <Reveal>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Voltar ao portfólio
          </Link>

          <div className="mt-6 flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
            <span className="px-6 text-center font-heading text-2xl font-semibold text-white/90">
              {project.title}
            </span>
          </div>

          <p className="mt-6 text-sm font-medium uppercase tracking-wide text-accent">
            {project.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-muted-foreground">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border p-8 text-center">
            <p className="font-semibold">Quer um projeto parecido com esse?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Conta pra gente o que você precisa e receba um orçamento sem compromisso.
            </p>
            <Button className="mt-5" variant="accent" asChild>
              <Link href="/orcamento">
                Solicitar Orçamento <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
