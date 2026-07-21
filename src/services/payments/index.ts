import type { CheckoutInput } from "@/lib/validations/payment";
import { createStripeCheckout } from "./stripe";
import { createAsaasCheckout } from "./asaas";

export interface CheckoutResult {
  checkoutUrl: string;
  externalId: string;
}

// Ponto único de entrada para os provedores de pagamento baseados em
// redirecionamento (checkout hospedado pelo próprio gateway).
//
// O Mercado Pago é um caso à parte: usa o Payment Brick embutido na página
// (ver src/components/sections/payment/mercado-pago-brick.tsx), que fala
// diretamente com a rota /api/pagamentos/mercado-pago em vez de passar por
// createCheckout.
export async function createCheckout(input: CheckoutInput): Promise<CheckoutResult> {
  switch (input.provider) {
    case "STRIPE":
      return createStripeCheckout(input);
    case "ASAAS":
      return createAsaasCheckout(input);
    default:
      throw new Error(`Provedor de pagamento não suportado: ${input.provider}`);
  }
}
