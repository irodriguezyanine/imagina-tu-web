import { CategoryLanding } from "@/components/CategoryLanding";

export const metadata = {
  title: "Web para eventos | Congresos, lanzamientos, fiestas | ImaginaTuWeb",
  description:
    "Web para cualquier evento: congresos, lanzamientos, fiestas. Programa, mapas, inscripción y un solo link para tus asistentes.",
};

export default function EventosPage() {
  return (
    <CategoryLanding
      title="Web para tu evento"
      subtitle="Congresos, lanzamientos, fiestas"
      description="Da presencia a tu evento con una web propia. Ya sea un congreso, un lanzamiento de producto, una fiesta o una jornada: programa, mapas, inscripción o confirmación y todo en un solo link para que tus asistentes tengan la info al día."
      backgroundClass="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700"
      overlayClass="bg-black/40"
      ctaText="Pedir mi web de evento"
      features={[
        "Mapas",
        "Cuenta regresiva",
        "Galería de fotos",
        "Confirmación / inscripción",
        "Diseño a medida",
        "Responsive",
        "Fácil de compartir",
        "Calendario o programa",
      ]}
      examples={[
        "Programa del evento con horarios y salas",
        "Mapa del recinto o ubicaciones",
        "Cuenta regresiva hasta el día del evento",
        "Formulario de inscripción o confirmación",
        "Galería de fotos durante y después",
        "Diseño corporativo o festivo según el evento",
      ]}
    />
  );
}
