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
    <section id="services" className="relative py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Servicios detallados
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Elige el paquete que mejor se adapte a tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-soft hover:shadow-card hover:border-slate-300 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
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
