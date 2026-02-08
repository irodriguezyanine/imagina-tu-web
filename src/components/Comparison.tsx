"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparison = [
  { feature: "Pago único", us: true, them: false },
  { feature: "Dueño de tu código", us: true, them: false },
  { feature: "Soporte humano real", us: true, them: false },
  { feature: "Diseño a medida", us: true, them: false },
  { feature: "Cuotas mensuales", us: false, them: true },
  { feature: "Anuncios en tu sitio", us: false, them: true },
  { feature: "Soporte imposible", us: false, them: true },
];

export function Comparison() {
  return (
    <section id="why-us" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(15,23,42,0.02),transparent)]" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-[#25D366] uppercase tracking-widest mb-3">
            La diferencia
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            ¿Por qué ImaginaTuWeb?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Trabajar con personas vs. depender de constructores automáticos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg shadow-slate-200/30"
        >
          <div className="grid grid-cols-3 gap-0">
            <div className="p-5 bg-slate-100/80 font-semibold text-slate-600 text-sm border-b border-slate-200">
              Característica
            </div>
            <div className="p-5 bg-[#25D366]/10 font-bold text-slate-900 text-center border-b border-[#25D366]/20">
              ImaginaTuWeb
            </div>
            <div className="p-5 bg-slate-100/80 font-bold text-slate-600 text-center border-b border-slate-200">
              Constructores automáticos
            </div>

            {comparison.map((row, index) => (
              <div
                key={row.feature}
                className={`col-span-3 grid grid-cols-3 gap-0 ${
                  index % 2 === 1 ? "bg-slate-50/60" : "bg-white"
                }`}
              >
                <div className="p-5 text-slate-700 font-medium">{row.feature}</div>
                <div className="p-5 flex items-center justify-center">
                  {row.us ? (
                    <Check className="w-6 h-6 text-[#25D366]" />
                  ) : (
                    <X className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <div className="p-5 flex items-center justify-center">
                  {row.them ? (
                    <X className="w-5 h-5 text-red-400" />
                  ) : (
                    <Check className="w-5 h-5 text-slate-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
