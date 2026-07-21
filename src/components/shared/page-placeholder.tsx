import { Construction } from "lucide-react";

export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="container-atomus flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <span className="flex size-14 items-center justify-center rounded-full bg-secondary">
        <Construction className="size-6 text-accent" />
      </span>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="max-w-md text-muted-foreground">{description}</p>
    </div>
  );
}
