import React from 'react'
import { Banner } from '../../../common/componentsBanner/Banner'
import { useFetch } from '../../../common/hooks/useFetch';
import { getPopularMovies, getPopularTopMovies } from '../services/getPopularMovies';
import { Title } from '../../../common/componentsSlider/Title';
import { CONSTANTS } from '../../../utils/constants';
import { Slider } from '../../../common/componentsSlider/Slider';


export const Movies = () => {
    
    const {data : movies, error: errorMovies, isLoading: isLoadingMovies  } = useFetch(getPopularMovies);
    const { data: topMovies, error: errorTopMovies, isLoading: isLoadingTopMovies } = useFetch(getPopularTopMovies);
    
    
return (
    <>
        { isLoadingMovies || isLoadingTopMovies? (
            <div> Cargando </div>
        ): (
        <>
            <Title text={CONSTANTS.MOVIES_VIEW.titleMovies}/>
            <Slider entities={movies}/>
            <Title text={CONSTANTS.MOVIES_VIEW.titleTopMovies}/>
            <Slider entities={topMovies}/>
        </>
        )}
    </>
   );
 };

