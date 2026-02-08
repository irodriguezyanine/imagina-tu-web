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
  const variants = {
    eventos:
      "bg-gradient-to-b from-slate-950 via-violet-950/95 to-slate-950 border-violet-500/20 shadow-xl shadow-violet-950/20",
    profesionales:
      "bg-white border-slate-200 shadow-lg shadow-slate-200/50",
    comercio:
      "bg-white border-slate-200 shadow-lg shadow-slate-200/50",
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
            ? "bg-slate-900/90 border-slate-700/80"
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
              ? "bg-slate-800/90 text-slate-400 border border-slate-700/50"
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
