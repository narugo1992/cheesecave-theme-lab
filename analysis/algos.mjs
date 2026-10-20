import { createRequire } from "node:module";
import { toOklch, oklch2hex, maxChroma } from "./oklch.mjs";
const require = createRequire(import.meta.url);
globalThis.window = globalThis; require("./libs/bundle/libs.js");
const { M, ant } = globalThis.PaletteLibs;
// Each algorithm maps ONE brand colour (the light primary) to the six colours of the site's theme.
export const STYLES = { tinted: (h) => [h, 1], cool: () => [265, 1], warm: () => [75, 1], neutral: () => [0, 0], ide: () => [250, 0.35] };
// A) rules in OKLCH, written by hand from how the hand-made sets behave
export function rules(primary, { style = "tinted", depth = 0 } = {}) {
  const { L, C, h } = toOklch(primary); const [hs, k] = STYLES[style](h);
  const Ld = Math.max(L, 0.68), bgL = 0.23 - depth * 0.07, cardL = bgL + 0.05;
  return { light: { primary, background: oklch2hex(0.96, 0.006 * k, hs), card: "#ffffff" }, dark: { primary: oklch2hex(Ld, C, h), background: oklch2hex(bgL, 0.01 * k, hs), card: oklch2hex(cardL, 0.012 * k, hs) } };
}
// B) Material 3: tonal palettes from the source colour; primary tone 40 / 80, neutral tones for the surfaces
export function material3(primary) {
  const t = M.themeFromSourceColor(M.argbFromHex(primary)); const P = t.palettes.primary, N = t.palettes.neutral, hx = (a) => M.hexFromArgb(a);
  return { light: { primary: hx(P.tone(40)), background: hx(N.tone(98)), card: hx(N.tone(100)) }, dark: { primary: hx(P.tone(80)), background: hx(N.tone(6)), card: hx(N.tone(12)) } };
}
// C) Ant Design: generate() gives the primary of both themes; its page and card greys are fixed
export function antDesign(primary) {
  return { light: { primary: ant.generate(primary)[5], background: "#f5f5f5", card: "#ffffff" }, dark: { primary: ant.generate(primary, { theme: "dark", backgroundColor: "#141414" })[5], background: "#141414", card: "#1f1f1f" } };
}
export const ALGOS = { rules, material3, antDesign };
