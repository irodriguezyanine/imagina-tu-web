"use client";

import { motion } from "framer-motion";
import { Zap, Briefcase, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "La Landing Express",
    description: "1 página, entrega en 3 días. Ideal para lanzamientos rápidos, eventos puntuales o validar una idea.",
    features: ["Diseño responsive", "CTA principal", "Formulario o WhatsApp"],
  },
  {
    icon: Briefcase,
    title: "El Profesional",
    description: "Hasta 5 secciones, SEO básico e integración con Google Maps. Perfecto para consultorios, abogados, clínicas.",
    features: ["SEO básico", "Google Maps", "Hasta 5 secciones", "Credenciales"],
  },
  {
    icon: ShoppingBag,
    title: "La Tienda Light",
    description: "Catálogo de productos + checkout por WhatsApp. Sin lógica de carrito compleja: el cliente escribe y listo.",
    features: ["Catálogo", "WhatsApp Checkout", "Menú QR (restaurantes)"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(37,211,102,0.04),transparent)]" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-[#25D366] uppercase tracking-widest mb-3">
            Paquetes
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Servicios detallados
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Elige el paquete que mejor se adapte a tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300/80 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-100 group-hover:bg-[#25D366]/10 flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-[#25D366] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-semibold text-slate-500">Cotiza por WhatsApp</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
