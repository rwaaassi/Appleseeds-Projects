// 1
const movies = [
  {
    id: 34,
    title: "decision to leave",
    rating: 9.5,
  },
  {
    id: 30,
    title: "drive my car",
    rating: 9,
  },
  {
    id: 31,
    title: "past lives",
    rating: 8.5,
  },
  {
    id: 32,
    title: "portrait of a lady on fire",
    rating: 8,
  },
];
function processMovies(movieObjects, callbackFunc) {
  if (!Array.isArray(movieObjects)) {
    throw new Error(`expected array of movies`);
  }

  for (const movie of movieObjects) {
    if (!(movie.hasOwnProperty("title") || movie.hasOwnProperty("rating"))) {
      throw new Error(`Movie with ID ${movie.id} is not correctly
          structured`);
    }
  }

  const newMovies = JSON.parse(JSON.stringify(movieObjects));
  newMovies.forEach((movie) => {
    callbackFunc(movie);
  });
  return newMovies;
}
let arr1 = processMovies(movies, (movie) => {
  movie.rating -= 1;
  return movie;
});
console.log(arr1);
// 2
const reviewMovies = [
  {
    id: 45,
    movieId: 34,
    rating: 9,
    Comment: "Great movie",
  },
  {
    id: 46,
    movieId: 30,
    rating: 9.5,
    Comment: "Great movie",
  },
  {
    id: 47,
    movieId: 31,
    rating: 8,
    Comment: "Great movie",
  },
  {
    id: 48,
    movieId: 32,
    rating: 8.5,
    Comment: "Great movie",
  },
];
function processReviews(reviewObj, callbackFunction) {
  if (!Array.isArray(reviewObj)) {
    throw new Error(`expected array of review movies`);
  }

  for (const movie of reviewObj) {
    if (!(movie.hasOwnProperty("movieId") || movie.hasOwnProperty("rating"))) {
      throw new Error(`Movie with ID ${movie.id} is not correctly
          structured`);
    }
  }

  const newReviewMovies = JSON.parse(JSON.stringify(reviewObj));
  newReviewMovies.forEach(callbackFunction);
  return newReviewMovies;
}

let arr2 = processReviews(reviewMovies, (movie) => {
  movie.movieId += 1000;
  return movie;
});
console.log(arr2);

// 3
const users = [
  {
    id: "q1w2",
    name: "Username1",
    age: 30,
    favoriteMovies: ["portrait of a lady on fire", "past lives"],
    reviewsPosted: 5,
  },
  {
    id: "a9bcf",
    name: "Username2",
    age: 34,
    favoriteMovies: ["drive my car", "decision to leave"],
    reviewsPosted: 10,
  },
  {
    id: "z3eer",
    name: "Username3",
    age: 20,
    favoriteMovies: ["decision to leave", "past lives"],
    reviewsPosted: 7,
  },
];

function processUsers(userObj, callback) {
  if (!Array.isArray(userObj)) {
    throw new Error(`expected array of users`);
  }

  for (const user of userObj) {
    if (
      !(
        user.hasOwnProperty("name") ||
        user.hasOwnProperty("age") ||
        user.hasOwnProperty("favoriteMovies") ||
        user.hasOwnProperty("reviewsPosted")
      )
    ) {
      throw new Error(`user with ID ${user.id} is not correctly
          structured`);
    }
  }

  const newUsers = JSON.parse(JSON.stringify(userObj));
  newUsers.forEach(callback);
  return newUsers;
}
let arr3 = processUsers(users, (user) => {
  user.reviewsPosted += 1;
  return user;
});
console.log(arr3);
