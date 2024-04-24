// 1. Find the Longest Movie Title
const movieTitles1 = ["Inception", "The Dark Knight", "Interstellar"];
let long = 0;
let longName = null;
for (let i = 0; i < movieTitles1.length; i++) {
  if (long < movieTitles1[i].length) {
    long = movieTitles1[i].length;
    longName = movieTitles1[i];
  }
}
console.log(longName);

// 2. Calculate the Average Rating
const movieRatings2 = [8.3, 7.5, 9.0, 8.7];
let sum = 0;
for (let i = 0; i < movieRatings2.length; i++) {
  sum += movieRatings2[i];
}
console.log(sum / movieRatings2.length);

// 3. Reverse the Movie List
const movieTitles3 = ["Inception", "The Dark Knight", "Interstellar"];
const reversed = [];
for (let i = movieTitles3.length; i >= 0; i--) {
  reversed.push(movieTitles3[i]);
}
console.log(reversed);

// 4. Increase Movie Ratings
const movieRatings4 = [8.3, 7.5, 9.0, 8.7];
let add = 0.5;
for (let i = 0; i < movieRatings4.length; i++) {
  movieRatings4[i] += add;
}
console.log(movieRatings4);

// 5. Filter Movies by High Ratings
const movieRatings5 = [8.3, 7.5, 9.0, 8.7];
for (let i = 0; i < movieRatings5.length; i++) {
  if (movieRatings5[i] >= 8) {
    console.log(movieRatings5[i]);
  }
}
console.log(movieRatings4.sort());

// 6. Count a Specific Rating's Occurrence
const movieRatings6 = [8.3, 8.7, 9.0, 8.7, 8.3];
const specificRating6 = 8.7;
let counter = 0;
for (let i = 0; i < movieRatings6.length; i++) {
  if (movieRatings6[i] == specificRating6) {
    counter++;
    console.log(counter);
  }
}

// 7. Find Movies in Both Watched and Wish Lists
const watchedList7 = ["Inception", "The Dark Knight"];
const wishList7 = ["Interstellar", "Inception"];
const commonMovies = [];

for (let i = 0; i < watchedList7.length; i++) {
  const movie = watchedList7[i];
  if (wishList7.includes(movie)) {
    commonMovies.push(movie);
  }
}

console.log(commonMovies);

// 8. Check Ratings Against a Threshold
const movieRatings8 = [8.3, 7.5, 9.0, 8.7];
const minRating8 = 8.0;
let above = true;
for (let i = 0; i < movieRatings8.length; i++) {
  if (movieRatings8[i] <= minRating8) {
    above = false;
  }
}
console.log(above);
// 9. Identify the Maximum Rating
const movieRatings9 = [8.3, 7.5, 9.0, 8.7];
let max = movieRatings9[0];
for (let i = 0; i < movieRatings9.length; i++) {
  if (movieRatings9[i] > max) {
    max = movieRatings9[i];
  }
}
console.log(max);

// 10. Find the Highest Rating
const movieRatings10 = [8.3, 7.5, 9.0, 8.7];
let highestRating = movieRatings10[0];

for (let i = 1; i < movieRatings10.length; i++) {
  if (movieRatings10[i] > highestRating) {
    highestRating = movieRatings10[i];
  }
}
console.log(highestRating);

// bonus
// 11. Calculate Averages from a Rating List
const ratingsList11 = [
  [8, 7, 9],
  [6, 8, 7],
  [9, 9, 10],
];

// 12. Display Ratings as a Bar Chart
const movieRatings12 = [8, 5, 9];

// 13. Order Ratings in Ascending Sequence
const movieRatings13 = [8.3, 7.5, 9.0, 8.7];

// 14. Calculate Total Ratings from Review Matrix
const reviewMatrix14 = [
  [7, 8.5],
  [6, 9],
  [8, 7.5],
];

// 15. Find the Movie with Highest Rating in Each Category
const ratingMatrix15 = [
  [7, 8.5],
  [6, 9],
  [8, 7.5],
];

// 16. Count Critically Acclaimed Movies in Each Genre
const genreAcclaimMatrix16 = [
  [5, 7],
  [8, 6],
  [9, 7],
];

// 17. Sum of Ratings for Blockbuster Movies by Genre
const blockbusterRatingMatrix17 = [
  [7, 8.5],
  [9.5, 9],
  [8, 7.5],
];

// 18. Average Rating of Movies by Director
const directorRatingMatrix18 = [
  [7, 8.5],
  [6, 9],
  [8, 7.5],
];
