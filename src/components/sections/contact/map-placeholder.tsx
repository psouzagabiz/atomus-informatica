import { MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

// Atendimento remoto por padrão. Quando houver um endereço físico definido,
// troque este bloco por um <iframe> do Google Maps apontando para o local real.
export function MapPlaceholder() {
  return (
    <div className="flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border bg-secondary/50 text-center">
      <MapPin className="size-6 text-muted-foreground" />
      <p className="text-sm font-medium">Atendimento remoto</p>
      <p className="max-w-xs px-4 text-xs text-muted-foreground">
        {SITE_CONFIG.address === "A definir"
          ? "Endereço em atualização — atendemos clientes de todo o Brasil online."
          : SITE_CONFIG.address}
      </p>
    </div>
  );
}
