import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { heroSlides } from '../constants/Hero';
const Hero = () => {
  return (
    <div className="relative w-full h-[800px] md:h-[80vh]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        className="h-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default Hero