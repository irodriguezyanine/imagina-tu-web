import { CategoryLanding } from "@/components/CategoryLanding";

export const metadata = {
  title: "Web para profesionales | Portfolio y contacto | ImaginaTuWeb",
  description:
    "Tu presencia online: portfolio, servicios, contacto. Web a medida para freelancers, consultores y profesionales.",
};

export default function WebProfesionalPage() {
  return (
    <CategoryLanding
      title="Web para profesionales"
      subtitle="Tu presencia en internet"
      description="¿Eres freelancer, consultor o profesional independiente? Una web te da credibilidad y hace que te encuentren. Portfolio, servicios, testimonios y contacto en un solo sitio, diseñado a tu medida y sin cuotas mensuales."
      backgroundClass="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900"
      overlayClass="bg-black/50"
      ctaText="Pedir mi web profesional"
      features={[
        "Portfolio o proyectos",
        "Servicios",
        "Diseño a medida",
        "Responsive",
        "Formulario de contacto",
        "Fácil de compartir",
      ]}
      examples={[
        "Página de inicio con tu propuesta de valor",
        "Sección de servicios con precios o paquetes",
        "Portfolio o galería de trabajos realizados",
        "Testimonios de clientes",
        "Formulario de contacto o link a WhatsApp",
        "Diseño que refleje tu marca personal",
      ]}
    />
  );
}
