import type { CheckoutInput } from "@/lib/validations/payment";
import type { CheckoutResult } from "./index";

const MERCADO_PAGO_ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;

// TODO: integrar com o SDK oficial `mercadopago` assim que
// MERCADO_PAGO_ACCESS_TOKEN estiver configurado em .env.
export async function createMercadoPagoCheckout(
  input: CheckoutInput
): Promise<CheckoutResult> {
  if (!MERCADO_PAGO_ACCESS_TOKEN) {
    throw new Error(
      "MERCADO_PAGO_ACCESS_TOKEN não configurado. Adicione a chave em .env."
    );
  }

  // Implementação real: criar preferência de pagamento via API do Mercado Pago
  // usando input.customer e input.planSlug para montar a preferência.
  throw new Error(
    `Integração com Mercado Pago ainda não implementada (plano: ${input.planSlug}).`
  );
}
