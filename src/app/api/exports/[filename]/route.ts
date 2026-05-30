import { NextResponse } from "next/server";
import { readFile, unlink } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;

  // Sanitize filename: only allow alphanumeric, dash, underscore, dot
  if (!/^[\w\-\.]+\.zip$/.test(filename)) {
    return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
  }

  const filepath = path.join(process.cwd(), "tmp", "exports", filename);

  try {
    const buffer = await readFile(filepath);
    // Clean up temp file after serving
    unlink(filepath).catch(() => {});

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": buffer.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "File not found or expired" }, { status: 404 });
  }
}
