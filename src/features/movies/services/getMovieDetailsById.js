import { TMDB } from "../../../config/TMDB"

export const getMovieDetailsById = async (id )=> {
    const res = await TMDB.api.get(TMDB.paths.movies
         + id);
         return adapterDetails(res.data.results);      
};