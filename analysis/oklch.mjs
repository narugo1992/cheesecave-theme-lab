export const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
const lin = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const gam = (c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055);
export function toOklab(hex) { const [r, g, b] = hex2rgb(hex).map(lin);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b), m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b), s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s, 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s, 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s]; }
export function toOklch(hex) { const [L, a, b] = toOklab(hex); const C = Math.hypot(a, b); let h = (Math.atan2(b, a) * 180) / Math.PI; if (h < 0) h += 360; return { L, C, h }; }
export function fromOklab(L, a, b) { const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3, m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3, s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s]; }
const inGamut = (rgb) => rgb.every((c) => c >= -0.0005 && c <= 1.0005);
export function fromOklch(L, C, h) { const r = (h * Math.PI) / 180; return fromOklab(L, C * Math.cos(r), C * Math.sin(r)); }
export const rgb2hex = (rgb) => "#" + rgb.map((c) => Math.round(Math.min(1, Math.max(0, gam(Math.min(1, Math.max(0, c))))) * 255).toString(16).padStart(2, "0")).join("");
export function maxChroma(L, h) { let lo = 0, hi = 0.4; for (let i = 0; i < 30; i++) { const mid = (lo + hi) / 2; inGamut(fromOklch(L, mid, h)) ? (lo = mid) : (hi = mid); } return lo; }
export const oklch2hex = (L, C, h) => rgb2hex(fromOklch(L, Math.min(C, maxChroma(L, h)), h));
export const dE = (a, b) => { const x = toOklab(a), y = toOklab(b); return Math.hypot(x[0] - y[0], x[1] - y[1], x[2] - y[2]); };
export const hueDiff = (a, b) => { let d = Math.abs(a - b) % 360; return d > 180 ? 360 - d : d; };
