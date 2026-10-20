import { PRESETS } from "./presets.mjs";
import { toOklch, hueDiff } from "./oklch.mjs";
const off = PRESETS.filter((p) => p.prov === "official"); const med = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];
const dL = off.map((p) => toOklch(p.dark.primary).L - toOklch(p.light.primary).L), dh = off.filter((p) => toOklch(p.light.primary).C > 0.03).map((p) => hueDiff(toOklch(p.light.primary).h, toOklch(p.dark.primary).h));
console.log("themes", off.length, "| dark-light accent lightness: median", med(dL).toFixed(3), "min", Math.min(...dL).toFixed(2), "max", Math.max(...dL).toFixed(2), "| within 0.02 (same colour in both modes):", dL.filter((x) => Math.abs(x) <= 0.02).length);
console.log("hue shift light->dark accent (chromatic ones, n=" + dh.length + "): median", med(dh).toFixed(1), "deg, over 15 deg:", dh.filter((x) => x > 15).length);
const dpC = off.map((p) => toOklch(p.dark.background).C), dcC = off.map((p) => toOklch(p.dark.card).C);
console.log("dark page chroma median", med(dpC).toFixed(3), "| dark page chroma < 0.008:", dpC.filter((x) => x < 0.008).length, "| both dark page and card < 0.008:", off.filter((p) => toOklch(p.dark.background).C < 0.008 && toOklch(p.dark.card).C < 0.008).length, "| dark page chroma < 0.015:", dpC.filter((x) => x < 0.015).length);
console.log("dark page L median", med(off.map((p) => toOklch(p.dark.background).L)).toFixed(3), "card", med(off.map((p) => toOklch(p.dark.card).L)).toFixed(3), "| light page L", med(off.map((p) => toOklch(p.light.background).L)).toFixed(3), "card", med(off.map((p) => toOklch(p.light.card).L)).toFixed(3));
