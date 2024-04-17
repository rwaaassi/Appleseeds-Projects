// 1
const movieLibrary = ["Inception", "The Matrix", "Interstellar"];
const movieToCheck = "Inception";
console.log(movieLibrary.includes(movieToCheck));

// 2
const releaseDates = ["1999", "2010", "2014"];
const reverseReleaseDates = [releaseDates.reverse()];
console.log(reverseReleaseDates);

// 3
const movieGenres = ["Sci-Fi", "Action", "Adventure"];
console.log(movieGenres.join());

// 4
const genreToCheck = "Action";
console.log(movieGenres.includes(genreToCheck));

// 5
const movieTitles = ["Inception", "The Matrix", "Interstellar"];
const specificMovie = "Interstellar";
const index = movieTitles.indexOf("Interstellar");
console.log(
  index != -1 ? `${specificMovie} found at ${index}` : `Movie not found`
);

// 6
const upComingRelease = ["Avatar", "Dune", "Tenet"];
upComingRelease.pop();
console.log(upComingRelease);

// 7
const classicMovies = ["The Godfather", "Citizen Kane"];
const newMovie = "Casablanca";
classicMovies.splice(0, 0, newMovie);
console.log(classicMovies);

// 8
const filmNoir = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
const filmNoirr = filmNoir.splice(0, 1);
console.log(filmNoirr);

// 9
const actionMovies = ["Die Hard", "John Wick"];
const comedyMovie = ["Superbad", "The Hangover"];
console.log(actionMovies.concat(comedyMovie));

// 10
console.log(movieTitles.sort());

// 11
quoteString = "I'll be back, May the force be with you, To infinity and beyond";
console.log(quoteString.split(","));

// 12
const topMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
];
const n = 2;
console.log(topMovies.slice(0, n));

// 13
const moviesWishlist = ["The Matrix 4", "Avatar2", "Dune"];
const moviesWishlist2 = [(moviesWishlist.length = 0)];
console.log(moviesWishlist2);

// 14
const movies = ["Inception", "Interstellar"];
const newMovie1 = "Tenet";
movies.push(newMovie1);
console.log(movies);

// 15
movies.shift();
console.log(movies);

// 16
const movies2 = ["Inception", "Interstellar", "Tenet"];
console.log(movies2.toString());

// 17
const movieToFind = "Interstellar";
console.log(movies2.indexOf(movieToFind));

// 18
console.log(movies2.reverse());

// 19
const releaseYears = [2001, 2023, 1998, 2014];
console.log(releaseYears.sort().reverse());
