import { Reveal } from "@/components/shared/reveal";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/shared/breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: readonly BreadcrumbItem[];
}) {
  return (
    <section className="border-b border-border bg-secondary/50 py-20">
      <div className="container-atomus max-w-2xl text-center">
        <Reveal>
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} align="center" />}
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-muted-foreground">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
