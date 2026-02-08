"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Clock,
  Image,
  CheckSquare,
  Palette,
  Smartphone,
  Share2,
  Music,
  Calendar,
} from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";

const featureIcons: Record<string, React.ElementType> = {
  mapas: MapPin,
  "cuenta regresiva": Clock,
  galería: Image,
  "galería de fotos": Image,
  confirmación: CheckSquare,
  rsvp: CheckSquare,
  diseño: Palette,
  "diseño a medida": Palette,
  responsive: Smartphone,
  compartir: Share2,
  "fácil de compartir": Share2,
  música: Music,
  musica: Music,
  calendario: Calendar,
  "formulario de confirmación": CheckSquare,
  "formulario de contacto": MessageCircle,
  portfolio: Image,
  "portfolio o proyectos": Image,
  contacto: MessageCircle,
  servicios: Palette,
};

export type CategoryLandingProps = {
  title: string;
  subtitle: string;
  description: string;
  backgroundClass: string;
  overlayClass?: string;
  features: string[];
  ctaText?: string;
  examples?: string[];
};

export function CategoryLanding({
  title,
  subtitle,
  description,
  backgroundClass,
  overlayClass = "bg-black/40",
  features,
  ctaText = "Cotizar por WhatsApp",
  examples = [],
}: CategoryLandingProps) {
  return (
    <main className="min-h-screen">
      {/* Hero con fondo de categoría */}
      <section
        className={cn(
          "relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden",
          backgroundClass
        )}
      >
        <div className={cn("absolute inset-0", overlayClass)} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-white/90 uppercase tracking-widest mb-4"
          >
            {subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <Link
              href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white",
                "bg-[#25D366] hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/30",
                "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Qué podemos incluir */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Qué podemos incluir en tu web
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
            Diseño a tu medida. Dinos qué necesitas y lo hacemos realidad.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => {
              const Icon = featureIcons[feature.toLowerCase()] || Palette;
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 capitalize">
                      {feature}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Integrado y listo para compartir con tus invitados.
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ejemplos / ideas */}
      {examples.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
              Ideas que podemos hacer realidad
            </h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">
              Cada web es única. Aquí algunas ideas que solemos incluir.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {examples.map((ex, i) => (
                <motion.li
                  key={ex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] text-sm font-semibold">
                    {i + 1}
                  </span>
                  {ex}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            ¿Listo para tu web a medida?
          </h2>
          <p className="text-slate-300 mb-8">
            Escríbenos por WhatsApp y cuéntanos tu idea. Te respondemos rápido y
            sin compromiso.
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
