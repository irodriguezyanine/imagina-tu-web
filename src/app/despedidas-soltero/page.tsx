import { CategoryLanding } from "@/components/CategoryLanding";

export const metadata = {
  title: "Web para despedidas de soltero | ImaginaTuWeb",
  description:
    "Web para tu despedida: itinerario, fotos, detalles y un link para que todos estén al día. Diseño a medida para tu fiesta.",
};

export default function DespedidasSolteroPage() {
  return (
    <CategoryLanding
      title="Web para tu despedida de soltero"
      subtitle="Todo en un solo link"
      description="Organiza la despedida con estilo. Una web con itinerario, lugares, fotos y todo lo que el grupo necesite ver. Un solo link para compartir en el grupo de WhatsApp y que nadie se pierda el plan."
      backgroundClass="bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900"
      overlayClass="bg-black/50"
      ctaText="Pedir mi web de despedida"
      features={[
        "Mapas",
        "Cuenta regresiva",
        "Galería de fotos",
        "Itinerario / programa",
        "Diseño a medida",
        "Responsive",
        "Fácil de compartir",
        "Música o videos",
      ]}
      examples={[
        "Itinerario del finde con horarios y lugares",
        "Mapa con todos los puntos del recorrido",
        "Cuenta regresiva hasta la despedida",
        "Galería de fotos de la fiesta",
        "Diseño que refleje el estilo del grupo",
        "Link único para compartir en el grupo",
      ]}
    />
  );
}
