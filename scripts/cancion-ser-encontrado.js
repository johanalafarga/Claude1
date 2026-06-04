/**
 * "7 Líneas — Ser Encontrado" | Soy Magnetik
 * 9 slides: portada + 7 líneas de la canción + CTA (trigger: ESCUCHAR)
 *
 * Palette:
 *   bg:      #1a1424
 *   lavanda: #9B7FBF
 *   amber:   #C4963A
 *   cream:   #F0EBE0
 *
 * v2: tipografía Inter bold (sans-serif), texto más grande, palabras clave en lavanda
 *
 * Ejecutar desde open-carrusel:
 *   node cancion-ser-encontrado.js
 */

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(process.cwd(), "data", "carousels.json");

function uid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function slide(html, order) {
  return { id: uid(), html, previousVersions: [], order, notes: "" };
}

/**
 * lines: array de strings. Usa ** texto ** para poner en lavanda.
 * lastLineAccent: si true, la última línea va en lavanda automáticamente.
 */
function lyricSlide(num, lines, order, lastLineAccent = false) {
  const linesHtml = lines.map((l, i) => {
    const isLast = i === lines.length - 1;
    const color = (lastLineAccent && isLast) ? "#9B7FBF" : "#F0EBE0";
    // soporte simple de **bold lavanda**
    const parsed = l.replace(/\*\*(.+?)\*\*/g, `<span style="color:#9B7FBF;">$1</span>`);
    return `<p style="margin:0;font-size:2.2em;font-weight:800;color:${color};line-height:1.25;letter-spacing:-0.01em;">${parsed}</p>`;
  }).join("");

  return slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:space-between;padding:7% 8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;">
  <div style="display:flex;align-items:center;gap:0.7em;">
    <span style="font-size:0.72em;color:#C4963A;letter-spacing:0.32em;text-transform:uppercase;font-weight:700;">Línea 0${num}</span>
    <div style="flex:1;height:1px;background:rgba(196,150,58,0.3);"></div>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;gap:0.45em;padding:1.2em 0;">
    ${linesHtml}
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid rgba(155,127,191,0.18);padding-top:0.7em;">
    <span style="font-size:0.72em;color:#9B7FBF;letter-spacing:0.15em;font-weight:600;text-transform:uppercase;">Ser Encontrado</span>
    <span style="font-size:0.72em;color:rgba(240,235,224,0.28);letter-spacing:0.15em;">@soymagnetik</span>
  </div>
</div>`, order);
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDES
// ─────────────────────────────────────────────────────────────────────────────

const slides = [

  // 1. Portada
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:7% 8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;">
  <div style="width:100%;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:0.78em;color:#C4963A;letter-spacing:0.28em;text-transform:uppercase;font-weight:600;">Nueva canción</span>
    <span style="font-size:0.78em;color:#9B7FBF;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.8em;">
    <p style="margin:0;font-size:0.82em;color:rgba(240,235,224,0.4);letter-spacing:0.32em;text-transform:uppercase;font-weight:500;">7 líneas de</p>
    <h1 style="margin:0;font-size:4.4em;font-weight:900;color:#F0EBE0;line-height:1.0;letter-spacing:-0.03em;">Ser<br><span style="color:#9B7FBF;">Encontrado</span></h1>
    <div style="display:flex;align-items:center;gap:0.7em;margin-top:0.5em;">
      <div style="width:24px;height:1px;background:#9B7FBF;opacity:0.6;"></div>
      <span style="font-size:0.8em;color:rgba(240,235,224,0.45);letter-spacing:0.18em;">la canción</span>
      <div style="width:24px;height:1px;background:#9B7FBF;opacity:0.6;"></div>
    </div>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:0.5em;">
    <p style="margin:0;font-size:0.82em;color:rgba(240,235,224,0.42);text-align:center;line-height:1.5;">Escríbeme <strong style="color:#C4963A;font-weight:700;">ESCUCHAR</strong> para el link a Spotify</p>
    <span style="font-size:0.75em;color:rgba(240,235,224,0.25);letter-spacing:0.2em;">@soymagnetik</span>
  </div>
</div>`, 1),

  // 2. Línea 01
  lyricSlide(1, [
    "Me vi en el espejo",
    "llorando por mí",
    "y escuché a mi",
    "**alma decir...**",
  ], 2),

  // 3. Línea 02
  lyricSlide(2, [
    "Quiero ser encontrada",
    "**por ti.**",
    "No por el mundo,",
    "ni por alguien más.",
  ], 3),

  // 4. Línea 03
  lyricSlide(3, [
    "Yo soy la casa",
    "que siempre esperé.",
    "**Yo soy el amor**",
    "**que me sabe sostener.**",
  ], 4),

  // 5. Línea 04
  lyricSlide(4, [
    "Si me prometo,",
    "yo me cumplo.",
    "Si me abandono,",
    "**yo me busco.**",
  ], 5),

  // 6. Línea 05
  lyricSlide(5, [
    "No es ego,",
    "**es dignidad.**",
    "No es soberbia,",
    "**es mi verdad.**",
  ], 6),

  // 7. Línea 06
  lyricSlide(6, [
    "Me elijo en la sombra.",
    "Me elijo en la luz.",
    "Me elijo incompleta.",
    "**Me elijo en mi cruz.**",
  ], 7),

  // 8. Línea 07
  lyricSlide(7, [
    "Y si alguna vez",
    "me vuelvo a perder,",
    "ya sé el camino",
    "**para volver.**",
  ], 8),

  // 9. CTA
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.4em;">
  <p style="margin:0;font-size:0.82em;color:#C4963A;letter-spacing:0.3em;text-transform:uppercase;font-weight:600;">Ya disponible en Spotify</p>
  <h2 style="margin:0;font-size:3.2em;font-weight:900;color:#F0EBE0;line-height:1.05;letter-spacing:-0.02em;">Ser<br><span style="color:#9B7FBF;">Encontrado</span></h2>
  <div style="width:44px;height:3px;background:linear-gradient(90deg,#9B7FBF,#C4963A);border-radius:2px;"></div>
  <p style="margin:0;font-size:1.05em;color:rgba(240,235,224,0.56);line-height:1.68;max-width:86%;">Escríbeme <strong style="color:#C4963A;">ESCUCHAR</strong> en los comentarios y te envío el link directo.</p>
  <div style="background:rgba(155,127,191,0.15);border:1.5px solid #9B7FBF;border-radius:14px;padding:0.85em 2.4em;">
    <span style="font-size:1.6em;font-weight:900;color:#9B7FBF;letter-spacing:0.1em;">ESCUCHAR</span>
  </div>
  <span style="font-size:0.78em;color:rgba(240,235,224,0.28);letter-spacing:0.2em;margin-top:0.2em;">@soymagnetik</span>
</div>`, 9),

];

// ─────────────────────────────────────────────────────────────────────────────

const newCarousel = {
  id: "cancion-ser-encontrado-2026",
  name: "7 Líneas — Ser Encontrado",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "serEncontrado", "cancion", "musica", "escuchar"],
};

// ─────────────────────────────────────────────────────────────────────────────

let data = { carousels: [] };

if (fs.existsSync(DATA_FILE)) {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8").replace(/^﻿/, "");
    data = JSON.parse(raw);
    if (!Array.isArray(data.carousels)) data.carousels = [];
  } catch {
    data = { carousels: [] };
  }
}

data.carousels = data.carousels.filter((c) => c.id !== newCarousel.id);
data.carousels.push(newCarousel);

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
console.log(`✅ OK! ${data.carousels.length} carruseles en total.`);
console.log(`   → "${newCarousel.name}" v2 — Inter bold, texto grande`);
