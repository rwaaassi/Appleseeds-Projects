// Data for Movie Rating System Exercises

// 1. Movie Title Capitalization
const movieTitle = "the dark knight";
for (let i = 0; i < movieTitle.length; i++) {
  
  
}

// Split the string into an array of words
const words = movieTitle.split(" ");

// Capitalize the first letter of each word
const capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);

// Join the capitalized words back into a single string
const capitalizedTitle = capitalizedWords.join(" ");

console.log(capitalizedTitle);

// 2. Search Bar
const movieTitles = ["The Dark Knight", "Inception", "Interstellar"];
const query = "In";

// 3. Director's Name Format
const directorName = "Nolan, Christopher";

// 4. Movie Length
const movieLength = "2h 30min";

// 5. Movie Initials
const titleForInitials = "The Dark Knight";

// 6. Format Movie Information String
const movieDetails = "Inception|Christopher Nolan|Sci-Fi";

// 7. Movie Slug
const titleForSlug = "The Dark Knight";

// 8. Synopsis Trimming
const synopsis =
  "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO. But his tragic past may doom the project and his team to disaster.";
const maxSynopsisLength = 100;

// 9. Genre List
const genres = "Action,Adventure,Sci-Fi";

// Function placeholders for implementation of the exercises
function capitalizeTitle(title) {
  // Implement capitalization logic here
}

function filterMovies(titles, query) {
  // Implement search filtering logic here
}

function reformatDirectorName(name) {
  // Implement name reformatting logic here
}

function extractMovieLength(lengthStr) {
  // Implement length extraction logic here
}

function getMovieInitials(title) {
  // Implement initials extraction logic here
}

function formatMovieDetails(details) {
  // Implement details formatting logic here
}

function createMovieSlug(title) {
  // Implement slug creation logic here
}

function trimSynopsis(synopsis, maxLength) {
  // Implement synopsis trimming logic here
}

function splitGenres(genreStr) {
  // Implement genre splitting logic here
}

// Example of calling a function (uncomment and replace functionName with actual function names to test)
// console.log(functionName(arguments));
