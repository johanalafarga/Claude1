/**
 * CARRUSEL 4 — "Te apuntas a Magnetik Money. ¿Y luego qué?"
 * Soy Magnetik · Semana 4 · Martes 14 jul · Conversión / Escasez
 * Trigger: QUIERO | 7 slides
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

function diaSlide(num, titulo, descripcion, bgStyle, order) {
  const configs = {
    lavanda: {
      bg: "#9B7FBF",
      numColor: "rgba(240,235,224,0.22)",
      titleColor: "#F0EBE0",
      bodyColor: "rgba(240,235,224,0.7)",
      handleColor: "rgba(240,235,224,0.25)",
    },
    crema: {
      bg: "#F0EBE0",
      numColor: "rgba(196,150,58,0.3)",
      titleColor: "#26262A",
      bodyColor: "#48484C",
      handleColor: "rgba(38,38,42,0.28)",
    },
    grafito: {
      bg: "#26262A",
      numColor: "rgba(155,127,191,0.3)",
      titleColor: "#F0EBE0",
      bodyColor: "rgba(240,235,224,0.55)",
      handleColor: "rgba(240,235,224,0.2)",
    },
  };
  const c = configs[bgStyle];

  return slide(`<div style="width:100%;height:100%;background:${c.bg};display:flex;flex-direction:column;justify-content:space-between;padding:7% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;">
  <div style="font-family:'Georgia','Times New Roman',serif;font-size:4em;font-weight:400;color:${c.numColor};line-height:1;margin:0;">D${num}</div>
  <div>
    <h2 style="margin:0 0 0.5em;font-family:'Georgia','Times New Roman',serif;font-size:2em;font-weight:400;color:${c.titleColor};line-height:1.2;font-style:italic;">${titulo}</h2>
    <p style="margin:0;font-size:0.88em;color:${c.bodyColor};line-height:1.78;">${descripcion}</p>
  </div>
  <p style="margin:0;font-size:0.6em;color:${c.handleColor};letter-spacing:0.2em;">@soymagnetik</p>
</div>`, order);
}

// ─── SLIDES ──────────────────────────────────────────────────────────────────

const slides = [

  // 1. Portada — crema
  cremaSlide(
    "Magnetik Money · Lo que vives",
    "Te apuntas.<br>¿Y luego qué?",
    "Esto vives, día por día. Sin sorpresas. Sin relleno. 👇",
    1
  ),

  // 2. Día 1 — lavanda
  diaSlide(
    1,
    "Audio + ejercicio: le pones nombre.",
    "Haces visible tu patrón de dinero. Por primera vez en tu vida, sabes exactamente de dónde viene.",
    "lavanda",
    2
  ),

  // 3. Día 2 — crema
  diaSlide(
    2,
    "Reprogramación guiada. Aquí muchas lloran.",
    "Sueltas la creencia heredada. No con fuerza de voluntad — con activación energética. Del bueno.",
    "crema",
    3
  ),

  // 4. Día 3 — crema
  diaSlide(
    3,
    "Diagnóstico de tu arquitectura financiera.",
    "Estrategia real, aterrizada a tu vida. No genérica, no teórica. La tuya.",
    "crema",
    4
  ),

  // 5. Día 4 — grafito (PICO)
  diaSlide(
    4,
    "Activación de tu nueva identidad.",
    "La mujer que recibe sin culpa. La que no sabotea. La que ya estaba ahí, esperando que le dieras permiso.",
    "grafito",
    5
  ),

  // 6. Día 5 — lavanda
  diaSlide(
    5,
    "Sesión EN VIVO conmigo + tu plan de 30 días.",
    "Cierras con método, no con ganas. Con claridad sobre exactamente qué sigue para ti.",
    "lavanda",
    6
  ),

  // 7. CTA — trigger QUIERO
  slide(`<div style="width:100%;height:100%;background:#C4963A;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:7%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:0.85em;">
  <p style="margin:0;font-size:0.6em;letter-spacing:0.3em;text-transform:uppercase;color:rgba(38,38,42,0.55);font-weight:600;">Últimos lugares</p>
  <h2 style="margin:0;font-family:'Georgia','Times New Roman',serif;font-size:1.9em;font-weight:400;color:#26262A;line-height:1.15;font-style:italic;">+ canal privado WhatsApp<br>+ acceso permanente.</h2>
  <div style="display:flex;gap:1.2em;align-items:center;margin:0.2em 0;">
    <span style="font-size:1.4em;font-weight:800;color:#26262A;">$197 MXN</span>
    <div style="width:1px;height:24px;background:rgba(38,38,42,0.3);"></div>
    <span style="font-size:0.88em;color:rgba(38,38,42,0.7);font-weight:500;">Inicia 20 julio</span>
  </div>
  <p style="margin:0;font-size:0.84em;color:#26262A;line-height:1.6;opacity:0.82;max-width:86%;">Comenta ⤵ para apartar tu lugar ahora</p>
  <div style="border:2px solid #26262A;border-radius:100px;padding:0.65em 2em;">
    <span style="font-size:1em;font-weight:800;color:#26262A;letter-spacing:0.2em;">QUIERO</span>
  </div>
  <p style="margin:0;font-size:0.6em;color:rgba(38,38,42,0.45);letter-spacing:0.2em;">@soymagnetik</p>
</div>`, 7),

];

// ─────────────────────────────────────────────────────────────────────────────

const newCarousel = {
  id: "magnetik-vivir-s4-2026",
  name: "C4 — Magnetik Money: Lo que vives día por día",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "magnetikMoney", "conversion", "semana4", "QUIERO"],
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
console.log(`   → "${newCarousel.name}" — 7 slides, trigger QUIERO`);
