import HomeSectionHeading from "../components/home components/HomeSectionHeading";
import HeaderSliderComponent from "../components/home components/HeaderSliderComponent";
import { Link } from "react-router";

import Service from "../components/home components/Service";
import Sidebar from "../components/home components/Sidebar";
import NewArrival from "./../components/home components/new arrivals/NewArrival";
import FlashSales from "../components/home components/flash sales/FlashSales";

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
      <div className="py-32 ">
        <FlashSales />
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
