"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { requestSchema, type RequestInput } from "@/lib/validations/request";

export function NewRequestForm() {
  const [open, setOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestInput>({ resolver: zodResolver(requestSchema) });

  async function onSubmit(data: RequestInput) {
    setSubmitting(true);
    try {
      const response = await fetch("/api/solicitacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();

      toast.success("Solicitação enviada!");
      reset();
      setOpen(false);
    } catch {
      toast.error("Não foi possível enviar agora. Tente novamente em instantes.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) {
    return (
      <Button variant="outline" onClick={() => setOpen(true)}>
        <Plus className="size-4" /> Nova solicitação
      </Button>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="subject">Assunto</Label>
            <Input id="subject" {...register("subject")} />
            {errors.subject && (
              <p className="text-xs text-destructive">{errors.subject.message}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" rows={4} {...register("message")} />
            {errors.message && (
              <p className="text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button type="submit" variant="accent" disabled={submitting}>
              {submitting && <Loader2 className="size-4 animate-spin" />}
              Enviar solicitação
            </Button>
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
