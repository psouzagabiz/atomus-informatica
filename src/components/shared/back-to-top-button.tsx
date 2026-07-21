"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 left-6 z-50 flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-all hover:-translate-y-0.5",
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      )}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
