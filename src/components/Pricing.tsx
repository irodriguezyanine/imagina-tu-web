"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP } from "@/lib/constants";

const plans = [
  {
    name: "Landing Express",
    description: "1 página en 3 días",
    price: "Cotizar",
    highlight: false,
  },
  {
    name: "El Profesional",
    description: "5 secciones, SEO, Maps",
    price: "Cotizar",
    highlight: true,
  },
  {
    name: "Tienda Light",
    description: "Catálogo + WhatsApp",
    price: "Cotizar",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(37,211,102,0.05),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-[#25D366] uppercase tracking-widest mb-3">
            Sin sorpresas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Precios transparentes
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Un solo pago. Sin cuotas mensuales.
          </p>
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 text-[#25D366] font-semibold text-sm">
            Pago único — eres dueño de todo
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "rounded-2xl border p-8 transition-all duration-300",
                plan.highlight
                  ? "border-[#25D366]/50 bg-[#25D366]/5 shadow-xl shadow-[#25D366]/10 ring-2 ring-[#25D366]/20"
                  : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <span className="text-xs font-semibold text-[#25D366] bg-[#25D366]/10 px-2.5 py-1 rounded-full">
                  Pago único
                </span>
              </div>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              <p className="text-2xl font-bold text-slate-900 mb-8">{plan.price}</p>
              <Link
                href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-300",
                  plan.highlight
                    ? "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25"
                    : "border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar por WhatsApp
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
