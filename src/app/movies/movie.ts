class Movie {
    title: string;
    releaseDate: string;
    director: string;
    rating: number;
    description: string;
    image: string;

    constructor(title: string, releaseDate: string, director: string, rating: number, description: string, image: string) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.director = director;
        this.rating = rating;
        this.description = description;
        this.image = image;
    }
}