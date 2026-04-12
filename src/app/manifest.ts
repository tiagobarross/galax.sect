import type { MetadataRoute } from "next";

const DESCRIPTION =
  "Sistema inteligente de análise de vulnerabilidades web. Detecte riscos de segurança, más configurações e vulnerabilidades em segundos.";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Galax.sect – Scanner de vulnerabilidades web",
    short_name: "Galax.sect",
    description: DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#030712",
    theme_color: "#05D3C3",
    lang: "pt-BR",
    categories: ["segurança", "utilitários"],
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
