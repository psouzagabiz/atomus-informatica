// lucide-react removeu os ícones de marca (v1+); usamos SVGs inline no lugar.
import type { SVGProps } from "react";

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.06 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.48V23H.24V8.25ZM8.24 8.25h4.3v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23h-4.48v-6.4c0-1.53-.03-3.5-2.13-3.5-2.14 0-2.47 1.67-2.47 3.39V23H8.24V8.25Z" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-8.4h2.8l.42-3.27h-3.22V8.24c0-.95.26-1.6 1.63-1.6h1.74V3.7A23.3 23.3 0 0 0 14.3 3.5c-2.53 0-4.26 1.54-4.26 4.38v2.45H7.24v3.27h2.8V22h3.46Z" />
    </svg>
  );
}
