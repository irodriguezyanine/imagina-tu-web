"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Team() {
  return (
    <section id="equipo" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[#25D366] uppercase tracking-widest mb-3">
            Equipo
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Conoce al Fundador
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-10 p-10 rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/30"
        >
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shrink-0 bg-slate-200 ring-4 ring-slate-100">
            <Image
              src="/team/ignacio-rodriguez.png"
              alt="Ignacio Rodríguez Yanine - CEO y Fundador"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 208px"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold text-slate-900">
              Ignacio Rodríguez Yanine
            </h3>
            <p className="text-[#25D366] font-semibold mb-3">CEO & Fundador</p>
            <p className="text-slate-600 leading-relaxed max-w-xl">
              Soy Ingeniero Comercial con más de cinco años de experiencia en ventas B2B y desarrollo de negocios. Siempre me ha apasionado la tecnología y la inteligencia artificial; hace poco empecé a crear páginas web por curiosidad y descubrí que tenía un talento natural para el diseño y la comunicación digital. Esa combinación —visión comercial, pasión por la IA y capacidad para materializar ideas en la web— me llevó a crear Imagina Tu Web: un espacio para ayudar a emprendedores y pequeños negocios a tener una presencia online profesional, sin que la falta de presupuesto o conocimientos técnicos les impida dar el salto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
