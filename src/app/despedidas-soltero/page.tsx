import { DespedidaLanding } from "@/components/DespedidaLanding";
import { HeroBg } from "@/components/HeroBg";
import { PAGE_META, canonicalUrl } from "@/lib/seo";

const meta = PAGE_META["/despedidas-soltero"];

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: { title: meta.title, description: meta.description },
  alternates: { canonical: canonicalUrl(meta.path ?? "/despedidas-soltero") },
};

export default function DespedidasSolteroPage() {
  return (
    <DespedidaLanding>
      <HeroBg src="/despedida-fiesta-bg.png" />
    </DespedidaLanding>
  );
}
