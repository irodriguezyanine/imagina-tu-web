import { MatrimonioLanding } from "@/components/MatrimonioLanding";
import { HeroBg } from "@/components/HeroBg";

export const metadata = {
  title: "Web para tu boda | Invitación digital | ImaginaTuWeb",
  description:
    "Crea tu propia web de matrimonio en vez de un PDF. Mapas, cuenta regresiva, RSVP, lista de novios y diseño a medida para enviar a tus invitados.",
};

export default function MatrimoniosPage() {
  return (
    <MatrimonioLanding>
      <HeroBg src="/matrimonios-bg.png" />
    </MatrimonioLanding>
  );
}
