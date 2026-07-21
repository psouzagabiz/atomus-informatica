import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/section-header";
import { MessageComposer } from "@/components/sections/client/message-composer";
import { cn } from "@/lib/utils";
import { CLIENT_MESSAGES } from "@/lib/data/client-dashboard";

export const metadata: Metadata = { title: "Mensagens" };

export default function MensagensPage() {
  return (
    <>
      <SectionHeader
        title="Mensagens"
        description="Converse diretamente com o time responsável pelo seu projeto."
      />

      <Card>
        <CardContent className="flex h-[420px] flex-col p-0">
          <div className="flex-1 space-y-3 overflow-y-auto p-5">
            {CLIENT_MESSAGES.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex flex-col",
                  message.sender === "CLIENTE" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                    message.sender === "CLIENTE"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {message.content}
                </div>
                <span className="mt-1 text-xs text-muted-foreground">{message.date}</span>
              </div>
            ))}
          </div>

          <MessageComposer />
        </CardContent>
      </Card>
    </>
  );
}
