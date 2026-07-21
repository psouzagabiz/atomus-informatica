"use client";

import * as React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "@/lib/data/portfolio";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = React.useState<string>("Todos");

  const filteredItems = PORTFOLIO_ITEMS.filter(
    (item) => activeCategory === "Todos" || item.category === activeCategory
  );

  return (
    <section className="py-24">
      <div className="container-atomus">
        <div className="flex flex-wrap justify-center gap-2">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.06}>
              <Card className="group h-full overflow-hidden">
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-accent">
                  <span className="px-4 text-center font-heading text-lg font-semibold text-white/90">
                    {project.title}
                  </span>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    aria-label={`Visualizar ${project.title}`}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary">
                      Visualizar <ExternalLink className="size-4" />
                    </span>
                  </Link>
                </div>
                <CardContent className="pt-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-accent">
                    {project.category}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
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
            </Reveal>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">
            Nenhum projeto encontrado nessa categoria.
          </p>
        )}
      </div>
    </section>
  );
}
