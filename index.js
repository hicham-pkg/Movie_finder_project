const searchForm = document.getElementById("search-form");
const searchResults = document.getElementById("search-results");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = document.getElementById("search-term").value;

  fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=7566c271`)
    .then((response) => response.json())
    .then((data) => {
      let movies = data.Search;
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
});
