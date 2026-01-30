import fs from "fs";
import { SITE_URL } from "./config.js";

const files = fs.readdirSync("../site/serial");

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

for (const file of files) {
  xml += `
  <url>
    <loc>${SITE_URL}/serial/${file}</loc>
  </url>`;
}

xml += "\n</urlset>";

fs.writeFileSync("../site/sitemap.xml", xml);
console.log("✅ sitemap.xml создан");
