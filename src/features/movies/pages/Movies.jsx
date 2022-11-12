import React from 'react'
import { Banner } from '../../../common/componentsBanner/Banner'
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardContainer } from '../../../common/styled-components/CardContainer';
import { useFetch } from '../../../common/hooks/useFetch';
import { getPopularMovies, getPopularTopMovies } from '../services/getPopularMovies';
import { Titulo } from '../../../common/componentsCarrousel/Titulo';

 
export const Movies = () => {
    
    const {data : movies } = useFetch(getPopularMovies);
    const { data: topMovies } = useFetch(getPopularTopMovies);
    
return (
    <>
        <Banner data={movies[18]}/>
        <Titulo name="Peliculas"/>
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
                    movies.map((movie)=> {
                        return (
                            <Swiper>
                            <SwiperSlide>
                                <CardContainer 
                                    key={movie.id}
                                    image={movie.backdrop}>
                                </CardContainer>
                            </SwiperSlide>
                            </Swiper>
                        );
                    })
                } 
                
            </Swiper>
        </div>  
    

        <Titulo name="Top de peliculas"/>
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
                topMovies.map((topMovie)=> {
                    return (
                        <SwiperSlide>
                            <CardContainer
                                key={topMovie.id} 
                                image={topMovie.backdrop}
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

