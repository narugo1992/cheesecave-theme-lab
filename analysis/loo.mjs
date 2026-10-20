import { PRESETS } from "./presets.mjs";
import { toOklch, oklch2hex, dE } from "./oklch.mjs";
const official = PRESETS.filter((p) => p.prov === "official");
const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
const dp = (primary, floor) => { const { L, C, h } = toOklch(primary); return oklch2hex(Math.max(L, floor), C, h) };
const floors = [0.5, 0.55, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.75, 0.8];
let held = [], chosen = [];
for (const test of official) { const train = official.filter((p) => p !== test); const best = floors.map((f) => ({ f, e: mean(train.map((p) => dE(dp(p.light.primary, f), p.dark.primary))) })).sort((a, b) => a.e - b.e)[0].f; chosen.push(best); held.push(dE(dp(test.light.primary, best), test.dark.primary)); }
console.log("leave-one-out, dark primary: held-out mean distance", mean(held).toFixed(3), "| floors chosen when each theme was left out:", [...new Set(chosen)].join(", "));
console.log("in-sample at floor 0.68:", mean(official.map((p) => dE(dp(p.light.primary, 0.68), p.dark.primary))).toFixed(3), "| Material 3: 0.172, Ant Design: 0.165 (not fitted)");
