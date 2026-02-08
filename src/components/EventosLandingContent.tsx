"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Clock,
  Image as ImageIcon,
  Palette,
  Smartphone,
  Share2,
  CheckSquare,
  X,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";

const FEATURES = [
  {
    id: "programa",
    title: "Programa o calendario",
    icon: CalendarDays,
    shortDescription: "Horarios, salas y actividades del evento en un solo lugar para que nadie se pierda nada.",
    modal: {
      subtitle: "Todo el evento ordenado",
      description: "Horarios, salas y actividades del evento en un solo lugar.",
      fullContent:
        "Sección con el programa completo: conferencias, talleres, bloques horarios y salas. Ideal para congresos, lanzamientos o jornadas. Los asistentes ven la agenda actualizada desde el mismo link.",
    },
  },
  {
    id: "mapas",
    title: "Mapas",
    icon: MapPin,
    shortDescription: "Ubicación del recinto, estacionamiento y puntos clave con Waze y Google Maps.",
    modal: {
      subtitle: "Que nadie se pierda",
      description: "Ubicación del recinto, estacionamiento y puntos clave con Waze y Google Maps.",
      fullContent:
        "Enlaces directos a Waze y Google Maps para el lugar del evento, estacionamiento o sedes. Una toque y los asistentes tienen la ruta. Perfecto para eventos en recintos, parques o múltiples locaciones.",
    },
  },
  {
    id: "cuenta-regresiva",
    title: "Cuenta regresiva",
    icon: Clock,
    shortDescription: "Cuenta regresiva hasta el día del evento. Días, horas, minutos y segundos.",
    modal: {
      subtitle: "La expectativa hasta el día D",
      description: "Cuenta regresiva hasta el día del evento en tiempo real.",
      fullContent:
        "Cuenta regresiva en tiempo real hasta la fecha del evento. Los asistentes ven cuánto falta cada vez que entran al link. Muy útil para congresos, lanzamientos o festivales.",
    },
  },
  {
    id: "inscripcion",
    title: "Inscripción / confirmación",
    icon: CheckSquare,
    shortDescription: "Formulario de inscripción o confirmación de asistencia. Lista de asistentes ordenada.",
    modal: {
      subtitle: "Controla tu aforo",
      description: "Formulario de inscripción o confirmación de asistencia.",
      fullContent:
        "Los asistentes se inscriben o confirman desde la misma web. Nombre, correo, empresa o mensaje. Tú recibes todo ordenado y sabes cuántos serán para aforo, catering o credenciales.",
    },
  },
  {
    id: "galeria",
    title: "Galería de fotos",
    icon: ImageIcon,
    shortDescription: "Para que asistentes y equipo suban fotos durante y después del evento.",
    modal: {
      subtitle: "Todos los recuerdos en un lugar",
      description: "Para que asistentes y equipo suban fotos durante y después del evento.",
      fullContent:
        "Galería para que los asistentes suban fotos del evento o que tú publiques el material oficial. Se puede habilitar antes (previas, acreditación) y después. Todo en un solo link.",
    },
  },
  {
    id: "diseno",
    title: "Diseño a medida",
    icon: Palette,
    shortDescription: "Estilo corporativo, festivo o temático según el tipo de evento.",
    modal: {
      subtitle: "Tu evento, tu imagen",
      description: "Estilo corporativo, festivo o temático según el tipo de evento.",
      fullContent:
        "Diseño pensado para tu evento: corporativo para congresos, dinámico para festivales o elegante para lanzamientos. Colores y tipografía alineados con tu marca o con la identidad del evento.",
    },
  },
  {
    id: "responsive",
    title: "Responsive",
    icon: Smartphone,
    shortDescription: "Se ve perfecto en celular y computador. Un solo link para todos.",
    modal: {
      subtitle: "Donde sea que abran el link",
      description: "Se ve perfecto en celular y computador. Un solo link para todos.",
      fullContent:
        "La web se adapta a móvil, tablet y desktop. La mayoría abrirá desde el celular; por eso priorizamos que se vea impecable en cualquier dispositivo.",
    },
  },
  {
    id: "compartir",
    title: "Fácil de compartir",
    icon: Share2,
    shortDescription: "Un solo link para enviar por WhatsApp, correo o redes. Info siempre al día.",
    modal: {
      subtitle: "Un link, toda la información",
      description: "Un solo link para enviar por WhatsApp, correo o redes. Info siempre al día.",
      fullContent:
        "Un único link para compartir con asistentes, patrocinadores o prensa. Sin instalaciones: quien lo abre ve programa, mapa, inscripción y novedades, siempre actualizado.",
    },
  },
];

export type EventosFeatureItem = (typeof FEATURES)[number];

function FeatureModal({
  feature,
  onClose,
}: {
  feature: EventosFeatureItem;
  onClose: () => void;
}) {
  const Icon = feature.icon;
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-lg rounded-2xl overflow-hidden",
          "bg-gradient-to-b from-stone-900 to-stone-900/95",
          "border-2 border-orange-400/40",
          "shadow-2xl shadow-orange-500/10",
          "ring-2 ring-orange-400/20 ring-offset-2 ring-offset-stone-900"
        )}
      >
        <div className="h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500" />
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm font-semibold text-orange-400">{feature.modal.subtitle}</p>
            </div>
          </div>
          <p className="text-stone-300 leading-relaxed mb-4">{feature.modal.description}</p>
          <div className="p-4 rounded-xl bg-white/5 border border-orange-500/20 border-l-4 border-l-orange-500">
            <p className="text-stone-200 leading-relaxed text-sm">
              {feature.modal.fullContent}
            </p>
          </div>
          <p className="mt-4 text-xs text-stone-500">Clic fuera o Escape para cerrar</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

type Props = {
  modalFeature: EventosFeatureItem | null;
  setModalFeature: (f: EventosFeatureItem | null) => void;
};

export function EventosLandingContent({ modalFeature, setModalFeature }: Props) {
  return (
    <div role="main" className="min-h-screen bg-stone-950">
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/eventos-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/75 via-amber-800/70 to-stone-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-orange-400/30 text-white/95 text-sm font-semibold uppercase tracking-widest mb-6"
          >
            <CalendarDays className="w-4 h-4 text-orange-300" />
            Web para tu evento
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
          >
            Congresos, lanzamientos, fiestas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Da presencia a tu evento con una web propia. Programa, mapas, inscripción o confirmación y todo en un solo link para que tus asistentes tengan la info al día.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-10"
          >
            <Link
              href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white",
                "bg-[#25D366] hover:bg-[#20BD5A] transition-all duration-300",
                "shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-orange-900/50"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              Pedir mi web de evento
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-orange-950/30 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(249,115,22,0.06),transparent_50%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Qué podemos incluir
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Todo para que tu evento brille
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Diseño a tu medida. Clic en cada tarjeta para ver más detalle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.button
                  key={feature.id}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setModalFeature(feature)}
                  className={cn(
                    "flex items-start gap-4 p-5 rounded-2xl text-left",
                    "bg-white/[0.05] border-2 border-orange-500/30 backdrop-blur-sm",
                    "hover:bg-white/[0.08] hover:border-orange-400/50 hover:shadow-xl hover:shadow-orange-500/10",
                    "transition-all duration-300 cursor-pointer group"
                  )}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30 group-hover:bg-orange-500/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed line-clamp-2">
                      {feature.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más detalle →
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(249,115,22,0.05),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-3"
          >
            Ideas que podemos hacer realidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-stone-400 text-center max-w-xl mx-auto mb-12"
          >
            Cada web es única. Pensada para tu evento en Chile.
          </motion.p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Programa del evento con horarios y salas",
              "Mapa del recinto o ubicaciones",
              "Cuenta regresiva hasta el día del evento",
              "Formulario de inscripción o confirmación",
              "Galería de fotos durante y después",
              "Diseño corporativo o festivo según el evento",
            ].map((ex, i) => (
              <motion.li
                key={ex}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-orange-500/20 hover:border-orange-500/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold border border-orange-500/30">
                  {i + 1}
                </span>
                <span className="text-stone-300">{ex}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/95 via-stone-900 to-amber-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(249,115,22,0.06),transparent)]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para la web de tu evento?
          </h2>
          <p className="text-stone-300 mb-8">
            Escríbenos por WhatsApp y cuéntanos tu idea. Te respondemos rápido y sin compromiso.
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all shadow-lg shadow-[#25D366]/35 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </Link>
        </div>
      </section>

      <Footer />

      <AnimatePresence mode="wait">
        {modalFeature && (
          <FeatureModal
            key={modalFeature.id}
            feature={modalFeature}
            onClose={() => setModalFeature(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
