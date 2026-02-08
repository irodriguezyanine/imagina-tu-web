"use client";

import { motion } from "framer-motion";
import { MessageCircle, LayoutGrid, Wallet, Globe, Receipt, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP } from "@/lib/constants";

const miniCards = [
  { label: "Pago único", icon: Wallet },
  { label: "Dominio incluido", icon: Globe },
  { label: "Costos transparentes", icon: Receipt },
  { label: "Recibe y después paga", icon: CreditCard },
  { label: "Sin costos de mantención", icon: ShieldCheck },
];

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden">
      {/* Fondos con profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-30%,rgba(37,211,102,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(15,23,42,0.03),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
        >
          Tu web profesional en tiempo récord.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-lg sm:text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto"
        >
          De la idea a la realidad en menos de 24 horas.
        </motion.p>

        {/* Cuerpo */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
        >
          Cuéntanos qué necesitas y te lo haremos realidad.
        </motion.p>

        {/* Mini tarjetas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {miniCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
              className={cn(
                "inline-flex items-center gap-2.5 px-4 py-3 rounded-xl",
                "bg-white/90 border border-slate-200/90 shadow-sm shadow-slate-200/50",
                "backdrop-blur-sm",
                "hover:border-emerald-200/80 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-300"
              )}
            >
              <card.icon className="w-4 h-4 text-[#25D366] shrink-0" />
              <span className="text-sm font-semibold text-slate-700">{card.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Texto pequeño debajo de las tarjetas */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed"
        >
          Te capacitamos para que tomes el control, sin proveedores externos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-white text-base",
              "bg-[#25D366] hover:bg-[#20BD5A] transition-all duration-300",
              "shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-[1.02]",
              "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </Link>
          <Link
            href="/portafolio"
            className={cn(
              "inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base",
              "border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/80",
              "transition-all duration-300 hover:scale-[1.02]"
            )}
          >
            <LayoutGrid className="w-5 h-5" />
            Ver Portafolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
