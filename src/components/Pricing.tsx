"use client";

import { motion } from "framer-motion";
import { MessageCircle, Wallet, ShieldCheck, ThumbsUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP } from "@/lib/constants";

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

const categories = [
  { name: "Cumpleaños", href: "/cumpleanos", min: 50000, max: 300000 },
  { name: "Despedida de soltero", href: "/despedidas-soltero", min: 50000, max: 120000 },
  { name: "Matrimonios", href: "/matrimonios", min: 100000, max: 350000 },
  { name: "Eventos", href: "/eventos", min: 150000, max: 800000 },
  { name: "Web profesional", href: "/web-profesional", min: 80000, max: 500000 },
  { name: "Web empresas", href: "/web-empresas", min: 100000, max: 1000000 },
];

const benefits = [
  { icon: Wallet, text: "Pago único" },
  { icon: ShieldCheck, text: "Sin costo de mantención" },
  { icon: ThumbsUp, text: "Paga cuando ya viste el producto y estás satisfecho" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(37,211,102,0.06),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#25D366] uppercase tracking-widest mb-3">
            Sin sorpresas
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Precios por tipo de proyecto
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Un solo pago. Sin cuotas mensuales. Paga cuando estés satisfecho con el resultado.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200"
                >
                  <Icon className="w-4 h-4 text-[#25D366]" />
                  {b.text}
                </span>
              );
            })}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "rounded-2xl border-2 border-slate-200 bg-white p-6",
                "hover:border-[#25D366]/40 hover:shadow-lg hover:shadow-[#25D366]/10 transition-all duration-300"
              )}
            >
              <Link href={cat.href} className="block group">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#25D366] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-slate-600 text-sm mb-2">Desde</p>
                <p className="text-2xl font-bold text-[#25D366]">
                  {formatCLP(cat.min)}
                </p>
                <p className="text-slate-500 text-sm mt-1">
                  hasta {formatCLP(cat.max)} CLP
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-slate-600 group-hover:text-[#25D366]">
                  Ver detalles y cotizar →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-slate-600 mb-4">¿No sabes qué opción elegir? Escríbenos y te ayudamos.</p>
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-all shadow-lg shadow-[#25D366]/25 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
