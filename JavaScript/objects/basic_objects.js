// 1
const movie = {
  title: "Perfect Blue",
  director: "Satoshi Kon",
  releaseYear: 1997,
  genres: ["crime", "drama", "mystery"],
  ratings: [8.7, 9, 7.9],
  getAverageRating: function () {
    let sum = 0;
    for (let i = 0; i < this.ratings.length; i++) {
      sum += this.ratings[i];
    }
    this.averageRating = sum / this.ratings.length;
  },
};
movie.getAverageRating();
console.log(movie);

// 2
const cast = [
  { name: "junko iwao", role: "mima" },
  { name: "rica matsumoto", role: "rumi" },
  { name: "shinpachi tsuji", role: "tadokoro" },
];
movie2 = Object.assign({}, { cast }, movie);
console.log(movie2);

console.log(movie2.genres[1]);
console.log(movie2["genres"][1]);

console.log(movie2.cast[1].name);
console.log(movie2["cast"][1]["name"]);

// 3
console.log(`num 3`);
movie2.releaseYear = 1998;

movie2.ratings.push(9.5);

delete movie2.director;

movie2.cast[0].role = "MIMA ";
movie2["cast"][0]["role"] = "MIMA";

if (movie2.hasOwnProperty("ratings")) {
  console.log(`true`);
}

console.log(movie2);

// 4
console.log(`num 4`);
const movies = [
  { title: "Inception", details: { duration: 148, rating: "PG-13" } },
  { title: "Interstellar", details: { duration: 169, rating: "PG-13" } },
];
console.log(movies[0]["details"]["duration"]);

function aveDuration(movies) {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum += movies[i].details.duration;
  }
  return sum / movies.length;
}
const averageDuration = aveDuration(movies);
console.log(averageDuration);

// 5
// console.log(`num 5`);
// let movie3 = Object.assign(movies[0],movies[1])

// console.log(movie3);

// 6
console.log(`num 6`);
const movieDetails = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  ratings: [8, 9, 9.5, 8.5],
};

const keys = Object.keys(movieDetails);
for (const key of keys){ 
console.log(`key: ${key}, Value: ${movieDetails[key]}`);
}

// 7
console.log(`num 7`);
const movieCollection = {
  Inception: 9,
  Interstellar: 8.5,
  TheDarkKnight: 9.5,
  Prestige: 8,
  joker: 5
};
const increasedd = Object.entries(movieCollection);
function increase (increasedd) {
    for (let i = 0; i < increasedd.length; i++) {
      if (increasedd[i][1] < 7) {
        increasedd[i][1]++;
      }

      console.log(increasedd[i]);
    }
}
increase(increasedd);

// 8
console.log(`num 8`);
const movies2 = {
  1: { title: "Inception", year: 2010, rating: 9 },
  2: { title: "The Matrix", year: 1999, rating: 8.5 },
  3: { title: "Interstellar", year: 2014, rating: 8.6 },
};
const releaseYearr = Object.entries(movies2);
function release (releaseYearr) {
    for (let i = 0; i < releaseYearr.length; i++) {
      if (releaseYearr[i][1]["year"]> 2000) {
        console.log(releaseYearr[i] , releaseYearr[i][1].isNewer = true);
      }
    }
}
release(releaseYearr)

// 9
console.log(`num 9`);
const genreRatings = {
  action: [8, 9, 7, 10, 8.5],
  sciFi: [8.5, 8, 9, 9.5, 7.5],
  drama: [7, 7.5, 8, 8.5, 9],
};
const ave = Object.keys(genreRatings)
let arr = []
arr.push(ave)
arr.push(Object.values(genreRatings))
console.log(arr);
for (let i = 0; i < ave.length; i++) {
    
}
function aveRating (genreRatings) {
    for (let i = 0; i < genreRatings.length; i++) {
        let sum = 0
        sum += genreRatings[i]
        
    }
}

// 10
const movieAwards = {
  Inception: 'Best Visual Effects',
  Interstellar: 'Best Visual Effects',
  'The Dark Knight': 'Best Supporting Actor',
  Prestige: 'Best Cinematography',
};
const arrr = Object.entries(movieAwards);
function newAwards (movieAwards) {
    for (let i = 0; i < arrr.length; i++) {
        arrr[i].reverse()
        if (arrr[i][1]===arrr[i][1]) {
            arrr[i].push(arrr[i][1])
        }
    }
    const awards = Object.fromEntries(arrr)
    console.log(awards);
}
newAwards(movieAwards)