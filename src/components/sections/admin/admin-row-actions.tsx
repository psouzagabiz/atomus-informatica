"use client";

import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

export function AdminRowActions({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        aria-label={`Editar ${label}`}
        onClick={() => toast.info("Edição pelo painel chega em breve.")}
        className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <Pencil className="size-4" />
      </button>
      <button
        type="button"
        aria-label={`Excluir ${label}`}
        onClick={() => toast.info("Exclusão pelo painel chega em breve.")}
        className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  );
}
