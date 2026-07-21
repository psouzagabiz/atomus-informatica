import { Check, X } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { COMPARISON_ROWS } from "@/lib/data/plans";

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-5 text-accent" />
    ) : (
      <X className="mx-auto size-5 text-muted-foreground/40" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTable() {
  return (
    <section className="bg-secondary/50 py-24">
      <div className="container-atomus">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Compare os planos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Veja lado a lado o que está incluso em cada plano.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse overflow-hidden rounded-2xl bg-card text-left shadow-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-sm font-semibold text-muted-foreground">
                  Recurso
                </th>
                <th className="p-4 text-center text-sm font-semibold">Start</th>
                <th className="bg-primary/5 p-4 text-center text-sm font-semibold text-primary">
                  Business
                </th>
                <th className="p-4 text-center text-sm font-semibold">Premium</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="p-4 text-sm text-muted-foreground">{row.label}</td>
                  <td className="p-4 text-center">
                    <Cell value={row.start} />
                  </td>
                  <td className="bg-primary/5 p-4 text-center">
                    <Cell value={row.business} />
                  </td>
                  <td className="p-4 text-center">
                    <Cell value={row.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
