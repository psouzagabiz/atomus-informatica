"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Barcode,
  CheckCircle2,
  Copy,
  CreditCard,
  ExternalLink,
  Loader2,
  QrCode,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { DEFAULT_PAYMENT_PROVIDER, buildWhatsappLink } from "@/lib/constants";
import { checkoutSchema, type CheckoutInput } from "@/lib/validations/payment";
import { PLANS } from "@/lib/data/plans";
import { MercadoPagoBrick, type MercadoPagoResult } from "./mercado-pago-brick";

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const PAYMENT_METHODS = [
  { value: "PIX", label: "PIX", icon: QrCode, hint: "Aprovação imediata" },
  { value: "CARTAO", label: "Cartão", icon: CreditCard, hint: "Parcelamento disponível" },
  { value: "BOLETO", label: "Boleto", icon: Barcode, hint: "Compensação em até 3 dias úteis" },
] as const;

export function CheckoutForm({ initialPlan }: { initialPlan?: string }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [mpResult, setMpResult] = React.useState<MercadoPagoResult | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CheckoutInput>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      planSlug: PLANS.some((p) => p.slug === initialPlan) ? initialPlan : PLANS[0].slug,
      method: "PIX",
      provider: DEFAULT_PAYMENT_PROVIDER,
      customer: {
        name: "",
        company: "",
        document: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        description: "",
      },
    },
  });

  const planSlug = watch("planSlug");
  const method = watch("method");
  const customer = watch("customer");
  const selectedPlan = PLANS.find((p) => p.slug === planSlug);
  const isMercadoPago = DEFAULT_PAYMENT_PROVIDER === "MERCADO_PAGO";
  const customerValid = checkoutSchema.shape.customer.safeParse(customer).success;

  React.useEffect(() => {
    setMpResult(null);
  }, [method]);

  async function onSubmit(data: CheckoutInput) {
    setSubmitting(true);
    try {
      const response = await fetch("/api/pagamentos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error();
      }

      const result = await response.json();
      toast.success("Pedido recebido! Redirecionando para o pagamento...");
      if (result.checkoutUrl) {
        window.location.href = result.checkoutUrl;
      }
    } catch {
      toast.error(
        "O checkout online ainda está em configuração. Fale com a gente pelo WhatsApp para finalizar.",
        {
          action: {
            label: "Abrir WhatsApp",
            onClick: () => window.open(buildWhatsappLink(), "_blank"),
          },
        }
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-10">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <div>
        <h2 className="text-lg font-semibold">1. Escolha o plano</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <button
              key={plan.slug}
              type="button"
              onClick={() => setValue("planSlug", plan.slug, { shouldValidate: true })}
              className={cn(
                "rounded-xl border p-4 text-left transition-colors",
                planSlug === plan.slug
                  ? "border-primary bg-primary/5"
                  : "border-border hover:bg-secondary"
              )}
            >
              <p className="font-semibold">{plan.name}</p>
              <p className="mt-1 text-lg font-bold text-primary">
                {currency.format(plan.price)}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">2. Seus dados</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name">Nome completo</Label>
            <Input id="name" {...register("customer.name")} />
            {errors.customer?.name && (
              <p className="text-xs text-destructive">{errors.customer.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="company">Empresa (opcional)</Label>
            <Input id="company" {...register("customer.company")} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="document">CPF/CNPJ</Label>
            <Input id="document" {...register("customer.document")} />
            {errors.customer?.document && (
              <p className="text-xs text-destructive">{errors.customer.document.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" {...register("customer.phone")} />
            {errors.customer?.phone && (
              <p className="text-xs text-destructive">{errors.customer.phone.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("customer.email")} />
            {errors.customer?.email && (
              <p className="text-xs text-destructive">{errors.customer.email.message}</p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="city">Cidade</Label>
              <Input id="city" {...register("customer.city")} />
              {errors.customer?.city && (
                <p className="text-xs text-destructive">{errors.customer.city.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="state">Estado</Label>
              <Input id="state" placeholder="GO" maxLength={2} {...register("customer.state")} />
              {errors.customer?.state && (
                <p className="text-xs text-destructive">{errors.customer.state.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="description">Descrição do projeto</Label>
            <Textarea
              id="description"
              rows={4}
              placeholder="Conte um pouco sobre o que você precisa..."
              {...register("customer.description")}
            />
            {errors.customer?.description && (
              <p className="text-xs text-destructive">
                {errors.customer.description.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">3. Forma de pagamento</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {PAYMENT_METHODS.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setValue("method", option.value, { shouldValidate: true })}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-xl border p-4 text-center transition-colors",
                  method === option.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-secondary"
                )}
              >
                <Icon className="size-5 text-primary" />
                <span className="text-sm font-semibold">{option.label}</span>
                <span className="text-xs text-muted-foreground">{option.hint}</span>
              </button>
            );
          })}
        </div>
      </div>

      {!isMercadoPago && (
        <Button type="submit" size="lg" variant="accent" className="w-full" disabled={submitting}>
          {submitting && <Loader2 className="size-4 animate-spin" />}
          Finalizar contratação
        </Button>
      )}
    </form>

    {isMercadoPago && selectedPlan && (
      <div>
        <h2 className="text-lg font-semibold">4. Pagamento</h2>
        <div className="mt-4">
          {mpResult?.status === "success" || mpResult?.status === "pending" ? (
            <div className="rounded-xl border border-border p-6 text-center">
              <CheckCircle2 className="mx-auto size-10 text-primary" />
              <p className="mt-3 font-semibold">{mpResult.message}</p>

              {mpResult.qrCodeBase64 && (
                <div className="mt-5 flex flex-col items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`data:image/png;base64,${mpResult.qrCodeBase64}`}
                    alt="QR Code PIX"
                    className="size-48 rounded-lg border border-border"
                  />
                  {mpResult.qrCode && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(mpResult.qrCode!);
                        toast.success("Código PIX copiado!");
                      }}
                    >
                      <Copy className="size-4" /> Copiar código PIX
                    </Button>
                  )}
                </div>
              )}

              {mpResult.ticketUrl && (
                <Button className="mt-5" variant="outline" asChild>
                  <a href={mpResult.ticketUrl} target="_blank" rel="noopener noreferrer">
                    Abrir boleto <ExternalLink className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          ) : (
            <>
              {mpResult?.status === "error" && (
                <p className="mb-4 text-sm text-destructive">{mpResult.message}</p>
              )}
              {customerValid ? (
                <MercadoPagoBrick
                  planSlug={planSlug}
                  amount={selectedPlan.price}
                  payerEmail={customer.email}
                  payerDocument={customer.document}
                  method={method}
                  onResult={setMpResult}
                />
              ) : (
                <p className="rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
                  Preencha seus dados no passo 2 para liberar o pagamento.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    )}
    </div>
  );
}
