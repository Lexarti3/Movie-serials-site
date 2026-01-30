const fs = require("fs");

const pages = [
  {
    slug: "luchshie-serialy-2024",
    title: "Лучшие сериалы 2024 года смотреть онлайн",
    description: "Подборка лучших сериалов 2024 года. Новинки, рейтинги, обзоры.",
    text: "В 2024 году вышло много интересных сериалов разных жанров — от драм до фантастики."
  },
  {
    slug: "luchshie-filmy-2023",
    title: "Лучшие фильмы 2023 года смотреть онлайн",
    description: "Список лучших фильмов 2023 года. Популярные новинки кино.",
    text: "Фильмы 2023 года порадовали зрителей качественными сюжетами и актёрской игрой."
  }
];

// 👉 НИЧЕГО не создаём, пишем сразу в корень
pages.forEach(page => {
  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
</head>
<body>
  <h1>${page.title}</h1>
  <p>${page.text}</p>
  <p><a href="/">← На главную</a></p>
</body>
</html>`;

  fs.writeFileSync(`${page.slug}.html`, html, "utf8");
});

console.log("SEO pages generated in ROOT");



