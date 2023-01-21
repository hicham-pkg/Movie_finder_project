let movies = []
const searchForm = document.getElementById("search-form");
const searchResults = document.getElementById("search-results");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = document.getElementById("search-term").value;

  fetch(`https://www.omdbapi.com/?apikey=7566c271&s=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
        movies = data.Search;
        let output = "";
        for (let movie of movies) {
            output += `
              <div>
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>Released: ${movie.Year}</p>
                <a href="movie.html?id=${movie.imdbID}">View Details</a>
              </div>
            `;
        }
        searchResults.innerHTML = output;
    });
  })

  function filterMovies(event) {
    let filter = event.target.value;
    let output = "";
    if (filter === "OLD_TO_NEW") {
        movies.sort((a, b) => {
            return new Date(a.Year) - new Date(b.Year);
        });
        for (let movie of movies) {
            output += `
              <div>
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>Released: ${movie.Year}</p>
                <a href="movie.html?id=${movie.imdbID}">View Details</a>
              </div>
            `;
        }
    } else if (filter === "NEW_TO_OLD") {
        movies.sort((a, b) => {
            return new Date(b.Year) - new Date(a.Year);
        });
        for (let movie of movies) {
            output += `
              <div>
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h2>${movie.Title}</h2>
                <p>Released: ${movie.Year}</p>
                <a href="movie.html?id=${movie.imdbID}">View Details</a>
              </div>
            `;
        }
    }
    searchResults.innerHTML = output;
}