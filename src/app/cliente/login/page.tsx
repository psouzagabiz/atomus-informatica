import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { LoginForm } from "@/components/sections/client/login-form";

export const metadata: Metadata = { title: "Login do Cliente" };

export default function ClienteLoginPage() {
  return (
    <section className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center py-16">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Área do Cliente</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Acompanhe o andamento do seu projeto.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <Suspense>
            <LoginForm />
          </Suspense>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Ainda não é cliente?{" "}
          <Link href="/orcamento" className="font-medium text-primary hover:underline">
            Solicite um orçamento
          </Link>
        </p>
      </div>
    </section>
  );
}
