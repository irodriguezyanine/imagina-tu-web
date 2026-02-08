import { WebEmpresasLanding } from "@/components/WebEmpresasLanding";
import { HeroBg } from "@/components/HeroBg";
import { PAGE_META, canonicalUrl } from "@/lib/seo";

const meta = PAGE_META["/web-empresas"];

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: { title: meta.title, description: meta.description },
  alternates: { canonical: canonicalUrl(meta.path ?? "/web-empresas") },
};

export default function WebEmpresasPage() {
  return (
    <WebEmpresasLanding>
      <HeroBg src="/web-empresas-bg.png" />
    </WebEmpresasLanding>
  );
}
