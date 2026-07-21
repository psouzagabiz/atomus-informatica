import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/reveal";
import { HOME_FAQ } from "@/lib/data/home";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({
  items = HOME_FAQ,
  title = "Perguntas frequentes",
  className = "bg-secondary/50 py-24",
}: {
  items?: readonly FaqItem[];
  title?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container-atomus max-w-3xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
            {items.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
