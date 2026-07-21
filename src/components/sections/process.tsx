import { Reveal } from "@/components/shared/reveal";
import { PROCESS_STEPS } from "@/lib/data/home";

export function Process({
  title = "Como trabalhamos",
  description = "Um processo claro, do primeiro contato ao pós-lançamento.",
  className = "py-24",
}: {
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container-atomus">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((item, i) => (
            <Reveal key={item.step} delay={i * 0.06}>
              <div className="rounded-2xl border border-border p-6">
                <span className="font-heading text-3xl font-bold text-primary/25">
                  {item.step}
                </span>
                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
