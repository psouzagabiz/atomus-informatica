import {
  Blocks,
  CalendarCheck,
  Gauge,
  LineChart,
  MessagesSquare,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { DIFFERENTIALS } from "@/lib/data/home";

const ICONS: Record<string, LucideIcon> = {
  Gauge,
  ShieldCheck,
  MessagesSquare,
  CalendarCheck,
  Blocks,
  LineChart,
};

export function DifferentialsSection() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="container-atomus">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Por que a Atomus
          </h2>
          <p className="mt-4 text-muted-foreground">
            O que diferencia a forma como entregamos cada projeto.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 0.06} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
