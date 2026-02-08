import { WebEmpresasLanding } from "@/components/WebEmpresasLanding";
import { HeroBg } from "@/components/HeroBg";

export const metadata = {
  title: "Web para empresas | Sitio corporativo | ImaginaTuWeb",
  description:
    "Sitio web para tu empresa: imagen, servicios, contacto y credibilidad. Diseño profesional y pago único.",
};

export default function WebEmpresasPage() {
  return (
    <WebEmpresasLanding>
      <HeroBg src="/web-empresas-bg.png" />
    </WebEmpresasLanding>
  );
}
