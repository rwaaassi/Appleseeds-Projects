// 1
const movie = {
  title: "Inception",
  year: 2010,
  rating: 8.8,
  genre: "Science Fiction",
};
const { title, year, rating, genre } = movie;
console.log(title, year, rating);

// 2
let topMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "12 Angry Men",
];
[topMovies[0], topMovies[1]] = [topMovies[1], topMovies[0]];
console.log(topMovies);

// 3
const movieRatings = {
  "The Matrix": 8.7,
  Inception: 8.8,
};
const updates = {
  Inception: 9.0,
  "The Matrix": 9.1,
};
function updateRatings(movieRatings, updates) {
  const newRatings = { ...movieRatings, ...updates };
  console.log(newRatings);
}
updateRatings(movieRatings, updates);

// 4
const list1 = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
const list2 = ["Forrest Gump", "Inception", "The Godfather"];
const combined = [...list1, ...list2];

console.log(...new Set(combined));

// 5
const movieDetails1 = {
  title: "Inception",
  cast: {
    first: "Leonardo DiCaprio",
    second: "Joseph Gordon-Levitt",
    third: "Ellen Page",
  },
};
const {
  titlee,
  cast: { first, second },
} = movieDetails1;
console.log(first, second);

// 6
const baseInfo = {
  title: "Inception",
  director: "Christopher Nolan",
};

const additionalInfo = {
  year: 2010,
  rating: 8.8,
};
const merged = { ...baseInfo, ...additionalInfo };
console.log(merged);

// 7
const movieDetails2 = {
  title: "Inception",
  year: 2010,
  rating: 9.0,
  genres: ["Action", "Adventure", "Sci-Fi"],
};
movieDetails2.genres.push("Drama", "Action");

const arr = movieDetails2.genres;

console.log(...new Set(arr));

// 8
const watchlist = [
  ["The Matrix", "Inception"],
  ["Inception", "The Dark Knight"],
  ["The Dark Knight", "Interstellar"],
];
const month1 = watchlist[0];
const month2 = watchlist[1];
const month3 = watchlist[2];
const movieTitles = [...month1, ...month2, ...month3];
const arrOfMovieTitles = [...new Set(movieTitles)];

console.log(arrOfMovieTitles);
// 9
const movies = [
  { title: "The Matrix", rating: 8.7 },
  { title: "Inception", rating: 8.8 },
];
function increaseRating(movieTitle, newRating) {
  return movies.map((movie) => {
    if (movie.title === movieTitle) {
      return { ...movie, rating: newRating };
    }
    return movie;
  });
}
console.log(increaseRating("Inception", 10));
// 10
const movieDetails3 = {
  title: "The Dark Knight",
  director: "Christopher Nolan",
  cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
};
function newMovieObj(movieDetails) {
  const { title, cast } = movieDetails;
  return cast.map((actor) => {
    const [firstName] = actor.split(" ");
    return { title, firstName };
  });
}
console.log(newMovieObj(movieDetails3));
