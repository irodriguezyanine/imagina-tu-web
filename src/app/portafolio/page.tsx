"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Users, Database, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";

export type PortfolioCategoryTag =
  | "Despedida de solteros"
  | "Matrimonio"
  | "Cumpleaños"
  | "Web empresa"
  | "Web profesional"
  | "Juegos"
  | "Juegos de mesa"
  | "Arriendo vacacional";

const PORTFOLIO_CATEGORIES: PortfolioCategoryTag[] = [
  "Despedida de solteros",
  "Matrimonio",
  "Cumpleaños",
  "Web empresa",
  "Web profesional",
  "Juegos",
  "Juegos de mesa",
  "Arriendo vacacional",
];

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  url?: string;
  images: ProjectImage[];
  description: string;
  highlights: string[];
  tech: { label: string; value: string }[];
  tags: string[];
  categoryTags: PortfolioCategoryTag[];
}

const PROJECTS: Project[] = [
  {
    id: "puerto-pacifico",
    title: "Condominio Puerto Pacífico",
    tagline: "Departamentos en arriendo primera línea de playa en Viña del Mar",
    url: "https://www.condominiopuertopacifico.cl/",
    images: [
      { src: "/portfolio/puerto-pacifico-home.png", alt: "Página de inicio del Condominio Puerto Pacífico" },
      { src: "/portfolio/puerto-pacifico-departamentos.png", alt: "Nuestros departamentos en arriendo", caption: "Ver departamentos" },
    ],
    description: "Sitio web para arriendo de departamentos en el Condominio Puerto Pacífico, frente a playa Las Salinas en Viña del Mar. Más de 20 años de servicio, propiedad de Dalal Saleme y Enrique Yanine. Cinco departamentos en arriendo, primera línea de playa, con cotizaciones en línea, PDF descargable y compartir por WhatsApp.",
    highlights: [
      "Diseño claro y profesional, centrado en los departamentos y la ubicación.",
      "Cotizaciones en PDF con datos de depósito y compartir por WhatsApp.",
      "Panel de administración con filtros y búsqueda para cotizaciones y clientes.",
      "Información de contacto y mapa para llegar al condominio.",
      "Sitio responsive para móvil y escritorio.",
    ],
    tech: [
      { label: "Frontend", value: "Next.js 14, React, Tailwind CSS, Framer Motion." },
      { label: "Backend", value: "API Routes, MongoDB, NextAuth." },
      { label: "Funcionalidades", value: "Generación de PDF (jsPDF), mapa con Leaflet, integración con WhatsApp." },
      { label: "Hosting y SEO", value: "Despliegue en Vercel, Open Graph y Twitter Cards para vista previa en redes sociales." },
    ],
    tags: ["Arriendo vacacional", "Departamentos Viña del Mar", "Primera línea de playa", "Las Salinas", "Cotizaciones en línea", "WhatsApp", "Panel de administración"],
    categoryTags: ["Arriendo vacacional", "Web empresa"],
  },
  {
    id: "cortate",
    title: "CÓRTATE.CL",
    tagline: "Plataforma de reservas y cortes al instante",
    url: "https://cortate.cl",
    images: [
      { src: "/portfolio/cortate-home.png", alt: "Página de inicio de CÓRTATE.CL" },
      { src: "/portfolio/cortate-google.png", alt: "Posicionamiento en Google para CÓRTATE.CL", caption: "Posicionamiento en Google" },
    ],
    description: "Plataforma web que conecta a clientes con barberías y barberos en Chile. Los usuarios pueden reservar hora (fecha, servicio, barbero), pedir un corte rápido cerca de donde están, chatear con el barbero y dejar reseñas. Los barberos gestionan reservas, agenda e ingresos; los administradores dan de alta barberías y usuarios, ven estadísticas y actividad. Todo pensado para Chile (horarios, precios en pesos).",
    highlights: [
      "Varios tipos de usuario: cliente, barbero y administrador, con base de datos integrada.",
      "Panel de administración para controlar visitas, barberías y estadísticas.",
      "Reservas con calendario, cortes al instante tipo \"pedir servicio\", chat en tiempo real y reseñas.",
    ],
    tech: [
      { label: "Frontend", value: "React + Tailwind CSS, interfaz adaptable (móvil y escritorio), mapa, calendario, chat y notificaciones." },
      { label: "Backend", value: "API en FastAPI (Python): usuarios, reservas, mensajes. Base de datos MongoDB. Autenticación segura, envío de correos, subida de imágenes." },
    ],
    tags: ["Reservas", "Barberías", "Multi-rol", "Mapa", "Chat", "Reseñas"],
    categoryTags: ["Web empresa"],
  },
  {
    id: "agrosouthwest",
    title: "Agro SouthWest",
    tagline: "Exportación de cítricos desde Chile",
    url: "https://www.agrosouthwest.com/",
    images: [
      { src: "/portfolio/agrosouthwest.png", alt: "Sitio web de Agro SouthWest" },
      { src: "/portfolio/agrosouthwest-google.png", alt: "Agro SouthWest en Google", caption: "Posicionamiento en Google" },
    ],
    description: "Empresa chilena dedicada a la exportación de cítricos frescos (limones, naranjas, mandarinas) desde la zona norte y central de Chile. Sitio corporativo con certificaciones Global G.A.P. y Systems Approach, información de productos, mercados, proceso de cotización y contacto.",
    highlights: [
      "Sitio en español con opción de idioma, secciones Nosotros, Productos, Mercados, Sostenibilidad y FAQ.",
      "Destacado de cítricos premium, temporada de exportación y flujo claro: consulta, cotización, logística y entrega.",
    ],
    tech: [
      { label: "Web", value: "Sitio institucional responsive con galería, testimonios, integración Instagram y formulario de contacto." },
    ],
    tags: ["Exportación", "Cítricos", "Chile", "Corporativo"],
    categoryTags: ["Web empresa"],
  },
  {
    id: "impostor-chile",
    title: "Impostor Chile",
    tagline: "Juego de fiesta tipo Spyfall para descubrir al impostor",
    url: "https://www.elimpostor.cl",
    images: [
      { src: "/portfolio/impostor-categorias.png", alt: "Selección de categorías en Impostor Chile" },
      { src: "/portfolio/impostor-turno.png", alt: "Turno del impostor con pista" },
      { src: "/portfolio/impostor-primer-turno.png", alt: "Pass and Play: pasar el teléfono al siguiente jugador" },
    ],
    description: "Impostor Chile es un juego de fiesta en formato Pass and Play para jugar con un solo celular. Cada jugador recibe un rol secreto: la mayoría son civiles y conocen la palabra secreta; uno o más son impostores y deben fingir que la conocen. El objetivo es descubrir quién miente mientras el impostor intenta pasar desapercibido.",
    highlights: [
      "Un solo dispositivo: se pasa el celular entre jugadores; no hace falta un dispositivo por persona.",
      "Más de 25 categorías: futbolistas internacionales y chilenos, Champions League, Real Madrid, Barcelona, River, Boca, Universidad Católica, famosos chilenos, películas, profesiones, palabras chilenas, países turísticos, mundiales de fútbol, útiles escolares y más.",
      "Pistas para el impostor: cada palabra tiene pistas para que el impostor pueda participar sin revelar que no conoce la palabra.",
      "1 a 3 impostores configurable según el número de jugadores. 5 idiomas: español, inglés, portugués, italiano y francés.",
      "Sin publicidad ni registro: juego gratuito, sin anuncios ni cuenta obligatoria. Diseño móvil con animaciones y modo oscuro.",
    ],
    tech: [
      { label: "Frontend", value: "Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React." },
    ],
    tags: ["Pass and Play", "Spyfall", "Móvil", "Modo oscuro"],
    categoryTags: ["Juegos", "Juegos de mesa"],
  },
  {
    id: "asantec",
    title: "ASANTEC SPA",
    tagline: "Sitio corporativo y catálogo tecnológico",
    url: "https://www.asantec.cl",
    images: [
      { src: "/portfolio/asantec-home.png", alt: "Página de inicio de ASANTEC" },
      { src: "/portfolio/asantec-admin.png", alt: "Panel de administración de inventario ASANTEC", caption: "Panel Admin" },
    ],
    description: "Sitio corporativo y catálogo tecnológico para ASANTEC SPA (Chile). Catálogo dinámico desde base de datos, panel de administración con autenticación, inventario por categorías con totales en CLP, páginas institucionales (Nosotros, Contacto) y alcance nacional.",
    highlights: [
      "Catálogo desde BD con productos por categorías (Almacenamiento, Computadores, Impresoras, Monitores, Periféricos, Red).",
      "Panel admin con auth: gestión de inventario, productos destacados y visibilidad en catálogo.",
      "Importación Excel/CSV para carga masiva de productos.",
      "Imágenes con Cloudinary, precios configurables en CLP, diseño responsive.",
    ],
    tech: [
      { label: "Frontend", value: "Next.js 14, React, TypeScript, Tailwind CSS." },
      { label: "Backend", value: "API en Next.js, MongoDB, NextAuth, Cloudinary, xlsx. Despliegue en Vercel." },
    ],
    tags: ["Catálogo", "Tecnología", "Chile", "Corporativo", "Next.js", "MongoDB", "Admin", "Excel", "Cloudinary"],
    categoryTags: ["Web empresa", "Web profesional"],
  },
  {
    id: "despedida-solteros",
    title: "Despedida de solteros",
    tagline: "La Última Vuelta — Floripa 2026",
    url: "https://despedidabiotti.vercel.app/",
    images: [
      { src: "/portfolio/despedida-biotti.png", alt: "Landing de despedida de solteros" },
    ],
    description: "Página única para una despedida de soltero: cuenta regresiva hasta la fecha del evento, cronograma de vuelos (ida y vuelta), lista del crew confirmado y en pendiente, y sección de videos. Diseño con estética tipo misión/aventura, ideal para compartir un solo link con los invitados.",
    highlights: [
      "Cuenta regresiva en tiempo real (días, horas, minutos, segundos).",
      "Cronograma de vuelos SCL → GRU → FLN con horarios y escalas.",
      "Lista de invitados (confirmados y pendientes), música integrada (Spotify) y ambiente festivo.",
    ],
    tech: [
      { label: "Landing", value: "Una sola página responsive con countdown, timeline de vuelos y enlaces externos. Despliegue en Vercel." },
    ],
    tags: ["Despedida de soltero", "Countdown", "Evento", "Landing"],
    categoryTags: ["Despedida de solteros"],
  },
  {
    id: "despedida-maitencillo",
    title: "DESPEDIDA DE SOLTEROS MAITENCILLO",
    tagline: "Landing con cuenta regresiva, plantel e itinerario",
    url: "https://despedidajpcc.vercel.app/",
    images: [
      { src: "/portfolio/despedida-maitencillo.png", alt: "Itinerario de despedida de solteros" },
    ],
    description: "Landing para una despedida de solteros con temática playa y fiesta. El evento incluye actividades como futgolf, piscina, sunset con DJ, asado, dinámicas sorpresa, disco y día de playa. La web informa sobre fecha, lugar, itinerario detallado por día y plantel del equipo, con un juego interactivo de beer pong inspirado en el tema. Diseño moderno con animaciones y efectos visuales festivos.",
    highlights: [
      "Cuenta regresiva dinámica hasta la fecha del evento.",
      "Plantel del equipo con nombre, apodo, número de camiseta y novio señalado.",
      "Itinerario detallado para viernes y sábado: futgolf, piscina, sunset, asado, dinámicas, disco, playa.",
      "Mapa integrado con Google Maps para llegar al lugar.",
      "Beer Pong interactivo con física realista: puntuación, leaderboard en localStorage, vidas y vibración en móvil.",
      "Modal de bienvenida con mensaje inicial y días restantes.",
      "Sección de Spotify con links a artistas. Integración con Instagram, video embebido de YouTube y botón de compartir (Web Share API).",
    ],
    tech: [
      { label: "Frontend", value: "Next.js 14, React 18, Tailwind CSS y Framer Motion para animaciones." },
      { label: "Interactividad", value: "Beer Pong con Canvas 2D y física en tiempo real. Leaderboard en localStorage." },
    ],
    tags: ["Despedida de solteros", "Landing", "Evento", "Next.js", "React", "Beer Pong", "Canvas", "Framer Motion", "Chile"],
    categoryTags: ["Despedida de solteros"],
  },
  {
    id: "dentista-ejemplo",
    title: "Ejemplo página de dentista",
    tagline: "Sitio corporativo de consultorio dental",
    url: "https://dra-daniela-vera.vercel.app",
    images: [
      { src: "/portfolio/dentista-ejemplo.png", alt: "Sección Sobre mí de la página de dentista" },
    ],
    description: "Sitio web corporativo de consultorio dental en Providencia, Santiago. La web muestra servicios, formación y forma de trabajo para que los pacientes conozcan la atención y puedan contactar fácilmente. Funcionalidades para pacientes: ver tratamientos (limpieza, tapaduras, carillas, exodoncias), horarios, métodos de pago (efectivo, transferencia, tarjeta), agenda por WhatsApp, ubicación con mapa y acceso a testimonios, galería y preguntas frecuentes. La web es simple, profesional y pensada para móvil, con botones claros para agendar por WhatsApp y datos de contacto siempre visibles.",
    highlights: [
      "Secciones claras: Inicio, Sobre mí, Tratamientos, Horario, Métodos de pago, Contacto.",
      "Agenda por WhatsApp con mensaje predefinido para agendar hora.",
      "Páginas internas: Tratamientos, Testimonios, Galería clínica y FAQ.",
      "Diseño adaptable (móvil y escritorio) e integración con Google Maps.",
    ],
    tech: [
      { label: "Frontend", value: "HTML5 + CSS3 puro (sin frameworks), tipografía Manrope, diseño minimalista y responsive." },
      { label: "Funcionalidad y hosting", value: "JavaScript vanilla para menú, scroll suave y comportamiento básico. Despliegue estático en Vercel. Meta Open Graph, Twitter Card y favicon." },
    ],
    tags: ["Odontología", "Salud dental", "WhatsApp", "Landing", "HTML/CSS", "Sitio estático"],
    categoryTags: ["Web profesional"],
  },
  {
    id: "wodontologia",
    title: "Wodontologia",
    tagline: "Sitio web profesional para clínica dental — Endodoncia y Odontología General",
    url: "https://wodontologia.vercel.app",
    images: [
      { src: "/portfolio/wodontologia.png", alt: "Página de inicio de Wodontologia" },
    ],
    description: "Sitio de una sola página para clínica dental con enfoque en Endodoncia y Odontología General en Las Condes. Incluye presentación de especialidades, trayectoria del doctor, testimonios y contacto. Toda la conversión está centrada en WhatsApp: botón flotante, CTAs en cada sección y formulario de contacto que abre WhatsApp con el mensaje prellenado para agendar o consultar.",
    highlights: [
      "Una sola página con secciones: Inicio, Especialidades, Nosotros, Testimonios, Contacto y CTA de agendamiento.",
      "Integración total con WhatsApp: enlace directo, mensajes predefinidos por tipo de consulta (Endodoncia / Odontología General) y botón flotante siempre visible.",
      "Formulario de contacto que redirige a WhatsApp con nombre, teléfono y mensaje para no perder leads.",
      "Diseño responsive (móvil y escritorio), tipografías DM Sans y Playfair Display y paleta en tonos teal/verde.",
      "Contenido comercial con enfoque en derivaciones (endodoncia), facilidades de pago y reembolsos con seguros.",
    ],
    tech: [
      { label: "Frontend", value: "HTML5 semántico, CSS con variables y grid/flexbox, JavaScript vanilla (menú móvil y envío del formulario a WhatsApp). Sin frameworks ni build." },
      { label: "Despliegue", value: "Sitio estático (Vercel), sin backend; contacto 100 % vía WhatsApp." },
    ],
    tags: ["Odontología", "Endodoncia", "Landing", "WhatsApp", "Las Condes", "Sitio profesional"],
    categoryTags: ["Web profesional"],
  },
  {
    id: "imaginatuweb",
    title: "Imaginatuweb.cl",
    tagline: "Tu web profesional en tiempo récord",
    url: "https://imaginatuweb.cl",
    images: [
      { src: "/portfolio/imaginatuweb.png", alt: "Página de inicio de Imagina Tu Web" },
    ],
    description: "Sitio de presentación del servicio de creación de páginas web profesionales para emprendimientos y pymes. Propuesta de valor clara: de la idea a la realidad en menos de 24 horas. Incluye beneficios como pago único, dominio incluido, costos transparentes, opción de recibir y después pagar, y sin costos de mantención. Se capacita al cliente para que tome el control sin depender de proveedores externos. Navegación por categorías (cumpleaños, despedidas, matrimonios, eventos, web profesional, web empresas) y llamadas a la acción: cotizar por WhatsApp, ver portafolio y crear mi página.",
    highlights: [
      "Diseño minimalista y profesional, enfocado en usabilidad y propuesta de valor.",
      "Promesa de desarrollo ultrarrápido (menos de 24 horas) y transparencia en costos.",
      "Fomenta la autogestión del cliente mediante capacitación.",
      "Accesibilidad para proyectos personales y empresariales con cotización por WhatsApp.",
    ],
    tech: [
      { label: "Frontend", value: "Interfaz responsive (HTML/CSS y/o React), tipografía moderna, paleta blanco/gris/verde. JavaScript para interacciones y scroll." },
      { label: "Hosting y SEO", value: "Despliegue estático, meta Open Graph y Twitter Card para previsualización en redes." },
    ],
    tags: ["Diseño web", "Emprendimientos", "Landing", "WhatsApp", "Pago único", "Portafolio"],
    categoryTags: ["Web empresa", "Web profesional"],
  },
];

const PROJECTS_PER_PAGE = 3;

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
            <p className="text-slate-600 mt-1">{project.tagline}</p>
          </div>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors shrink-0"
            >
              <ExternalLink className="w-4 h-4" />
              Visitar sitio
            </Link>
          )}
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">{project.description}</p>

        <div className={`grid gap-4 mb-6 ${project.images.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {project.images.map((img, i) => (
            <figure key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <div className="relative aspect-video w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              {img.caption && (
                <figcaption className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 bg-slate-50 border-t border-slate-200">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-500" />
            Destacados
          </h3>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                <span className="text-[#25D366] mt-0.5">•</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Database className="w-4 h-4 text-slate-500" />
            Cómo está hecha
          </h3>
          {project.tech.map((t, i) => (
            <div key={i} className="text-sm">
              <span className="font-medium text-slate-800">{t.label}:</span>{" "}
              <span className="text-slate-600">{t.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mr-1">Categoría:</span>
          {project.categoryTags.map((cat) => (
            <Link
              key={cat}
              href={`/portafolio?categoria=${encodeURIComponent(cat)}`}
              className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-colors"
            >
              {cat}
            </Link>
          ))}
          <span className="text-slate-300 mx-1">|</span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function PortafolioContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategoryTag | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const cat = searchParams.get("categoria") as PortfolioCategoryTag | null;
    if (cat && PORTFOLIO_CATEGORIES.includes(cat)) {
      setSelectedCategory(cat);
      setCurrentPage(1);
    }
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return PROJECTS;
    return PROJECTS.filter((p) => p.categoryTags.includes(selectedCategory));
  }, [selectedCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(start, start + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="pt-12 pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4"
          >
            Portafolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mb-6"
          >
            Proyectos que hemos desarrollado: plataformas, sitios corporativos y landings para eventos.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              Todos
            </button>
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/portafolio?categoria=${encodeURIComponent(cat)}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                  window.history.pushState({}, "", `/portafolio?categoria=${encodeURIComponent(cat)}`);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          <AnimatePresence mode="wait">
            {paginatedProjects.length > 0 ? (
              paginatedProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-slate-600 py-12"
              >
                No hay proyectos en esta categoría.
              </motion.p>
            )}
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 pt-8">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>
              <span className="text-sm font-medium text-slate-600">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Team />

      <Footer />
    </main>
  );
}

function PortafolioFallback() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="animate-pulse text-slate-500">Cargando portafolio...</div>
    </main>
  );
}

export default function PortafolioPage() {
  return (
    <Suspense fallback={<PortafolioFallback />}>
      <PortafolioContent />
    </Suspense>
  );
}
