import { NextResponse } from "next/server";
import { z } from "zod";
import { createMercadoPagoPayment } from "@/services/payments/mercado-pago";
import { PLANS } from "@/lib/data/plans";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const bodySchema = z.object({
  planSlug: z.string().min(1),
  formData: z.object({
    token: z.string().optional(),
    issuer_id: z.string().optional(),
    payment_method_id: z.string().min(1),
    installments: z.number().optional(),
    payer: z.object({
      email: z.string().email(),
      identification: z
        .object({ type: z.string(), number: z.string() })
        .optional(),
    }),
  }),
});

export async function POST(request: Request) {
  const { success } = rateLimit(`pagamentos-mp:${getClientIp(request)}`);
  if (!success) {
    return NextResponse.json(
      { error: "Muitas tentativas. Aguarde um minuto e tente novamente." },
      { status: 429 }
    );
  }

  const body = await request.json();
  const parsed = bodySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const plan = PLANS.find((p) => p.slug === parsed.data.planSlug);
  if (!plan) {
    return NextResponse.json({ error: "Plano inválido." }, { status: 400 });
  }

  try {
    const result = await createMercadoPagoPayment(parsed.data.formData, {
      amount: plan.price,
      description: `Atomus Informática — Plano ${plan.name}`,
      externalReference: `${plan.slug}-${Date.now()}`,
    });
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao processar pagamento";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
