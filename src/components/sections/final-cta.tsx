import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { buildWhatsappLink } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="py-24">
      <div className="container-atomus">
        <Reveal className="overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto para tirar seu projeto do papel?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Fale com a gente agora e receba um orçamento sem compromisso para
            o seu site, sistema ou loja virtual.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="lg" asChild>
              <Link href="/orcamento">
                Solicitar Orçamento <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
