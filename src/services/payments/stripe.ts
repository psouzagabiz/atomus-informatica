import type { CheckoutInput } from "@/lib/validations/payment";
import type { CheckoutResult } from "./index";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

// TODO: integrar com o SDK oficial `stripe` assim que
// STRIPE_SECRET_KEY estiver configurado em .env.
export async function createStripeCheckout(
  input: CheckoutInput
): Promise<CheckoutResult> {
  if (!STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY não configurado. Adicione a chave em .env.");
  }

  // Implementação real: criar uma Checkout Session via API do Stripe
  // usando input.customer e input.planSlug para montar a sessão.
  throw new Error(
    `Integração com Stripe ainda não implementada (plano: ${input.planSlug}).`
  );
}
