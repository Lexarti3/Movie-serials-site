const fs = require("fs");

const baseUrl = "https://lexarti3.github.io/Movie-serials-site/site";

const files = fs.readdirSync("site").filter(f => f.endsWith(".html"));

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

files.forEach(file => {
  sitemap += `
  <url>
    <loc>${baseUrl}/${file}</loc>
  </url>`;
});

sitemap += "\n</urlset>";

fs.writeFileSync("site/sitemap.xml", sitemap);

console.log("sitemap generated");


