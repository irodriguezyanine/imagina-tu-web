import { EventosLanding } from "@/components/EventosLanding";
import { HeroBg } from "@/components/HeroBg";
import { PAGE_META, canonicalUrl } from "@/lib/seo";

const meta = PAGE_META["/eventos"];

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: { title: meta.title, description: meta.description },
  alternates: { canonical: canonicalUrl(meta.path ?? "/eventos") },
};

export default function EventosPage() {
  return (
    <EventosLanding>
      <HeroBg src="/eventos-bg.png" />
    </EventosLanding>
  );
}
