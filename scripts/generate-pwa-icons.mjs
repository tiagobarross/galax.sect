import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logoPath = path.join(root, "public", "logo.svg");
const background = { r: 3, g: 7, b: 18, alpha: 1 };

async function compositeIcon(size, logoRatio) {
  const inner = Math.round(size * logoRatio);
  const resized = await sharp(logoPath)
    .resize(inner, inner, { fit: "inside" })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(path.join(root, "public", `icon-${size}.png`));
}

async function writeMaskable() {
  const size = 512;
  const inner = Math.round(size * 0.48);
  const resized = await sharp(logoPath)
    .resize(inner, inner, { fit: "inside" })
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background,
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toFile(path.join(root, "public", "icon-maskable-512.png"));
}

if (!fs.existsSync(logoPath)) {
  console.error("Missing public/logo.svg");
  process.exit(1);
}

await compositeIcon(192, 0.72);
await compositeIcon(180, 0.72);
await compositeIcon(512, 0.72);
await writeMaskable();
console.log("PWA icons written to public/");
