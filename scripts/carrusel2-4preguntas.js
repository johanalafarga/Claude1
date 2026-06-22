/**
 * CARRUSEL 2 — "4 preguntas para hacer visible tu patrón de dinero"
 * Soy Magnetik · Semana 2 · Martes 30 jun
 * Trigger: PATRÓN | 6 slides
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

function preguntaSlide(num, pregunta, hint, bgClass, order) {
  const isLavanda = bgClass === "lavanda";
  const bg = isLavanda ? "#9B7FBF" : "#F0EBE0";
  const textColor = isLavanda ? "#F0EBE0" : "#26262A";
  const numColor = isLavanda ? "rgba(240,235,224,0.28)" : "rgba(196,150,58,0.35)";
  const hintColor = isLavanda ? "rgba(240,235,224,0.55)" : "#48484C";
  const handleColor = isLavanda ? "rgba(240,235,224,0.25)" : "rgba(38,38,42,0.28)";

  return slide(`<div style="width:100%;height:100%;background:${bg};display:flex;flex-direction:column;justify-content:space-between;padding:7% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;">
  <div style="font-family:'Georgia','Times New Roman',serif;font-size:3.8em;font-weight:400;color:${numColor};line-height:1;margin:0;">${num}</div>
  <div>
    <h2 style="margin:0 0 0.6em;font-family:'Georgia','Times New Roman',serif;font-size:2em;font-weight:400;color:${textColor};line-height:1.25;font-style:italic;">${pregunta}</h2>
    <p style="margin:0;font-size:0.82em;color:${hintColor};line-height:1.7;font-style:italic;">${hint}</p>
  </div>
  <p style="margin:0;font-size:0.6em;color:${handleColor};letter-spacing:0.2em;">@soymagnetik</p>
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

// ─── SLIDES ──────────────────────────────────────────────────────────────────

const slides = [

  // 1. Portada — crema
  cremaSlide(
    "Soy Magnetik · Semana 2",
    "El patrón invisible que decide<br>cuánto dinero entra<br>a tu vida.",
    "Hazlo visible — en 4 preguntas. Desliza 👇",
    1
  ),

  // 2. Pregunta 1 — lavanda
  preguntaSlide(
    "01",
    "¿Qué frase sobre el dinero escuchabas en tu casa de niña?",
    "\"No alcanza.\" · \"Es de malos.\" · \"Hay que sufrir para tenerlo.\"",
    "lavanda",
    2
  ),

  // 3. Pregunta 2 — crema
  preguntaSlide(
    "02",
    "¿Qué sientes en el cuerpo cuando llega dinero de más?",
    "¿Alegría limpia... o una culpa rara que no puedes explicar?",
    "crema",
    3
  ),

  // 4. Pregunta 3 — crema
  preguntaSlide(
    "03",
    "¿Cobras lo que vales, o te descuentas \"para no abusar\"?",
    "La respuesta honesta ya te está diciendo algo.",
    "crema",
    4
  ),

  // 5. Pregunta 4 — grafito (PICO)
  grafitoSlide(
    "¿Qué historia aparece cuando imaginas tener mucho más?",
    "\"Me volvería materialista.\" · \"Me envidiarían.\" · \"No es para mí.\"<br><br>Eso que respondiste no es la verdad. Es el patrón.",
    5
  ),

  // 6. CTA — trigger PATRÓN
  slide(`<div style="width:100%;height:100%;background:#C4963A;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1em;">
  <p style="margin:0;font-size:0.6em;letter-spacing:0.3em;text-transform:uppercase;color:rgba(38,38,42,0.55);font-weight:600;">Soy Magnetik</p>
  <h2 style="margin:0;font-family:'Georgia','Times New Roman',serif;font-size:2em;font-weight:400;color:#26262A;line-height:1.2;font-style:italic;">Los patrones se reescriben.<br>Siempre.</h2>
  <div style="width:32px;height:1.5px;background:rgba(38,38,42,0.35);"></div>
  <p style="margin:0;font-size:0.88em;color:#26262A;line-height:1.65;opacity:0.82;max-width:88%;">Comenta ⤵ y te mando el diagnóstico completo de tu patrón al DM 🤍</p>
  <div style="border:2px solid #26262A;border-radius:100px;padding:0.65em 2em;margin-top:0.3em;">
    <span style="font-size:1em;font-weight:800;color:#26262A;letter-spacing:0.2em;">PATRÓN</span>
  </div>
  <p style="margin:0;font-size:0.6em;color:rgba(38,38,42,0.45);letter-spacing:0.2em;">@soymagnetik</p>
</div>`, 6),

];

// ─────────────────────────────────────────────────────────────────────────────

const newCarousel = {
  id: "magnetik-patron-s2-2026",
  name: "C2 — 4 Preguntas para ver tu patrón de dinero",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "patronDeDinero", "dineroConsciente", "semana2", "PATRON"],
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
console.log(`   → "${newCarousel.name}" — 6 slides, trigger PATRÓN`);
