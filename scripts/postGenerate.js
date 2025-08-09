const fs = require("fs");
const path = require("path");

let oldConfigGlyphs = JSON.parse("[]");
try {
  oldConfigGlyphs = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../fonts/config_old.json"), "utf8")
  ).glyphs;
} catch (error) {
  console.log("No previous config found, assuming first run.");
}
const newConfigGlyphs = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../fonts/config.json"), "utf8")
).glyphs;
const addedIcons = newConfigGlyphs.filter(
  ({ css }) => !oldConfigGlyphs.some((glyph) => glyph.css === css)
);
const modifiedIcons = newConfigGlyphs.filter(({ css, svg: { path } }) => {
  const oldGlyph = oldConfigGlyphs.find((glyph) => glyph.css === css);

  return oldGlyph && oldGlyph.svg.path !== path;
});
const removedIcons = oldConfigGlyphs.filter(
  ({ css }) => !newConfigGlyphs.some((glyph) => glyph.css === css)
);

const changes = ["## What's Changed\n"];
if (addedIcons.length > 0) {
  changes.push("### Added Icons\n");
  addedIcons.forEach(({ css }) => {
    changes.push(`- \`${css}\`\n`);
  });
}
if (modifiedIcons.length > 0) {
  changes.push("### Modified Icons\n");
  modifiedIcons.forEach(({ css }) => {
    changes.push(`- \`${css}\`\n`);
  });
}
if (removedIcons.length > 0) {
  changes.push("### Removed Icons\n");
  removedIcons.forEach(({ css }) => {
    changes.push(`- \`${css}\`\n`);
  });
}
fs.writeFileSync(
  path.join(__dirname, "../.github/release/RELEASE_NOTES.md"),
  changes.join("\n"),
  "utf8"
);
if (oldConfigGlyphs.length) {
  fs.unlinkSync(path.join(__dirname, "../fonts/config_old.json"));
}
fs.unlinkSync(path.join(__dirname, "../fonts/config.json"));
console.log(
  `Updated release notes with ${addedIcons.length} added, ${modifiedIcons.length} modified, and ${removedIcons.length} removed icons.`
);
