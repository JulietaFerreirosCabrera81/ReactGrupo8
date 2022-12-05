import { useParams } from "react-router-dom";
import { getMovieById } from "../helpers/getMovieById";
import { getSerieById } from "../helpers/getSerieById";
import { getTopMovieById } from "../helpers/getTopMovieById";
import { getTopSerieById } from "../helpers/getTopSerieById";
import styles from './Movie.module.css';
import { MovieContainer } from "./MovieContainer";

export const Movie = () => {
 
    const { id } = useParams();
    
    const movie = getMovieById( id );
    const serie = getSerieById( id );
    const topMovie = getTopMovieById( id );
    const topSerie = getTopSerieById( id );
    
    const getMovie = ()=>{
        if (movie != undefined  ) return movie;
        if (serie != undefined  ) return serie;
        if (topSerie != undefined  ) return topSerie;
        if (topMovie != undefined  ) return topMovie;
    };

    const entity = getMovie();

return (
    <>
        <MovieContainer image= {entity.backdrop}>
                <div className={styles ["containerTexto"]} >
                    <h1>{entity.name}</h1>
                    <p>{entity.description}</p>
                </div> 
        </MovieContainer>
    </>   
    )
};
  

  