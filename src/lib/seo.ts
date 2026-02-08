/**
 * Configuración centralizada de SEO.
 * Keywords y metadatos para posicionar en Google y ser citados por IAs.
 */

export const SITE = {
  name: "ImaginaTuWeb",
  url: "https://www.imaginatuweb.cl",
  defaultTitle: "IMAGINATUWEB.CL | Crear página web barata y rápido en Chile",
  defaultDescription:
    "Crea tu página web, sitio web o invitación digital en tiempo récord. Crear web barata, crear página web en un día, diseño con IA. Chile. Pago único, sin cuotas.",
} as const;

/**
 * Palabras clave principales y long-tail (6x+ variaciones).
 * Orientadas a: crear página, crear web, barato, rápido, Chile, IA.
 */
export const SEO_KEYWORDS = [
  // Crear página / crear web (núcleo)
  "crear página",
  "crear pagina",
  "crear mi página web",
  "crear mi pagina web",
  "crear página web",
  "crear sitio web",
  "crear web",
  "crear mi web",
  "crear página web barata",
  "crear pagina web barata",
  "crear web barata",
  "crear página barata",
  "crear web barato",
  "crear pagina web barato",
  "crear página web en un día",
  "crear pagina web en un dia",
  "crear web rápido",
  "crear web rapido",
  "crear página web rápido",
  "crear web en un día",
  "crear web en 24 horas",
  "crear página web Chile",
  "crear sitio web Chile",
  "crear web Chile",
  // Con IA
  "crear web con IA",
  "crear página web con IA",
  "crear sitio web con IA",
  "diseño web con IA",
  "crear web con inteligencia artificial",
  "página web con IA Chile",
  // Barato / económico
  "crear página web barata Chile",
  "crear web barata Chile",
  "página web barata",
  "pagina web barata",
  "sitio web barato",
  "web barata Chile",
  "diseño web barato",
  "diseño web barato Chile",
  "hacer página web barata",
  "hacer web barata",
  "página web económica",
  "sitio web económico Chile",
  "crear web económica",
  // Rápido / en un día
  "crear web rápido Chile",
  "página web en un día",
  "pagina web en un dia",
  "sitio web en 24 horas",
  "web en un día Chile",
  "diseño web rápido",
  "crear web en un día Chile",
  "página web express",
  "web profesional rápido",
  // Chile / Santiago / local
  "diseño web Chile",
  "crear página web Santiago",
  "crear web Santiago",
  "sitio web Chile",
  "página web Chile",
  "desarrollo web Chile",
  "agencia web Chile",
  "diseño web Santiago",
  "web para empresas Chile",
  "web para profesionales Chile",
  // Invitaciones / eventos
  "invitación digital",
  "invitacion digital",
  "crear invitación digital",
  "web para cumpleaños",
  "web para bodas",
  "web para matrimonios",
  "web para eventos",
  "invitación digital Chile",
  "crear web para evento",
  "página web para cumpleaños",
  // Profesional / empresas
  "web profesional",
  "web para profesionales",
  "crear web profesional",
  "sitio web profesional Chile",
  "página web para empresa",
  "web corporativa",
  "landing page Chile",
  "página de aterrizaje",
  // Otros intents
  "pago único web",
  "sin cuotas mensuales",
  "diseño web humano",
  "crear mi página",
  "hacer mi página web",
  "necesito una página web",
  "quiero crear mi web",
  "cotizar página web",
  "presupuesto página web Chile",
  "desarrollo web a medida",
  "diseño web a medida Chile",
] as const;

export const KEYWORDS_STRING = SEO_KEYWORDS.join(", ");

const BASE = SITE.url.replace(/\/$/, "");

/** URL canónica para una ruta. */
export function canonicalUrl(path: string): string {
  return path ? `${BASE}${path}` : BASE;
}

/** Metadatos por ruta para títulos y descripciones únicas. */
export const PAGE_META: Record<
  string,
  { title: string; description: string; keywords?: string[]; path?: string }
> = {
  "/": {
    path: "",
    title: "Crear página web barata y rápido | ImaginaTuWeb Chile",
    description:
      "Crea tu página web, sitio web o invitación en tiempo récord. Crear web barata, crear página en un día, diseño con IA. Chile. Pago único, sin cuotas. Cotiza por WhatsApp.",
    keywords: [
      "crear página web",
      "crear web barata",
      "crear sitio web Chile",
      "página web en un día",
      "diseño web barato Chile",
    ],
  },
  "/cumpleanos": {
    path: "/cumpleanos",
    title: "Crear web para cumpleaños | Invitación digital | ImaginaTuWeb",
    description:
      "Crea tu página web para cumpleaños: invitación digital, lista de regalos, cuenta regresiva, galería. Crear web para cumpleaños barata y rápido en Chile.",
    keywords: [
      "crear web cumpleaños",
      "invitación digital cumpleaños",
      "página web cumpleaños Chile",
      "web para fiesta cumpleaños",
    ],
  },
  "/despedidas-soltero": {
    path: "/despedidas-soltero",
    title: "Crear web para despedida de soltero | ImaginaTuWeb",
    description:
      "Web para despedida de soltero: itinerario, countdown, crew, un solo link. Crear invitación digital para despedida barata y rápido. Chile.",
    keywords: [
      "crear web despedida soltero",
      "invitación digital despedida",
      "web despedida de soltero Chile",
    ],
  },
  "/matrimonios": {
    path: "/matrimonios",
    title: "Crear web para bodas y matrimonios | Invitación digital | ImaginaTuWeb",
    description:
      "Crea tu página web para boda: invitación digital, mapa, RSVP, lista de novios, cuenta regresiva. Crear web para matrimonio barata. Chile.",
    keywords: [
      "crear web boda",
      "web para matrimonio",
      "invitación digital boda Chile",
      "página web bodas",
    ],
  },
  "/eventos": {
    path: "/eventos",
    title: "Crear web para eventos | Congresos, lanzamientos, fiestas | ImaginaTuWeb",
    description:
      "Crea tu página web para eventos: congresos, lanzamientos, fiestas. Programa, mapas, inscripción. Crear web para evento barata y rápido. Chile.",
    keywords: [
      "crear web evento",
      "web para congresos",
      "página web eventos Chile",
      "web para fiestas",
    ],
  },
  "/web-profesional": {
    path: "/web-profesional",
    title: "Crear web profesional | Portfolio y contacto | ImaginaTuWeb Chile",
    description:
      "Crea tu página web profesional: portfolio, servicios, contacto. Crear web para profesionales barata. Kinesiólogos, odontólogos, consultores. Chile.",
    keywords: [
      "crear web profesional",
      "página web profesionales Chile",
      "web para freelancers",
      "portfolio web barato",
    ],
  },
  "/web-empresas": {
    path: "/web-empresas",
    title: "Crear web para empresas | Sitio corporativo | ImaginaTuWeb Chile",
    description:
      "Crea la página web de tu empresa: servicios, equipo, contacto. Crear sitio web corporativo barato y rápido. Pymes, Chile.",
    keywords: [
      "crear web empresa",
      "sitio web corporativo Chile",
      "página web para pymes",
      "web empresarial barata",
    ],
  },
  "/portafolio": {
    path: "/portafolio",
    title: "Portafolio | Proyectos web realizados | ImaginaTuWeb",
    description:
      "Proyectos web que hemos creado: plataformas, sitios corporativos, invitaciones digitales. Ver portafolio ImaginaTuWeb Chile.",
    keywords: [
      "portafolio diseño web Chile",
      "proyectos web Chile",
      "casos de éxito web",
    ],
  },
};
