// 1
const movieDatabase = {
  movies: [],
  addMovie: function (movieTitle) {
    const movie = {
      title: movieTitle,
      ratings: [],
      averageRating: 0,
    };
    this.movies.push(movie);
  },
  removeMovie: function (movieTitle) {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].title === movieTitle) {
        this.movies.splice(i, 1);
      }
    }
  },
};

movieDatabase.addMovie("past lives");
movieDatabase.addMovie("portrait of a lady on fire");
movieDatabase.addMovie("decision to leave");
movieDatabase.addMovie("lady bird");

// console.log(movieDatabase);

movieDatabase.removeMovie("past lives");
// console.log(movieDatabase);

// 2
function addRating(movieTitle, rating) {
  for (let i = 0; i < movieDatabase.movies.length; i++) {
    if (movieDatabase.movies[i].title === movieTitle) {
      movieDatabase.movies[i].ratings.push(rating);
    }
  }
}
movieDatabase.addRating = addRating;
movieDatabase.addRating("portrait of a lady on fire", 8);
movieDatabase.addRating("portrait of a lady on fire", 7);
movieDatabase.addRating("portrait of a lady on fire", 10);
movieDatabase.addRating("portrait of a lady on fire", 9);

movieDatabase.addRating("decision to leave", 9.5);
movieDatabase.addRating("decision to leave", 9);
movieDatabase.addRating("decision to leave", 7.5);
movieDatabase.addRating("decision to leave", 6.5);

movieDatabase.addRating("lady bird", 7);
movieDatabase.addRating("lady bird", 8);
movieDatabase.addRating("lady bird", 9);
movieDatabase.addRating("lady bird", 9.7);
console.log(movieDatabase.movies);

// function removeRating(movieTitle, rating) {
//   const idx = movieDatabase.movies.ratings.indexOf(rating)
//   for (let i = 0; i < movieDatabase.movies.length; i++) {
//     if (movieDatabase.movies[i].title === movieTitle) {
//       movieDatabase.movies[i].ratings.splice(idx,1);
//     }
//   }
// }
// movieDatabase.removeRating = removeRating;
// movieDatabase.removeRating("decision to leave", 9.5);
// console.log(movieDatabase.movies);

// 3
function calculateAverageRating(movieTitle) {
  let sum = 0;
  count = 0;
  for (let i = 0; i < movieDatabase.movies.length; i++) {
    if (movieDatabase.movies[i].title === movieTitle) {
      for (let j = 0; j < movieDatabase.movies[i].ratings.length; j++) {
        sum += movieDatabase.movies[i].ratings[j];
        count++;
      }
      movieDatabase.movies[i].averageRating = sum / count;
      // console.log(movieDatabase.movies[i].averageRating);
      break;
    }
  }
}
movieDatabase.calculateAverageRating = calculateAverageRating;
movieDatabase.calculateAverageRating("decision to leave");
movieDatabase.calculateAverageRating("portrait of a lady on fire");
movieDatabase.calculateAverageRating("lady bird");
console.log(movieDatabase.movies);

// 4
function searchMovie(str) {
  const result = movieDatabase.movies.filter((movie) => {
    const title = movie.title;
    return title.includes(str);
  });
  console.log(result);
}
movieDatabase.searchMovie = searchMovie;
movieDatabase.searchMovie("lady");

// 5
function sortMoviesByRating() {
   movieDatabase.movies.sort((a,b) => b.averageRating - a.averageRating)
  //  for (let i = 0; i < movieDatabase.movies.length; i++) {
  //    if (movieDatabase.movies[i].) {
      
  //    }
  //  }
  console.log(movieDatabase.movies);
}
movieDatabase.sortMoviesByRating = sortMoviesByRating
movieDatabase.sortMoviesByRating()


function sortMoviesByTitle() {
   movieDatabase.movies.sort((a,b) => {
     const titleA = a.title.toUpperCase()
     const titleB = b.title.toUpperCase()
    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }
    return 0
  })
 
  console.log(movieDatabase.movies);
}
movieDatabase.sortMoviesByTitle = sortMoviesByTitle
movieDatabase.sortMoviesByTitle()

