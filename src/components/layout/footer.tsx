import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/shared/social-icons";
import { SITE_CONFIG, MAIN_NAV } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-atomus grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" aria-label="Atomus Informática">
            <Image
              src="/images/logo/logotipo-horizontal-fundo-escuro.svg"
              alt="Atomus Informática"
              width={170}
              height={50}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70">
            {SITE_CONFIG.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              aria-label="Instagram"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={SITE_CONFIG.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent"
              aria-label="Facebook"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Navegação</h4>
          <ul className="mt-4 space-y-2.5">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Institucional</h4>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/planos" className="text-sm text-primary-foreground/70 hover:text-accent">
                Planos
              </Link>
            </li>
            <li>
              <Link href="/politica-de-privacidade" className="text-sm text-primary-foreground/70 hover:text-accent">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="text-sm text-primary-foreground/70 hover:text-accent">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/cliente" className="text-sm text-primary-foreground/70 hover:text-accent">
                Área do Cliente
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contato</h4>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {SITE_CONFIG.address}
            </li>
            <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Phone className="size-4 shrink-0 text-accent" />
              {SITE_CONFIG.phone}
            </li>
            <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Mail className="size-4 shrink-0 text-accent" />
              {SITE_CONFIG.email}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-atomus flex flex-col items-center justify-between gap-2 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Atomus Informática. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}
