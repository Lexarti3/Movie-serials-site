const fs = require("fs");

// базовый URL сайта (БЕЗ /site)
const baseUrl = "https://lexarti3.github.io/Movie-serials-site";

// читаем html-файлы из корня, исключая index.html
const files = fs
  .readdirSync(".")
  .filter(f => f.endsWith(".html") && f !== "index.html");

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// главная страница
sitemap += `
  <url>
    <loc>${baseUrl}/</loc>
  </url>`;

// SEO-страницы
files.forEach(file => {
  sitemap += `
  <url>
    <loc>${baseUrl}/${file}</loc>
  </url>`;
});

sitemap += `\n</urlset>`;

// сохраняем sitemap В КОРЕНЬ
fs.writeFileSync("sitemap.xml", sitemap, "utf8");

console.log("sitemap generated in ROOT");



