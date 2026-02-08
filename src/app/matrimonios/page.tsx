import { CategoryLanding } from "@/components/CategoryLanding";

export const metadata = {
  title: "Web para tu boda | Invitación digital | ImaginaTuWeb",
  description:
    "Crea tu propia web de matrimonio en vez de un PDF. Mapas, cuenta regresiva, confirmación y diseño a medida para enviar a tus invitados.",
};

export default function MatrimoniosPage() {
  return (
    <CategoryLanding
      title="Web para tu matrimonio"
      subtitle="Invitación digital para tu boda"
      description="¿Te gustaría crear tu propia web de tu matrimonio en vez de un PDF aburrido? Pon toda tu creatividad en juego y pídenos lo que quieras para enviar a tus invitados: fecha, lugar, mapa, cuenta regresiva, confirmación de asistencia y el estilo que siempre soñaste."
      backgroundClass="bg-gradient-to-br from-rose-200 via-amber-50 to-stone-100"
      overlayClass="bg-rose-900/40"
      ctaText="Pedir mi web de boda"
      features={[
        "Mapas",
        "Cuenta regresiva",
        "Galería de fotos",
        "Confirmación / RSVP",
        "Diseño a medida",
        "Responsive",
        "Fácil de compartir",
        "Música o videos",
      ]}
      examples={[
        "Invitación elegante con vuestra historia y fotos",
        "Cuenta regresiva hasta el gran día",
        "Mapa con ceremonia, fiesta y alojamiento",
        "Formulario de confirmación de asistencia",
        "Dress code, regalos y toda la info en un link",
        "Diseño romántico o moderno, como prefieras",
      ]}
    />
  );
}
