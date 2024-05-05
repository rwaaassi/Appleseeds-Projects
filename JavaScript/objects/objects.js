// 1
// const movieDatabase = {
//     movies : [{title: "",
//     ratings: [],
//     averageRating: ,
//     }],
//     addMovie = function ("past lives") {

//     }
// }

// 1 new
// 1
const movieDatabase = {
  movies: [],
  addMovie: function (movieTitle) {
    const movie = {
      title: movieTitle,
      ratings: [],
      averageRating: 0,
    };
    this.movies.push(movie);
  },
  removeMovie: function (movieTitle) {
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].title === movieTitle) {
        this.movies.splice(i, 1);
      }
    }
  },
};

movieDatabase.addMovie("past lives");
movieDatabase.addMovie("kkkk");
movieDatabase.addMovie("ddddd");
console.log(movieDatabase);

movieDatabase.removeMovie("kkkk");
console.log(movieDatabase);

// 2
movieDatabase.addRating = function (movieTitle, rating) {
for (let i = 0; i < movies.length; i++) {
    if (movies[i].ratings) {
        
    }
    
}
}

const str = "rwaa"
const obj = {}
function strCount (name) {
for (let i = 0; i < str.length; i++) {
 if (obj[str[i]] != [i]) {
    obj[str[i]] = 1
 }
    else {
        obj[str[i]]++;
    }
    if (obj.hasOwnProperty) {
        
    }
}

}
strCount(str)
console.log(obj);