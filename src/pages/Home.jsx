import React from "react";
import HomeSectionHeading from "../components/home components/HomeSectionHeading";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import HeaderSlider from "../components/home components/HeaderSlider";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto px-4 ">
      {/* header */}
      <div className="flex ">
        <div className="w-1/3">sidebar</div>

        <div className="w-2/3">
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
      </div>
      <HomeSectionHeading title={"Today’s"} name={"Flash Sales"} />
      {/* flash sales */}
      <div></div>
      {/* categories */}
      <div></div>
      {/* best selling prodeucts */}
      <div></div>
      {/* banner */}
      <div></div>
      {/* our products */}
      <div></div>
      {/* new arrival */}
      <div></div>
      {/* services */}
      <div></div>
    </div>
  );
};

export default Home;
