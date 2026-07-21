"use client";

import * as React from "react";
import Script from "next/script";
import { Loader2 } from "lucide-react";

interface BrickController {
  unmount: () => void;
}

interface BricksBuilder {
  create: (
    type: "payment",
    containerId: string,
    settings: Record<string, unknown>
  ) => Promise<BrickController>;
}

declare global {
  interface Window {
    MercadoPago?: new (
      publicKey: string,
      options?: { locale?: string }
    ) => { bricks: () => BricksBuilder };
  }
}

const PUBLIC_KEY = process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY;

export type PaymentMethodOption = "PIX" | "CARTAO" | "BOLETO";

// Nota: "debitCard" e "ticket" não aceitam "all"/"excluded" nesta conta do
// Mercado Pago (só reconhecem IDs específicos de processadora, ex: "bolbradesco").
// Por isso essas duas chaves ficam de fora — só controlamos creditCard/bankTransfer,
// que aceitam os atalhos normalmente.
const METHOD_CUSTOMIZATION: Record<PaymentMethodOption, Record<string, string>> = {
  PIX: {
    creditCard: "excluded",
    bankTransfer: "all",
  },
  CARTAO: {
    creditCard: "all",
    bankTransfer: "excluded",
  },
  BOLETO: {
    creditCard: "excluded",
    bankTransfer: "excluded",
  },
};

export interface MercadoPagoResult {
  status: "success" | "pending" | "error";
  message: string;
  qrCode?: string;
  qrCodeBase64?: string;
  ticketUrl?: string;
}

interface MercadoPagoBrickProps {
  planSlug: string;
  amount: number;
  payerEmail: string;
  payerDocument: string;
  method: PaymentMethodOption;
  onResult: (result: MercadoPagoResult) => void;
}

const CONTAINER_ID = "mp-payment-brick";

export function MercadoPagoBrick({
  planSlug,
  amount,
  payerEmail,
  payerDocument,
  method,
  onResult,
}: MercadoPagoBrickProps) {
  const [sdkReady, setSdkReady] = React.useState(false);
  const controllerRef = React.useRef<BrickController | null>(null);
  const onResultRef = React.useRef(onResult);

  React.useEffect(() => {
    onResultRef.current = onResult;
  }, [onResult]);

  React.useEffect(() => {
    if (!sdkReady || !PUBLIC_KEY || !window.MercadoPago) return;

    let cancelled = false;

    async function render() {
      controllerRef.current?.unmount();
      const mp = new window.MercadoPago!(PUBLIC_KEY!, { locale: "pt-BR" });
      const controller = await mp.bricks().create("payment", CONTAINER_ID, {
        initialization: {
          amount,
          payer: {
            email: payerEmail || undefined,
            identification: payerDocument
              ? {
                  type: payerDocument.replace(/\D/g, "").length > 11 ? "CNPJ" : "CPF",
                  number: payerDocument.replace(/\D/g, ""),
                }
              : undefined,
          },
        },
        customization: {
          paymentMethods: METHOD_CUSTOMIZATION[method],
        },
        callbacks: {
          onReady: () => {},
          onError: (error: unknown) => {
            console.error("Mercado Pago Brick error:", error);
            onResultRef.current({
              status: "error",
              message: "Não foi possível carregar o formulário de pagamento.",
            });
          },
          onSubmit: ({ formData }: { formData: Record<string, unknown> }) =>
            new Promise<void>((resolve, reject) => {
              fetch("/api/pagamentos/mercado-pago", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ planSlug, formData }),
              })
                .then(async (response) => {
                  const data = await response.json();
                  if (!response.ok) {
                    onResultRef.current({
                      status: "error",
                      message: data.error ?? "Pagamento recusado.",
                    });
                    reject();
                    return;
                  }
                  const approved = data.status === "approved";
                  const pending = data.status === "pending" || data.status === "in_process";
                  onResultRef.current({
                    status: approved ? "success" : pending ? "pending" : "error",
                    message: approved
                      ? "Pagamento aprovado! Em breve entraremos em contato para iniciar o projeto."
                      : pending
                        ? "Pagamento em processamento. Assim que for confirmado, avisaremos você."
                        : "Pagamento não aprovado. Tente outro método ou fale com a gente pelo WhatsApp.",
                    qrCode: data.qrCode,
                    qrCodeBase64: data.qrCodeBase64,
                    ticketUrl: data.ticketUrl,
                  });
                  resolve();
                })
                .catch(() => {
                  onResultRef.current({
                    status: "error",
                    message: "Erro ao processar pagamento. Tente novamente.",
                  });
                  reject();
                });
            }),
        },
      });

      if (!cancelled) {
        controllerRef.current = controller;
      } else {
        controller.unmount();
      }
    }

    render();

    return () => {
      cancelled = true;
      controllerRef.current?.unmount();
      controllerRef.current = null;
    };
  }, [sdkReady, method, amount, payerEmail, payerDocument, planSlug]);

  if (!PUBLIC_KEY) {
    return (
      <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
        Checkout online ainda não configurado. Defina{" "}
        <code className="text-xs">NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY</code> em
        .env para habilitar o pagamento com Mercado Pago.
      </p>
    );
  }

  return (
    <div>
      <Script
        src="https://sdk.mercadopago.com/js/v2"
        strategy="afterInteractive"
        onLoad={() => setSdkReady(true)}
      />
      {!sdkReady && (
        <div className="flex items-center gap-2 py-6 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" />
          Carregando formulário de pagamento seguro...
        </div>
      )}
      <div id={CONTAINER_ID} />
    </div>
  );
}
