"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MessageSquare, User } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { commentSchema, type CommentInput } from "@/lib/validations/comment";

export function CommentsSection({ slug }: { slug: string }) {
  const [submitting, setSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentInput>({
    resolver: zodResolver(commentSchema),
    defaultValues: { slug },
  });

  async function onSubmit(data: CommentInput) {
    setSubmitting(true);
    try {
      const response = await fetch("/api/comentarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error();

      toast.success("Comentário enviado! Ele aparece aqui após aprovação.");
      reset({ slug, name: "", email: "", content: "" });
    } catch {
      toast.error("Não foi possível enviar seu comentário agora. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mt-16">
      <h2 className="flex items-center gap-2 text-lg font-semibold">
        <MessageSquare className="size-5" /> Comentários
      </h2>

      <div className="mt-4 rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
        <User className="mx-auto mb-2 size-5" />
        Seja o primeiro a comentar neste artigo.
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email (não será publicado)</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="content">Comentário</Label>
          <Textarea id="content" rows={3} {...register("content")} />
          {errors.content && (
            <p className="text-xs text-destructive">{errors.content.message}</p>
          )}
        </div>
        <Button type="submit" variant="accent" disabled={submitting}>
          {submitting && <Loader2 className="size-4 animate-spin" />}
          Enviar comentário
        </Button>
      </form>
    </div>
  );
}
