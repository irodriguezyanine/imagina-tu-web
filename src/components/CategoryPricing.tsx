"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, Wallet, ShieldCheck, ThumbsUp } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";

/** Formatea precio en CLP: 50000 -> "$50.000" */
function formatCLP(value: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/\s/g, "");
}

export type PricingTheme =
  | "amber"
  | "fuchsia"
  | "rose"
  | "orange"
  | "slate"
  | "blue";

const themeStyles: Record<
  PricingTheme,
  {
    sectionBg: string;
    sectionGradient: string;
    badge: string;
    badgeBorder: string;
    title: string;
    priceBg: string;
    priceBorder: string;
    priceAccent: string;
    cardBg: string;
    cardBorder: string;
    cardHover: string;
    bulletBg: string;
    bulletText: string;
  }
> = {
  amber: {
    sectionBg: "bg-stone-950",
    sectionGradient: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(251,191,36,0.08),transparent_50%)]",
    badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    badgeBorder: "border-amber-500/30",
    title: "text-white",
    priceBg: "bg-amber-500/10 border-amber-500/30",
    priceBorder: "border-amber-500/30",
    priceAccent: "text-amber-400",
    cardBg: "bg-white/[0.05] border-amber-500/20",
    cardBorder: "border-amber-500/20",
    cardHover: "hover:border-amber-400/40 hover:bg-white/[0.08]",
    bulletBg: "bg-amber-500/15",
    bulletText: "text-amber-400",
  },
  fuchsia: {
    sectionBg: "bg-slate-950",
    sectionGradient: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(217,70,239,0.08),transparent_50%)]",
    badge: "bg-fuchsia-500/20 text-fuchsia-400 border-fuchsia-500/30",
    badgeBorder: "border-fuchsia-500/30",
    title: "text-white",
    priceBg: "bg-fuchsia-500/10 border-fuchsia-500/30",
    priceBorder: "border-fuchsia-500/30",
    priceAccent: "text-fuchsia-400",
    cardBg: "bg-white/[0.05] border-fuchsia-500/20",
    cardBorder: "border-fuchsia-500/20",
    cardHover: "hover:border-fuchsia-400/40 hover:bg-white/[0.08]",
    bulletBg: "bg-fuchsia-500/15",
    bulletText: "text-fuchsia-400",
  },
  rose: {
    sectionBg: "bg-stone-950",
    sectionGradient: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(244,63,94,0.08),transparent_50%)]",
    badge: "bg-rose-500/20 text-rose-400 border-rose-500/30",
    badgeBorder: "border-rose-500/30",
    title: "text-white",
    priceBg: "bg-rose-500/10 border-rose-500/30",
    priceBorder: "border-rose-500/30",
    priceAccent: "text-rose-400",
    cardBg: "bg-white/[0.05] border-rose-500/20",
    cardBorder: "border-rose-500/20",
    cardHover: "hover:border-rose-400/40 hover:bg-white/[0.08]",
    bulletBg: "bg-rose-500/15",
    bulletText: "text-rose-400",
  },
  orange: {
    sectionBg: "bg-stone-950",
    sectionGradient: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(249,115,22,0.08),transparent_50%)]",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    badgeBorder: "border-orange-500/30",
    title: "text-white",
    priceBg: "bg-orange-500/10 border-orange-500/30",
    priceBorder: "border-orange-500/30",
    priceAccent: "text-orange-400",
    cardBg: "bg-white/[0.05] border-orange-500/20",
    cardBorder: "border-orange-500/20",
    cardHover: "hover:border-orange-400/40 hover:bg-white/[0.08]",
    bulletBg: "bg-orange-500/15",
    bulletText: "text-orange-400",
  },
  slate: {
    sectionBg: "bg-stone-950",
    sectionGradient: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(100,116,139,0.08),transparent_50%)]",
    badge: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    badgeBorder: "border-slate-500/30",
    title: "text-white",
    priceBg: "bg-slate-500/10 border-slate-500/30",
    priceBorder: "border-slate-500/30",
    priceAccent: "text-slate-300",
    cardBg: "bg-white/[0.05] border-slate-500/20",
    cardBorder: "border-slate-500/20",
    cardHover: "hover:border-slate-400/40 hover:bg-white/[0.08]",
    bulletBg: "bg-slate-500/15",
    bulletText: "text-slate-300",
  },
  blue: {
    sectionBg: "bg-stone-950",
    sectionGradient: "bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent_50%)]",
    badge: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    badgeBorder: "border-blue-500/30",
    title: "text-white",
    priceBg: "bg-blue-500/10 border-blue-500/30",
    priceBorder: "border-blue-500/30",
    priceAccent: "text-blue-400",
    cardBg: "bg-white/[0.05] border-blue-500/20",
    cardBorder: "border-blue-500/20",
    cardHover: "hover:border-blue-400/40 hover:bg-white/[0.08]",
    bulletBg: "bg-blue-500/15",
    bulletText: "text-blue-400",
  },
};

const benefits = [
  { icon: Wallet, text: "Pago único" },
  { icon: ShieldCheck, text: "Sin costo de mantención" },
  { icon: ThumbsUp, text: "Paga cuando ya viste el producto y estás satisfecho" },
];

export interface CategoryPricingProps {
  theme: PricingTheme;
  title: string;
  minPrice: number;
  maxPrice: number;
  whatsappMessage?: string;
  whatsappLabel?: string;
}

export function CategoryPricing({
  theme,
  title,
  minPrice,
  maxPrice,
  whatsappMessage,
  whatsappLabel = "Cotizar por WhatsApp",
}: CategoryPricingProps) {
  const s = themeStyles[theme];
  const message = whatsappMessage ?? WHATSAPP.message;

  return (
    <section
      id="precios"
      className={cn("relative py-24 px-4 overflow-hidden", s.sectionBg)}
    >
      <div className={cn("absolute inset-0", s.sectionGradient)} />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest border",
              s.badge
            )}
          >
            Precios transparentes
          </span>
          <h2 className={cn("mt-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight", s.title)}>
            {title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className={cn(
            "rounded-2xl border-2 p-8 sm:p-10 text-center",
            s.priceBg,
            s.priceBorder
          )}
        >
          <p className="text-white/80 text-sm sm:text-base font-medium mb-2">
            Desde
          </p>
          <p className={cn("text-3xl sm:text-4xl md:text-5xl font-bold", s.priceAccent)}>
            {formatCLP(minPrice)}
          </p>
          <p className="text-white/70 text-lg mt-2">hasta {formatCLP(maxPrice)} CLP</p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 grid sm:grid-cols-3 gap-4"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <li
                key={i}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border transition-all duration-300",
                  s.cardBg,
                  s.cardBorder,
                  s.cardHover
                )}
              >
                <span className={cn("flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center", s.bulletBg, s.bulletText)}>
                  <Icon className="w-5 h-5" />
                </span>
                <span className="text-sm font-medium text-white/90 text-left">
                  {b.text}
                </span>
              </li>
            );
          })}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all shadow-lg shadow-[#25D366]/35 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            {whatsappLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
