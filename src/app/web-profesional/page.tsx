import { WebProfesionalLanding } from "@/components/WebProfesionalLanding";
import { HeroBg } from "@/components/HeroBg";

export const metadata = {
  title: "Web para profesionales | Portfolio y contacto | ImaginaTuWeb",
  description:
    "Tu presencia online: portfolio, servicios, contacto. Web a medida para freelancers, consultores y profesionales.",
};

export default function WebProfesionalPage() {
  return (
    <WebProfesionalLanding>
      <HeroBg src="/web-profesional-bg.png" />
    </WebProfesionalLanding>
  );
}
