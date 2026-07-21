import type { Metadata } from "next";
import { FolderKanban, Inbox, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { ADMIN_RECENT_ACTIVITY, ADMIN_STATS } from "@/lib/data/admin";

export const metadata: Metadata = { title: "Painel Administrativo" };

const ICONS: Record<string, LucideIcon> = { Users, FolderKanban, TrendingUp, Inbox };

export default function AdminDashboardPage() {
  return (
    <>
      <SectionHeader title="Dashboard" description="Visão geral do negócio." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ADMIN_STATS.map((stat) => {
          const Icon = ICONS[stat.icon];
          return (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <p className="mt-3 text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold">Atividade recente</h2>
        <ol className="mt-4 space-y-4 border-l border-border pl-5">
          {ADMIN_RECENT_ACTIVITY.map((item) => (
            <li key={item.date + item.description} className="relative">
              <span className="absolute -left-[1.65rem] top-1 size-2.5 rounded-full bg-primary" />
              <p className="text-xs text-muted-foreground">{item.date}</p>
              <p className="mt-0.5 text-sm">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
