import { useContext } from "react";
import { AuthContextData } from "../../../auth/AuthContextData";


export const getMovieById = ( id ) => {
     
     const { movies } =useContext(AuthContextData);
    
     return ( movies.find( movie => movie.id ==  id ));

};