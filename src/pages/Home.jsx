import HomeSectionHeading from "../components/home components/HomeSectionHeading";
import HeaderSliderComponent from "../components/home components/HeaderSliderComponent";
import { Link } from "react-router";

import Service from "../components/home components/Service";
import Sidebar from "../components/home components/Sidebar";
import NewArrival from "./../components/home components/new arrivals/NewArrival";
import FlashSales from "../components/home components/flash sales/FlashSales";
import BrowseCetegory from "../components/home components/Browse cetegory/BrowseCetegory";
import CategoriesBanner from "../components/home components/category banner/CategoriesBanner";
import BestSellingProducts from "../components/best selling component/BestSellingProducts";
import OurProducts from './../components/home components/our products/OurProducts';

const Home = () => {
  return (
    <div className="w-11/12 mx-auto px-4 ">

      {/* header */}
      <div className="flex">
        <div className=" flex flex-col w-1/4 text-[1.2rem] gap-1 border-r border-gray-200 pt-8 pr-4 ">
          <Sidebar />
        </div>
        <div className="w-3/4 pt-8 pl-8 ">
          <HeaderSliderComponent />
        </div>
      </div>

      {/* flash sales */}
      <div className="py-32 pb-0 ">
        <FlashSales />
      </div>


      {/* categories */}
      <div className="py-32 ">
        <BrowseCetegory />
      </div>


      {/* best selling prodeucts */}
      <div className="pb-32">
        <BestSellingProducts />
      </div>


      {/* banner */}
      <div className="pb-32">
        <CategoriesBanner />
      </div>


      {/* our products */}
      <div className="pb-32">
        <OurProducts />
      </div>

      {/* new arrival */}
      <div>
        <NewArrival />
      </div>
      {/* services */}
      <div>
        <Service />
      </div>

    </div>
  );
};

export default Home;
