"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { FacebookIcon } from "@/components/shared/social-icons";
import { buildWhatsappLink } from "@/lib/constants";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = React.useState(false);

  function getUrl() {
    return typeof window !== "undefined" ? window.location.href : "";
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Compartilhar:</span>
      <a
        href={buildWhatsappLink(`${title} — ${getUrl()}`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no WhatsApp"
        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.85.502 3.663 1.454 5.243L2 22l4.868-1.428A9.96 9.96 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.148a8.11 8.11 0 01-4.146-1.132l-.298-.176-3.087.906.914-3.007-.194-.31A8.14 8.14 0 013.85 12c0-4.5 3.653-8.15 8.152-8.15 4.498 0 8.148 3.65 8.148 8.15 0 4.498-3.65 8.148-8.149 8.148z" />
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no Facebook"
        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <FacebookIcon className="size-4" />
      </a>
      <button
        type="button"
        aria-label="Copiar link"
        onClick={() => {
          navigator.clipboard.writeText(getUrl());
          setCopied(true);
          toast.success("Link copiado!");
          setTimeout(() => setCopied(false), 2000);
        }}
        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      </button>
    </div>
  );
}
