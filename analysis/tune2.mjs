import { PRESETS } from "./presets.mjs";
import { toOklch, oklch2hex, dE } from "./oklch.mjs";
const truth = PRESETS.filter((p) => p.prov === "official" || p.prov === "partial"), official = PRESETS.filter((p) => p.prov === "official");
const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
const dp = (primary, floor, cs) => { const { L, C, h } = toOklch(primary); return oklch2hex(Math.max(L, floor), cs * C, h) };
const rows = [];
for (const floor of [0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72]) for (const cs of [0.9, 1, 1.1]) rows.push({ floor, cs, all: mean(truth.map((p) => dE(dp(p.light.primary, floor, cs), p.dark.primary))), off: mean(official.map((p) => dE(dp(p.light.primary, floor, cs), p.dark.primary))) });
rows.sort((a, b) => a.all - b.all);
console.log("best (floor of dark lightness, chroma scale): mean distance over 23 / over the 13 official"); for (const r of rows.slice(0, 6)) console.log(" ", `floor ${r.floor}  chroma x${r.cs}`.padEnd(26), r.all.toFixed(3), "/", r.off.toFixed(3));
console.log("current rule for reference: 0.094 / 0.116");
// the other slots: do the real themes' surfaces follow the rules? compare the verified dark bg / card lightness and chroma
const L = (hex) => toOklch(hex);
console.log("\nverified themes: page and card in OKLCH (L / chroma)");
for (const p of official) { const a = L(p.light.background), b = L(p.light.card), c = L(p.dark.background), d = L(p.dark.card); console.log(" ", p.id.padEnd(18), `light page ${a.L.toFixed(2)}/${a.C.toFixed(3)} card ${b.L.toFixed(2)}/${b.C.toFixed(3)}   dark page ${c.L.toFixed(2)}/${c.C.toFixed(3)} card ${d.L.toFixed(2)}/${d.C.toFixed(3)}`); }
const med = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
for (const [n, f] of [["light page L", (p) => L(p.light.background).L], ["light card L", (p) => L(p.light.card).L], ["dark page L", (p) => L(p.dark.background).L], ["dark card L", (p) => L(p.dark.card).L], ["dark page chroma", (p) => L(p.dark.background).C], ["dark card chroma", (p) => L(p.dark.card).C]]) console.log(" median", n.padEnd(17), med(official.map(f)).toFixed(3));
