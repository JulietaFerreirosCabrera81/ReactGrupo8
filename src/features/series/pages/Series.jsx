import React from 'react'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardContainer } from '../../../common/styled-components/CardContainer';
import { useFetch } from '../../../common/hooks/useFetch';
import { getPopularSeries, getPopularTopSeries } from '../../series/services/getPopularSeries';
import { Titulo } from '../../../common/componentsCarrousel/Titulo';
 
export const Series = () => {
    
    const { data: series } = useFetch(getPopularSeries);
    const { data: topSeries } = useFetch(getPopularTopSeries);
   
return (
    <>
    <Titulo name="Series"/>
    <div>
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
           
              {
                series.map((serie)=> {
                    return (
                        <SwiperSlide>
                            <CardContainer 
                                key={serie.id}
                                image={serie.backdrop}
                               >
                            </CardContainer>
                        </SwiperSlide>
                    );
                })
              };
            
        </Swiper>
    </div>

    <Titulo name="Top de Series"/>
    <div>
        <Swiper
            slidesPerView={5}
            spaceBetween={30}
            slidesPerGroup={5}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
           
              {
                topSeries.map((topSerie)=> {
                    return (
                        <SwiperSlide>
                            <CardContainer 
                                key={topSerie.id}
                                image={topSerie.backdrop}
                                >
                            </CardContainer>
                        </SwiperSlide>
                    );
                })
              };
            
        </Swiper>
    </div>

    </>
  )
};

