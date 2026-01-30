const fs = require("fs");
const path = require("path");

const movies = [
  {
    slug: "breaking-bad",
    title: "Во все тяжкие",
    description: "История учителя химии, ставшего наркобароном."
  },
  {
    slug: "game-of-thrones",
    title: "Игра престолов",
    description: "Борьба за власть в мире Вестероса."
  }
];

const siteDir = path.join(__dirname, "site");

if (!fs.existsSync(siteDir)) {
  fs.mkdirSync(siteDir);
}

movies.forEach(movie => {
  const html = `
<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>${movie.title} — смотреть онлайн</title>
  <meta name="description" content="${movie.description}">
</head>
<body>
  <h1>${movie.title}</h1>
  <p>${movie.description}</p>
  <a href="/">На главную</a>
</body>
</html>
  `.t

