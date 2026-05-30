import { NextResponse } from "next/server";
import archiver from "archiver";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getCarousel } from "@/lib/carousels";
import { exportAllSlides } from "@/lib/export-slides";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const carousel = await getCarousel(id);

  if (!carousel) {
    return NextResponse.json({ error: "Carousel not found" }, { status: 404 });
  }

  if (carousel.slides.length === 0) {
    return NextResponse.json({ error: "No slides to export" }, { status: 400 });
  }

  try {
    // Export all slides to PNG buffers
    const pngBuffers = await exportAllSlides(
      carousel.slides,
      carousel.aspectRatio
    );

    // Build ZIP archive and collect all data
    const zipBuffer = await new Promise<Buffer>((resolve, reject) => {
      const archive = archiver("zip", { zlib: { level: 5 } });
      const chunks: Buffer[] = [];

      archive.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });

      archive.on("end", () => {
        resolve(Buffer.concat(chunks));
      });

      archive.on("error", (err) => {
        reject(err);
      });

      try {
        for (const { name, buffer } of pngBuffers) {
          archive.append(buffer, { name });
        }
        archive.finalize();
      } catch (err) {
        archive.destroy();
        reject(err);
      }
    });

    // Save to temp file and return a download URL (avoids binary POST body issues on Windows)
    const tmpDir = path.join(process.cwd(), "tmp", "exports");
    await mkdir(tmpDir, { recursive: true });
    const safeName = carousel.name.replace(/[^a-zA-Z0-9-_]/g, "_");
    const filename = `carousel-${safeName}-${id.slice(0, 8)}-${Date.now()}.zip`;
    const filepath = path.join(tmpDir, filename);
    await writeFile(filepath, zipBuffer);

    return NextResponse.json({ downloadUrl: `/api/exports/${filename}` });
  } catch (error) {
    console.error("Export error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Export failed: ${message}` },
      { status: 500 }
    );
  }
}
