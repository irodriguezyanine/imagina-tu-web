"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP, CONTACT } from "@/lib/constants";

const footerLinks = [
  { href: "/", label: "Inicio" },
  { href: "/cumpleanos", label: "Cumpleaños" },
  { href: "/matrimonios", label: "Matrimonios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/web-profesional", label: "Web profesional" },
  { href: "/web-empresas", label: "Web empresas" },
  { href: "/portafolio", label: "Portafolio" },
];

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-slate-900 text-slate-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="text-2xl font-bold text-white">
              IMAGINATUWEB.CL
            </Link>
            <p className="mt-2 text-sm text-slate-400 max-w-xs">
              Diseño web humano en tiempo récord. Pago único, sin cuotas.
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {CONTACT.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                {CONTACT.address}
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6">
            <nav className="flex flex-wrap gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#25D366] hover:text-[#20BD5A] transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </nav>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ImaginaTuWeb. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
