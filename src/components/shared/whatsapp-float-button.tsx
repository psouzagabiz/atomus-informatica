"use client";

import { MessageCircle } from "lucide-react";
import { buildWhatsappLink } from "@/lib/constants";

export function WhatsappFloatButton() {
  return (
    <a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="size-7" fill="currentColor" strokeWidth={0} />
      <span className="sr-only">Falar no WhatsApp</span>
    </a>
  );
}
