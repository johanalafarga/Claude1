/**
 * CARRUSEL 3 — "Magnetik Money — El Reto de 5 Días"
 * Soy Magnetik · Semana 3 · Martes 7 jul · Abre inscripción
 * Trigger: MAGNETIK | 7 slides
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

// ─── SLIDE BUILDERS ──────────────────────────────────────────────────────────

function cremaSlide(eyebrow, headline, body, order) {
  return slide(`<div style="width:100%;height:100%;background:#F0EBE0;display:flex;flex-direction:column;justify-content:center;padding:9% 10%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;position:relative;">
  <p style="margin:0 0 1em;font-size:0.6em;letter-spacing:0.3em;text-transform:uppercase;color:#C4963A;font-weight:600;">${eyebrow}</p>
  <h2 style="margin:0 0 0.9em;font-family:'Georgia','Times New Roman',serif;font-size:2.4em;font-weight:400;color:#26262A;line-height:1.18;font-style:italic;">${headline}</h2>
  ${body ? `<p style="margin:0;font-size:0.88em;color:#48484C;line-height:1.75;">${body}</p>` : ""}
  <div style="position:absolute;bottom:5%;right:6%;font-size:0.6em;color:rgba(38,38,42,0.3);letter-spacing:0.2em;">@soymagnetik</div>
</div>`, order);
}

function lavandaSlide(label, headline, body, order) {
  return slide(`<div style="width:100%;height:100%;background:#9B7FBF;display:flex;flex-direction:column;justify-content:space-between;padding:7% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;">
  <p style="margin:0;font-size:0.62em;letter-spacing:0.28em;text-transform:uppercase;color:rgba(240,235,224,0.55);font-weight:600;">${label}</p>
  <div>
    <h2 style="margin:0 0 0.55em;font-family:'Georgia','Times New Roman',serif;font-size:2.3em;font-weight:400;color:#F0EBE0;line-height:1.2;font-style:italic;">${headline}</h2>
    <p style="margin:0;font-size:0.88em;color:rgba(240,235,224,0.72);line-height:1.78;">${body}</p>
  </div>
  <p style="margin:0;font-size:0.62em;color:rgba(240,235,224,0.32);letter-spacing:0.2em;">@soymagnetik</p>
</div>`, order);
}

function grafitoSlide(label, headline, body, order) {
  return slide(`<div style="width:100%;height:100%;background:#26262A;display:flex;flex-direction:column;justify-content:space-between;padding:7% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;">
  <p style="margin:0;font-size:0.62em;letter-spacing:0.28em;text-transform:uppercase;color:rgba(155,127,191,0.7);font-weight:600;">${label}</p>
  <div>
    <div style="width:28px;height:2px;background:#9B7FBF;margin-bottom:0.8em;"></div>
    <h2 style="margin:0 0 0.55em;font-family:'Georgia','Times New Roman',serif;font-size:2.3em;font-weight:400;color:#F0EBE0;line-height:1.2;font-style:italic;">${headline}</h2>
    <p style="margin:0;font-size:0.88em;color:rgba(240,235,224,0.55);line-height:1.78;">${body}</p>
  </div>
  <p style="margin:0;font-size:0.62em;color:rgba(240,235,224,0.2);letter-spacing:0.2em;">@soymagnetik</p>
</div>`, order);
}

// ─── SLIDES ──────────────────────────────────────────────────────────────────

const slides = [

  // 1. Portada — crema
  cremaSlide(
    "Magnetik Money · Reto 5 Días",
    "No es manifestar.<br>No es Excel.<br><em style=\"color:#9B7FBF;\">Es las dos.</em>",
    "Mira el mapa. 👇",
    1
  ),

  // 2. Día 1 — lavanda
  lavandaSlide(
    "Día 01 — Ver",
    "Hacemos visible tu patrón heredado de dinero.",
    "No puedes cambiar lo que no ves. Aquí le pones nombre por primera vez.",
    2
  ),

  // 3. Día 2 — crema
  cremaSlide(
    "Día 02 — Soltar",
    "Reprogramamos la creencia vieja.",
    "\"No es para mí\" tiene un origen. Con activación energética guiada, empezamos a soltarlo.",
    3
  ),

  // 4. Día 3 — crema
  cremaSlide(
    "Día 03 — Estructurar",
    "Diagnóstico de tu arquitectura financiera real.",
    "La estrategia no puede entrar antes que el espacio interno. Aquí la estrategia entra.",
    4
  ),

  // 5. Día 4 — grafito (PICO)
  grafitoSlide(
    "Día 04 — Magnetizar",
    "Instalamos la nueva identidad.",
    "La mujer que recibe con facilidad. Sin culpa. Sin sabotaje. Con la misma naturalidad con que antes lo bloqueabas.",
    5
  ),

  // 6. Día 5 — lavanda
  lavandaSlide(
    "Día 05 — Integrar",
    "Sesión en vivo conmigo + tu plan de 30 días.",
    "Te vas con método, no con motivación. Con un mapa claro para los próximos 30 días de tu vida real.",
    6
  ),

  // 7. CTA — trigger MAGNETIK
  slide(`<div style="width:100%;height:100%;background:#C4963A;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:7%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:0.9em;">
  <p style="margin:0;font-size:0.6em;letter-spacing:0.3em;text-transform:uppercase;color:rgba(38,38,42,0.55);font-weight:600;">Inscripción abierta</p>
  <h2 style="margin:0;font-family:'Georgia','Times New Roman',serif;font-size:2em;font-weight:400;color:#26262A;line-height:1.15;font-style:italic;">Energía + estructura.<br>5 días.</h2>
  <div style="display:flex;gap:1.2em;align-items:center;margin:0.2em 0;">
    <span style="font-size:1.4em;font-weight:800;color:#26262A;">$197 MXN</span>
    <div style="width:1px;height:24px;background:rgba(38,38,42,0.3);"></div>
    <span style="font-size:0.88em;color:rgba(38,38,42,0.7);font-weight:500;">Inicia 20 julio</span>
  </div>
  <p style="margin:0;font-size:0.84em;color:#26262A;line-height:1.6;opacity:0.82;max-width:86%;">Comenta ⤵ y te mando todos los detalles al DM</p>
  <div style="border:2px solid #26262A;border-radius:100px;padding:0.65em 2em;">
    <span style="font-size:1em;font-weight:800;color:#26262A;letter-spacing:0.2em;">MAGNETIK</span>
  </div>
  <p style="margin:0;font-size:0.6em;color:rgba(38,38,42,0.45);letter-spacing:0.2em;">@soymagnetik</p>
</div>`, 7),

];

// ─────────────────────────────────────────────────────────────────────────────

const newCarousel = {
  id: "magnetik-money-s3-2026",
  name: "C3 — Magnetik Money: El Reto de 5 Días (mapa)",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "magnetikMoney", "reto5dias", "inscripcion", "semana3", "MAGNETIK"],
};

let data = { carousels: [] };
if (fs.existsSync(DATA_FILE)) {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf8").replace(/^﻿/, "");
    data = JSON.parse(raw);
    if (!Array.isArray(data.carousels)) data.carousels = [];
  } catch { data = { carousels: [] }; }
}

data.carousels = data.carousels.filter((c) => c.id !== newCarousel.id);
data.carousels.push(newCarousel);
fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
console.log(`✅ OK! ${data.carousels.length} carruseles en total.`);
console.log(`   → "${newCarousel.name}" — 7 slides, trigger MAGNETIK`);
