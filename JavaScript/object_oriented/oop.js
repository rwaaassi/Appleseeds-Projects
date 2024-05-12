class Media {
    #title;
    #duration;
    #rating;
    constructor (title, duration) {
        this.#title = title;
        this.#duration = duration;
        this.#rating = []
    }

    get title () {
       return this.#title
    }
}