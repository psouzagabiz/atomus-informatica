import { Eye, Heart, Target, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { MISSION_VISION_VALUES } from "@/lib/data/about";

const ICONS: Record<string, LucideIcon> = { Target, Eye, Heart };

export function MissionVisionValues() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="container-atomus grid gap-5 md:grid-cols-3">
        {MISSION_VISION_VALUES.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <Card className="h-full">
                <CardHeader>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="mt-3 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.description}
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
