"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Users, Database, TrendingUp } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Team } from "@/components/Team";

const projects = [
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
      "Reservas con calendario, cortes al instante tipo “pedir servicio”, chat en tiempo real y reseñas.",
    ],
    tech: [
      { label: "Frontend", value: "React + Tailwind CSS, interfaz adaptable (móvil y escritorio), mapa, calendario, chat y notificaciones." },
      { label: "Backend", value: "API en FastAPI (Python): usuarios, reservas, mensajes. Base de datos MongoDB. Autenticación segura, envío de correos, subida de imágenes." },
    ],
    tags: ["Reservas", "Barberías", "Multi-rol", "Mapa", "Chat", "Reseñas"],
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
  },
  {
    id: "despedida-biotti",
    title: "Despedida de Solteros Biotti",
    tagline: "La Última Vuelta — Floripa 2026",
    url: "https://despedidabiotti.vercel.app/",
    images: [
      { src: "/portfolio/despedida-biotti.png", alt: "Landing de la despedida de solteros Biotti" },
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
  },
];

export default function PortafolioPage() {
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
            className="text-lg text-slate-600"
          >
            Proyectos que hemos desarrollado: plataformas, sitios corporativos y landings para eventos.
          </motion.p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
                    <p className="text-slate-600 mt-1">{project.tagline}</p>
                  </div>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar sitio
                  </Link>
                </div>

                <p className="text-slate-700 leading-relaxed mb-6">{project.description}</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
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

                <div className="flex flex-wrap gap-2">
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
          ))}
        </div>
      </section>

      <Team />

      <Footer />
    </main>
  );
}
