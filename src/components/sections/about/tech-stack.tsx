import { Reveal } from "@/components/shared/reveal";
import { TECH_STACK } from "@/lib/data/about";

export function TechStack() {
  return (
    <section className="py-24">
      <div className="container-atomus max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tecnologias que usamos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Uma stack moderna, com foco em performance, segurança e manutenção
            a longo prazo.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
