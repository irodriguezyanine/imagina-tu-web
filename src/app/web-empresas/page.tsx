import { CategoryLanding } from "@/components/CategoryLanding";

export const metadata = {
  title: "Web para empresas | Sitio corporativo | ImaginaTuWeb",
  description:
    "Sitio web para tu empresa: imagen, servicios, contacto y credibilidad. Diseño profesional y pago único.",
};

export default function WebEmpresasPage() {
  return (
    <CategoryLanding
      title="Web para empresas"
      subtitle="Sitio corporativo a medida"
      description="Tu empresa merece una web que transmita confianza. Presentación de tu negocio, servicios o productos, equipo, contacto y todo lo que tus clientes necesitan saber. Diseño profesional, adaptable a móvil y sin cuotas mensuales ocultas."
      backgroundClass="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
      overlayClass="bg-black/45"
      ctaText="Cotizar web para mi empresa"
      features={[
        "Servicios",
        "Portfolio o productos",
        "Diseño a medida",
        "Responsive",
        "Formulario de contacto",
        "Fácil de compartir",
      ]}
      examples={[
        "Página de inicio con mensaje corporativo",
        "Sección de servicios o productos",
        "Sobre nosotros / equipo",
        "Galería de proyectos o casos de éxito",
        "Formulario de contacto o cotización",
        "Diseño alineado con la imagen de tu marca",
      ]}
    />
  );
}
