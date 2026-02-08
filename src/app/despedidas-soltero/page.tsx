import { DespedidaLanding } from "@/components/DespedidaLanding";
import { HeroBg } from "@/components/HeroBg";

export const metadata = {
  title: "Web para despedidas de soltero | ImaginaTuWeb",
  description:
    "Web para tu despedida: itinerario, fotos, countdown y un link para que todos estén al día. Diseño a medida para tu fiesta.",
};

export default function DespedidasSolteroPage() {
  return (
    <DespedidaLanding>
      <HeroBg src="/despedida-fiesta-bg.png" />
    </DespedidaLanding>
  );
}
