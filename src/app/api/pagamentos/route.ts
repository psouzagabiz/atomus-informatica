import { NextResponse } from "next/server";
import { checkoutSchema } from "@/lib/validations/payment";
import { createCheckout } from "@/services/payments";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = checkoutSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const result = await createCheckout(parsed.data);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erro ao processar pagamento";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
