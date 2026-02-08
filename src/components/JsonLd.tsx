import { SITE } from "@/lib/seo";
import { CONTACT, WHATSAPP } from "@/lib/constants";

/**
 * Datos estructurados JSON-LD para Google y IAs.
 * Organization + WebSite + LocalBusiness.
 */
function buildJsonLd() {
  const base = SITE.url.replace(/\/$/, "");

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: SITE.name,
    url: base,
    logo: `${base}/logo.png`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Las Condes 12587",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP.number}`,
      contactType: "customer service",
      areaServed: "CL",
      availableLanguage: "Spanish",
      url: `https://wa.me/${WHATSAPP.number}`,
    },
    sameAs: [
      "https://www.imaginatuweb.cl",
      "https://instagram.com/imaginatuweb",
      "https://linkedin.com/company/imaginatuweb",
    ].filter(Boolean),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: base,
    description: SITE.defaultDescription,
    publisher: { "@id": `${base}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "es-CL",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#localbusiness`,
    name: SITE.name,
    image: `${base}/logo.png`,
    url: base,
    telephone: `+${WHATSAPP.number}`,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Las Condes 12587",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
      addressCountry: "CL",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    areaServed: { "@type": "Country", name: "Chile" },
    description: SITE.defaultDescription,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo crear mi página web barata en Chile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En ImaginaTuWeb puedes crear tu página web, sitio web o invitación digital en tiempo récord. Ofrecemos crear web barata, crear página web en un día, con pago único y sin cuotas mensuales. Cotiza por WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo crear una web en un día?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Desarrollamos tu web en tiempo récord: invitaciones digitales, web profesional o web para empresas. De la idea a la realidad en menos de 24 horas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta crear una página web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trabajamos con pago único, sin cuotas mensuales. Costos transparentes: crea tu página web barata o tu sitio web con presupuesto claro. Cotiza sin compromiso.",
        },
      },
    ],
  };

  return [organization, website, localBusiness, faq];
}

export function JsonLd() {
  const scripts = buildJsonLd();

  return (
    <>
      {scripts.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
