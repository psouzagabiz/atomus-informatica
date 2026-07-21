"use client";

import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function AdminNewButton({ label }: { label: string }) {
  return (
    <Button
      variant="outline"
      className="mb-4"
      onClick={() => toast.info("Cadastro pelo painel chega em breve.")}
    >
      <Plus className="size-4" /> {label}
    </Button>
  );
}
