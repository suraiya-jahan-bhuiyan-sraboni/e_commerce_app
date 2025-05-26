import React from 'react';
import HomeSectionHeading from '../HomeSectionHeading';
import CountdownTimer from '../countdownTimer/CountdownTimer'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from '../../ProductCard';
import { Link } from 'react-router';

const FlashSales = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between ">
        <HomeSectionHeading title={"Today’s"} name={"Flash Sales"} />
        <CountdownTimer />
      </div>
      <div className=" py-4">
        <Swiper

          spaceBetween={12}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
          <SwiperSlide> <ProductCard /> </SwiperSlide>
        </Swiper>
      </div>
      <div className='flex items-center justify-center py-6 '>
        <Link to="/allproducts" className="flex justify-center items-center py-4 px-12 text-white bg-red-500 rounded-md">
          View All Products
        </Link></div>
    </div>
  );
};

export default FlashSales;