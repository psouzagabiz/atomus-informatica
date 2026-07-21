"use client";

import * as React from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "atomus-cookie-consent";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === null;
}

function getServerSnapshot() {
  return false;
}

export function CookieConsent() {
  const shouldShow = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = React.useState(false);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setDismissed(true);
  }

  if (!shouldShow || dismissed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card p-4 shadow-lg">
      <div className="container-atomus flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Cookie className="size-4 shrink-0 text-accent" />
          Usamos cookies essenciais para o funcionamento do site. Saiba mais na{" "}
          <Link href="/politica-de-privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </Link>
          .
        </p>
        <Button size="sm" variant="accent" onClick={accept} className="shrink-0">
          Entendi
        </Button>
      </div>
    </div>
  );
}
