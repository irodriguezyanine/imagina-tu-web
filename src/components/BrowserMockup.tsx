"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  children: React.ReactNode;
  className?: string;
  variant?: "eventos" | "profesionales" | "comercio";
  /** URL completa mostrada en la barra del navegador (ej. www.tunombre.cl) */
  displayUrl?: string;
}

export function BrowserMockup({
  children,
  className,
  variant = "profesionales",
  displayUrl = "sitio.ejemplo.cl",
}: BrowserMockupProps) {
  /** Tres tonos de gris distintos: oscuro (eventos), claro (profesionales), medio (comercio) */
  const variants = {
    eventos:
      "bg-gradient-to-b from-slate-800 via-slate-800/98 to-slate-900 border-slate-600/30 shadow-xl shadow-slate-900/25",
    profesionales:
      "bg-white border-slate-200 shadow-lg shadow-slate-200/50",
    comercio:
      "bg-gradient-to-b from-slate-100 to-slate-50 border-slate-300/60 shadow-lg shadow-slate-300/30",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "rounded-2xl overflow-hidden border flex flex-col",
        variants[variant],
        className
      )}
    >
      {/* Browser chrome */}
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-3 border-b",
          variant === "eventos"
            ? "bg-slate-900/90 border-slate-600/50"
            : variant === "comercio"
            ? "bg-slate-200/80 border-slate-300"
            : "bg-slate-100/90 border-slate-200"
        )}
      >
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/90" />
        </div>
        <div
          className={cn(
            "flex-1 min-w-0 mx-3 py-2 px-4 rounded-lg text-xs font-mono truncate",
            variant === "eventos"
              ? "bg-slate-700/80 text-slate-400 border border-slate-600/50"
              : variant === "comercio"
              ? "bg-white text-slate-500 border border-slate-300"
              : "bg-white text-slate-500 border border-slate-200"
          )}
        >
          {variant === "eventos" ? (
            <span className="text-slate-500">https://</span>
          ) : null}
          {displayUrl}
        </div>
      </div>
      {/* Content area */}
      <div className="flex-1 min-h-[260px] overflow-hidden">{children}</div>
    </motion.div>
  );
}
