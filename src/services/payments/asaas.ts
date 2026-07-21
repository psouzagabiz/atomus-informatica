import type { CheckoutInput } from "@/lib/validations/payment";
import type { CheckoutResult } from "./index";

const ASAAS_API_KEY = process.env.ASAAS_API_KEY;

// TODO: integrar com a API REST do Asaas assim que
// ASAAS_API_KEY estiver configurado em .env.
export async function createAsaasCheckout(
  input: CheckoutInput
): Promise<CheckoutResult> {
  if (!ASAAS_API_KEY) {
    throw new Error("ASAAS_API_KEY não configurado. Adicione a chave em .env.");
  }

  // Implementação real: criar cobrança via API do Asaas
  // usando input.customer e input.planSlug para montar a cobrança.
  throw new Error(
    `Integração com Asaas ainda não implementada (plano: ${input.planSlug}).`
  );
}
