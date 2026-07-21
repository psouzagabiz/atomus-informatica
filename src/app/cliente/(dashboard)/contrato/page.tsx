import type { Metadata } from "next";
import { Download, FileSignature } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { CLIENT_CONTRACT } from "@/lib/data/client-dashboard";

export const metadata: Metadata = { title: "Contrato" };

export default function ContratoPage() {
  return (
    <>
      <SectionHeader title="Contrato" description="Documento assinado do seu projeto." />

      <Card>
        <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
          <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
            <FileSignature className="size-6" />
          </span>
          <div>
            <p className="font-medium">{CLIENT_CONTRACT.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Assinado em {CLIENT_CONTRACT.signedAt}
            </p>
          </div>
          <Button variant="outline">
            <Download className="size-4" /> Baixar contrato (PDF)
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
