import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portafolio | ImaginaTuWeb",
  description:
    "Proyectos realizados: CÓRTATE.CL, Agro SouthWest, despedidas de soltero y más. Plataformas, sitios corporativos y landings.",
};

export default function PortafolioLayout({
  children,
}: { children: React.ReactNode }) {
  return children;
}
