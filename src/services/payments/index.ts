import type { CheckoutInput } from "@/lib/validations/payment";
import { createMercadoPagoCheckout } from "./mercado-pago";
import { createStripeCheckout } from "./stripe";
import { createAsaasCheckout } from "./asaas";

export interface CheckoutResult {
  checkoutUrl: string;
  externalId: string;
}

// Ponto único de entrada para os provedores de pagamento.
// Basta configurar as chaves em .env — nenhuma outra parte do
// código precisa mudar ao trocar/adicionar um provedor.
export async function createCheckout(input: CheckoutInput): Promise<CheckoutResult> {
  switch (input.provider) {
    case "MERCADO_PAGO":
      return createMercadoPagoCheckout(input);
    case "STRIPE":
      return createStripeCheckout(input);
    case "ASAAS":
      return createAsaasCheckout(input);
    default:
      throw new Error(`Provedor de pagamento não suportado: ${input.provider}`);
  }
}
