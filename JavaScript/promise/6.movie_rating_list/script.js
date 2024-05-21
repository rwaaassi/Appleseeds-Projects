class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {
    return this.title;
  }
  getReleaseDate() {
    let month = this.releaseDate.slice(5, 7);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthName = monthNames[parseInt(month) - 1];
    let localizedDate =
      this.releaseDate.slice(0, 5) + monthName + this.releaseDate.slice(7);
    return localizedDate;

    // let month = this.releaseDate.charAt(6) + this.releaseDate.charAt(7);

    // switch (month) {
    //   case "01":
    //     month = "January";
    //     break;
    //   case "02":
    //     month = "February";
    //     break;
    //   case "03":
    //     month = "March";
    //     break;
    //   case "04":
    //     month = "April";
    //     break;
    //   case "05":
    //     month = "May";
    //     break;
    //   case "06":
    //     month = "June";
    //     break;
    //   case "07":
    //     month = "July";
    //     break;
    //   case "08":
    //     month = "August";
    //     break;
    //   case "09":
    //     month = "September";
    //     break;
    //   case "10":
    //     month = "October";
    //     break;
    //   case "11":
    //     month = "November";
    //     break;
    //   case "12":
    //     month = "December";
    //     break;

    //   default:
    //     month = "null";
    //     break;
    // }
    // let localizedDate =
    //   this.releaseDate.slice(0, 5) + month + this.releaseDate.slice(7);

    // return localizedDate;
  }
  getPicture() {
    return this.picture;
  }
  getRating() {
    return this.rating;
  }
}

const getHttpOptions = () => ({
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzg1Y2Y5NDYyOWU3MDhlZmY4MDQyZjEyYjI1MWUxYSIsInN1YiI6IjY2NGM3NGM2ZmNhYjNiNWI1MTc5Yjc5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TFXBrggzNUd1yPLGHTROWovxWel8Ucb9ZhzyvMez-a8",
  },
});

const API_BASE_URL = "https://api.themoviedb.org/3/";
const getImage = function (imgPath) {
  const imgUrl = `https://image.tmdb.org/t/p/original/${imgPath}`;
  return imgUrl;
};

function fetchMovies() {
  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, getHttpOptions())
    .then((response) => response.json())
    .then((response) => {
      response.results.forEach((item) => {
        const title = item.title;
        const releaseDate = item.release_date;
        const picture = getImage(
          item.poster_path || item.backdrop_path,
          "w500"
        );
        const rating = item.vote_average;
        const movie = new Movie(title, releaseDate, picture, rating);
        createMovieCard(movie);
      });
      updateItemCount();
    })
    .catch((err) => console.error(err));
}
function updateItemCount() {
  const p = document.querySelector(".sort-bar p");
  const movies = document.querySelectorAll(".movie");
  const moviesNum = movies.length;
  p.textContent = `${moviesNum} items`;
}
function createMovieCard(movie) {
  let target = document.querySelector(".movies-list");
  target.innerHTML += `
    <div class="movie">
      <img class="vector-img" src="./images/Vector.svg" alt="Vector">
      <a href="#">
        <img class="poster-img" src="./images/tabler-icon-plus.svg" alt="Plus">
      </a>
      <img class="poster" src="${movie.getPicture()}" alt="${movie.getTitle()}">
      <div class="flex-container movie-info">
        <a href="#" class="title normal-link">${movie.getTitle()}</a>
        <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseDate()}</p>
        <div class="flex-container rate-trailer">
          <div class="flex-container trailer">
            <img src="./images/play.svg" alt="Play">
            <a href="#">Trailer</a>
          </div>
          <div class="flex-container rating">
            <img src="./images/star.svg" alt="Star">
            <p>${movie.getRating()}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
fetchMovies();
