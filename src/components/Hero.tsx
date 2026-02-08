"use client";

import { motion } from "framer-motion";
import { MessageCircle, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,211,102,0.08),transparent)]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-slate-500 uppercase tracking-widest mb-6"
        >
          Diseño web con IA
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight"
        >
          Tu sitio web profesional en un día.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Cuéntame qué necesitas y trataremos de hacerlo realidad.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-3 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Pago único en el dominio que quieras (.cl o .com), transparentamos todos los costos y te enseñamos si quieres.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white",
              "bg-[#25D366] hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/25",
              "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            )}
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </Link>
          <Link
            href="/portafolio"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold",
              "border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
              "transition-colors"
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
