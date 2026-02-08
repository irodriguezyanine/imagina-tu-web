"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { WHATSAPP } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <Link
      href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.messageShort)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#25D366] text-white font-semibold shadow-lg shadow-[#25D366]/40 hover:bg-[#20BD5A] hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">¡Crear mi página!</span>
    </Link>
  );
}
