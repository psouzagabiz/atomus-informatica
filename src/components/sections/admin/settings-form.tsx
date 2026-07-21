"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";

export function SettingsForm() {
  return (
    <Card>
      <CardContent className="pt-6">
        <form
          className="grid gap-4 sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            toast.info(
              "Salvar configurações pelo painel chega em breve — por enquanto, edite src/lib/constants.ts."
            );
          }}
        >
          <div className="space-y-1.5">
            <Label htmlFor="siteName">Nome do site</Label>
            <Input id="siteName" defaultValue={SITE_CONFIG.name} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="siteEmail">Email de contato</Label>
            <Input id="siteEmail" defaultValue={SITE_CONFIG.email} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="sitePhone">Telefone</Label>
            <Input id="sitePhone" defaultValue={SITE_CONFIG.phone} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="siteWhatsapp">WhatsApp (com DDI+DDD)</Label>
            <Input id="siteWhatsapp" defaultValue={SITE_CONFIG.whatsapp} />
          </div>
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="siteAddress">Endereço</Label>
            <Input id="siteAddress" defaultValue={SITE_CONFIG.address} />
          </div>

          <div className="sm:col-span-2">
            <Button type="submit" variant="accent">
              Salvar alterações
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
