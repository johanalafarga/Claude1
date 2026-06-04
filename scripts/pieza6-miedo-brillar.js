/**
 * Pieza 6 — "Lo que nadie te dice sobre el miedo a brillar"
 * 7 slides | Background #2D2D2D | Soy Magnetik
 *
 * Ejecutar desde la carpeta open-carrusel:
 *   node pieza6-miedo-brillar.js
 */

const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(process.cwd(), "data", "carousels.json");

// ── Helpers ──────────────────────────────────────────────────────────────────

function uid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

function slide(html, order) {
  return { id: uid(), html, previousVersions: [], order, notes: "" };
}

// ── Palette ──────────────────────────────────────────────────────────────────
// bg: #2D2D2D  |  accent: #E8C77B (gold)  |  text: #FFFFFF  |  muted: rgba(255,255,255,0.45)

// ── Slides ───────────────────────────────────────────────────────────────────

const slides = [

  // ── 1. Portada ──────────────────────────────────────────────────────────────
  slide(`<div style="width:100%;height:100%;background:#2D2D2D;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:7% 8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;position:relative;">
  <div style="width:100%;display:flex;justify-content:flex-end;">
    <span style="font-size:1.1em;color:#E8C77B;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.6em;">
    <p style="margin:0;font-size:1.15em;color:#E8C77B;letter-spacing:0.22em;text-transform:uppercase;font-weight:500;">Lo que nadie te dice</p>
    <h1 style="margin:0;font-size:4.2em;font-weight:900;color:#FFFFFF;line-height:1.05;letter-spacing:-0.02em;">sobre el miedo<br>a brillar</h1>
    <div style="width:56px;height:3px;background:#E8C77B;border-radius:2px;margin-top:0.8em;"></div>
  </div>
  <div style="width:100%;display:flex;justify-content:center;">
    <span style="font-size:0.85em;color:rgba(255,255,255,0.38);letter-spacing:0.18em;">@soymagnetik</span>
  </div>
</div>`, 1),

  // ── 2. El Setup (disonancia cognitiva) ──────────────────────────────────────
  slide(`<div style="width:100%;height:100%;background:#2D2D2D;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.4em;">
  <p style="margin:0;font-size:1.7em;font-weight:400;color:rgba(255,255,255,0.55);line-height:1.4;font-style:italic;">"No tienes miedo al fracaso."</p>
  <div style="width:40px;height:2px;background:#E8C77B;border-radius:2px;"></div>
  <h2 style="margin:0;font-size:2.9em;font-weight:900;color:#FFFFFF;line-height:1.1;">Tienes miedo<br>al éxito.</h2>
  <p style="margin:0;font-size:1.05em;color:rgba(255,255,255,0.5);line-height:1.6;max-width:78%;">Y hay razones muy concretas para eso que nadie te ha explicado.</p>
</div>`, 2),

  // ── 3. Verdad #1 ────────────────────────────────────────────────────────────
  slide(`<div style="width:100%;height:100%;background:#2D2D2D;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.4em;">
  <div style="display:flex;align-items:center;gap:0.7em;">
    <span style="font-size:3em;font-weight:900;color:#E8C77B;line-height:1;opacity:0.9;">01</span>
    <div style="width:32px;height:2px;background:#E8C77B;opacity:0.7;"></div>
  </div>
  <h2 style="margin:0;font-size:2.4em;font-weight:800;color:#FFFFFF;line-height:1.15;">Miedo a<br>no reconocerte</h2>
  <p style="margin:0;font-size:1.12em;color:rgba(255,255,255,0.65);line-height:1.65;">Cuando brillas, ya no eres quien la gente conoció. Ya no eres quien <em>tú</em> conocías. Y perder esa identidad da más miedo que cualquier fracaso externo.</p>
  <div style="width:100%;height:1px;background:rgba(255,255,255,0.1);"></div>
  <span style="font-size:0.82em;color:#E8C77B;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 3),

  // ── 4. Verdad #2 ────────────────────────────────────────────────────────────
  slide(`<div style="width:100%;height:100%;background:#2D2D2D;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.4em;">
  <div style="display:flex;align-items:center;gap:0.7em;">
    <span style="font-size:3em;font-weight:900;color:#E8C77B;line-height:1;opacity:0.9;">02</span>
    <div style="width:32px;height:2px;background:#E8C77B;opacity:0.7;"></div>
  </div>
  <h2 style="margin:0;font-size:2.4em;font-weight:800;color:#FFFFFF;line-height:1.15;">Miedo a perder<br>a quienes amas</h2>
  <p style="margin:0;font-size:1.12em;color:rgba(255,255,255,0.65);line-height:1.65;">¿Y si al crecer ya no encajas donde siempre encajaste? ¿Y si tu éxito los hace sentir menos? El miedo a la soledad en lo alto es real — y es silencioso.</p>
  <div style="width:100%;height:1px;background:rgba(255,255,255,0.1);"></div>
  <span style="font-size:0.82em;color:#E8C77B;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 4),

  // ── 5. Verdad #3 ────────────────────────────────────────────────────────────
  slide(`<div style="width:100%;height:100%;background:#2D2D2D;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.4em;">
  <div style="display:flex;align-items:center;gap:0.7em;">
    <span style="font-size:3em;font-weight:900;color:#E8C77B;line-height:1;opacity:0.9;">03</span>
    <div style="width:32px;height:2px;background:#E8C77B;opacity:0.7;"></div>
  </div>
  <h2 style="margin:0;font-size:2.4em;font-weight:800;color:#FFFFFF;line-height:1.15;">Miedo a que<br>te pidan más</h2>
  <p style="margin:0;font-size:1.12em;color:rgba(255,255,255,0.65);line-height:1.65;">Si muestras que puedes, ya no hay excusas. Tendrás que mantener ese nivel. Tendrás que crecer más. La excelencia exige — y una parte de ti no quiere esa presión.</p>
  <div style="width:100%;height:1px;background:rgba(255,255,255,0.1);"></div>
  <span style="font-size:0.82em;color:#E8C77B;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 5),

  // ── 6. Verdad #4 ────────────────────────────────────────────────────────────
  slide(`<div style="width:100%;height:100%;background:#2D2D2D;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.4em;">
  <div style="display:flex;align-items:center;gap:0.7em;">
    <span style="font-size:3em;font-weight:900;color:#E8C77B;line-height:1;opacity:0.9;">04</span>
    <div style="width:32px;height:2px;background:#E8C77B;opacity:0.7;"></div>
  </div>
  <h2 style="margin:0;font-size:2.4em;font-weight:800;color:#FFFFFF;line-height:1.15;">Miedo a que<br>tu luz incomode</h2>
  <p style="margin:0;font-size:1.12em;color:rgba(255,255,255,0.65);line-height:1.65;">Que te llamen arrogante. Que otros se sientan mal. Que tu brillo sea demasiado para quienes te rodean. Y entonces aprendes a apagarte para que los demás estén cómodos.</p>
  <div style="width:100%;height:1px;background:rgba(255,255,255,0.1);"></div>
  <span style="font-size:0.82em;color:#E8C77B;letter-spacing:0.15em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 6),

  // ── 7. CTA ──────────────────────────────────────────────────────────────────
  slide(`<div style="width:100%;height:100%;background:#2D2D2D;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.6em;">
  <h2 style="margin:0;font-size:2.8em;font-weight:900;color:#FFFFFF;line-height:1.1;">¿Y si brillas<br>de todas formas?</h2>
  <div style="width:48px;height:3px;background:#E8C77B;border-radius:2px;"></div>
  <p style="margin:0;font-size:1.08em;color:rgba(255,255,255,0.6);line-height:1.65;max-width:80%;">Escríbeme <strong style="color:#E8C77B;font-weight:700;">BRILLAR</strong> en los comentarios y te envío algo que cambiará cómo te ves a ti mismo.</p>
  <div style="background:rgba(232,199,123,0.12);border:1.5px solid #E8C77B;border-radius:12px;padding:1em 2em;">
    <span style="font-size:1.5em;font-weight:900;color:#E8C77B;letter-spacing:0.05em;">BRILLAR</span>
  </div>
  <span style="font-size:0.85em;color:rgba(255,255,255,0.35);letter-spacing:0.18em;margin-top:0.4em;">@soymagnetik</span>
</div>`, 7),

];

// ── Carousel object ───────────────────────────────────────────────────────────

const newCarousel = {
  id: "p6-miedo-brillar-2026",
  name: "Pieza 6 — Miedo a Brillar",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "miedo", "brillar", "crecimiento"],
};

// ── Read → Add → Write ────────────────────────────────────────────────────────

let data = { carousels: [] };

if (fs.existsSync(DATA_FILE)) {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8").replace(/^﻿/, "");
    data = JSON.parse(raw);
    if (!Array.isArray(data.carousels)) data.carousels = [];
  } catch (e) {
    console.warn("⚠️  No se pudo leer carousels.json — se creará nuevo.");
    data = { carousels: [] };
  }
}

// Remove existing entry with same id (idempotent)
data.carousels = data.carousels.filter((c) => c.id !== newCarousel.id);
data.carousels.push(newCarousel);

fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
console.log(`✅ OK! ${data.carousels.length} carruseles en total.`);
console.log(`   → Nuevo: "${newCarousel.name}" (${slides.length} slides)`);
