import { CategoryLanding } from "@/components/CategoryLanding";

export const metadata = {
  title: "Web para cumpleaños | Invitación digital | ImaginaTuWeb",
  description:
    "Crea tu web de cumpleaños con invitación, cuenta regresiva, galería de fotos y más. Un solo link para compartir con tus invitados.",
};

export default function CumpleanosPage() {
  return (
    <CategoryLanding
      title="Web para tu cumpleaños"
      subtitle="Invitación digital"
      description="¿Quieres sorprender con una invitación que no sea un PDF aburrido? Crea tu propia web de cumpleaños: diseño a tu gusto, un solo link para compartir y toda la info en un solo lugar para tus invitados."
      backgroundClass="bg-gradient-to-br from-pink-500 via-rose-500 to-amber-400"
      overlayClass="bg-black/30"
      ctaText="Pedir mi web de cumpleaños"
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
        "Invitación con fecha, hora y lugar en un solo link",
        "Cuenta regresiva hasta el día de la fiesta",
        "Mapa con la ubicación del evento",
        "Galería para que subas fotos del evento",
        "Formulario para confirmar asistencia",
        "Colores y estilo que tú elijas",
      ]}
    />
  );
}
