import { TMDB } from '../../../config/TMDB';
import { adapterSeries } from '../adapter/adapterSeries';

export const getPopularSeries = async ()=>{
    const res = await TMDB.api.get(TMDB.paths.series.popular);
    return adapterSeries(res.data.results);
};

export const getPopularTopSeries = async ()=>{
    const res = await TMDB.api.get(TMDB.paths.series.top_rated);
    return adapterSeries(res.data.results);
};