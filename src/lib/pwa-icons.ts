import type { Metadata, MetadataRoute } from "next";

export const PWA_MANIFEST_ICONS: NonNullable<
  MetadataRoute.Manifest["icons"]
> = [
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
];

const APPLE_TOUCH_ICON = {
  url: "/icon-180.png",
  sizes: "180x180",
  type: "image/png",
} as const;

export function pwaIconsToMetadataIcons(): NonNullable<Metadata["icons"]> {
  const standardIcons = PWA_MANIFEST_ICONS.filter(
    (entry) => entry.purpose === "any"
  );

  return {
    icon: standardIcons.map((entry) => ({
      url: entry.src,
      sizes: entry.sizes,
      type: entry.type,
    })),
    apple: APPLE_TOUCH_ICON,
  };
}
