import { PRESETS } from "./presets.mjs";
import { ALGOS, rules } from "./algos.mjs";
import { dE } from "./oklch.mjs";
const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length, q = (a, p) => [...a].sort((x, y) => x - y)[Math.floor((a.length - 1) * p)];
const slots = [["light", "background"], ["light", "card"], ["dark", "primary"], ["dark", "background"], ["dark", "card"]];
const official = PRESETS.filter((p) => p.prov === "official");
const fns = { "Rules (new, fitted to real themes)": (p) => rules(p), "Rules, neutral surfaces": (p) => rules(p, { style: "neutral" }), "Material 3": ALGOS.material3, "Ant Design": ALGOS.antDesign };
console.log(`Given only the light primary of each of the ${official.length} verified themes, distance to the theme's other five colours (OKLab; 0.02 barely visible, 0.05 clearly different)`);
console.log("method".padEnd(38), slots.map(([m, k]) => `${m}.${k}`.padEnd(17)).join(""), "mean of the five");
for (const [name, fn] of Object.entries(fns)) { const per = slots.map(([m, k]) => mean(official.map((p) => dE(fn(p.light.primary)[m][k], p[m][k])))); console.log(name.padEnd(38), per.map((v) => v.toFixed(3).padEnd(17)).join(""), mean(per).toFixed(3)); }
console.log("\nhow many of the 13 are within 0.05 on each slot (rules, default):");
for (const [m, k] of slots) { const d = official.map((p) => dE(rules(p.light.primary)[m][k], p[m][k])); console.log(" ", `${m}.${k}`.padEnd(18), d.filter((x) => x < 0.05).length, "of", d.length, " worst", Math.max(...d).toFixed(3), official[d.indexOf(Math.max(...d))].id); }
