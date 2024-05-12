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
  return;
}
const propertyCheck = movies.filter(
    (obj) => obj.hasOwnProperty(movies.title) && obj.hasOwnProperty(movies.rating)
);
processMovies(movies)
console.log(propertyCheck);