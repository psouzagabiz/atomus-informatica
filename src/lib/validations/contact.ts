import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  email: z.string().email("Informe um email válido"),
  phone: z.string().min(10, "Informe um telefone válido").optional().or(z.literal("")),
  subject: z.string().optional(),
  message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const budgetSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  company: z.string().optional().or(z.literal("")),
  document: z.string().min(11, "Informe um CPF ou CNPJ válido"),
  phone: z.string().min(10, "Informe um telefone válido"),
  email: z.string().email("Informe um email válido"),
  city: z.string().min(2, "Informe a cidade"),
  state: z.string().length(2, "Use a sigla do estado, ex: GO"),
  planSlug: z.string().min(1, "Selecione um plano"),
  description: z.string().min(10, "Descreva brevemente o projeto"),
});

export type BudgetInput = z.infer<typeof budgetSchema>;
