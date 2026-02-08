"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";

const navLinks = [
  { href: "#showcase", label: "Portafolio" },
  { href: "#services", label: "Servicios" },
  { href: "#why-us", label: "Por qué nosotros" },
  { href: "#pricing", label: "Precios" },
  { href: "#equipo", label: "Equipo" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-bold text-slate-900">
          IMAGINATUWEB.CL
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#25D366] hover:text-[#20BD5A]"
          >
            Cotizar
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-slate-600"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-600 hover:text-slate-900 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-semibold"
            >
              Cotizar por WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
