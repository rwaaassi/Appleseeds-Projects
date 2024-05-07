const movies = [
  {
    title: "The Shawshank Redemption",
    rating: 9.3,
    votes: 2337890,
    genre: ["Drama"],
    year: 1994,
  },
  {
    title: "The Godfather",
    rating: 9.2,
    votes: 1603867,
    genre: ["Crime", "Drama"],
    year: 1972,
  },
  {
    title: "The Godfather: Part II",
    rating: 9.0,
    votes: 1123155,
    genre: ["Crime", "Drama"],
    year: 1974,
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    votes: 2273490,
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
  },
  {
    title: "12 Angry Men",
    rating: 9.0,
    votes: 686888,
    genre: ["Crime", "Drama"],
    year: 1957,
  },
];

// 1
const movieTitles = movies.map((t) => t.title);
console.log(movieTitles);
// 2
const highlyRated = movies.filter((r) => r.rating > 9.1).map((r) => r.title);
console.log(highlyRated);
// 3
const initial = 0;
const totalVotes = movies.reduce((acc, val) => acc + val.votes, initial);
console.log(totalVotes);
// 4
// 5
const updated = movies.filter((movie) => {
  if (movie.title == "The Shawshank Redemption") {
    movie.rating = 9.5;
  }
});
console.log(movies);
// 6
const genreFilter = movies.filter(movie => movie.genre.includes("Crime")).map(movie => movie.title)
console.log(genreFilter);
// 7
const yearFilter = movies.filter(movie => movie.year > 2000).map(movie => movie.title)
console.log(yearFilter);
// 8
let initialVal = 0
const aveRating = movies.reduce((acc,curr) => acc + curr.rating, initialVal )
console.log(aveRating/movies.length);
// 9
const sortByVotes = movies.sort((a,b) => b.rating - a.rating)
console.log(sortByVotes);