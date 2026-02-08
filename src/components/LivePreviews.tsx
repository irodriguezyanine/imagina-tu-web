"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Stethoscope,
  Store,
  UtensilsCrossed,
} from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";

export function LivePreviews() {
  return (
    <section
      id="showcase"
      className="relative py-24 px-4 bg-slate-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Lo que construimos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cada proyecto es único. Aquí algunas categorías que dominamos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Eventos & Hype */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <BrowserMockup variant="eventos" title="despedidabiotti.vercel.app">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <PartyPopper className="w-5 h-5 text-fuchsia-400" />
                  <span className="text-fuchsia-300 font-semibold text-sm uppercase tracking-wider">
                    Eventos & Hype
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Despedidas, bodas, cumpleaños exclusivos. Dark mode, neones, countdown,
                  itinerarios. Incluye invitación de boda con RSVP.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Countdown", "Timeline", "RSVP"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <div className="flex gap-3">
                    <div className="flex-1 h-8 rounded bg-slate-800/80 border border-cyan-500/40 flex items-center justify-center">
                      <span className="font-mono text-cyan-400 text-lg">102</span>
                    </div>
                    <div className="flex-1 h-8 rounded bg-slate-800/80 border border-cyan-500/40 flex items-center justify-center">
                      <span className="font-mono text-cyan-400 text-sm">días</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">
                    MISSION START IN
                  </p>
                </div>
              </div>
            </BrowserMockup>
          </motion.div>

          {/* Salud & Profesionales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <BrowserMockup variant="profesionales" title="dra-daniela-vera.vercel.app">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-800 font-semibold text-sm">
                    Salud & Profesionales
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Odontólogos, kinesiólogos, abogados, clínicas. Diseño limpio, credenciales,
                  botón de agenda por WhatsApp. Variante estudio jurídico: azul oscuro y oro.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Consultorio", "WhatsApp", "Credenciales"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex gap-3">
                  <div className="flex-1 p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate-500">Registro</p>
                    <p className="font-semibold text-slate-800">N.º 711800</p>
                  </div>
                  <div className="flex-1 p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <p className="text-xs text-slate-500">Agenda</p>
                    <p className="font-semibold text-blue-600">WhatsApp</p>
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </motion.div>

          {/* Comercio & Pymes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <BrowserMockup variant="comercio" title="cortate.cl">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Store className="w-5 h-5 text-amber-600" />
                  <span className="text-slate-800 font-semibold text-sm">
                    Comercio & Pymes
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Restaurantes con menú QR, artesanos, tiendas. Catálogo minimalista,
                  checkout por WhatsApp. Sin carritos complejos.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Menú QR", "Catálogo", "WhatsApp"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-amber-100 text-amber-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-slate-200/80 flex items-center justify-center"
                    >
                      <UtensilsCrossed className="w-6 h-6 text-slate-400" />
                    </div>
                  ))}
                </div>
              </div>
            </BrowserMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
