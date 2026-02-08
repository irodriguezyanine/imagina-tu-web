"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Stethoscope,
  Store,
  Cake,
  Calendar,
  Sofa,
  MessageCircle,
} from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";

const categories = [
  {
    id: "eventos",
    label: "Eventos",
    subtitle: "Cumpleaños, despedidas de soltero, matrimonios, fiestas",
    description:
      "Invitaciones digitales que impresionan. Countdown, mapa, confirmación de asistencia y el estilo que tú elijas. Un solo link para compartir con tus invitados.",
    displayUrl: "www.tunombre.cl",
    variant: "eventos" as const,
    example: (
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2">
          <PartyPopper className="w-5 h-5 text-fuchsia-400" />
          <span className="text-fuchsia-300 font-bold text-sm uppercase tracking-wider">
            Eventos
          </span>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed">
          Cumpleaños, despedidas, bodas y fiestas. Countdown, itinerario, RSVP y diseño a tu medida.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Countdown", "Mapa", "RSVP"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-slate-700/80">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">
            Fiesta de cumpleaños
          </p>
          <div className="flex gap-3">
            <div className="flex-1 h-10 rounded-lg bg-slate-800/80 border border-cyan-500/40 flex items-center justify-center">
              <span className="font-mono text-cyan-400 text-lg">15</span>
            </div>
            <div className="flex-1 h-10 rounded-lg bg-slate-800/80 border border-cyan-500/40 flex items-center justify-center">
              <span className="font-mono text-cyan-400 text-sm">días</span>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-2 text-slate-400 text-xs">
            <Cake className="w-3.5 h-3.5" />
            Sábado 20 — Tu casa
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "profesionales",
    label: "Profesionales o páginas propias",
    subtitle: "Kinesiología, consultorios, abogados, clínicas",
    description:
      "Tu presencia online seria y confiable. Credenciales, servicios, agenda por WhatsApp y diseño que transmita profesionalismo. Ideal para kinesiólogos, odontólogos y más.",
    displayUrl: "dr.juanitoperez.cl",
    variant: "profesionales" as const,
    example: (
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Stethoscope className="w-5 h-5 text-blue-600" />
          <span className="text-slate-800 font-bold text-sm">
            Profesionales
          </span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Kinesiólogos, odontólogos, abogados, clínicas. Credenciales, agenda por WhatsApp y diseño limpio.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Consultorio", "WhatsApp", "Credenciales"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-xs text-slate-500">Registro</p>
            <p className="font-semibold text-slate-800 text-sm">Kine. N.º 12.345</p>
          </div>
          <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="font-semibold text-slate-800 text-sm">Agendar</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <Calendar className="w-3.5 h-3.5" />
          Kinesiología · Rehabilitación
        </div>
      </div>
    ),
  },
  {
    id: "empresas",
    label: "Empresas o emprendimientos",
    subtitle: "Tiendas, talleres, pymes, catálogos",
    description:
      "Web para tu negocio: productos, servicios y contacto en un solo lugar. Catálogo, WhatsApp para pedidos y diseño que refleje tu marca. Ideal para mueblerías, talleres y pymes.",
    displayUrl: "tupyme.cl",
    variant: "comercio" as const,
    example: (
      <div className="p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Store className="w-5 h-5 text-amber-600" />
          <span className="text-slate-800 font-bold text-sm">
            Empresas
          </span>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Mueblerías, tiendas, pymes. Catálogo de productos, contacto y pedidos por WhatsApp.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Catálogo", "WhatsApp", "Productos"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 pt-4 border-t border-slate-200">
          <p className="text-xs text-slate-500 mb-2">Ejemplo: muebles</p>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center gap-1"
              >
                <Sofa className="w-6 h-6 text-amber-600/80" />
                <span className="text-[10px] font-medium text-slate-500">Mueble</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2">Pedidos por WhatsApp</p>
        </div>
      </div>
    ),
  },
];

export function LivePreviews() {
  return (
    <section
      id="showcase"
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* Fondo con más carácter */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/70 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(37,211,102,0.06),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-[#25D366] uppercase tracking-widest mb-3">
            Portafolio de ideas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Lo que construimos
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Cada proyecto es único. Estas son las categorías que dominamos y ejemplos de lo que podemos lograr.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col"
            >
              {/* Subtítulo y descripción encima del mockup */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {cat.label}
                </h3>
                <p className="text-sm font-medium text-slate-600 mb-2">
                  {cat.subtitle}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Mockup con ejemplo */}
              <div className="mt-auto rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <BrowserMockup
                  variant={cat.variant}
                  displayUrl={cat.displayUrl}
                >
                  {cat.example}
                </BrowserMockup>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
