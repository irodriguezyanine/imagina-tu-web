"use client";

import { useState, useEffect } from "react";
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
  Music,
  Calendar,
  X,
  Sparkles,
  PartyPopper,
} from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";

const FEATURES = [
  {
    id: "mapas",
    title: "Mapas",
    icon: MapPin,
    shortDescription: "Integra direcciones o mapas para señalizar viajes o destinos.",
    modal: {
      subtitle: "Nadie se pierde",
      description: "Integra direcciones o mapas para señalizar viajes o destinos.",
      fullContent:
        "Añade mapas interactivos con todos los puntos del plan: aeropuerto, hotel, bares, playa. Tus invitados ven la ruta en un solo link y llegan sin perderse. Ideal para viajes a otra ciudad o país.",
    },
  },
  {
    id: "cuenta-regresiva",
    title: "Cuenta regresiva",
    icon: Clock,
    shortDescription: "Diseña tu cuenta regresiva y mantén alerta al grupo.",
    modal: {
      subtitle: "La emoción sube",
      description: "Diseña tu cuenta regresiva y mantén alerta al grupo.",
      fullContent:
        "Una cuenta regresiva en tiempo real hasta el día D. Días, horas, minutos y segundos para que el grupo esté con la emoción arriba. Personalizable y visible en móvil y desktop.",
    },
  },
  {
    id: "galeria",
    title: "Galería de fotos",
    icon: ImageIcon,
    shortDescription: "Recuerda todo lo que han vivido y motiva el viaje.",
    modal: {
      subtitle: "Los mejores recuerdos",
      description: "Recuerda todo lo que han vivido y motiva el viaje.",
      fullContent:
        "Una galería para subir fotos de previas, del grupo o del destino. Recuerda todo lo que han vivido juntos y sube la expectativa para el viaje. Se puede actualizar antes y después de la despedida.",
    },
  },
  {
    id: "itinerario",
    title: "Itinerario / Programa",
    icon: Calendar,
    shortDescription: "Para los más perdidos: todos los planes en un solo lugar, siempre actualizados.",
    modal: {
      subtitle: "Todo el plan en un link",
      description: "Para los más perdidos: te entregamos todos los planes de forma actualizada.",
      fullContent:
        "Cronograma del finde con horarios, vuelos, actividades y lugares. Un solo lugar para que todos sepan qué toca y cuándo. Lo actualizas tú y el grupo siempre ve la versión al día.",
    },
  },
  {
    id: "diseno",
    title: "Diseño a medida",
    icon: Palette,
    shortDescription: "Colores, tipografías y estilo que representen al grupo y la despedida.",
    modal: {
      subtitle: "Tu fiesta, tu estilo",
      description: "Colores, tipografías y estilo que representen al grupo y la despedida.",
      fullContent:
        "Diseño pensado para tu despedida: colores, tipografías, fotos de fondo y detalles que reflejen el estilo del grupo. Sin plantillas genéricas: algo que se sienta único y memorable.",
    },
  },
  {
    id: "responsive",
    title: "Responsive",
    icon: Smartphone,
    shortDescription: "Se ve perfecto en el celular y en el computador. Donde sea que abran el link.",
    modal: {
      subtitle: "Donde sea que estén",
      description: "Se ve perfecto en el celular y en el computador. Donde sea que abran el link.",
      fullContent:
        "La web se adapta a móvil, tablet y desktop. La mayoría va a entrar desde el celular; por eso priorizamos que se vea impecable ahí, sin perder calidad en pantallas grandes.",
    },
  },
  {
    id: "compartir",
    title: "Fácil de compartir",
    icon: Share2,
    shortDescription: "Un solo link para el grupo de WhatsApp. Todos con la misma info al día.",
    modal: {
      subtitle: "Un link, todo el grupo",
      description: "Un solo link para el grupo de WhatsApp. Todos con la misma info al día.",
      fullContent:
        "Un único link para compartir en el grupo de WhatsApp o por redes. Sin instalaciones ni registros: quien lo abre ve toda la info actualizada. Así nadie se queda con la versión vieja del plan.",
    },
  },
  {
    id: "musica",
    title: "Música o videos",
    icon: Music,
    shortDescription: "Integra videos de YouTube, canciones de Spotify o lo que se te ocurra en tus diseños.",
    modal: {
      subtitle: "Vibra y ambiente",
      description: "Integra videos de YouTube, canciones de Spotify o todo lo que se te ocurra en tus diseños.",
      fullContent:
        "Incorpora videos de YouTube, playlists de Spotify o cualquier contenido que sume ambiente. La banda sonora de la despedida, trailers del destino o mensajes en video: todo en la misma web.",
    },
  },
];

type FeatureItem = (typeof FEATURES)[number];

function FeatureModal({
  feature,
  onClose,
}: {
  feature: FeatureItem;
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
          "bg-gradient-to-b from-slate-900 to-slate-900/95",
          "border-2 border-transparent",
          "shadow-2xl shadow-fuchsia-500/20",
          "ring-2 ring-fuchsia-400/30 ring-offset-2 ring-offset-slate-900"
        )}
        style={{
          boxShadow: "0 0 0 1px rgba(217,70,239,0.2), 0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px -15px rgba(217,70,239,0.25)",
        }}
      >
        {/* Barra superior tipo fiesta */}
        <div className="h-1.5 bg-gradient-to-r from-fuchsia-500 via-violet-500 via-cyan-400 to-amber-400" />
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500/30 to-violet-500/30 flex items-center justify-center text-fuchsia-400 border border-fuchsia-500/30 shadow-lg shadow-fuchsia-500/10">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm font-semibold text-fuchsia-400">{feature.modal.subtitle}</p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">{feature.modal.description}</p>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 border-l-4 border-l-fuchsia-500">
            <p className="text-slate-200 leading-relaxed text-sm">
              {feature.modal.fullContent}
            </p>
          </div>
          <p className="mt-4 text-xs text-slate-500">Clic fuera o Escape para cerrar</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function DespedidaLanding() {
  const [modalFeature, setModalFeature] = useState<FeatureItem | null>(null);

  const content = (
    <div role="main" className="min-h-screen bg-slate-950">
      {/* Hero: foto de fiesta de fondo + overlay morado */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/despedida-fiesta-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        {/* Overlay violeta/fucsia que deja ver la foto */}
        <div className="absolute inset-0 bg-gradient-to-b from-violet-900/75 via-fuchsia-900/65 to-indigo-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
        {/* Detalle tipo neón sutil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"2\" cy=\"2\" r=\"0.8\" fill=\"%23fff\" fill-opacity=\"0.04\"/%3E%3C/svg%3E')] opacity-90" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-sm font-semibold uppercase tracking-widest mb-6"
          >
            <PartyPopper className="w-4 h-4 text-amber-300" />
            Todo en un solo link
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
          >
            Web para tu despedida de soltero
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            Organiza la despedida con estilo. Itinerario, lugares, fotos y todo lo que el grupo necesite ver. Un solo link para compartir en el grupo y que nadie se pierda el plan.
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
                "shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-violet-900/50"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              Pedir mi web de despedida
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Qué podemos incluir — estilo fiesta, tarjetas clicables */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(217,70,239,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"1\" cy=\"1\" r=\"0.6\" fill=\"%23ffffff\" fill-opacity=\"0.03\"/%3E%3C/svg%3E')]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Qué podemos incluir
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Todo lo que tu despedida necesita
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Clic en cada tarjeta para ver más detalle. Cada opción con su propia descripción.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                    "bg-white/[0.06] border border-white/10 backdrop-blur-sm",
                    "hover:bg-white/[0.1] hover:border-fuchsia-400/50 hover:shadow-xl hover:shadow-fuchsia-500/15",
                    "transition-all duration-300 cursor-pointer group",
                    "focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50 focus:ring-offset-2 focus:ring-offset-slate-950"
                  )}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/25 to-violet-500/25 flex items-center justify-center text-fuchsia-400 border border-fuchsia-500/20 group-hover:from-fuchsia-500/40 group-hover:to-violet-500/40 group-hover:shadow-lg group-hover:shadow-fuchsia-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {feature.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más detalle →
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ideas que podemos hacer realidad */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(139,92,246,0.08),transparent)]" />
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
            className="text-slate-400 text-center max-w-xl mx-auto mb-12"
          >
            Cada web es única. Algunas ideas que solemos incluir.
          </motion.p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Itinerario del finde con horarios y lugares",
              "Mapa con todos los puntos del recorrido",
              "Cuenta regresiva hasta la despedida",
              "Galería de fotos de la fiesta",
              "Diseño que refleje el estilo del grupo",
              "Link único para compartir en el grupo",
            ].map((ex, i) => (
              <motion.li
                key={ex}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-fuchsia-500/30 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-500/25 to-violet-500/25 flex items-center justify-center text-fuchsia-400 text-sm font-bold border border-fuchsia-500/20">
                  {i + 1}
                </span>
                <span className="text-slate-300">{ex}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA final — estilo fiesta */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/95 via-violet-900 to-indigo-900/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"1\" cy=\"1\" r=\"0.5\" fill=\"%23fff\" fill-opacity=\"0.03\"/%3E%3C/svg%3E')]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para tu web de despedida?
          </h2>
          <p className="text-slate-300 mb-8">
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

  return content;
}
