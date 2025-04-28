import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import HeaderSlider from "./HeaderSlider";
const HeaderSliderComponent = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper  "
        style={{
          "--swiper-pagination-color": "red",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": ".8",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        <SwiperSlide>
          <HeaderSlider
            title={"iphone 14 series"}
            desc={"Up to 10%  off Voucher"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider
            title={"iphone 14 series"}
            desc={"Up to 10%  off Voucher"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider
            title={"iphone 14 series"}
            desc={"Up to 10%  off Voucher"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeaderSlider
            title={"iphone 14 series"}
            desc={"Up to 10%  off Voucher"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSliderComponent;
