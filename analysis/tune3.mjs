import { PRESETS } from "./presets.mjs";
import { toOklch, oklch2hex, dE } from "./oklch.mjs";
const official = PRESETS.filter((p) => p.prov === "official");
const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
// style hue: tinted = brand hue; neutral = none; ide = 250 at 35%
const surf = (primary, { lightL, lightC, darkL, darkC, lift, hue }) => { const { h } = toOklch(primary); const hs = hue === "tinted" ? h : hue === "ide" ? 250 : 0, k = hue === "neutral" ? 0 : hue === "ide" ? 0.35 : 1;
  return { lb: oklch2hex(lightL, lightC * k, hs), db: oklch2hex(darkL, darkC * k, hs), dc: oklch2hex(darkL + lift, darkC * 1.2 * k, hs) } };
const cases = [];
for (const lightL of [0.96, 0.975]) for (const darkL of [0.2, 0.23, 0.25]) for (const darkC of [0.01, 0.018]) for (const hue of ["tinted", "neutral", "ide"]) cases.push({ lightL, lightC: 0.006, darkL, darkC, lift: 0.05, hue });
const score = (c) => { const rows = official.map((p) => { const s = surf(p.light.primary, c); return [dE(s.lb, p.light.background), dE(s.db, p.dark.background), dE(s.dc, p.dark.card)] }); return { light: mean(rows.map((r) => r[0])), dpage: mean(rows.map((r) => r[1])), dcard: mean(rows.map((r) => r[2])) } };
const out = cases.map((c) => ({ c, s: score(c) })).sort((a, b) => a.s.light + a.s.dpage + a.s.dcard - (b.s.light + b.s.dpage + b.s.dcard));
console.log("surface parameters vs the 13 verified themes (mean distance: light page / dark page / dark card)");
for (const { c, s } of out.slice(0, 8)) console.log(" ", `lightL ${c.lightL} darkL ${c.darkL} darkC ${c.darkC} hue ${c.hue}`.padEnd(48), s.light.toFixed(3), s.dpage.toFixed(3), s.dcard.toFixed(3));
const old = score({ lightL: 0.975, lightC: 0.008, darkL: 0.2, darkC: 0.018, lift: 0.05, hue: "tinted" }); console.log("old defaults (0.975 / 0.20 / 0.018 / tinted):", old.light.toFixed(3), old.dpage.toFixed(3), old.dcard.toFixed(3));
