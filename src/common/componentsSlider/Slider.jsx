import { SwiperSlide, Swiper } from "swiper/react";
import { Card } from './Card';
import { swiperProps } from "./config/props";


export const Slider = ({entities}) => {
    
return (
    <>
        <Swiper {...swiperProps} className="mySwiper">
        {entities.map((entity) => {
            return (
                <SwiperSlide key={entity.id}>
                <Card entity={entity}/> 
                </SwiperSlide>
            );
        })}
        </Swiper> 
    </>    
  );
};

