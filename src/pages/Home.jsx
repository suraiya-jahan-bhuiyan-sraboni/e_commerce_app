import React from "react";
import HomeSectionHeading from "../components/home components/HomeSectionHeading";
import HeaderSliderComponent from "../components/home components/HeaderSliderComponent";
import { Link } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div className="w-11/12 mx-auto px-4 ">
      {/* header */}
      <div className="flex">
        <div className=" flex flex-col w-1/4 text-xl gap-1 border-r-2 border-gray-200 pt-8 pr-4 ">
          <div className="flex items-center justify-between  ">
            <Link>Woman’s Fashion </Link>
            <MdKeyboardArrowRight />
          </div>
          <div className="flex items-center justify-between ">
            <Link>Men’s Fashion</Link>
            <MdKeyboardArrowRight />
          </div>
          <Link>Electronics</Link>
          <Link>Home & Lifestyle</Link>
          <Link>Medicine</Link>
          <Link>Sports & Outdoor</Link>
          <Link>Baby’s & Toys</Link>
          <Link>Groceries & Pets</Link>
          <Link>Health & Beauty</Link>
        </div>

        <div className="w-3/4 pt-8 pl-8 ">
          <HeaderSliderComponent />
        </div>
      </div>

      {/* flash sales */}
      <div className="py-4">
      <HomeSectionHeading title={"Today’s"} name={"Flash Sales"} />

      </div>
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
