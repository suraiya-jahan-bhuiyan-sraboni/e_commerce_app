import React from "react";
import HomeSectionHeading from "../components/home components/HomeSectionHeading";
import HeaderSliderComponent from "../components/home components/HeaderSliderComponent";
import { Link, NavLink } from "react-router";
import { MdKeyboardArrowRight } from "react-icons/md";
import Service from "../components/home components/Service";
const Home = () => {
  return (
    <div className="w-11/12 mx-auto px-4 ">
      {/* header */}
      <div className="flex">
        <div className=" flex flex-col w-1/4 text-[1.2rem] gap-1 border-r border-gray-200 pt-8 pr-4 ">
          <div className="dropdown dropdown-right ">
            <NavLink className=" flex items-center justify-between ">
              Woman’s Fashion <MdKeyboardArrowRight />
            </NavLink>
            <ul
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link>Jeans</Link>
              </li>
              <li>
                <Link>T-shirt</Link>
              </li>
              <li>
                <Link>Shirt</Link>
              </li>
              <li>
                <Link>Panjabi</Link>
              </li>
              <li>
                <Link>Shoes</Link>
              </li>
            </ul>
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
      <div>
        <Service />
      </div>
    </div>
  );
};

export default Home;
