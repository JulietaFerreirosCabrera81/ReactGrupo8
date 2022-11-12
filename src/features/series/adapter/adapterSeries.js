import { TMDB } from "../../../config/TMDB";

export const adapter = (serie)=> {
    return{
        id: serie.id,
        name: serie.title,
        description: serie.overview,
        backdrop: TMDB.images.backdrop_high + serie.backdrop_path,
        poster: TMDB.images.poster_high + serie.poster_path,
    };
};

export const adapterSeries = (series)=> {
    return series.map(adapter);
}

export const adapterTopSeries = (topSeries)=> {
    return topSeries.map(adapter);
}