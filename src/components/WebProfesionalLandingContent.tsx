"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Palette,
  Smartphone,
  Share2,
  X,
  Briefcase,
  Sparkles,
  FolderOpen,
  ListChecks,
  Mail,
} from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { CategoryPricing } from "@/components/CategoryPricing";

const FEATURES = [
  {
    id: "portfolio",
    title: "Portfolio o proyectos",
    icon: FolderOpen,
    shortDescription: "Galería de trabajos realizados para que tus clientes vean tu experiencia.",
    modal: {
      subtitle: "Tu trabajo habla por ti",
      description: "Galería de trabajos realizados para que tus clientes vean tu experiencia.",
      fullContent:
        "Sección dedicada a tu portfolio: proyectos, casos de éxito o trabajos destacados. Con fotos, descripción breve y enlaces si aplica. Ideal para freelancers, consultores, diseñadores o cualquier profesional que quiera mostrar lo que hace.",
    },
  },
  {
    id: "servicios",
    title: "Servicios",
    icon: ListChecks,
    shortDescription: "Qué ofreces, paquetes o precios. Todo claro para que te contacten con confianza.",
    modal: {
      subtitle: "Claridad desde el primer clic",
      description: "Qué ofreces, paquetes o precios. Todo claro para que te contacten con confianza.",
      fullContent:
        "Página o sección de servicios: qué haces, cómo trabajas y opcionalmente precios o paquetes. Los visitantes entienden tu propuesta de valor y saben cuándo escribirte o llamarte. Muy útil para kinesiólogos, odontólogos, abogados y profesionales independientes.",
    },
  },
  {
    id: "contacto",
    title: "Formulario de contacto",
    icon: Mail,
    shortDescription: "Formulario o botón directo a WhatsApp. Que te encuentren fácil.",
    modal: {
      subtitle: "Que te encuentren fácil",
      description: "Formulario o botón directo a WhatsApp. Que te encuentren fácil.",
      fullContent:
        "Incluimos formulario de contacto (nombre, correo, mensaje) o enlace directo a WhatsApp. Tú eliges cómo prefieres recibir consultas. Sin pasos de por medio: el cliente escribe y listo.",
    },
  },
  {
    id: "diseno",
    title: "Diseño a medida",
    icon: Palette,
    shortDescription: "Colores y estilo que reflejen tu marca personal y tu profesión.",
    modal: {
      subtitle: "Tu marca, tu estilo",
      description: "Colores y estilo que reflejen tu marca personal y tu profesión.",
      fullContent:
        "Diseño pensado para ti: serio y confiable para salud o derecho, creativo para diseño, minimalista para consultoría. Sin plantillas genéricas; algo que transmita quién eres y en qué te especializas.",
    },
  },
  {
    id: "responsive",
    title: "Responsive",
    icon: Smartphone,
    shortDescription: "Se ve perfecto en celular y computador. Un solo link para todos.",
    modal: {
      subtitle: "Donde sea que te busquen",
      description: "Se ve perfecto en celular y computador. Un solo link para todos.",
      fullContent:
        "La web se adapta a móvil, tablet y desktop. La mayoría de tus clientes te buscará desde el celular; por eso priorizamos que tu sitio se vea impecable en cualquier dispositivo.",
    },
  },
  {
    id: "compartir",
    title: "Fácil de compartir",
    icon: Share2,
    shortDescription: "Un solo link para tu CV, tarjeta o redes. Tu presencia siempre al día.",
    modal: {
      subtitle: "Un link, toda tu información",
      description: "Un solo link para tu CV, tarjeta o redes. Tu presencia siempre al día.",
      fullContent:
        "Un único link para poner en tu tarjeta, firma de correo, LinkedIn o Instagram. Quien lo abre ve tus servicios, portfolio y contacto, siempre actualizado. Tu web como centro de tu presencia online.",
    },
  },
];

export type WebProfesionalFeatureItem = (typeof FEATURES)[number];

function FeatureModal({
  feature,
  onClose,
}: {
  feature: WebProfesionalFeatureItem;
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
          "border-2 border-slate-400/40",
          "shadow-2xl shadow-slate-500/10",
          "ring-2 ring-slate-400/20 ring-offset-2 ring-offset-stone-900"
        )}
      >
        <div className="h-1.5 bg-gradient-to-r from-slate-500 via-slate-400 to-blue-500" />
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-slate-500/20 flex items-center justify-center text-slate-300 border border-slate-500/30">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm font-semibold text-slate-400">{feature.modal.subtitle}</p>
            </div>
          </div>
          <p className="text-stone-300 leading-relaxed mb-4">{feature.modal.description}</p>
          <div className="p-4 rounded-xl bg-white/5 border border-slate-500/20 border-l-4 border-l-slate-400">
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
  modalFeature: WebProfesionalFeatureItem | null;
  setModalFeature: (f: WebProfesionalFeatureItem | null) => void;
  children?: React.ReactNode;
};

export function WebProfesionalLandingContent({ modalFeature, setModalFeature, children }: Props) {
  return (
    <div role="main" className="min-h-screen bg-stone-950">
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
      >
        {children}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/75 to-stone-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-slate-400/30 text-white/95 text-sm font-semibold uppercase tracking-widest mb-6"
          >
            <Briefcase className="w-4 h-4 text-slate-300" />
            Tu presencia en internet
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
          >
            Web para profesionales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            ¿Eres freelancer, consultor o profesional independiente? Una web te da credibilidad y hace que te encuentren. Portfolio, servicios, testimonios y contacto en un solo sitio.
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
                "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-slate-900/50"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              Pedir mi web profesional
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-slate-950/40 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(100,116,139,0.08),transparent_50%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-slate-400" />
              Qué podemos incluir
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Todo para tu presencia online
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
                    "bg-white/[0.05] border-2 border-slate-500/30 backdrop-blur-sm",
                    "hover:bg-white/[0.08] hover:border-slate-400/50 hover:shadow-xl hover:shadow-slate-500/10",
                    "transition-all duration-300 cursor-pointer group"
                  )}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-500/20 flex items-center justify-center text-slate-300 border border-slate-500/30 group-hover:bg-slate-500/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed line-clamp-2">
                      {feature.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(100,116,139,0.05),transparent)]" />
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
            Cada web es única. Pensada para tu profesión en Chile.
          </motion.p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Página de inicio con tu propuesta de valor",
              "Sección de servicios con precios o paquetes",
              "Portfolio o galería de trabajos realizados",
              "Testimonios de clientes",
              "Formulario de contacto o link a WhatsApp",
              "Diseño que refleje tu marca personal",
            ].map((ex, i) => (
              <motion.li
                key={ex}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-slate-500/20 hover:border-slate-500/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-500/20 flex items-center justify-center text-slate-400 text-sm font-bold border border-slate-500/30">
                  {i + 1}
                </span>
                <span className="text-stone-300">{ex}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <CategoryPricing
        theme="slate"
        title="Precios para tu web profesional"
        minPrice={80000}
        maxPrice={500000}
        whatsappMessage="Hola, quiero cotizar mi web profesional"
        whatsappLabel="Cotizar por WhatsApp"
      />

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-stone-900 to-slate-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(100,116,139,0.06),transparent)]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para tu web profesional?
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
