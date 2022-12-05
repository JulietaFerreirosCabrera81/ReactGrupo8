import { useContext } from "react";
import { AuthContextData } from "../../../auth/AuthContextData";


export const getId = ( id ) => {
     
     const { movies } =useContext(AuthContextData);
     const { series } =useContext(AuthContextData);
     const { topMovies } =useContext(AuthContextData);
     const { topSeries } =useContext(AuthContextData);
    
    const movie = ( movies.find( movie => movie.id ==  id ));
    const serie = ( series.find( serie => serie.id ==  id ));
    const topMovie = (topMovies.find( topMovie => topMovie.id ==  id ));
    const topSerie = (topSeries.find( topSerie => topSerie ==  id ));

    return movie, serie, topMovie, topSerie 

};