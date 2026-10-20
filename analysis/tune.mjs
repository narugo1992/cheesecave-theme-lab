import { PRESETS } from "./presets.mjs";
import { toOklch, oklch2hex, maxChroma, dE } from "./oklch.mjs";
const truth = PRESETS.filter((p) => p.prov === "official" || p.prov === "partial");
const official = PRESETS.filter((p) => p.prov === "official");
const q = (a, p) => [...a].sort((x, y) => x - y)[Math.floor((a.length - 1) * p)];
const darkPrimary = (primary, f) => { const { L, C, h } = toOklch(primary); const Ld = f.L(L); return oklch2hex(Ld, f.C * C, h) };
const variants = {
  "current: L+0.18 in [0.72,0.86], chroma x0.89": { L: (L) => Math.min(0.86, Math.max(L + 0.18, 0.72)), C: 0.89 },
  "keep L, at least 0.72": { L: (L) => Math.max(L, 0.72), C: 0.89 },
  "keep L, at least 0.70": { L: (L) => Math.max(L, 0.7), C: 0.89 },
  "L+0.10 in [0.70,0.80]": { L: (L) => Math.min(0.8, Math.max(L + 0.1, 0.7)), C: 0.89 },
  "L+0.12 in [0.68,0.80]": { L: (L) => Math.min(0.8, Math.max(L + 0.12, 0.68)), C: 0.9 },
  "L+0.08 in [0.66,0.78]": { L: (L) => Math.min(0.78, Math.max(L + 0.08, 0.66)), C: 0.95 },
  "keep L, at least 0.66, chroma x1": { L: (L) => Math.max(L, 0.66), C: 1 },
  "same colour in both modes": { L: (L) => L, C: 1 },
};
console.log("dark primary: distance to the real theme. rows: variant; columns: median / mean over", truth.length, "partly+fully verified themes, then mean over", official.length, "official ones");
for (const [name, f] of Object.entries(variants)) {
  const d = truth.map((p) => dE(darkPrimary(p.light.primary, f), p.dark.primary)), o = official.map((p) => dE(darkPrimary(p.light.primary, f), p.dark.primary));
  const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
  console.log(" ", name.padEnd(46), "median", q(d, 0.5).toFixed(3), " mean", mean(d).toFixed(3), " | official mean", mean(o).toFixed(3));
}
console.log("\nin the verified themes: light L -> dark L of the accent");
for (const p of official) { const a = toOklch(p.light.primary), b = toOklch(p.dark.primary); console.log(" ", p.id.padEnd(18), "L", a.L.toFixed(2), "->", b.L.toFixed(2), " dL", (b.L - a.L).toFixed(2), "  hue", a.h.toFixed(0), "->", b.h.toFixed(0), "  chroma", a.C.toFixed(3), "->", b.C.toFixed(3)); }
