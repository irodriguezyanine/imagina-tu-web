"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  children: React.ReactNode;
  className?: string;
  variant?: "eventos" | "profesionales" | "comercio";
  title?: string;
  url?: string;
}

export function BrowserMockup({
  children,
  className,
  variant = "profesionales",
  title = "sitio.ejemplo.cl",
  url = "https://",
}: BrowserMockupProps) {
  const variants = {
    eventos: "bg-gradient-to-b from-slate-950 via-violet-950 to-slate-950 border-violet-500/30",
    profesionales: "bg-white border-slate-200",
    comercio: "bg-slate-50 border-slate-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-2xl overflow-hidden border shadow-browser",
        "flex flex-col",
        variants[variant],
        className
      )}
    >
      {/* Browser chrome */}
      <div
        className={cn(
          "flex items-center gap-2 px-4 py-3 border-b",
          variant === "eventos"
            ? "bg-slate-900/80 border-slate-700"
            : "bg-slate-100 border-slate-200"
        )}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div
          className={cn(
            "flex-1 mx-4 py-1.5 px-4 rounded-lg text-xs font-mono",
            variant === "eventos"
              ? "bg-slate-800 text-slate-400"
              : "bg-white text-slate-500 border border-slate-200"
          )}
        >
          {url}
          {title}
        </div>
      </div>
      {/* Content area */}
      <div className="flex-1 min-h-[280px] overflow-hidden">{children}</div>
    </motion.div>
  );
}
