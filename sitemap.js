const fs = require("fs");

const pages = [
  "breaking-bad.html",
  "game-of-thrones.html"
];

const baseUrl = "https://lexarti3.github.io/Movie-serials-site";

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

pages.forEach(p => {
  xml += `
  <url>
    <loc>${baseUrl}/site/${p}</loc>
  </url>`;
});

xml += `\n</urlset>`;

fs.writeFileSync("site/sitemap.xml", xml);

console.log("✅ sitemap.xml создан");

