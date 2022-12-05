import { TMDB } from "../../../config/TMDB";


export const adapter = (movie)=> {
    return{
        id: movie.id,
        name: movie.title,
        date: movie.release_date,
        description: movie.overview,
        backdrop:TMDB.images.backdrop_high + movie.backdrop_path,
        poster: TMDB.images.poster_high + movie.poster_path,
        rating: movie.vote_average,
    };
};

export const adapterMovies = (movies)=> {
    return movies.map(adapter);
};

export const adapterTopMovies = (topMovies)=> {
    return topMovies.map(adapter);
};

export const adapterMovieById =(movies)=>{
    return movies.map(adapter);
};


