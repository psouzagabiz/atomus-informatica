const MERCADO_PAGO_ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN;
const MERCADO_PAGO_API = "https://api.mercadopago.com/v1/payments";

export interface MercadoPagoBrickFormData {
  token?: string;
  issuer_id?: string;
  payment_method_id: string;
  installments?: number;
  payer: {
    email: string;
    identification?: { type: string; number: string };
  };
}

export interface MercadoPagoPaymentResult {
  id: number;
  status: string;
  statusDetail: string;
  qrCode?: string;
  qrCodeBase64?: string;
  ticketUrl?: string;
}

// Cria um pagamento via Payments API do Mercado Pago a partir dos dados
// coletados pelo Payment Brick no front-end (src/components/sections/payment/mercado-pago-brick.tsx).
export async function createMercadoPagoPayment(
  formData: MercadoPagoBrickFormData,
  meta: { amount: number; description: string; externalReference: string }
): Promise<MercadoPagoPaymentResult> {
  if (!MERCADO_PAGO_ACCESS_TOKEN) {
    throw new Error(
      "MERCADO_PAGO_ACCESS_TOKEN não configurado. Adicione a chave em .env."
    );
  }

  const response = await fetch(MERCADO_PAGO_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
      "X-Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify({
      transaction_amount: meta.amount,
      description: meta.description,
      external_reference: meta.externalReference,
      token: formData.token,
      installments: formData.installments ?? 1,
      payment_method_id: formData.payment_method_id,
      issuer_id: formData.issuer_id,
      payer: formData.payer,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message ?? "Pagamento recusado pelo Mercado Pago.");
  }

  return {
    id: data.id,
    status: data.status,
    statusDetail: data.status_detail,
    qrCode: data.point_of_interaction?.transaction_data?.qr_code,
    qrCodeBase64: data.point_of_interaction?.transaction_data?.qr_code_base64,
    ticketUrl: data.transaction_details?.external_resource_url,
  };
}
