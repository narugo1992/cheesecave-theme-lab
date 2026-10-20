import { PRESETS } from "./presets.mjs";
import { createThemePalette, contrastRatio } from "./site-theme.mjs";
const hex = /^#[0-9a-f]{6}$/i; const ids = new Set(); let bad = 0; const rows = [];
for (const p of PRESETS) {
  if (ids.has(p.id)) { console.log("DUP", p.id); bad++; } ids.add(p.id);
  for (const m of ["light", "dark"]) for (const k of ["primary", "background", "card"]) if (!hex.test(p[m][k])) { console.log("BAD HEX", p.id, m, k); bad++; }
  const row = { id: p.id };
  for (const m of ["light", "dark"]) {
    const t = p[m], pal = createThemePalette(t);
    row[m] = { rawLink: +contrastRatio(t.primary, t.card).toFixed(2), btn: +contrastRatio(pal.buttonText, t.primary).toFixed(2), sep: +contrastRatio(t.card, t.background).toFixed(2), text: +contrastRatio(pal.text, t.background).toFixed(2), cardText: +contrastRatio(pal.cardText, t.card).toFixed(2), link: +contrastRatio(pal.link, t.card).toFixed(2) };
  }
  rows.push(row);
}
console.log("presets:", PRESETS.length, "problems:", bad);
const flag = (r) => ["light", "dark"].flatMap((m) => [r[m].btn < 4.5 ? `${m} button text ${r[m].btn}` : null, r[m].link < 4.5 ? `${m} link ${r[m].link}` : null, r[m].text < 4.5 ? `${m} text ${r[m].text}` : null, r[m].cardText < 4.5 ? `${m} card text ${r[m].cardText}` : null].filter(Boolean));
for (const r of rows) { const f = flag(r); if (f.length) console.log("FLAG", r.id, f.join("; ")); }
console.log("\nweakest raw link contrast (primary on card, before the site darkens/lightens it):");
for (const r of [...rows].sort((a, b) => Math.min(a.light.rawLink, a.dark.rawLink) - Math.min(b.light.rawLink, b.dark.rawLink)).slice(0, 8)) console.log(" ", r.id.padEnd(18), "light", r.light.rawLink, "dark", r.dark.rawLink);
console.log("\nweakest button text contrast:");
for (const r of [...rows].sort((a, b) => Math.min(a.light.btn, a.dark.btn) - Math.min(b.light.btn, b.dark.btn)).slice(0, 8)) console.log(" ", r.id.padEnd(18), "light", r.light.btn, "dark", r.dark.btn);
console.log("\nlowest card/page separation:");
for (const r of [...rows].sort((a, b) => Math.min(a.light.sep, a.dark.sep) - Math.min(b.light.sep, b.dark.sep)).slice(0, 8)) console.log(" ", r.id.padEnd(18), "light", r.light.sep, "dark", r.dark.sep);
