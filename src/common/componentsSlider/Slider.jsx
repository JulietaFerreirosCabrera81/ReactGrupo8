import React from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import { swiperProps } from "./config/props";
import { CardContainer } from './styles/CardContainer';


export const Slider = ({ entities }) => {
  return (
    <Swiper {...swiperProps} className="mySwiper">
       {entities.map((entity) => {
        return (
          <SwiperSlide key={entity.id}>
            {/* <Card entity={ entity }/>  */}
             <CardContainer image={entity.backdrop}></CardContainer> 
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

