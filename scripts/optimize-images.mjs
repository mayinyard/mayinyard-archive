import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.resolve("src/assets/photos");
const outputDir = path.resolve("src/assets/photos-optimized");

async function processDirectory(input, output) {
  await fs.promises.mkdir(output, { recursive: true });

  const entries = await fs.promises.readdir(input, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const inputPath = path.join(input, entry.name);
    const outputPath = path.join(
      output,
      entry.name.replace(/\.(jpg|jpeg|png)$/i, ".webp")
    );

    if (entry.isDirectory()) {
      await processDirectory(inputPath, path.join(output, entry.name));
      continue;
    }

    if (!/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      continue;
    }

    await sharp(inputPath)
      .resize({
        width: 2560,
        height: 2560,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 82,
      })
      .toFile(outputPath);

    console.log(`✓ ${entry.name}`);
  }
}

processDirectory(inputDir, outputDir)
  .then(() => {
    console.log("\nDone!");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
