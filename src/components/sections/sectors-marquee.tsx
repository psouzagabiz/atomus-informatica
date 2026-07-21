import { Reveal } from "@/components/shared/reveal";
import { SECTORS_SERVED } from "@/lib/data/home";

export function SectorsMarquee() {
  return (
    <section className="py-16">
      <div className="container-atomus">
        <Reveal className="text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Setores que já atendemos
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          {SECTORS_SERVED.map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
            >
              {sector}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
