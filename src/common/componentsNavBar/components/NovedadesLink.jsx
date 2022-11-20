import React from 'react'
import { getPopularTopMovies } from '../../../features/movies/services/getPopularMovies'
import { getPopularTopSeries } from '../../../features/series/services/getPopularSeries'
import { CONSTANTS } from '../../../utils/constants'
import { Slider } from '../../componentsSlider/Slider'
import { Title } from '../../componentsSlider/Title'
import { useFetch } from '../../hooks/useFetch'
import { NavBar } from '../NavBar'

export const NovedadesLink = () => {
  
    const { data: topSeries, error: errorTopSeries, isLoading: isLoadingTopSeries } = useFetch(getPopularTopSeries);
    const { data: topMovies, error: errorTopMovies, isLoading: isLoadingTopMovies } = useFetch(getPopularTopMovies);
    
return (
    <div>
        <NavBar/>
        <h1 style={{margin:"5px",
                    padding:"5px",
                    color:"white",
                    }}> Novedades </h1>
        <Title text={CONSTANTS.MOVIES_VIEW.titleNovedades1}/>
        <Slider entities={topSeries}/>
        <Title text={CONSTANTS.MOVIES_VIEW.titleNovedades2}/>
        <Slider entities={topMovies}/>
    </div>
  )
};

