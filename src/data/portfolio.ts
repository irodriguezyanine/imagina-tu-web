/**
 * Portfolio & Showcase data for IMAGINATUWEB.CL
 * Add your project screenshots and links here.
 */

export type PortfolioCategory = "eventos" | "profesionales" | "comercio";

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  imageUrl?: string; // Add path to screenshot, e.g. "/portfolio/despedida-biotti.png"
  liveUrl?: string;
  tags: string[];
}

export const portfolioCategories = {
  eventos: {
    id: "eventos" as const,
    title: "Eventos & Hype",
    description: "Despedidas, bodas, cumpleaños exclusivos",
    style: "dark",
    accentColor: "fuchsia",
    variants: ["Despedida de solteros", "Invitación de boda con RSVP"],
  },
  profesionales: {
    id: "profesionales" as const,
    title: "Salud & Profesionales",
    description: "Odontólogos, kinesiólogos, abogados, clínicas",
    style: "light",
    accentColor: "blue",
    variants: ["Consultorio médico", "Estudio jurídico"],
  },
  comercio: {
    id: "comercio" as const,
    title: "Comercio & Pymes",
    description: "Restaurantes, artesanos, tiendas locales",
    style: "light",
    accentColor: "amber",
    variants: ["Menú QR", "Catálogo de productos"],
  },
} as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "despedida-biotti",
    title: "Despedida de Solteros Biotti",
    category: "eventos",
    description: "La Última Vuelta — Floripa 2026. Countdown, cronograma de vuelos, lista de crew.",
    liveUrl: "https://despedidabiotti.vercel.app",
    tags: ["Countdown", "Timeline", "Dark mode", "Neon"],
    imageUrl: "/portfolio/despedida-biotti.png",
  },
  {
    id: "dra-daniela-vera",
    title: "Dra. Daniela Vera Osorio",
    category: "profesionales",
    description: "Cirujana Dentista — Consultorio profesional con agenda WhatsApp, tratamientos y credenciales.",
    liveUrl: "https://dra-daniela-vera.vercel.app",
    tags: ["Consultorio", "WhatsApp", "Credenciales", "Mapa"],
    imageUrl: "/portfolio/dra-daniela-vera.png",
  },
  {
    id: "cortate-cl",
    title: "CÓRTATE.CL",
    category: "comercio",
    description: "Reserva tu barbería en minutos — Plataforma de reservas para peluquerías y barberías.",
    liveUrl: "https://cortate.cl",
    tags: ["Reservas", "Barberías", "Dark mode", "Amber"],
    imageUrl: "/portfolio/cortate-cl.png",
  },
  // Add more projects here
  {
    id: "wedding-invitation",
    title: "Invitación de Boda (RSVP)",
    category: "eventos",
    description: "Invitación digital con confirmación de asistencia integrada.",
    tags: ["Boda", "RSVP", "Elegante"],
  },
  {
    id: "legal-firm",
    title: "Estudio Jurídico",
    category: "profesionales",
    description: "Sitio corporativo sobrio para bufetes de abogados.",
    tags: ["Legal", "Azul oscuro", "Oro"],
  },
];
