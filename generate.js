import fs from "fs";
import fetch from "node-fetch";
import { API_KEY, PAGES } from "./config.js";

const TEMPLATE = fs.readFileSync("./template.html", "utf8");

const intro = [
  name => `Сериал «${name}» — один из самых обсуждаемых проектов последних лет.`,
  name => `«${name}» часто рекомендуют тем, кто не знает, что посмотреть.`,
  name => `Если вы ищете сериал с интересным сюжетом, «${name}» — достойный выбор.`
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildPage(show, similarHTML) {
  return TEMPLATE
    .replace("{{TITLE}}", `Сериал ${show.name} — описание, сюжет, где смотреть`)
    .replace("{{DESCRIPTION}}", `Описание сериала ${show.name}, сюжет и где смотреть легально.`)
    .replace("{{H1}}", `Сериал ${show.name}`)
    .replace("{{TEXT}}", rand(intro)(show.name) + " " + show.overview)
    .replace("{{PARTNER}}", `https://partner-link.ru/?serial=${show.id}`)
    .replace("{{SIMILAR}}", similarHTML);
}

(async () => {
  fs.mkdirSync("../site/serial", { recursive: true });
  fs.mkdirSync("../site/similar", { recursive: true });

  for (let page = 1; page <= PAGES; page++) {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=ru-RU&page=${page}`
    );
    const data = await res.json();

    for (const show of data.results) {
      // похожие
      const simRes = await fetch(
        `https://api.themoviedb.org/3/tv/${show.id}/similar?api_key=${API_KEY}&language=ru-RU`
      );
      const simData = await simRes.json();

      const similarHTML = simData.results
        .slice(0, 5)
        .map(s => `<li><a href="/serial/${s.id}.html">${s.name}</a></li>`)
        .join("");

      const html = buildPage(show, similarHTML);

      fs.writeFileSync(`../site/serial/${show.id}.html`, html);
      fs.writeFileSync(`../site/similar/${show.id}.html`, html);
    }
  }

  console.log("✅ Генерация завершена");
})();
