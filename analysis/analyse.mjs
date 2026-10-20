import { PRESETS } from "./presets.mjs";
import { toOklch, maxChroma, hueDiff } from "./oklch.mjs";
const f = (x, d = 2) => x.toFixed(d);
const rows = PRESETS.map((p) => { const o = {}; for (const m of ["light", "dark"]) for (const k of ["primary", "background", "card"]) o[`${m}.${k}`] = toOklch(p[m][k]); return { p, o }; });
const avg = (a) => a.reduce((s, x) => s + x, 0) / a.length;
const med = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
console.log("== Does the dark primary keep the hue of the light primary? ==");
const dh = rows.map(({ p, o }) => ({ id: p.id, d: hueDiff(o["light.primary"].h, o["dark.primary"].h), C: o["light.primary"].C }));
const chromatic = dh.filter((x) => x.C > 0.05);
console.log("chromatic presets:", chromatic.length, " hue shift light->dark primary: median", f(med(chromatic.map((x) => x.d)), 1), "deg, max", f(Math.max(...chromatic.map((x) => x.d)), 1), "deg (", chromatic.sort((a, b) => b.d - a.d)[0].id, ")");
console.log("\n== Lightness and chroma of the primary ==");
const dL = rows.map(({ o }) => o["dark.primary"].L - o["light.primary"].L);
console.log("dark primary is lighter than light primary by: median", f(med(dL)), " range", f(Math.min(...dL)), "to", f(Math.max(...dL)));
const cr = rows.filter(({ o }) => o["light.primary"].C > 0.05).map(({ o }) => o["dark.primary"].C / o["light.primary"].C);
console.log("dark/light primary chroma ratio: median", f(med(cr)), " range", f(Math.min(...cr)), "to", f(Math.max(...cr)));
console.log("light primary L: median", f(med(rows.map(({ o }) => o["light.primary"].L))), " range", f(Math.min(...rows.map(({ o }) => o["light.primary"].L))), "to", f(Math.max(...rows.map(({ o }) => o["light.primary"].L))));
console.log("\n== Does L of the light primary depend on the hue? (hue bucket, count, median L, min..max) ==");
const buckets = [[0, 30, "red-orange"], [30, 75, "orange-amber"], [75, 120, "yellow-olive"], [120, 180, "green-teal"], [180, 240, "cyan-blue"], [240, 300, "blue-violet"], [300, 360, "magenta-pink"]];
for (const [a, b, n] of buckets) { const s = rows.filter(({ o }) => o["light.primary"].C > 0.05 && o["light.primary"].h >= a && o["light.primary"].h < b).map(({ o }) => o["light.primary"].L); if (s.length) console.log(" ", n.padEnd(14), String(s.length).padStart(2), "L median", f(med(s)), " range", f(Math.min(...s)), "-", f(Math.max(...s))); }
console.log("\n== Surfaces: how coloured, and which hue? ==");
for (const k of ["light.background", "light.card", "dark.background", "dark.card"]) { const s = rows.map(({ o }) => o[k]); console.log(" ", k.padEnd(17), "L median", f(med(s.map((x) => x.L))), " chroma median", f(med(s.map((x) => x.C)), 3), " max", f(Math.max(...s.map((x) => x.C)), 3)); }
console.log("\n== Is the surface tinted with the primary's hue? (hue difference, only where the surface has chroma > 0.008) ==");
const follow = { tinted: [], fixed: [], neutral: [] };
for (const { p, o } of rows) { const sb = o["dark.background"], pb = o["dark.primary"]; const c = sb.C; if (c < 0.008) follow.neutral.push(p.id); else (hueDiff(sb.h, pb.h) < 35 ? follow.tinted : follow.fixed).push(`${p.id}(${f(hueDiff(sb.h, pb.h), 0)})`); }
console.log("dark background tinted with the primary's hue (within 35 deg):", follow.tinted.length, "\n ", follow.tinted.join(", "));
console.log("dark background has a hue unrelated to the primary:", follow.fixed.length, "\n ", follow.fixed.join(", "));
console.log("dark background is neutral grey:", follow.neutral.length, follow.neutral.join(", "));
console.log("\n== Relative chroma of the light primary (how close to the sRGB gamut edge at its own L and hue; 1 = fully vivid) ==");
const rel = rows.filter(({ o }) => o["light.primary"].C > 0.05).map(({ o }) => o["light.primary"].C / maxChroma(o["light.primary"].L, o["light.primary"].h));
console.log(" median", f(med(rel)), " range", f(Math.min(...rel)), "-", f(Math.max(...rel)));
