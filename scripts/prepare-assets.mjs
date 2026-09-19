import sharp from "sharp";
import { mkdir } from "node:fs/promises";

// Temporary imagery extracted from the approved composition, never project evidence.
await mkdir("public/images", { recursive: true });
const source = "src/imagens/modelosite.png";
const reference = await sharp(source).resize({ width: 667 }).toBuffer();
const crops = {
  hero: [284, 103, 369, 197],
  purpose: [302, 382, 183, 165],
  solar: [42, 669, 129, 102],
  security: [193, 669, 130, 102],
  connectivity: [345, 669, 130, 102],
  mobility: [498, 669, 128, 102],
  residence: [245, 1006, 78, 146],
  business: [545, 1006, 78, 146],
};
for (const [name, [left, top, width, height]] of Object.entries(crops)) {
  await sharp(reference)
    .extract({ left, top, width, height })
    .webp({ quality: 88 })
    .toFile(`public/images/${name}.webp`);
}
await sharp("src/imagens/logo.png")
  .resize({ width: 640 })
  .webp({ quality: 95 })
  .toFile("public/images/logo.webp");
