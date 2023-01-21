const movieDetails = document.getElementById("movie-details");
const movieId = new URLSearchParams(window.location.search).get("id");

fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=7566c271`)
  .then((response) => response.json())
  .then((data) => {
    let movie = data;
    let output = `
      <img src="${movie.Poster}" alt="${movie.Title}">
      <h1>${movie.Title}</h1>
      <p>Released: ${movie.Year}</p>
      <p>Rated: ${movie.Rated}</p>
      <p>Genre: ${movie.Genre}</p>
      <p>Director: ${movie.Director}</p>
      <p>Actors: ${movie.Actors}</p>
      <p class= "plot">Plot: ${movie.Plot}</p>
    `;
    movieDetails.innerHTML = output;
  });
