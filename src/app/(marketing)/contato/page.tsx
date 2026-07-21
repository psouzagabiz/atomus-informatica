import type { Metadata } from "next";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/shared/page-header";
import { Reveal } from "@/components/shared/reveal";
import { ContactForm } from "@/components/sections/contact/contact-form";
import { MapPlaceholder } from "@/components/sections/contact/map-placeholder";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/shared/social-icons";
import { BUSINESS_HOURS, SITE_CONFIG, buildWhatsappLink } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com a Atomus Informática pelo formulário, WhatsApp ou redes sociais.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar sobre o seu projeto"
        description="Preencha o formulário ou fale direto pelo WhatsApp — respondemos rápido."
      />

      <section className="py-24">
        <div className="container-atomus grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <Button variant="whatsapp" size="lg" className="w-full" asChild>
              <a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" /> Falar no WhatsApp
              </a>
            </Button>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                <Phone className="size-5 text-primary" />
                <span className="text-sm">{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                <Mail className="size-5 text-primary" />
                <span className="text-sm">{SITE_CONFIG.email}</span>
              </div>
            </div>

            <div className="rounded-xl border border-border p-4">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="size-4 text-primary" /> Horário de atendimento
              </p>
              <ul className="mt-3 space-y-1.5">
                {BUSINESS_HOURS.map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between text-sm text-muted-foreground"
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Redes sociais</p>
              <div className="mt-3 flex gap-3">
                <a
                  href={SITE_CONFIG.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <InstagramIcon className="size-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <LinkedinIcon className="size-4" />
                </a>
                <a
                  href={SITE_CONFIG.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <FacebookIcon className="size-4" />
                </a>
              </div>
            </div>

            <MapPlaceholder />
          </Reveal>
        </div>
      </section>
    </>
  );
}
