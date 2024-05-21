const releaseDate = "2023-07-19"
const month = releaseDate.charAt(5) + releaseDate.charAt(6)
console.log(month);
console.log(typeof month);

const movieRatings = {
  "The Matrix": 8.7,
  Inception: 8.8,
};
function spread(movieRatings) {
    return movieRatings
}
spread(...movieRatings)