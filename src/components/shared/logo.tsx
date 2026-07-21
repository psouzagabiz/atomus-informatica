import Image from "next/image";

// Alterna entre as variantes clara/escura do logotipo oficial via CSS
// (evita mismatch de hidratação — mesmo padrão do ThemeToggle).
export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <Image
        src="/images/logo/logotipo-horizontal-fundo-claro.svg"
        alt="Atomus Informática"
        width={170}
        height={50}
        priority
        className="h-9 w-auto dark:hidden"
      />
      <Image
        src="/images/logo/logotipo-horizontal-fundo-escuro.svg"
        alt="Atomus Informática"
        width={170}
        height={50}
        priority
        className="hidden h-9 w-auto dark:block"
      />
    </span>
  );
}

export function LogoSymbol({ className }: { className?: string }) {
  return (
    <span className={className}>
      <Image
        src="/images/logo/simbolo-cor-fundo-claro.svg"
        alt="Atomus Informática"
        width={40}
        height={40}
        priority
        className="size-9 dark:hidden"
      />
      <Image
        src="/images/logo/simbolo-cor-fundo-escuro.svg"
        alt="Atomus Informática"
        width={40}
        height={40}
        priority
        className="hidden size-9 dark:block"
      />
    </span>
  );
}
