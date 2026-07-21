import { Reveal } from "@/components/shared/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/50 py-20">
      <div className="container-atomus max-w-2xl text-center">
        <Reveal>
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
