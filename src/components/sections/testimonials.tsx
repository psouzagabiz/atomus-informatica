import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { TESTIMONIALS } from "@/lib/data/home";

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="container-atomus">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            O que dizem sobre a gente
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.name + i} delay={i * 0.08}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="size-6 text-accent" />
                  <p className="mt-4 text-sm text-foreground/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
