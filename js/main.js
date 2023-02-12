const elFragment = document.createDocumentFragment();
// Get elements
const elMovieList = document.querySelector(".js-movie-list");

for(const movie of movies){

    const newMovieItem = document.createElement("li");
    const newMovieTitle = document.createElement("h3");
    const newMovieYear = document.createElement("span");
    const newMovieCast = document.createElement("p");
    const newMovieGenres = document.createElement("p");

    newMovieTitle.textContent = movie.title;
    newMovieYear.textContent = movie.year;
    newMovieCast.textContent = movie.cast;
    newMovieGenres.textContent = movie.genres;

    newMovieItem.appendChild(newMovieTitle);
    newMovieItem.appendChild(newMovieYear);
    newMovieItem.appendChild(newMovieCast);
    newMovieItem.appendChild(newMovieGenres);

    elFragment.appendChild(newMovieItem);

    newMovieItem.classList.add("movie-item");
    newMovieTitle.classList.add("movie-title");
    newMovieYear.classList.add("movie-year");
    newMovieCast.classList.add("movie-cast");
    newMovieGenres.classList.add("movie-genres");
}
elMovieList.appendChild(elFragment);