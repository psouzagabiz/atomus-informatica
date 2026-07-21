import Link from "next/link";
import {
  Blocks,
  Compass,
  Globe,
  LayoutDashboard,
  Rocket,
  Search,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { HOME_SERVICES } from "@/lib/data/home";

const ICONS: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  LayoutDashboard,
  Rocket,
  Search,
  Compass,
  Blocks,
};

export function Services() {
  return (
    <section className="py-24">
      <div className="container-atomus">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            O que fazemos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Soluções digitais completas, do primeiro deploy à evolução contínua
            do seu produto.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <CardTitle className="mt-3 text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {service.description}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            href="/servicos"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Ver todos os serviços →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
