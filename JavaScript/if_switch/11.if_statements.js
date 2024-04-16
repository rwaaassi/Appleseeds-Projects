// 1
let movieRating = 6;
if (movieRating > 7) {
  console.log(`Highly rated movie`);
} else {
  console.log(`This movie has room for improvement`);
}

// 2
const movieBudget = 2000000;
if ((movieBudget > 1000000, movieBudget < 100000000)) {
  console.log(`Big-budget movie`);
} else {
  console.log(`Indie movie`);
}

// 3
const movieGenre2 = "rom-com";
const audienceAge = 16;
if (movieGenre2 === "rom-com") {
  if (audienceAge === 18) {
    console.log(`Suitable for audience`);
  } else {
    console.log(`Not suitable for the audience`);
  }
} else {
  console.log(`Suitable for all audiences`);
}

// 4
const firstMovieDuration = 2.3;
const secondeMovieDuration = 2.1;
if (firstMovieDuration > secondeMovieDuration) {
  console.log(`The first movie is longer`);
} else if (firstMovieDuration == secondeMovieDuration) {
  console.log(`Movies have the same duration`);
}

// 5

const viewerAge = 18;
if (viewerAge >= 18) {
  console.log(`Suitable for adults`);
} else if ((viewerAge >= 13, viewerAge < 18)) {
  console.log(`Suitable for teens`);
} else if (viewerAge < 13) {
  console.log(`Suitable for kids`);
}

// 6
let PopularityScore = 85;
let popularity = PopularityScore >= "85" ? "Popular movie" : "Less know movie";
console.log(popularity);

// 7
let numOfAwards = 4;
let num = numOfAwards % 2 == 0 ? "even" : "odd";
console.log(num);

// 8
const actorAge = 23;
const group =
  actorAge < 14
    ? "Child actor"
    : actorAge > 14 && actorAge < 24
    ? "Young actor"
    : "Adult actor";
console.log(group);

// 9
const hasInvitation = false;
const invite = hasInvitation
  ? "Welcome to the premiere"
  : "Please check your invitation";
console.log(invite);

// 10
const screeningDuration = 90;
if (screeningDuration < 40) {
  console.log(`Short film`);
} else if ((screeningDuration <= 120, screeningDuration >= 40)) {
  console.log(`Feature film`);
} else if (screeningDuration > 120) {
  console.log(`Epic length movie`);
}

// 11
const dayOfWeek = "monday";
if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
  console.log(`Special screening event!`);
} else {
  console.log("Regular movie showtime");
}

// 12
const releaseYear = 2003;
if (releaseYear < 2100 && releaseYear >= 2001) {
  console.log("21st century movie");
} else if (releaseYear < 2001) {
  console.log("20th century movie");
}

// 13
const movieGenre = "horror";
const movieRating2 = 6.5;
if (movieRating2 >= 7) {
  console.log("Must watch");
} else {
  console.log("Check reviews before watching");
}

// 14
const ticketPrice = 12;
if (ticketPrice <= 10) {
  console.log("Discount ticket");
} else {
  console.log("Regular ticket price");
}

// 15
const age = 17;
const isAdult = true;
if (age > 18) {
  console.log("Allowed to watch");
} else {
  console.log("Age restricted content");
}

// 16
const movieTitle = "Perfect Blue";
if (movieTitle.match("2") || movieTitle.match("part")) {
  console.log(`This movie is a sequel`);
} else {
  console.log(`This movie is not a sequel`);
}
