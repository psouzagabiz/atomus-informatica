import { z } from "zod";

export const commentSchema = z.object({
  slug: z.string().min(1),
  name: z.string().min(2, "Informe seu nome"),
  email: z.string().email("Informe um email válido"),
  content: z.string().min(5, "Escreva um comentário válido"),
});

export type CommentInput = z.infer<typeof commentSchema>;
