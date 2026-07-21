import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import { PLANS } from "@/lib/data/plans";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function PricingCards() {
  return (
    <section className="py-24">
      <div className="container-atomus grid gap-6 lg:grid-cols-3 lg:items-end">
        {PLANS.map((plan, i) => {
          const discount = Math.round(
            ((plan.priceFrom - plan.price) / plan.priceFrom) * 100
          );

          return (
            <Reveal key={plan.slug} delay={i * 0.08}>
              <Card
                className={cn(
                  "relative flex h-full flex-col overflow-visible",
                  plan.popular && "border-2 border-primary shadow-lg lg:scale-105"
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm">
                    <Star className="size-3.5 fill-current" /> Mais escolhido
                  </span>
                )}

                <CardContent className="flex flex-1 flex-col pt-8">
                  <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>

                  <div className="mt-6">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">
                        {currency.format(plan.priceFrom)}
                      </span>
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                        -{discount}%
                      </span>
                    </div>
                    <p className="font-heading text-4xl font-bold text-primary">
                      {currency.format(plan.price)}
                    </p>
                    {plan.installment && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {plan.installment}
                      </p>
                    )}
                  </div>

                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="mt-7 w-full"
                    variant={plan.popular ? "accent" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link href={`/pagamento?plano=${plan.slug}`}>{plan.ctaLabel}</Link>
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
