import { useContext } from 'react';
import { AuthContextData } from '../../../auth/AuthContextData';
import { Slider } from '../../../common/componentsSlider/Slider';
import { Title } from '../../../common/componentsSlider/Title';
import { CONSTANTS } from '../../../utils/constants';

export const Series = () => {
    
    const { series, isLoadingSeries   } = useContext(AuthContextData);
    const { topSeries, isLoadingTopSeries   } = useContext(AuthContextData);
     
return (
    <>
        { isLoadingSeries || isLoadingTopSeries? (
            <div> Cargando </div>
        ): (
        <>
            <Title text={CONSTANTS.MOVIES_VIEW.titleSeries}/>
            <Slider entities={series}/>
            <Title text={CONSTANTS.MOVIES_VIEW.titleTopSeries}/>
            <Slider entities={topSeries}/>
        </>
        )}
    </>
   );
 };

