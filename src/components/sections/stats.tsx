import { Reveal } from "@/components/shared/reveal";
import { STATS } from "@/lib/data/home";

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="container-atomus grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
