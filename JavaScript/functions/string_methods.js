// Data for Movie Rating System Exercises

// 1. Movie Title Capitalization
const movieTitle = "the dark knight";
let newTitle = [];
newTitle = movieTitle.split(" ", 3);
for (let i = 0; i < newTitle.length; i++) {
  let title = newTitle[i][0].toUpperCase() + newTitle[i].slice(1);
  console.log(title);
}

// const words = movieTitle.split(" ");
// const capitalizedWords = words.map(
// (word) => word.charAt(0).toUpperCase() + word.slice(1)
// );
// const capitalizedTitle = capitalizedWords.join(" ");
// console.log(capitalizedTitle);

// 2. Search Bar
const movieTitles = ["The Dark Knight", "Inception", "Interstellar"];
const query = "In";
let arr = [];
for (let i = 0; i < movieTitles.length; i++) {
  if (movieTitles[i].includes(query)) {
    arr.splice(0, 0, movieTitles[i]);
  }
}
console.log(arr);

// 3. Director's Name Format
const directorName = "Nolan, Christopher";
let newDirectorName = [];
let director = "";

newDirectorName = directorName.split(" ").reverse();
director = newDirectorName.join();

console.log(director.replaceAll(",", " "));
// 4. Movie Length
const movieLength = "2h 30min";
let time = movieLength.split(" ");

let h = parseInt(time[0]);
let min = parseInt(time[1]);

console.log(`${h} horus and ${min} minutes`);

// 5. Movie Initials
const titleForInitials = "The Dark Knight";
let acronym = titleForInitials.split(" ");
let acro = "";
for (let i = 0; i < acronym.length; i++) {
  acro += acronym[i][0];
}
console.log(acro);


// 6. Format Movie Information String
const movieDetails = "Inception|Christopher Nolan|Sci-Fi";
let details = movieDetails.split('|')
for (let i = 0; i < details.length; i++) {
  details[i] = details[i].split(" ");
  let moviee = details[0]
  let director = details[1]
  let genre = details[2]
  console.log(`${moviee}, directed by ${director}, genre: ${genre}`);
  return
}

// 7. Movie Slug
const titleForSlug = "The Dark Knight";
console.log(titleForSlug.toLowerCase().replaceAll(" ","-"));


// 8. Synopsis Trimming
const synopsis =
  "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO. But his tragic past may doom the project and his team to disaster.";
const maxSynopsisLength = 100;


// 9. Genre List
const genres = "Action,Adventure,Sci-Fi";
const arrGenres = genres.split(",")
console.log(arrGenres);
