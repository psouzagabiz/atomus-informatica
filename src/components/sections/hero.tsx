"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="container-atomus flex min-h-[calc(100vh-4.5rem)] flex-col items-center justify-center gap-6 py-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-accent" />
          Sites e sistemas sob medida para o seu negócio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Tecnologia que impulsiona{" "}
          <span className="text-gradient-atomus">o seu negócio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl text-lg text-muted-foreground"
        >
          Desenvolvemos sites, sistemas e lojas virtuais com performance,
          segurança e design de alto padrão — do orçamento ao lançamento.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
