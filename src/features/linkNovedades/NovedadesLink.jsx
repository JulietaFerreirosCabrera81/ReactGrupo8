import React, { useContext } from 'react';
import { AuthContextData } from '../../auth/AuthContextData';
import { CONSTANTS } from '../../utils/constants';
import { Slider } from '../../common/componentsSlider/Slider';
import { Title } from '../../common/componentsSlider/Title';


export const NovedadesLink = () => {
  
    const { topMovies, isLoadingTopMovies   } = useContext(AuthContextData);
    const { topSeries, isLoadingTopSeries   } = useContext(AuthContextData);

return (
    <div>
        { isLoadingTopMovies || isLoadingTopSeries? (
            <div> Cargando </div>
        ): ( 
        <>
           <h1 style={{
                    margintop:"40%",
                    margin:"5px",
                    padding:"5px",
                    color:"white",
                    }}> Novedades </h1>  
                             
        <Title text={CONSTANTS.MOVIES_VIEW.titleNovedades1}/>
        <Slider entities={topSeries}/>
        <Title text={CONSTANTS.MOVIES_VIEW.titleNovedades2}/>
        <Slider entities={topMovies}/>
        </>
        )}   
    </div>
  )
};

