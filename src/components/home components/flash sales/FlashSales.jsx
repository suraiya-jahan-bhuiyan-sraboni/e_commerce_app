import React from 'react';
import HomeSectionHeading from '../HomeSectionHeading';
import CountdownTimer from '../countdownTimer/CountdownTimer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from '../../ProductCard';

const FlashSales = () => {
    return (
      <div>
        <div className="flex justify-between ">
          <HomeSectionHeading title={"Today’s"} name={"Flash Sales"} />
          <CountdownTimer />
        </div>
        <div className=" py-4">
          <Swiper
            slidesPerView={4}
            spaceBetween={12}
            className="mySwiper"
          >
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
            <SwiperSlide> <ProductCard/> </SwiperSlide>
          </Swiper>
        </div>
        <div className='flex items-center justify-center py-6 '> 
          <button className="flex justify-center items-center py-4 px-12 text-white bg-red-500 rounded-md">
            View All Products
          </button></div>
      </div>
    );
};

export default FlashSales;