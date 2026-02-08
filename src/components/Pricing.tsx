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
    <section id="pricing" className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Precios transparentes
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un solo pago. Sin sorpresas. Sin cuotas mensuales.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] font-semibold">
            Pago único — eres dueño de todo
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "rounded-2xl border p-8 transition-all",
                plan.highlight
                  ? "border-[#25D366] bg-[#25D366]/5 shadow-lg shadow-[#25D366]/10"
                  : "border-slate-200 bg-white hover:border-slate-300"
              )}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <span className="text-xs font-semibold text-[#25D366] bg-[#25D366]/10 px-2 py-1 rounded-full">Pago único</span>
              </div>
              <p className="text-slate-600 mb-6">{plan.description}</p>
              <p className="text-2xl font-bold text-slate-900 mb-6">{plan.price}</p>
              <Link
                href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-colors",
                  plan.highlight
                    ? "bg-[#25D366] text-white hover:bg-[#20BD5A]"
                    : "border-2 border-slate-200 text-slate-700 hover:border-slate-300"
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
