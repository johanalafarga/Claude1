/**
 * Pieza 2 — "5 señales de que te estás apagando a propósito"
 * 7 slides | Soy Magnetik brand palette (FIXED)
 *
 * Palette:
 *   bg:      #1a1424  (morado oscuro)
 *   bg2:     #261e30  (capa secundaria)
 *   lavanda: #9B7FBF
 *   amber:   #C4963A
 *   cream:   #F0EBE0
 *
 * Ejecutar desde open-carrusel:
 *   node pieza2-5senales-fix.js
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
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:7% 8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;">
  <div style="width:100%;display:flex;justify-content:flex-end;">
    <span style="font-size:1em;color:#9B7FBF;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
  </div>
  <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.8em;">
    <p style="margin:0;font-size:1em;color:#C4963A;letter-spacing:0.25em;text-transform:uppercase;font-weight:500;">¿Lo reconoces?</p>
    <h1 style="margin:0;font-size:3.6em;font-weight:900;color:#F0EBE0;line-height:1.06;letter-spacing:-0.02em;"><span style="color:#9B7FBF;">5 señales</span><br>de que te estás<br>apagando<br>a propósito</h1>
    <div style="width:44px;height:3px;background:linear-gradient(90deg,#9B7FBF,#C4963A);border-radius:2px;margin-top:0.6em;"></div>
  </div>
  <span style="font-size:0.82em;color:rgba(240,235,224,0.33);letter-spacing:0.2em;">@soymagnetik</span>
</div>`, 1),

  // 2. Señal 01 — Te disculpas por existir
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3em;font-weight:900;color:#C4963A;line-height:1;">01</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Te disculpas<br>por existir</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">Pides perdón por tus opiniones antes de darlas. Minimizas tus logros para que nadie se sienta incómodo. Reduces tu presencia para que otros quepan.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 2),

  // 3. Señal 02 — Esperas permiso para avanzar
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3em;font-weight:900;color:#C4963A;line-height:1;">02</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Esperas permiso<br>para avanzar</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">No das el siguiente paso hasta que alguien lo apruebe. Buscas validación externa para hacer lo que ya sabes que tienes que hacer. El permiso que esperas solo lo puedes dar tú.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 3),

  // 4. Señal 03 — Eliges el silencio sobre la verdad
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3em;font-weight:900;color:#C4963A;line-height:1;">03</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Eliges el silencio<br>sobre la verdad</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">Te quedas callado/a aunque sepas que tienes razón. Prefieres la paz falsa al conflicto verdadero. Y ese silencio, con el tiempo, se convierte en resentimiento.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 4),

  // 5. Señal 04 — Tus sueños te parecen demasiado
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3em;font-weight:900;color:#C4963A;line-height:1;">04</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Tus sueños<br>te parecen demasiado</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">Empiezas a dudar si mereces lo que deseas. Te preguntas "¿quién soy yo para querer eso?" Y poco a poco ajustas tus sueños a lo que otros creen posible para ti.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 5),

  // 6. Señal 05 — Prefieres quedarte donde estás
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.3em;">
  <div style="display:flex;align-items:baseline;gap:0.6em;">
    <span style="font-size:3em;font-weight:900;color:#C4963A;line-height:1;">05</span>
    <div style="width:28px;height:2px;background:#C4963A;opacity:0.6;margin-bottom:0.3em;"></div>
  </div>
  <h2 style="margin:0;font-size:2.3em;font-weight:800;color:#F0EBE0;line-height:1.15;">Prefieres quedarte<br>donde estás</h2>
  <p style="margin:0;font-size:1.08em;color:rgba(240,235,224,0.62);line-height:1.68;">No es comodidad. Es miedo disfrazado de conformidad. Sabes que puedes más pero eliges no intentarlo — porque fallar desde arriba duele más que nunca haber subido.</p>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.4em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 6),

  // 7. CTA
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.5em;">
  <h2 style="margin:0;font-size:2.5em;font-weight:900;color:#F0EBE0;line-height:1.1;">¿Te identificaste<br>con alguna?</h2>
  <div style="width:44px;height:3px;background:linear-gradient(90deg,#9B7FBF,#C4963A);border-radius:2px;"></div>
  <p style="margin:0;font-size:1.05em;color:rgba(240,235,224,0.58);line-height:1.68;max-width:84%;">Escríbeme <strong style="color:#C4963A;">TECHO</strong> en los comentarios y te envío algo que te ayudará a romper ese patrón.</p>
  <div style="background:rgba(155,127,191,0.15);border:1.5px solid #9B7FBF;border-radius:14px;padding:0.8em 2.2em;">
    <span style="font-size:1.6em;font-weight:900;color:#9B7FBF;letter-spacing:0.08em;">TECHO</span>
  </div>
  <span style="font-size:0.82em;color:rgba(240,235,224,0.32);letter-spacing:0.2em;margin-top:0.2em;">@soymagnetik</span>
</div>`, 7),

];

// ─────────────────────────────────────────────────────────────────────────────

const newCarousel = {
  id: "p2-senales-apagando-2026",
  name: "5 Señales — Te Estás Apagando",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "señales", "apagando", "despertar"],
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
