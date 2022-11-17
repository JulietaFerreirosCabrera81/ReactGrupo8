import React from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import { CardContainer } from "../styled-components/CardContainer";
import { swiperProps } from "./config/props";



export const Slider = ({ entities }) => {
  return (
    <Swiper {...swiperProps} className="mySwiper">
      {entities.map((entity) => {
        return (
          <SwiperSlide key={entity.id}>
            <CardContainer image={entity.backdrop}></CardContainer>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

