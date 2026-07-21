import Link from "next/link";
import {
  Clock,
  Compass,
  Globe,
  LayoutDashboard,
  MapPin,
  Palette,
  PenTool,
  Rocket,
  Search,
  Server,
  ShoppingCart,
  Wrench,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import type { ServiceDetail } from "@/lib/data/services";

const ICONS: Record<string, LucideIcon> = {
  Globe,
  Rocket,
  ShoppingCart,
  LayoutDashboard,
  Server,
  Wrench,
  Search,
  Palette,
  PenTool,
  MapPin,
  Compass,
};

export function ServiceCard({
  service,
  delay = 0,
}: {
  service: ServiceDetail;
  delay?: number;
}) {
  const Icon = ICONS[service.icon];

  return (
    <Reveal delay={delay}>
      <Card className="flex h-full flex-col">
        <CardHeader>
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon className="size-5" />
          </span>
          <CardTitle className="mt-3 text-lg">{service.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col">
          <p className="text-sm text-muted-foreground">{service.description}</p>

          <ul className="mt-4 space-y-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-foreground/90">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" />
            Prazo médio: {service.avgDuration}
          </div>

          <Button className="mt-5 w-full" variant="accent" asChild>
            <Link href={`/orcamento?servico=${service.slug}`}>Contratar</Link>
          </Button>
        </CardContent>
      </Card>
    </Reveal>
  );
}
