"use client";

import { Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function MessageComposer() {
  return (
    <form
      className="flex items-center gap-2 border-t border-border p-3"
      onSubmit={(event) => {
        event.preventDefault();
        toast.info("Envio de mensagens em tempo real chega em breve por aqui.");
        event.currentTarget.reset();
      }}
    >
      <Input name="message" placeholder="Escreva uma mensagem..." className="flex-1" />
      <Button type="submit" variant="accent" size="icon" aria-label="Enviar mensagem">
        <Send className="size-4" />
      </Button>
    </form>
  );
}
