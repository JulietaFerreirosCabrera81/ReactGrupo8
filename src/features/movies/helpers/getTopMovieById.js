import { useContext } from "react";
import { AuthContextData } from "../../../auth/AuthContextData";


export const getTopMovieById = ( id ) => {
     
    const { topMovies } =useContext(AuthContextData);
    
    return (topMovies.find( movie => movie.id ==  id ));

};