import type { Metadata } from "next";
import { Download, Paperclip } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { CLIENT_FILES } from "@/lib/data/client-dashboard";

export const metadata: Metadata = { title: "Arquivos" };

export default function ArquivosPage() {
  return (
    <>
      <SectionHeader
        title="Arquivos"
        description="Documentos e materiais enviados durante o projeto."
      />

      <Card>
        <CardContent className="divide-y divide-border p-0">
          {CLIENT_FILES.map((file) => (
            <div key={file.id} className="flex items-center justify-between gap-4 p-5">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                  <Paperclip className="size-4 text-muted-foreground" />
                </span>
                <div>
                  <p className="text-sm font-medium">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {file.size} · {file.date}
                  </p>
                </div>
              </div>
              <button
                type="button"
                aria-label={`Baixar ${file.name}`}
                className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <Download className="size-4" />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
