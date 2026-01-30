const params = new URLSearchParams(location.search);
const id = Number(params.get("id"));
const movie = movies.find(m => m.id === id);

document.getElementById("title").innerText = movie.name;
document.getElementById("name").innerText = movie.name;
document.getElementById("overview").innerText = movie.overview;
document.getElementById("trailer").src = movie.trailer;
document.getElementById("watchLink").href = movie.link;
