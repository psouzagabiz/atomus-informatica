import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { PORTFOLIO_ITEMS } from "@/lib/data/portfolio";

export function PortfolioPreview() {
  const featured = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <section className="py-24">
      <div className="container-atomus">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Alguns projetos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma amostra do tipo de trabalho que desenvolvemos.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link href={`/portfolio/${project.slug}`}>
                <Card className="group h-full overflow-hidden">
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    ) : (
                      <span className="font-heading text-lg font-semibold text-white/90">
                        {project.title}
                      </span>
                    )}
                  </div>
                  <CardContent className="pt-5">
                    <p className="text-xs font-medium uppercase tracking-wide text-accent">
                      {project.category}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Ver portfólio completo <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
