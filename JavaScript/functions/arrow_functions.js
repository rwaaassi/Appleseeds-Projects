let movies = [ { title: "past lives", year: 2023, duration: 120, rating: 9 },
  { title: "Perfect Blue", year: 1997, duration: 90, rating: 9.5 }]

// 1
const getMovies = movies => 
 movies.map(movie => movie.title);
const movieTitles = getMovies(movies);
console.log(movieTitles);


// 2
const averageMovieRating = rating => {
    if (rating>7) {
        console.log(`good`);
    }
    else if (rating >5) {
        console.log(`average`);
    }
    else {
        console.log(`bad`);
    }
}
averageMovieRating(9)
// rating > 7 ? "good" : rating>5 ? "average" : "bad"
// console.log(averageMovieRating(3));


// 3
const getTotalMovieLength = movies => {
    let sum = 0
    movies.forEach((movie) => {
        sum+=movie.duration 
    })
    return sum
}
console.log(getTotalMovieLength(movies));

// 4
const sortedMovies =  movies.sort((a,b) => b.rating - a.rating)
console.log(sortedMovies);

// 5
const getMovieTitles = movies => (
    movies.map(movie => (movie.title))
)
console.log(getMovieTitles(movies));