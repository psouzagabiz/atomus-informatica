import { z } from "zod";

export const paymentMethodSchema = z.enum(["PIX", "CARTAO", "BOLETO"]);
export const paymentProviderSchema = z.enum(["MERCADO_PAGO", "STRIPE", "ASAAS"]);

export const checkoutSchema = z.object({
  planSlug: z.string().min(1),
  method: paymentMethodSchema,
  provider: paymentProviderSchema,
  customer: z.object({
    name: z.string().min(2),
    company: z.string().optional().or(z.literal("")),
    document: z.string().min(11),
    phone: z.string().min(10),
    email: z.string().email(),
    city: z.string().min(2),
    state: z.string().length(2),
    description: z.string().min(10),
  }),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;
