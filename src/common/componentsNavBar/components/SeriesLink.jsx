import React from 'react'
import { getPopularMovies } from '../../../features/movies/services/getPopularMovies'
import { getPopularSeries, getPopularTopSeries } from '../../../features/series/services/getPopularSeries'
import { CONSTANTS } from '../../../utils/constants'
import { Slider } from '../../componentsSlider/Slider'
import { Title } from '../../componentsSlider/Title'
import { useFetch } from '../../hooks/useFetch'
import { NavBar } from '../NavBar'

export const SeriesLink = () => {
  
    const {data : series, error: errorSeries, isLoading: isLoadingSeries  } = useFetch(getPopularSeries);
    const { data: topSeries, error: errorTopSeries, isLoading: isLoadingTopSeries } = useFetch(getPopularTopSeries);

    return (
    <div>
        <NavBar/>
        <h1 style={{margin:"5px",
                    padding:"5px",
                    color: "white",
                    }}> Series </h1>
        <Title text={CONSTANTS.MOVIES_VIEW.titleSeries2}/>
        <Slider entities={series}/>
        <Title text={CONSTANTS.MOVIES_VIEW.titleSeries1}/>
        <Slider entities={topSeries}/>
        
    </div>
  )
};
