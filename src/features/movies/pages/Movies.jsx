import { Title } from '../../../common/componentsSlider/Title';
import { CONSTANTS } from '../../../utils/constants';
import { Slider } from '../../../common/componentsSlider/Slider';
import { useContext } from 'react';
import { AuthContextData } from '../../../auth/AuthContextData';


export const Movies = () => {
    
    const { movies, isLoadingMovies   } = useContext(AuthContextData);
    const { topMovies, isLoadingTopMovies   } = useContext(AuthContextData);
  
return(
    <>   
        { isLoadingMovies || isLoadingTopMovies? (
            <div> Cargando </div>
        ): ( 
        <>
            <Title text={CONSTANTS.MOVIES_VIEW.titleMovies}/>
            <Slider entities={ movies }/>
            <Title text={CONSTANTS.MOVIES_VIEW.titleTopMovies}/>
            <Slider entities={ topMovies }/> 
               
        </>
        )}
    </>
   );
 };

