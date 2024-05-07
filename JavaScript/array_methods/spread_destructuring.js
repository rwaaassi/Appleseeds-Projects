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
let [TheShawshankRedemption, TheGodfather, TheDarkKnight, AngryMen] = topMovies
[TheShawshankRedemption, TheGodfather, TheDarkKnight, AngryMen] = [
  TheGodfather,
  TheShawshankRedemption,
  TheDarkKnight,
  AngryMen,
];
console.log(TheShawshankRedemption, TheGodfather);

// 3
const movieRatings = {
  "The Matrix": 8.7,
  Inception: 8.8,
};

const updates = {
  Inception: 9.0,
  "The Matrix": 9.1,
};

// 4
const list1 = ["The Shawshank Redemption", "The Godfather", "The Dark Knight"];
const list2 = ["Forrest Gump", "Inception", "The Godfather"];

// 5
const movieDetails1 = {
  title: "Inception",
  cast: {
    first: "Leonardo DiCaprio",
    second: "Joseph Gordon-Levitt",
    third: "Ellen Page",
  },
};

// 6
const baseInfo = {
  title: "Inception",
  director: "Christopher Nolan",
};

const additionalInfo = {
  year: 2010,
  rating: 8.8,
};

// 7
const movieDetails2 = {
  title: "Inception",
  year: 2010,
  rating: 9.0,
  genres: ["Action", "Adventure", "Sci-Fi"],
};

// 8
const watchlist = [
  ["The Matrix", "Inception"],
  ["Inception", "The Dark Knight"],
  ["The Dark Knight", "Interstellar"],
];

// 9
const movies = [
  { title: "The Matrix", rating: 8.7 },
  { title: "Inception", rating: 8.8 },
];

// 10
const movieDetails3 = {
  title: "The Dark Knight",
  director: "Christopher Nolan",
  cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
};
