/**
 * CARRUSEL 1 — "Tu relación con el dinero no es tuya. La heredaste."
 * Soy Magnetik · Semana 1 · Martes 23 jun
 * Trigger: DINERO | 6 slides
 *
 * Paleta editorial:
 *   crema:   #F0EBE0 (bg claro)
 *   lavanda: #9B7FBF (bg acento)
 *   grafito: #26262A (bg pico / texto oscuro)
 *   dorado:  #C4963A (bg CTA / acento)
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

function grafitoSlide(headline, body, order) {
  return slide(`<div style="width:100%;height:100%;background:#26262A;display:flex;flex-direction:column;justify-content:center;padding:9% 10%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;position:relative;">
  <div style="width:30px;height:2px;background:#9B7FBF;margin-bottom:1.4em;"></div>
  <h2 style="margin:0 0 0.8em;font-family:'Georgia','Times New Roman',serif;font-size:2.3em;font-weight:400;color:#F0EBE0;line-height:1.2;font-style:italic;">${headline}</h2>
  <p style="margin:0;font-size:0.9em;color:rgba(240,235,224,0.55);line-height:1.75;">${body}</p>
  <div style="position:absolute;bottom:5%;right:6%;font-size:0.6em;color:rgba(240,235,224,0.2);letter-spacing:0.2em;">@soymagnetik</div>
</div>`, order);
}

function doradoCTA(headline, body, trigger, order) {
  return slide(`<div style="width:100%;height:100%;background:#C4963A;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.1em;">
  <p style="margin:0;font-size:0.6em;letter-spacing:0.3em;text-transform:uppercase;color:rgba(38,38,42,0.55);font-weight:600;">Soy Magnetik</p>
  <h2 style="margin:0;font-family:'Georgia','Times New Roman',serif;font-size:2em;font-weight:400;color:#26262A;line-height:1.2;font-style:italic;">${headline}</h2>
  <div style="width:32px;height:1.5px;background:rgba(38,38,42,0.35);"></div>
  <p style="margin:0;font-size:0.88em;color:#26262A;line-height:1.65;opacity:0.82;max-width:88%;">${body}</p>
  <div style="border:2px solid #26262A;border-radius:100px;padding:0.65em 2em;margin-top:0.3em;">
    <span style="font-size:1em;font-weight:800;color:#26262A;letter-spacing:0.2em;">${trigger}</span>
  </div>
  <p style="margin:0;font-size:0.6em;color:rgba(38,38,42,0.45);letter-spacing:0.2em;">@soymagnetik</p>
</div>`, order);
}

// ─── SLIDES ──────────────────────────────────────────────────────────────────

const slides = [

  // 1. Portada — crema
  cremaSlide(
    "Soy Magnetik · Semana 1",
    "Tu relación con el dinero<br>no es tuya.<br><em style=\"color:#9B7FBF;\">La heredaste.</em>",
    "Y por eso la puedes cambiar.",
    1
  ),

  // 2. Señal 1 — lavanda
  lavandaSlide(
    "Señal 01",
    "Te cuesta cobrar lo que vales.",
    "Aprendiste, sin que nadie lo dijera, que pedir es de malagradecidas. Que el dinero se gana con sacrificio, no con valor.",
    2
  ),

  // 3. Señal 2 — crema
  cremaSlide(
    "Señal 02",
    "Cuando llega dinero de más, algo lo gasta.",
    "Una voz vieja susurra: ‘esto no es para mí’. Y sin darte cuenta, encuentras la manera de volver al nivel conocido.",
    3
  ),

  // 4. Señal 3 — grafito (PICO)
  grafitoSlide(
    "Señal 03 — El techo siempre vuelve.",
    "Trabajas más para ganar más. Pero el techo siempre regresa. Porque el techo no está en tu agenda — está en tu identidad.",
    4
  ),

  // 5. La verdad — dorado
  slide(`<div style="width:100%;height:100%;background:#C4963A;display:flex;flex-direction:column;justify-content:center;padding:9% 10%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;position:relative;">
  <p style="margin:0 0 1em;font-size:0.6em;letter-spacing:0.28em;text-transform:uppercase;color:rgba(38,38,42,0.55);font-weight:600;">La verdad</p>
  <h2 style="margin:0 0 0.7em;font-family:'Georgia','Times New Roman',serif;font-size:2.2em;font-weight:400;color:#26262A;line-height:1.18;font-style:italic;">El patrón es heredado.<br>La elección es tuya.</h2>
  <p style="margin:0;font-size:0.9em;color:#26262A;line-height:1.72;opacity:0.85;">El dinero no responde a tu esfuerzo. Responde a <strong>quién crees que eres</strong>.</p>
  <div style="position:absolute;bottom:5%;right:6%;font-size:0.6em;color:rgba(38,38,42,0.4);letter-spacing:0.2em;">@soymagnetik</div>
</div>`, 5),

  // 6. CTA — crema + logo (per diseño: contraste con slide 5 dorado)
  slide(`<div style="width:100%;height:100%;background:#F0EBE0;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:9% 10%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.1em;">
  <p style="margin:0;font-size:0.6em;letter-spacing:0.3em;text-transform:uppercase;color:#C4963A;font-weight:600;">Soy Magnetik</p>
  <h2 style="margin:0;font-family:'Georgia','Times New Roman',serif;font-size:2.1em;font-weight:400;color:#26262A;line-height:1.2;font-style:italic;">¿Cuál de las 3 señales<br>reconociste?</h2>
  <div style="width:32px;height:1.5px;background:#9B7FBF;"></div>
  <p style="margin:0;font-size:0.88em;color:#48484C;line-height:1.65;max-width:86%;">Comenta ⤵ y te mando el mini-diagnóstico de tu patrón al DM 🤍</p>
  <div style="background:#26262A;border-radius:100px;padding:0.65em 2em;">
    <span style="font-size:1em;font-weight:800;color:#F0EBE0;letter-spacing:0.2em;">DINERO</span>
  </div>
  <p style="margin:0;font-size:0.6em;color:rgba(38,38,42,0.35);letter-spacing:0.2em;">@soymagnetik</p>
</div>`, 6),

];

// ─────────────────────────────────────────────────────────────────────────────

const newCarousel = {
  id: "magnetik-dinero-s1-2026",
  name: "C1 — Tu relación con el dinero (La heredaste)",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "dineroConsciente", "patronDeDinero", "semana1", "DINERO"],
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
console.log(`   → "${newCarousel.name}" — 6 slides, trigger DINERO`);
