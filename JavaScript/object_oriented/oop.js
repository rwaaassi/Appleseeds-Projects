// 1
class Media {
  #title;
  #duration;
  #rating;
  constructor(title, duration) {
    this.#title = title;
    this.#duration = duration;
    this.#rating = [];
  }

  get title() {
    return this.#title;
  }
  get duration() {
    return this.#duration;
  }
  addRating(rating) {
    return this.#rating.push(rating);
  }
  #getAverageRating() {
    const sum = this.#rating.reduce((acc, val) => acc + val, 0);
    return sum / this.#rating.length;
  }
  get getAverageRating() {
    return this.#getAverageRating();
  }
  displayDetails() {
    let title = this.#title;
    let duration = this.#duration;
    let aveRating = this.#getAverageRating;
    return `${title}, ${duration}, ${aveRating}`;
  }
}

// 2
class Movie extends Media {
  #director;
  #genre;
  constructor(title, duration, director, genre) {
    super(title, duration);
    this.#director = director;
    this.#genre = genre;
  }
  get director() {
    return this.#director;
  }

  get genre() {
    return this.#genre;
  }

  displayDetails() {
    let director = this.#director;
    let genre = this.#genre;
    return `${title}, ${duration}, ${aveRating}, ${director}, ${genre}`;
  }
}

class Series extends Media {
  #seasons;
  constructor(title, duration, director, genre, seasons) {
    super(title, duration, director, genre);
    this.#seasons = seasons;
  }
  get seasons() {
    return this.#seasons;
  }
  displayDetails() {
    let seasons = this.#seasons;

    return `${title}, ${duration}, ${aveRating}, ${director}, ${genre}, ${seasons}`;
  }
}

// 3
class User {
  #username;
  constructor(username) {
    this.#username = username;
  }
  get username() {
    return this.#username;
  }
  #watchedMedia = [];

  addMedia(media) {
    return this.#watchedMedia.push(media);
  }
  rateMedia(media, rating) {
    if (this.#watchedMedia.includes(media)) {
      return addRating(rating);
    }
    return `User can only rate watched media`;
  }
}
