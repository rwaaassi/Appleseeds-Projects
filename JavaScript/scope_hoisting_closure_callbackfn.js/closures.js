// 1
function createMovie(movieTitle) {
  let ratings = [];
  return {
    title: movieTitle,
    addRating: function (n) {
      if (ratings.length >= 10) {
        console.log(`maximum number of ratings reached!`);
      } else {
        ratings.push(n);
      }
    },
    getAverageRating: function () {
      if (ratings.length === 0) {
        return 0;
      }
      console.log(ratings);
      const sum = ratings.reduce((acc, val) => acc + val, 0);
      return sum / ratings.length;
    },
  };
}
let movie1 = createMovie("past lives");
let movie2 = createMovie("decision to leave");
let movie3 = createMovie("portrait of a lady on fire");
let movie4 = createMovie("anatomy of a fall");

let movies = {
  movie1,
  movie2,
  movie3,
  movie4,
};

movie1.addRating(4.5);
movie1.addRating(4);
movie1.addRating(3);
movie1.addRating(5);

movie2.addRating(4);
movie2.addRating(4);
movie2.addRating(3.5);
movie2.addRating(3);

movie3.addRating(5);
movie3.addRating(4);
movie3.addRating(4);
movie3.addRating(5);

movie4.addRating(2);
movie4.addRating(4);
movie4.addRating(4);
movie4.addRating(5);

console.log(movie1.getAverageRating());
console.log(movie1);

// 2
function createMovieWithDetails(movieTitle, dirName, releYear) {
  return {
    getDetails: function () {
      return {
        title: movieTitle,
        director: dirName,
        releaseYear: releYear,
      };
    },
    addRating: function () {
      if (ratings.length >= 10) {
        console.log(`maximum number of ratings reached!`);
      } else {
        ratings.push(n);
      }
    },
    getAverageRating: function () {
      if (ratings.length === 0) {
        return 0;
      }
      console.log(ratings);
      const sum = ratings.reduce((acc, val) => acc + val, 0);
      return sum / ratings.length;
    },
  };
}
createMovieWithDetails();

// 3
function createMovieDatabase() {
  return {
    addMovie: function (movieTitle) {
      let ratings = [];
      return {
        title: movieTitle,
        addRating: function (n) {
          if (ratings.length >= 10) {
            console.log(`maximum number of ratings reached!`);
          } else {
            ratings.push(n);
          }
        },
        getAverageRating: function () {
          if (ratings.length === 0) {
            return 0;
          }
          console.log(ratings);
          const sum = ratings.reduce((acc, val) => acc + val, 0);
          return sum / ratings.length;
        },
      };
    },
    findMovieByTitle: function (movieTitle) {
      for (const movie of movies) {
        if (movie.title === movieTitle) {
          return movie;
        }
        return;
      }
    },
    getAverageRatingOfAllMovies: function () {
      const sum = Object.keys(movies).reduce((acc, key) => {
        acc + movies[key];
      }, 0);
      return sum / movies.length;
    },
  };
}
console.log(movies);
