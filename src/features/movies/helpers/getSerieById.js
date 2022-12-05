import { useContext } from "react";
import { AuthContextData } from "../../../auth/AuthContextData";


export const getSerieById = ( id ) => {
     
    const { series } =useContext(AuthContextData);
    
    return ( series.find( movie => movie.id ==  id ));

 };



