/**
 * Pieza 6 — "Lo que nadie te dice sobre el miedo a brillar"
 * 7 slides | Soy Magnetik brand palette
 *
 * Palette:
 *   bg:      #1a1424  (morado oscuro)
 *   lavanda: #9B7FBF  (acento principal)
 *   amber:   #C4963A  (acento secundario)
 *   cream:   #F0EBE0  (texto cálido)
 *   white:   #FFFFFF
 *
 * Ejecutar desde la carpeta open-carrusel:
 *   node pieza6-miedo-brillar.js
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

// ─────────────────────────────────────────────────────────────────────────────
// SLIDES
// ─────────────────────────────────────────────────────────────────────────────

const slides = [

  // 1. Portada
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:7% 8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;position:relative;">
  <div style="width:100%;display:flex;justify-content:flex-end;">
    <span style="font-size:1em;color:#9B7FBF;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.7em;">
    <p style="margin:0;font-size:1.05em;color:#9B7FBF;letter-spacing:0.25em;text-transform:uppercase;font-weight:500;">Lo que nadie te dice</p>
    <h1 style="margin:0;font-size:4em;font-weight:900;color:#F0EBE0;line-height:1.05;letter-spacing:-0.02em;">sobre el miedo<br>a brillar</h1>
    <div style="width:52px;height:3px;background:linear-gradient(90deg,#9B7FBF,#C4963A);border-radius:2px;margin-top:0.9em;"></div>
  </div>
  <div style="width:100%;display:flex;justify-content:center;">
    <span style="font-size:0.82em;color:rgba(240,235,224,0.35);letter-spacing:0.2em;">@soymagnetik</span>
  </div>
</div>`, 1),

  // 2. Setup — disonancia cognitiva
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.5em;">
  <p style="margin:0;font-size:1.6em;font-weight:400;color:rgba(240,235,224,0.5);line-height:1.4;font-style:italic;">"No tienes miedo al fracaso."</p>
  <div style="width:36px;height:2px;background:#9B7FBF;border-radius:2px;opacity:0.8;"></div>
  <h2 style="margin:0;font-size:3em;font-weight:900;color:#F0EBE0;line-height:1.05;">Tienes miedo<br><span style="color:#9B7FBF;">al éxito.</span></h2>
  <p style="margin:0;font-size:1.05em;color:rgba(240,235,224,0.5);line-height:1.6;max-width:80%;">Y hay razones muy concretas para eso que nadie te ha explicado.</p>
</div>`, 2),

  // 3. Verdad 01 — Miedo a no reconocerte
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3.2em;font-weight:900;color:#C4963A;line-height:1;">01</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Miedo a<br>no reconocerte</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">Cuando brillas, ya no eres quien la gente conoció. Ya no eres quien <em>tú</em> conocías. Y perder esa identidad da más miedo que cualquier fracaso externo.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 3),

  // 4. Verdad 02 — Miedo a perder a quienes amas
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3.2em;font-weight:900;color:#C4963A;line-height:1;">02</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Miedo a perder<br>a quienes amas</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">¿Y si al crecer ya no encajas donde siempre encajaste? ¿Y si tu éxito los hace sentir menos? El miedo a la soledad en lo alto es real — y es silencioso.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 4),

  // 5. Verdad 03 — Miedo a que te pidan más
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3.2em;font-weight:900;color:#C4963A;line-height:1;">03</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Miedo a que<br>te pidan más</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">Si muestras que puedes, ya no hay excusas. Tendrás que mantener ese nivel. Tendrás que crecer más. La excelencia exige — y una parte de ti no quiere esa presión.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 5),

  // 6. Verdad 04 — Miedo a que tu luz incomode
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3.2em;font-weight:900;color:#C4963A;line-height:1;">04</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Miedo a que<br>tu luz incomode</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">Que te llamen arrogante. Que otros se sientan mal. Que tu brillo sea demasiado para quienes te rodean. Y entonces aprendes a apagarte para que los demás estén cómodos.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 6),

  // 7. CTA — BRILLAR
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.5em;">
  <h2 style="margin:0;font-size:2.7em;font-weight:900;color:#F0EBE0;line-height:1.1;">¿Y si brillas<br>de todas formas?</h2>
  <div style="width:44px;height:3px;background:linear-gradient(90deg,#9B7FBF,#C4963A);border-radius:2px;"></div>
  <p style="margin:0;font-size:1.05em;color:rgba(240,235,224,0.58);line-height:1.68;max-width:82%;">Escríbeme <strong style="color:#C4963A;font-weight:700;">BRILLAR</strong> en los comentarios y te envío algo que cambiará cómo te ves a ti mismo.</p>
  <div style="background:rgba(155,127,191,0.15);border:1.5px solid #9B7FBF;border-radius:14px;padding:0.9em 2.2em;">
    <span style="font-size:1.6em;font-weight:900;color:#9B7FBF;letter-spacing:0.08em;">BRILLAR</span>
  </div>
  <span style="font-size:0.82em;color:rgba(240,235,224,0.32);letter-spacing:0.2em;margin-top:0.2em;">@soymagnetik</span>
</div>`, 7),

];

// ─────────────────────────────────────────────────────────────────────────────

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
console.log(`   → "${newCarousel.name}" (${slides.length} slides) — palette Soy Magnetik`);
