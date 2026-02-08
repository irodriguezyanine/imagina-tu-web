import { MatrimonioLanding } from "@/components/MatrimonioLanding";
import { HeroBg } from "@/components/HeroBg";
import { PAGE_META, canonicalUrl } from "@/lib/seo";

const meta = PAGE_META["/matrimonios"];

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: { title: meta.title, description: meta.description },
  alternates: { canonical: canonicalUrl(meta.path ?? "/matrimonios") },
};

export default function MatrimoniosPage() {
  return (
    <MatrimonioLanding>
      <HeroBg src="/matrimonios-bg.png" />
    </MatrimonioLanding>
  );
}
