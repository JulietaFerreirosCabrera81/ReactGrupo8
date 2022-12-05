import { useContext } from "react";
import { AuthContextData } from "../../../auth/AuthContextData";


export const getTopSerieById = ( id ) => {
     
    const { topSeries } =useContext(AuthContextData);
    
    return (topSeries.find( movie => movie.id ==  id ));

};