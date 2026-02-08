import { Hero } from "@/components/Hero";
import { LivePreviews } from "@/components/LivePreviews";
import { Footer } from "@/components/Footer";
import { PAGE_META } from "@/lib/seo";

const meta = PAGE_META["/"];

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LivePreviews />
      <Footer />
    </main>
  );
}
