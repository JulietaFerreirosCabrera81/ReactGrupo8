import React from 'react'
import { getPopularMovies, getPopularTopMovies } from '../../../features/movies/services/getPopularMovies'
import { CONSTANTS } from '../../../utils/constants'
import { Slider } from '../../componentsSlider/Slider'
import { Title } from '../../componentsSlider/Title'
import { useFetch } from '../../hooks/useFetch'
import { NavBar } from '../NavBar'

export const PeliculasLink = () => {
  
    const {data : movies, error: errorMovies, isLoading: isLoadingMovies  } = useFetch(getPopularMovies);
    const { data: topMovies, error: errorTopMovies, isLoading: isLoadingTopMovies } = useFetch(getPopularTopMovies);

    return (
    <div>
        <NavBar/>
        <h1 style={{margin:"5px",
                    padding:"5px",
                    color:"white",
                    }}> Peliculas </h1>
        <Title text={CONSTANTS.MOVIES_VIEW.titlePeliculas1}/>
        <Slider entities={movies}/>
        <Title text={CONSTANTS.MOVIES_VIEW.titlePeliculas2}/>
        <Slider entities={topMovies}/>
       
    </div>
  )
};


