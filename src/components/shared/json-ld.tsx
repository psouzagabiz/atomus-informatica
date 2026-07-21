import { SITE_CONFIG } from "@/lib/constants";

// Injeta Schema.org (Organization) no <head> — usado no root layout.
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo/logo.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    sameAs: Object.values(SITE_CONFIG.social),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
