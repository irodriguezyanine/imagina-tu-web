"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/cumpleanos", label: "Cumpleaños" },
  { href: "/despedidas-soltero", label: "Despedidas de soltero" },
  { href: "/matrimonios", label: "Matrimonios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/web-profesional", label: "Web profesional" },
  { href: "/web-empresas", label: "Web empresas" },
  { href: "/portafolio", label: "Portafolio" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
        <Link
          href="/"
          className="shrink-0 flex items-center focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 rounded"
          aria-label="Ir a inicio - ImaginaTuWeb"
        >
          <Image
            src="/logo.png"
            alt="ImaginaTuWeb"
            width={660}
            height={144}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#25D366] hover:text-[#20BD5A] shrink-0"
          >
            Cotizar
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-slate-600"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-600 hover:text-slate-900 font-medium py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] font-semibold pt-2"
            >
              Cotizar por WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
