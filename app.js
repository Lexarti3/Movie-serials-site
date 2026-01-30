const catalog = document.getElementById("catalog");

movies.forEach(movie => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h2>${movie.name}</h2><p>${movie.overview}</p>`;
  div.onclick = () => {
    location.href = `watch.html?id=${movie.id}`;
  };
  catalog.appendChild(div);
});
