import React from 'react'
import { Banner } from '../../../common/componentsBanner/Banner';
import { Slider } from '../../../common/componentsSlider/Slider';
import { Title } from '../../../common/componentsSlider/Title';
import { useFetch } from '../../../common/hooks/useFetch';
import { CONSTANTS } from '../../../utils/constants';
import { getPopularSeries, getPopularTopSeries } from '../../series/services/getPopularSeries';

 
export const Series = () => {
    
    const {data : series, error: errorSeries, isLoading: isLoadingSeries  } = useFetch(getPopularSeries);
    const { data: topSeries, error: errorTopSeries, isLoading: isLoadingTopSeries } = useFetch(getPopularTopSeries);
     
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

