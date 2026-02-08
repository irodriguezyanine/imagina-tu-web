import { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "cumpleanos", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "despedidas-soltero", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "matrimonios", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "eventos", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "web-profesional", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "web-empresas", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "portafolio", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url.replace(/\/$/, "");

  return ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${baseUrl}/${path}` : baseUrl,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
