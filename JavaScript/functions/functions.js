// Impure Functions

// 1
let movieRatings = [];

function initializeRatings() {
  movieRatings.push("Past Lives", 8);
}

initializeRatings();
console.log(movieRatings);

// 2

function addRating(movieTitle, rating) {
  movieRatings.push([movieTitle, rating]);
}

addRating("Inception", 9);
addRating("Avatar", 7);
addRating("Decision to Leave", 7);
console.log(movieRatings);

// 3
function findRating(movieTitle) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      console.log(movieRatings[i][1]);

      return;
    }
  }

  console.log(`movie not found`);
}
findRating("Inception");

// movieRatings.includes(movieTitle)
// 4
function updateRating(movieTitle, newRating) {
  for (let i = 0; i < movieRatings.length; i++) {
    if ((movieTitle = true)) {
      console.log((newRating = 10));
      return;
    } else {
      console.log(`Movie unavailable`);
    }
  }
}
updateRating("Past Lives");

// 5
function removeRating(movieTitle) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      movieRatings.splice(i, 1);
      return;
    }
    // else {
    //   console.log(`movie not found`);
    // }
  }
  // console.log(movieTitle);
}
removeRating(`Inception`);
console.log(movieRatings);

// 6
function listMovies() {
  for (let i = 0; i < movieRatings.length; i++) {
    console.log(`${movieRatings[i][0]} - ${movieRatings[i][1]}`);
  }
}
listMovies();

// 7
function highestRatedMovie() {
  let highestRating1 = 0;
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][1] > highestRating1) {
      highestRating1 = movieRatings[i];
      console.log(highestRating1);
      return;
    } else {
      `no movies`;
    }
  }
}
highestRatedMovie();

// Pure Functions

// 1. Average Rating
function calculateAverageRating() {
  const input = [3, 4, 5, 3, 5];

  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += input[i];
  }
  console.log(sum / input.length);
}
calculateAverageRating();

// 2. Filter Movies by Rating
function filterByRating() {
  const movieRatingss = [3, 4, 5, 2, 1, 5];
  let minimum = 4;
  for (let i = 0; i < movieRatingss.length; i++) {
    if (movieRatingss[i] >= minimum) {
      console.log(movieRatingss[i]);
    }
  }
}
filterByRating();

// 3. Highest Rated Movie
function findHighestRating() {
  const ratings = [3, 4, 5, 3, 5];
  console.log(Math.max.apply(null, ratings));
}
findHighestRating();

// 4. Ratings Above Threshold
function ratingAboveThreshold() {
  const ratings = [3, 4, 5, 2, 1, 5];
  const threshold = 3;
  let arr = [];
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > threshold) {
      arr.push(ratings[i]);

      console.log(arr);
    }
  }
}
ratingAboveThreshold();

// 5. Count Movies in Rating Range
function countInRatingRange() {
  const ratings = [3, 4, 5, 2, 1, 5];
  const lower = 4;
  const upper = 5;
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= lower && ratings[i] < upper) {
      console.log(ratings[i]);
    }
  }
}
countInRatingRange();

// 6. Filter Unique Ratings
function uniqueRatings(ratings) {
  const arr = [];
  for (let i = 0; i < ratings.length; i++) {
    if (!arr.includes(ratings[i])) {
      arr.push(ratings[i]);
    }
  }
  console.log(arr);
  return;
}
uniqueRatings([5, 3, 4, 3, 5, 4, 5]);

// 7. Merge Ratings
let rating = [];
function mergeRatings() {
  const rating1 = [5, 3, 4];
  const rating2 = [2, 3, 5];
  rating = rating1.concat(rating2);
  return [...new Set(rating)];
}
console.log(mergeRatings(rating));

// 8. Ratings Differential
function ratingDifferential(rating1, rating2) {
  let sum = 0;
  for (let i = 0; i < rating1.length; i++) {
    sum += rating1[i];
  }
  let sum2 = 0;
  for (let i = 0; i < rating2.length; i++) {
    sum2 += rating2[i];
  }
  console.log(sum / rating1.length - sum2 / rating2.length);
}
ratingDifferential([4, 4, 4, 4, 5], [3, 3, 3, 3]);

// 9. Filter Ratings by Multiple Criteria
function filterRatingByCriteria(ratings, lessThan, greaterThan) {
  let arr = [];
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > greaterThan && ratings[i] < lessThan) {
      arr.push(ratings[i]);
    }
  }
  console.log(arr);
  return arr;
}
filterRatingByCriteria([1, 2, 3, 4, 5], 5, 2);

// Bonus Exercises

// 1. Sort Movie Ratings
// Example input: [5, 3, 4, 2, 1]

// 2. Average Rating of Top N Movies
// Example input: ([3, 1, 5, 4, 2], 3)

// 3. Create Rating Frequency Map
// Example input: [3, 4, 3, 5, 4, 5, 5]

// 4. Normalize Ratings
// Example input: ([1, 2, 3, 4, 5], 0, 10)
