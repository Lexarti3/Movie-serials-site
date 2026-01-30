const fs = require("fs");
const pages = require("./data");

pages.forEach(page => {
  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<nav>
  <a href="/">Главная</a> |
  <a href="/luchshie-serialy-2024.html">Сериалы 2024</a> |
  <a href="/luchshie-filmy-2023.html">Фильмы 2023</a>
</nav>

<h1>${page.h1}</h1>
<p>${page.text}</p>

<footer>
  <p>© 2026 Каталог фильмов и сериалов</p>
</footer>

</body>
</html>`;

  fs.writeFileSync(`${page.slug}.html`, html);
});

console.log("SEO pages generated in ROOT");




