"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  MapPin,
  Clock,
  Image as ImageIcon,
  Palette,
  Smartphone,
  Share2,
  Music,
  Gift,
  Gamepad2,
  CheckSquare,
  X,
  Cake,
  Sparkles,
} from "lucide-react";
import { WHATSAPP } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import { CategoryPricing } from "@/components/CategoryPricing";

const FEATURES = [
  {
    id: "lista-regalos",
    title: "Lista de regalos",
    icon: Gift,
    shortDescription: "Integra tu lista de regalos de Falabella, Paris o Amazon para que eviten repetidos.",
    modal: {
      subtitle: "Regalos que realmente quieres",
      description: "Integra tu lista de regalos de Falabella, Paris o Amazon para que eviten repetidos.",
      fullContent:
        "Enlazamos tu lista de regalos de Falabella, Paris, Amazon o la tienda que prefieras. Tus invitados ven el link en la web, eligen algo que te guste y evitas regalos repetidos o que no necesitas. Ideal para cumpleaños de 15, 18, 25 o cualquier edad.",
    },
  },
  {
    id: "dinamicas-juegos",
    title: "Dinámicas y juegos",
    icon: Gamepad2,
    shortDescription: "Organiza dinámicas de grupo, trivia del cumpleañero, retos o votaciones en la misma web.",
    modal: {
      subtitle: "La fiesta más entretenida",
      description: "Organiza dinámicas de grupo, trivia del cumpleañero, retos o votaciones en la misma web.",
      fullContent:
        "Incluimos secciones para dinámicas: trivia sobre el cumpleañero, votaciones (mejor foto, mejor anécdota), retos para el día de la fiesta o enlaces a juegos online. Todo en un solo link para que los invitados participen antes y durante la celebración.",
    },
  },
  {
    id: "mapas",
    title: "Mapas",
    icon: MapPin,
    shortDescription: "Señala la dirección del local o de la fiesta con Waze y Google Maps en un clic.",
    modal: {
      subtitle: "Que nadie se pierda",
      description: "Señala la dirección del local o de la fiesta con Waze y Google Maps en un clic.",
      fullContent:
        "Enlaces directos a Waze y Google Maps para que tus invitados lleguen sin equivocarse. Ideal para cumpleaños en salas de evento, casas, parques o bares. Un toque y ya tienen la ruta.",
    },
  },
  {
    id: "cuenta-regresiva",
    title: "Cuenta regresiva",
    icon: Clock,
    shortDescription: "Cuenta regresiva hasta el día de la fiesta. Días, horas, minutos y segundos.",
    modal: {
      subtitle: "La emoción sube",
      description: "Cuenta regresiva hasta el día de la fiesta. Días, horas, minutos y segundos.",
      fullContent:
        "Una cuenta regresiva en tiempo real hasta la fecha de tu cumpleaños. Tus invitados ven cuánto falta cada vez que entran al link. Personalizable y visible en celular y computador. Perfecto para mantener la expectativa.",
    },
  },
  {
    id: "galeria",
    title: "Galería de fotos",
    icon: ImageIcon,
    shortDescription: "Para que tus invitados suban fotos de la fiesta y de los momentos que no quieres perderte.",
    modal: {
      subtitle: "Todos los recuerdos en un lugar",
      description: "Para que tus invitados suban fotos de la fiesta y de los momentos que no quieres perderte.",
      fullContent:
        "Galería para que familia y amigos suban fotos del cumpleaños: la torta, los regalos, los abrazos y las sorpresas. Se puede habilitar antes (previas, preparativos) y después del evento. Todos los recuerdos en un solo link.",
    },
  },
  {
    id: "rsvp",
    title: "Confirmación / RSVP",
    icon: CheckSquare,
    shortDescription: "Sabes quién va y quién no. Formulario de confirmación con acompañantes y mensajes.",
    modal: {
      subtitle: "Organiza tu lista de invitados",
      description: "Sabes quién va y quién no. Formulario de confirmación con acompañantes y mensajes.",
      fullContent:
        "Los invitados confirman asistencia desde la misma web: nombre, acompañantes (+1, familia) y un mensaje si quieren. Tú recibes todo ordenado y sabes cuántos serán para el local, la torta o el catering.",
    },
  },
  {
    id: "musica-videos",
    title: "Música y videos",
    icon: Music,
    shortDescription: "Playlist de Spotify, videos de felicitaciones o YouTube. La banda sonora en un solo link.",
    modal: {
      subtitle: "La banda sonora de tu fiesta",
      description: "Playlist de Spotify, videos de felicitaciones o YouTube. La banda sonora en un solo link.",
      fullContent:
        "Integramos tu playlist de Spotify para que los invitados sugieran canciones o para que suene el hit del momento. También puedes incluir videos de felicitaciones o enlaces a YouTube. Todo en la misma web, sin mandar links por WhatsApp.",
    },
  },
  {
    id: "diseno",
    title: "Diseño a medida",
    icon: Palette,
    shortDescription: "Colores, tema y estilo que representen al cumpleañero: infantil, elegante, temático.",
    modal: {
      subtitle: "Tu fiesta, tu estilo",
      description: "Colores, tema y estilo que representen al cumpleañero: infantil, elegante, temático.",
      fullContent:
        "Diseño pensado para el cumpleañero: infantil, elegante, temático (superhéroes, viajes, música) o minimalista. Sin plantillas genéricas: algo que se sienta único y que los invitados recuerden.",
    },
  },
  {
    id: "responsive",
    title: "Responsive",
    icon: Smartphone,
    shortDescription: "Se ve perfecto en el celular y en el computador. Un solo link para todos.",
    modal: {
      subtitle: "Donde sea que abran el link",
      description: "Se ve perfecto en el celular y en el computador. Un solo link para todos.",
      fullContent:
        "La web se adapta a móvil, tablet y desktop. La mayoría de los invitados entrará desde el celular; por eso priorizamos que se vea impecable ahí.",
    },
  },
  {
    id: "compartir",
    title: "Fácil de compartir",
    icon: Share2,
    shortDescription: "Un solo link para enviar por WhatsApp o redes. Toda la info siempre al día.",
    modal: {
      subtitle: "Un link, toda la información",
      description: "Un solo link para enviar por WhatsApp o redes. Toda la info siempre al día.",
      fullContent:
        "Un único link para compartir por WhatsApp, Instagram o correo. Sin instalaciones ni registros: quien lo abre ve fecha, hora, lugar, dress code (si hay) y RSVP, siempre actualizado.",
    },
  },
];

export type CumpleanosFeatureItem = (typeof FEATURES)[number];

function FeatureModal({
  feature,
  onClose,
}: {
  feature: CumpleanosFeatureItem;
  onClose: () => void;
}) {
  const Icon = feature.icon;
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "relative w-full max-w-lg rounded-2xl overflow-hidden",
          "bg-gradient-to-b from-stone-900 to-stone-900/95",
          "border-2 border-amber-400/40",
          "shadow-2xl shadow-amber-500/10",
          "ring-2 ring-amber-400/20 ring-offset-2 ring-offset-stone-900"
        )}
      >
        <div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-400 to-pink-500" />
        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm font-semibold text-amber-400">{feature.modal.subtitle}</p>
            </div>
          </div>
          <p className="text-stone-300 leading-relaxed mb-4">{feature.modal.description}</p>
          <div className="p-4 rounded-xl bg-white/5 border border-amber-500/20 border-l-4 border-l-amber-500">
            <p className="text-stone-200 leading-relaxed text-sm">
              {feature.modal.fullContent}
            </p>
          </div>
          <p className="mt-4 text-xs text-stone-500">Clic fuera o Escape para cerrar</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

type Props = {
  modalFeature: CumpleanosFeatureItem | null;
  setModalFeature: (f: CumpleanosFeatureItem | null) => void;
  children?: React.ReactNode;
};

export function CumpleanosLandingContent({ modalFeature, setModalFeature, children }: Props) {
  return (
    <div role="main" className="min-h-screen bg-stone-950">
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
      >
        {children}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/75 via-orange-800/70 to-stone-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-white/95 text-sm font-semibold uppercase tracking-widest mb-6"
          >
            <Cake className="w-4 h-4 text-amber-300" />
            Invitación digital para tu cumpleaños
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl"
          >
            Web para tu cumpleaños
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-6 text-lg sm:text-xl text-white/95 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
          >
            ¿Quieres sorprender con una invitación que no sea un PDF aburrido? Crea tu propia web de cumpleaños: diseño a tu gusto, un solo link para compartir y toda la info en un solo lugar para tus invitados.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-10"
          >
            <Link
              href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white",
                "bg-[#25D366] hover:bg-[#20BD5A] transition-all duration-300",
                "shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:scale-105",
                "focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-amber-900/50"
              )}
            >
              <MessageCircle className="w-5 h-5" />
              Pedir mi web de cumpleaños
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-amber-950/30 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(251,191,36,0.06),transparent_50%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Qué podemos incluir en tu web
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Todo para una fiesta de cumpleaños inolvidable
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg">
              Diseño a tu medida. Clic en cada tarjeta para ver más detalle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.button
                  key={feature.id}
                  type="button"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setModalFeature(feature)}
                  className={cn(
                    "flex items-start gap-4 p-5 rounded-2xl text-left",
                    "bg-white/[0.05] border-2 border-amber-500/30 backdrop-blur-sm",
                    "hover:bg-white/[0.08] hover:border-amber-400/50 hover:shadow-xl hover:shadow-amber-500/10",
                    "transition-all duration-300 cursor-pointer group"
                  )}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30 group-hover:bg-amber-500/30 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-stone-400 leading-relaxed line-clamp-2">
                      {feature.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver más detalle →
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(251,191,36,0.05),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-3"
          >
            Ideas que podemos hacer realidad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-stone-400 text-center max-w-xl mx-auto mb-12"
          >
            Cada web es única. Pensada para tu cumpleaños en Chile.
          </motion.p>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              "Invitación con fecha, hora y lugar en un solo link",
              "Cuenta regresiva hasta el día de la fiesta",
              "Lista de regalos integrada (Falabella, Paris, etc.)",
              "Mapa con la ubicación del evento",
              "Dinámicas, trivia o juegos para los invitados",
              "Galería para que suban fotos del evento",
              "Formulario para confirmar asistencia (RSVP)",
              "Playlist de Spotify o videos de felicitaciones",
              "Colores y estilo que tú elijas (temático, elegante, infantil)",
            ].map((ex, i) => (
              <motion.li
                key={ex}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.04] border border-amber-500/20 hover:border-amber-500/40 hover:bg-white/[0.06] transition-all duration-300"
              >
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 text-sm font-bold border border-amber-500/30">
                  {i + 1}
                </span>
                <span className="text-stone-300">{ex}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <CategoryPricing
        theme="amber"
        title="Precios para tu web de cumpleaños"
        minPrice={50000}
        maxPrice={300000}
        whatsappMessage="Hola, quiero cotizar mi web de cumpleaños"
        whatsappLabel="Pedir mi web de cumpleaños"
      />

      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/95 via-stone-900 to-orange-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(251,191,36,0.06),transparent)]" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Listo para tu web de cumpleaños?
          </h2>
          <p className="text-stone-300 mb-8">
            Escríbenos por WhatsApp y cuéntanos tu idea. Te respondemos rápido y sin compromiso.
          </p>
          <Link
            href={`https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white transition-all shadow-lg shadow-[#25D366]/35 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </Link>
        </div>
      </section>

      <Footer />

      <AnimatePresence mode="wait">
        {modalFeature && (
          <FeatureModal
            key={modalFeature.id}
            feature={modalFeature}
            onClose={() => setModalFeature(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
