import { z } from "zod";

export const requestSchema = z.object({
  subject: z.string().min(3, "Informe um assunto"),
  message: z.string().min(10, "Descreva sua solicitação com mais detalhes"),
});

export type RequestInput = z.infer<typeof requestSchema>;
