"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  PartyPopper,
  Stethoscope,
  Store,
  Cake,
  MessageCircle,
  MapPin,
  Share2,
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
          <PartyPopper className="w-5 h-5 text-slate-400" />
          <span className="text-slate-300 font-bold text-sm uppercase tracking-wider">
            Eventos
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Cumpleaños, despedidas, bodas y fiestas. Countdown, itinerario e invitación a tu medida.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Regalos", "Mapa", "Invitar +1"].map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-600/50 text-slate-300 border border-slate-500/40"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Cuenta regresiva mejorada */}
        <div className="mt-5 pt-4 border-t border-slate-600/60">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">
            Fiesta de cumpleaños
          </p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { value: "15", label: "días" },
              { value: "08", label: "hrs" },
              { value: "42", label: "min" },
              { value: "33", label: "seg" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-slate-700/80 border border-slate-600/50 flex flex-col items-center justify-center py-2.5"
              >
                <span className="font-mono text-lg font-bold text-emerald-400/90 tabular-nums">
                  {item.value}
                </span>
                <span className="text-[10px] text-slate-500 uppercase mt-0.5">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-slate-400 text-xs">
            <Cake className="w-3.5 h-3.5 shrink-0" />
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
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
            <Image
              src="/showcase/kine.png"
              alt="Kinesióloga"
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-slate-800 text-sm">Ejemplo Kine</h4>
            <p className="text-slate-600 text-xs">Kinesiología · Atención personalizada</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          Página de ejemplo para un profesional de la salud. Foto, servicios y agenda.
        </p>
        <div className="pt-3 border-t border-slate-200">
          <p className="text-xs text-slate-500 mb-2">Ver servicio</p>
          <div className="flex flex-wrap gap-2">
            {["Rehabilitación", "Entrenamiento", "Punción seca"].map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 p-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20">
            <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
            <span className="font-semibold text-slate-800 text-sm">Agendar por WhatsApp</span>
          </div>
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
          <span className="text-slate-800 font-bold text-sm">Mueblería</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Mueblería", icon: Store },
            { label: "Tu dirección", icon: MapPin },
            { label: "Tus redes sociales", icon: Share2 },
          ].map(({ label, icon: Icon }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200"
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-200 border border-slate-200">
            <Image
              src="/showcase/muebles-1.png"
              alt="Muebles ejemplo 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 180px"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-200 border border-slate-200">
            <Image
              src="/showcase/muebles-2.png"
              alt="Muebles ejemplo 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 180px"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-200 border border-slate-200">
            <Image
              src="/showcase/muebles-3.png"
              alt="Muebles ejemplo 3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 180px"
            />
          </div>
        </div>
        <p className="text-xs text-slate-500">Tu catálogo · Dirección · Redes · WhatsApp</p>
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
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{cat.label}</h3>
                <p className="text-sm font-medium text-slate-600 mb-2">{cat.subtitle}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{cat.description}</p>
              </div>

              <div className="mt-auto rounded-2xl transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <BrowserMockup variant={cat.variant} displayUrl={cat.displayUrl}>
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
