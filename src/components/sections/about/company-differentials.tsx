import { Code2, Handshake, Lightbulb, Users2, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { COMPANY_DIFFERENTIALS } from "@/lib/data/about";

const ICONS: Record<string, LucideIcon> = { Users2, Code2, Handshake, Lightbulb };

export function CompanyDifferentials() {
  return (
    <section className="py-24">
      <div className="container-atomus">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            O que nos diferencia
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_DIFFERENTIALS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.08} className="text-center">
                <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-3 font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
