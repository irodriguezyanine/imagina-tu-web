"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Team() {
  return (
    <section id="equipo" className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Conoce al Fundador
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-8 p-8 rounded-2xl border border-slate-200 bg-slate-50/50"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shrink-0 bg-slate-200">
            <Image
              src="/team/ignacio-rodriguez.png"
              alt="Ignacio Rodríguez Yanine - CEO y Fundador"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 192px"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Ignacio Rodríguez Yanine
            </h3>
            <p className="text-[#25D366] font-semibold mb-2">CEO & Fundador</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ingeniero Comercial UDD. Lidera Vedisa Remates y fundó CÓRTATE.CL.
              Experiencia en ventas B2B, SaaS y desarrollo de negocios en LATAM.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
