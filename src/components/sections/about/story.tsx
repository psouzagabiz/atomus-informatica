import { Reveal } from "@/components/shared/reveal";
import { STORY_PARAGRAPHS } from "@/lib/data/about";

export function Story() {
  return (
    <section className="py-24">
      <div className="container-atomus max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Nossa história
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Como a Atomus começou
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5">
          {STORY_PARAGRAPHS.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
