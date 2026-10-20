// id, name, family, note, light [primary, background, card], dark [primary, background, card]
const P = (id, name, family, note, l, d) => ({ id, name, family, note, light: { primary: l[0], background: l[1], card: l[2] }, dark: { primary: d[0], background: d[1], card: d[2] } });
export const PRESETS = [
  // Hub and product inspired
  P("hub-yellow", "Hub Yellow", "Hub & product", "After Hugging Face: a warm yellow on white, and its deep navy dark page.", ["#f2b300", "#ffffff", "#f8f9fb"], ["#ffd21e", "#0b0f19", "#101623"]),
  P("github-primer", "GitHub Primer", "Hub & product", "GitHub's own light and dark: link blue on white, then #0d1117.", ["#0969da", "#ffffff", "#f6f8fa"], ["#58a6ff", "#0d1117", "#161b22"]),
  P("gitlab-orange", "GitLab Orange", "Hub & product", "A forge-style orange with neutral grey surfaces.", ["#e24329", "#fafafa", "#ffffff"], ["#fc6d26", "#1f1e24", "#2b2a33"]),
  P("kaggle-sky", "Kaggle Sky", "Hub & product", "Data-platform cyan-blue on clean white.", ["#0f9bd7", "#ffffff", "#f5f8fa"], ["#20beff", "#0f1419", "#181e26"]),
  P("docs-green", "Docs Green", "Hub & product", "The green of documentation sites: calm, long-form friendly.", ["#2e8555", "#ffffff", "#f5f6f7"], ["#25c2a0", "#1b1b1d", "#242526"]),
  P("material-indigo", "Material Indigo", "Hub & product", "Material's indigo with a slate dark page.", ["#3f51b5", "#fafafa", "#ffffff"], ["#9fa8da", "#1e2129", "#282c37"]),
  // Cool and clear
  P("cloud-blue", "Cloud Blue", "Cool & clear", "The safe, trustworthy blue on a cool slate dark.", ["#2563eb", "#f8fafc", "#ffffff"], ["#60a5fa", "#0f172a", "#1e293b"]),
  P("indigo", "Indigo", "Cool & clear", "Deeper and a little more distinctive than plain blue.", ["#4f46e5", "#f8f9fc", "#ffffff"], ["#818cf8", "#111827", "#1f2937"]),
  P("violet", "Violet", "Cool & clear", "A model-lab purple with a tinted dark page.", ["#7c3aed", "#faf8ff", "#ffffff"], ["#a78bfa", "#17121f", "#211a2e"]),
  P("sky", "Sky", "Cool & clear", "Light, open, friendly.", ["#0284c7", "#f4f9fc", "#ffffff"], ["#38bdf8", "#0b1520", "#112030"]),
  P("cyan-hub", "Cyan Hub", "Cool & clear", "Cyan on the navy-black dark page of a model hub.", ["#0891b2", "#f3f7f9", "#ffffff"], ["#22d3ee", "#0b0f19", "#101623"]),
  P("navy", "Navy", "Cool & clear", "Formal and institutional.", ["#1d4ed8", "#f1f5f9", "#ffffff"], ["#93c5fd", "#0b1220", "#121b2e"]),
  // Warm and natural
  P("emerald", "Emerald", "Warm & natural", "Fresh green, nature and growth.", ["#059669", "#f3f8f5", "#ffffff"], ["#34d399", "#0e1512", "#16211b"]),
  P("sage", "Sage", "Warm & natural", "A muted grey-green that stays out of the way.", ["#52796f", "#f4f7f4", "#ffffff"], ["#84a98c", "#1a221f", "#243029"]),
  P("mint", "Mint", "Warm & natural", "Cool green-teal with a clinical clean feel.", ["#0f766e", "#f0f9f7", "#ffffff"], ["#5eead4", "#0b1a18", "#112321"]),
  P("amber", "Amber", "Warm & natural", "Honey amber on warm white and a brown-black dark page.", ["#d97706", "#fffaf0", "#ffffff"], ["#fbbf24", "#17120a", "#221a0d"]),
  P("terracotta", "Terracotta", "Warm & natural", "Burnt orange with warm stone neutrals.", ["#c2410c", "#fbf7f3", "#ffffff"], ["#fb923c", "#1c1917", "#292524"]),
  P("coral", "Coral", "Warm & natural", "A lively red-orange; friendly, consumer-facing.", ["#e5533d", "#fff8f5", "#ffffff"], ["#ff7b63", "#1c1210", "#281a16"]),
  P("rose", "Rose", "Warm & natural", "Strong crimson-pink; makes buttons obvious.", ["#e11d48", "#fff7f8", "#ffffff"], ["#fb7185", "#1a0f12", "#261519"]),
  P("berry", "Berry", "Warm & natural", "Magenta-berry for a creative community.", ["#be185d", "#fdf4f9", "#ffffff"], ["#f472b6", "#1f1020", "#2b172c"]),
  P("copper", "Copper", "Warm & natural", "A brown-gold with paper-like warmth.", ["#a35a12", "#faf6f0", "#ffffff"], ["#e0a060", "#1d1814", "#28211b"]),
  P("olive-gold", "Olive Gold (current)", "Warm & natural", "The theme the site ships with today, for reference.", ["#94621f", "#f7f4eb", "#fffdf7"], ["#e6b85c", "#1c211d", "#282e27"]),
  // Editor classics
  P("catppuccin-mauve", "Catppuccin Mauve", "Editor classics", "Catppuccin Latte and Mocha, mauve accent.", ["#8839ef", "#eff1f5", "#ffffff"], ["#cba6f7", "#1e1e2e", "#313244"]),
  P("catppuccin-blue", "Catppuccin Blue", "Editor classics", "Catppuccin Latte and Mocha, blue accent.", ["#1e66f5", "#eff1f5", "#ffffff"], ["#89b4fa", "#1e1e2e", "#313244"]),
  P("catppuccin-green", "Catppuccin Green", "Editor classics", "Catppuccin Latte and Mocha, green accent.", ["#40a02b", "#eff1f5", "#ffffff"], ["#a6e3a1", "#1e1e2e", "#313244"]),
  P("rosepine-iris", "Rosé Pine Iris", "Editor classics", "Rosé Pine Dawn and Rosé Pine, iris accent.", ["#907aa9", "#faf4ed", "#fffaf3"], ["#c4a7e7", "#191724", "#1f1d2e"]),
  P("rosepine-rose", "Rosé Pine Rose", "Editor classics", "Rosé Pine Dawn and Rosé Pine, rose accent.", ["#b4637a", "#faf4ed", "#fffaf3"], ["#ebbcba", "#191724", "#1f1d2e"]),
  P("nord", "Nord", "Editor classics", "Nord's frost blue on snow white and polar night.", ["#5e81ac", "#eceff4", "#ffffff"], ["#88c0d0", "#2e3440", "#3b4252"]),
  P("gruvbox-orange", "Gruvbox Orange", "Editor classics", "Gruvbox's retro paper and dark, orange accent.", ["#af3a03", "#fbf1c7", "#f2e5bc"], ["#fe8019", "#282828", "#3c3836"]),
  P("gruvbox-green", "Gruvbox Green", "Editor classics", "Gruvbox's retro paper and dark, green accent.", ["#79740e", "#fbf1c7", "#f2e5bc"], ["#b8bb26", "#282828", "#3c3836"]),
  P("tokyo-night", "Tokyo Night", "Editor classics", "Tokyo Night Day and Night, blue accent.", ["#2e7de9", "#e1e2e7", "#f2f3f7"], ["#7aa2f7", "#1a1b26", "#24283b"]),
  P("dracula", "Dracula", "Editor classics", "Dracula's purple with the Alucard light page.", ["#644ac9", "#fffbeb", "#ffffff"], ["#bd93f9", "#282a36", "#343746"]),
  P("everforest", "Everforest", "Editor classics", "A soft green on cream, and a green-grey dark.", ["#8da101", "#fdf6e3", "#f4f0d9"], ["#a7c080", "#2d353b", "#343f44"]),
  P("kanagawa", "Kanagawa", "Editor classics", "Kanagawa Lotus and Wave: Japanese-print muted blue.", ["#4d699b", "#f2ecbc", "#f9f5d7"], ["#7e9cd8", "#1f1f28", "#2a2a37"]),
  P("ayu", "Ayu", "Editor classics", "Ayu Light and Mirage: a bright orange to gold.", ["#ff9940", "#fcfcfc", "#ffffff"], ["#ffcc66", "#1f2430", "#242b38"]),
  P("darcula-orange", "Darcula Orange", "Editor classics", "JetBrains Darcula dark (#2b2b2b editor, #3c3f41 panels, keyword orange). The light side is my pairing, not an official Darcula light.", ["#a8570f", "#f2f2f2", "#ffffff"], ["#cc7832", "#2b2b2b", "#3c3f41"]),
  P("darcula-blue", "Darcula Blue", "Editor classics", "JetBrains Darcula dark with its steel-blue number colour (#6897bb). The light side is my pairing.", ["#2f6ea8", "#f2f2f2", "#ffffff"], ["#6897bb", "#2b2b2b", "#3c3f41"]),
  P("monokai-pink", "Monokai Pink", "Editor classics", "Monokai's #272822 with its pink; the light side is my pairing.", ["#d6155e", "#f8f8f2", "#ffffff"], ["#f92672", "#272822", "#383830"]),
  P("monokai-green", "Monokai Green", "Editor classics", "Monokai's #272822 with its green; the light side is my pairing.", ["#5f8f12", "#f8f8f2", "#ffffff"], ["#a6e22e", "#272822", "#383830"]),
  P("palenight", "Palenight", "Editor classics", "Material Palenight dark (#292d3e, purple #c792ea); the light side is a Material-style pairing.", ["#7e57c2", "#fafafa", "#ffffff"], ["#c792ea", "#292d3e", "#34374b"]),
  P("night-owl", "Night Owl", "Editor classics", "Night Owl's deep navy and Light Owl; colours from memory, not checked against the source.", ["#4876d6", "#fbfbfb", "#ffffff"], ["#82aaff", "#011627", "#0b2942"]),
  // Verified from the themes' own files (see the source field). Page = the darker of editor and side panel, card = the lighter.
  P("solarized", "Solarized", "Editor classics", "Ethan Schoonover's palette: base3 and base2 for light, base03 and base02 for dark, with the blue swatch as the accent.", ["#268bd2", "#eee8d5", "#fdf6e3"], ["#268bd2", "#002b36", "#073642"]),
  P("vitesse", "Vitesse", "Editor classics", "antfu's Vitesse: one green, deeper in light and lighter in dark. The source has no raised surface, so the page tone is my pairing.", ["#1c6b48", "#f5f5f3", "#ffffff"], ["#4d9375", "#0c0c0c", "#121212"]),
  P("min", "Min", "Editor classics", "Min Light and Min Dark: monochrome, no accent hue at all.", ["#757575", "#f6f6f6", "#ffffff"], ["#cccccc", "#1a1a1a", "#1f1f1f"]),
  P("winter-is-coming", "Winter is Coming", "Editor classics", "A cold blue with plain greys. The dark source has one surface only, so its card is my pairing.", ["#236ebf", "#f3f3f3", "#ffffff"], ["#219fd5", "#282822", "#32322b"]),
  P("noctis", "Noctis", "Editor classics", "Noctis Lux (warm cream) and Noctis (deep teal): one teal-cyan accent.", ["#0099ad", "#f9f1e1", "#fef8ec"], ["#40d4e7", "#041d20", "#052529"]),
  P("bluloco", "Bluloco", "Editor classics", "Bluloco Light and Dark: a sky blue and a brighter royal blue.", ["#0099e1", "#e8e8e8", "#f9f9f9"], ["#3691ff", "#22252a", "#282c34"]),
  P("horizon", "Horizon", "Editor classics", "Horizon Bright and Horizon: a single pink-red. The source has one surface per mode; the card is my pairing.", ["#e84a72", "#fdf0ed", "#ffffff"], ["#e95378", "#1c1e26", "#262833"]),
  P("flexoki", "Flexoki", "Editor classics", "Steph Ango's Flexoki: warm paper and black, with the cyan accent of the VS Code port.", ["#24837b", "#f2f0e5", "#fffcf0"], ["#3aa99f", "#100f0f", "#1c1b1a"]),
  P("vscode-modern", "VS Code Modern", "Editor classics", "VS Code's current built-in Light Modern and Dark Modern with their single blue.", ["#005fb8", "#f8f8f8", "#ffffff"], ["#0078d4", "#181818", "#1f1f1f"]),
  P("selenized", "Selenized", "Editor classics", "Jan Warchol's Selenized: a careful remake of Solarized with better contrast.", ["#0072d4", "#ece3cc", "#fbf3db"], ["#4695f7", "#103c48", "#184956"]),
  P("papercolor", "PaperColor", "Editor classics", "The PaperColor Vim theme: soft greys with a navy and a teal.", ["#005f87", "#e4e4e4", "#eeeeee"], ["#00afaf", "#1c1c1c", "#303030"]),
  P("one-zed", "One (Zed)", "Editor classics", "Zed's built-in One Light and One Dark, descended from Atom One.", ["#5c78e2", "#ebebec", "#fafafa"], ["#74ade8", "#282c33", "#2f343e"]),
  P("adwaita", "Adwaita", "Editor classics", "GNOME's Adwaita: the same blue in both modes.", ["#3584e4", "#fafafa", "#ffffff"], ["#3584e4", "#1d1d1d", "#242424"]),
  // Neutral and high contrast
  P("graphite", "Graphite", "Neutral", "Colourless grey; lets the content carry the colour.", ["#374151", "#f9fafb", "#ffffff"], ["#d1d5db", "#111111", "#1b1b1b"]),
  P("ink", "Ink", "Neutral", "Black and white, nothing else.", ["#111111", "#ffffff", "#fafafa"], ["#fafafa", "#09090b", "#18181b"]),
  P("paper", "Paper", "Neutral", "Sepia paper with a brown accent, for long reading.", ["#7a4a21", "#f4ecd8", "#fbf5e6"], ["#d9a066", "#1e1812", "#2a2118"]),
  P("high-contrast", "High Contrast", "Neutral", "Maximum contrast: pure white and pure black pages.", ["#0033cc", "#ffffff", "#ffffff"], ["#66b3ff", "#000000", "#0d0d0d"]),
];

const SRC = {
  solarized: ["Official palette", "https://ethanschoonover.com/solarized/"],
  vitesse: ["Official theme files", "https://github.com/antfu/vscode-theme-vitesse"],
  min: ["Official theme files", "https://github.com/miguelsolorio/min-theme"],
  "winter-is-coming": ["Official theme files", "https://github.com/johnpapa/vscode-winteriscoming"],
  noctis: ["Official theme files", "https://github.com/liviuschera/noctis"],
  bluloco: ["Official theme files", "https://github.com/uloco/theme-bluloco-light"],
  horizon: ["Official theme files", "https://github.com/jolaleye/horizon-theme-vscode"],
  flexoki: ["Official palette and VS Code port", "https://stephango.com/flexoki"],
  "vscode-modern": ["Official theme files", "https://github.com/microsoft/vscode/tree/main/extensions/theme-defaults/themes"],
  selenized: ["Official palette", "https://github.com/jan-warchol/selenized"],
  papercolor: ["Official Vim theme", "https://github.com/NLKNguyen/papercolor-theme"],
  "one-zed": ["Official theme file", "https://github.com/zed-industries/zed/blob/main/assets/themes/one/one.json"],
  adwaita: ["Official theme files", "https://github.com/piousdeer/vscode-adwaita"],
};
const MARKET = { "winter-is-coming": "3.76M installs on the VS Code Marketplace", noctis: "1.40M installs on the VS Code Marketplace", min: "634k installs on the VS Code Marketplace", bluloco: "about 530k installs on the VS Code Marketplace", vitesse: "119k installs on the VS Code Marketplace", horizon: "about 163k installs (a fork; the original was removed)", adwaita: "96k installs on the VS Code Marketplace", solarized: "Solarized Theme for JetBrains: about 2.5M downloads", "one-zed": "descended from Atom One; One Dark for JetBrains: about 11.8M downloads" };
const PARTIAL = new Set(["darcula-orange", "darcula-blue", "monokai-pink", "monokai-green", "palenight", "catppuccin-mauve", "catppuccin-blue", "catppuccin-green", "github-primer", "hub-yellow"]);
const MEMORY = new Set(["rosepine-iris", "rosepine-rose", "nord", "gruvbox-orange", "gruvbox-green", "tokyo-night", "dracula", "everforest", "kanagawa", "ayu", "night-owl", "gitlab-orange", "kaggle-sky", "docs-green", "material-indigo"]);
for (const p of PRESETS) {
  if (SRC[p.id]) { p.prov = "official"; p.source = SRC[p.id]; }
  else if (PARTIAL.has(p.id)) p.prov = "partial";
  else if (MEMORY.has(p.id)) p.prov = "memory";
  else p.prov = "original";
  if (MARKET[p.id]) p.market = MARKET[p.id];
}
