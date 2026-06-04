/**
 * Pieza 8 — "El día que decidas no achicarte más"
 * 6 slides | Soy Magnetik brand palette
 *
 * Palette:
 *   bg:      #1a1424  (morado oscuro)
 *   bg2:     #261e30  (capa secundaria)
 *   lavanda: #9B7FBF  (acento principal)
 *   amber:   #C4963A  (acento secundario / números)
 *   cream:   #F0EBE0  (texto cálido)
 *
 * Slide 6: diseñado para que agregues tu foto desde el editor.
 *
 * Ejecutar desde la carpeta open-carrusel:
 *   node pieza8-no-achicarte.js
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
    <div style="width:44px;height:3px;background:linear-gradient(90deg,#9B7FBF,#C4963A);border-radius:2px;"></div>
    <h1 style="margin:0;font-size:3.8em;font-weight:900;color:#F0EBE0;line-height:1.06;letter-spacing:-0.02em;">El día que<br>decidas<br><span style="color:#9B7FBF;">no achicarte</span><br>más</h1>
    <div style="width:44px;height:3px;background:linear-gradient(90deg,#C4963A,#9B7FBF);border-radius:2px;"></div>
  </div>
  <div style="width:100%;display:flex;justify-content:center;">
    <span style="font-size:0.82em;color:rgba(240,235,224,0.33);letter-spacing:0.2em;">@soymagnetik</span>
  </div>
</div>`, 1),

  // 2. El diagnóstico
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.4em;">
  <p style="margin:0;font-size:1.5em;font-weight:400;color:rgba(240,235,224,0.48);line-height:1.5;font-style:italic;">Llevas años haciéndote pequeño/a.</p>
  <div style="width:36px;height:2px;background:#9B7FBF;border-radius:2px;opacity:0.7;"></div>
  <h2 style="margin:0;font-size:2.5em;font-weight:900;color:#F0EBE0;line-height:1.1;">No porque no puedas.</h2>
  <h2 style="margin:0;font-size:2.5em;font-weight:900;color:#9B7FBF;line-height:1.1;">Porque creíste<br>que era más seguro.</h2>
</div>`, 2),

  // 3. Cómo se ve achicarse (lista)
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.2em;">
  <p style="margin:0;font-size:1em;color:#C4963A;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;">Achicarte se ve así:</p>
  <div style="display:flex;flex-direction:column;gap:0.9em;margin-top:0.4em;">
    <div style="display:flex;align-items:flex-start;gap:0.8em;">
      <span style="color:#9B7FBF;font-size:1.3em;line-height:1.3;flex-shrink:0;">›</span>
      <p style="margin:0;font-size:1.12em;color:#F0EBE0;line-height:1.5;">Callarte cuando tienes razón</p>
    </div>
    <div style="display:flex;align-items:flex-start;gap:0.8em;">
      <span style="color:#9B7FBF;font-size:1.3em;line-height:1.3;flex-shrink:0;">›</span>
      <p style="margin:0;font-size:1.12em;color:#F0EBE0;line-height:1.5;">Minimizar tus logros para no incomodar</p>
    </div>
    <div style="display:flex;align-items:flex-start;gap:0.8em;">
      <span style="color:#9B7FBF;font-size:1.3em;line-height:1.3;flex-shrink:0;">›</span>
      <p style="margin:0;font-size:1.12em;color:#F0EBE0;line-height:1.5;">Pedir perdón por tus sueños</p>
    </div>
    <div style="display:flex;align-items:flex-start;gap:0.8em;">
      <span style="color:#9B7FBF;font-size:1.3em;line-height:1.3;flex-shrink:0;">›</span>
      <p style="margin:0;font-size:1.12em;color:#F0EBE0;line-height:1.5;">Ocupar menos espacio del que mereces</p>
    </div>
  </div>
  <div style="width:100%;height:1px;background:rgba(155,127,191,0.2);margin-top:0.6em;"></div>
  <span style="font-size:0.8em;color:#9B7FBF;letter-spacing:0.18em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
</div>`, 3),

  // 4. El punto de quiebre
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;padding:8% 9%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;gap:1.5em;">
  <div style="background:#261e30;border-left:3px solid #9B7FBF;border-radius:0 12px 12px 0;padding:1.4em 1.6em;">
    <p style="margin:0;font-size:1.22em;color:rgba(240,235,224,0.7);line-height:1.6;font-style:italic;">"Lo peor no es quedarte pequeño/a. Lo peor es acostumbrarte a serlo."</p>
  </div>
  <h2 style="margin:0;font-size:2.2em;font-weight:800;color:#F0EBE0;line-height:1.2;">Pero hay un momento<br>en que algo dentro de ti<br><span style="color:#9B7FBF;">se niega a seguir.</span></h2>
</div>`, 4),

  // 5. La decisión
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;gap:1.3em;">
  <h2 style="margin:0;font-size:2.2em;font-weight:900;color:rgba(240,235,224,0.45);line-height:1.2;">Ese día no llega solo.</h2>
  <div style="width:36px;height:2px;background:#C4963A;border-radius:2px;opacity:0.8;"></div>
  <h2 style="margin:0;font-size:2.8em;font-weight:900;color:#F0EBE0;line-height:1.1;">Ese día<br><span style="color:#C4963A;">lo decides tú.</span></h2>
  <p style="margin:0;font-size:1.1em;color:rgba(240,235,224,0.55);line-height:1.65;max-width:84%;">Y cuando lo decides, empiezas a ocupar el espacio que siempre fue tuyo.</p>
</div>`, 5),

  // 6. CTA — con espacio para foto
  slide(`<div style="width:100%;height:100%;background:#1a1424;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:7% 8%;box-sizing:border-box;font-family:'Inter',Arial,sans-serif;text-align:center;">
  <span style="font-size:0.9em;color:#9B7FBF;letter-spacing:0.2em;text-transform:uppercase;font-weight:600;">Soy Magnetik</span>
  <div style="display:flex;flex-direction:column;align-items:center;gap:1.2em;">
    <h2 style="margin:0;font-size:2.6em;font-weight:900;color:#F0EBE0;line-height:1.1;">¿Ese día<br>es hoy?</h2>
    <div style="width:44px;height:3px;background:linear-gradient(90deg,#9B7FBF,#C4963A);border-radius:2px;"></div>
    <p style="margin:0;font-size:1.05em;color:rgba(240,235,224,0.58);line-height:1.68;max-width:84%;">Escríbeme <strong style="color:#C4963A;">TECHO</strong> en los comentarios y te cuento lo que sigue.</p>
    <div style="background:rgba(155,127,191,0.15);border:1.5px solid #9B7FBF;border-radius:14px;padding:0.8em 2em;">
      <span style="font-size:1.5em;font-weight:900;color:#9B7FBF;letter-spacing:0.08em;">TECHO</span>
    </div>
  </div>
  <span style="font-size:0.8em;color:rgba(240,235,224,0.3);letter-spacing:0.2em;">@soymagnetik</span>
</div>`, 6),

];

// ─────────────────────────────────────────────────────────────────────────────

const newCarousel = {
  id: "p8-no-achicarte-2026",
  name: "Pieza 8 — No Achicarte Más",
  aspectRatio: "1:1",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  slides,
  referenceImages: [],
  chatSessionId: null,
  isTemplate: false,
  tags: ["soymagnetik", "achicarte", "decision", "crecimiento"],
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
console.log(`   → "${newCarousel.name}" (${slides.length} slides)`);
console.log(`   ℹ️  Slide 6: agrega tu foto desde el editor del app.`);
