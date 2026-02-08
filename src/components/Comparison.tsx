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
    <section id="why-us" className="relative py-24 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            ¿Por qué ImaginaTuWeb?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            La diferencia entre trabajar con humanos y depender de constructores automáticos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-soft"
        >
          <div className="grid grid-cols-3 gap-0">
            <div className="p-4 bg-slate-100 font-semibold text-slate-600 text-sm">
              Característica
            </div>
            <div className="p-4 bg-[#25D366]/10 font-bold text-slate-900 text-center">
              ImaginaTuWeb
            </div>
            <div className="p-4 bg-slate-100 font-bold text-slate-600 text-center">
              Constructores automáticos
            </div>

            {comparison.map((row, index) => (
              <div
                key={row.feature}
                className={`col-span-3 grid grid-cols-3 gap-0 ${
                  index % 2 === 1 ? "bg-slate-50/50" : ""
                }`}
              >
                <div className="p-4 text-slate-700">{row.feature}</div>
                <div className="p-4 flex items-center justify-center">
                  {row.us ? (
                    <Check className="w-5 h-5 text-[#25D366]" />
                  ) : (
                    <X className="w-5 h-5 text-slate-300" />
                  )}
                </div>
                <div className="p-4 flex items-center justify-center">
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
