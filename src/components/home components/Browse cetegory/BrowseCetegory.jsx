import React from 'react'
import HomeSectionHeading from '../HomeSectionHeading';
import CategoryCard from './CategoryCard';
import { SwiperSlide, Swiper} from 'swiper/react';
import "swiper/css";

const BrowseCetegory = () => {
  return (
    <div>
      <HomeSectionHeading title={"Categories"} name={"Browse By Category"} />

      <div className=" py-4">
        <Swiper
          slidesPerView={6}
          spaceBetween={25}
          className="mySwiper"
        >
          <SwiperSlide> <CategoryCard img="src/assets/Category-CellPhone.png" title={"Phones"} /></SwiperSlide>
          <SwiperSlide> <CategoryCard img="src/assets/Category-Computer.png" title={"Computers"} /></SwiperSlide>
          <SwiperSlide> <CategoryCard img="src/assets/Category-SmartWatch.png" title={"SmartWatch"} /></SwiperSlide>
          <SwiperSlide> <CategoryCard img="src/assets/Category-CellPhone.png" title={"Camera"} /></SwiperSlide>
          <SwiperSlide> <CategoryCard img="src/assets/Category-Headphone.png" title={"HeadPhones"} /></SwiperSlide>
          <SwiperSlide> <CategoryCard img="src/assets/Category-Gamepad.png" title={"Gaming"} /></SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
}

export default BrowseCetegory