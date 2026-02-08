import { CumpleanosLanding } from "@/components/CumpleanosLanding";
import { HeroBg } from "@/components/HeroBg";

export const metadata = {
  title: "Web para cumpleaños | Invitación digital | ImaginaTuWeb",
  description:
    "Crea tu web de cumpleaños con invitación, lista de regalos, dinámicas y juegos, galería de fotos y más. Un solo link para compartir con tus invitados.",
};

export default function CumpleanosPage() {
  return (
    <CumpleanosLanding>
      <HeroBg src="/cumpleanos-bg.png" />
    </CumpleanosLanding>
  );
}
