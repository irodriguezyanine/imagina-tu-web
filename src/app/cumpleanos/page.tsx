import { CumpleanosLanding } from "@/components/CumpleanosLanding";
import { HeroBg } from "@/components/HeroBg";
import { PAGE_META, canonicalUrl } from "@/lib/seo";

const meta = PAGE_META["/cumpleanos"];

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: { title: meta.title, description: meta.description },
  alternates: { canonical: canonicalUrl(meta.path ?? "/cumpleanos") },
};

export default function CumpleanosPage() {
  return (
    <CumpleanosLanding>
      <HeroBg src="/cumpleanos-bg.png" />
    </CumpleanosLanding>
  );
}
