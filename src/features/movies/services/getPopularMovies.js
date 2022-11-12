import { TMDB } from '../../../config/TMDB';
import { adapterMovies, adapterTopMovies } from '../adapter/adapterMovies'

export const getPopularMovies = async ()=>{
    const res = await TMDB.api.get(TMDB.paths.movies.popular);
    return adapterMovies(res.data.results);
};

export const getPopularTopMovies = async ()=>{
    const res = await TMDB.api.get(TMDB.paths.movies.top_rated);
    return adapterTopMovies(res.data.results);
};