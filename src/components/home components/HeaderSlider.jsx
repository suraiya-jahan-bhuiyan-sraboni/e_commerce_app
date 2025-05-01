import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import iphone from "../../assets/apple_logo.png";
import banner from "../../assets/banner.png";
const HeaderSlider = ({title,desc}) => {
  return (
    <div className="flex bg-black text-white items-center">
      <div className=" flex flex-col gap-3 w-1/2 p-8 justify-center ">
        <div className="flex items-center  gap-2">
          <img src={iphone} alt="img" />
          <p>{title}</p>
        </div>
        <h1 className="text-6xl font-bold   ">{desc}</h1>
        <Link className="flex items-center gap-3 underline">
          Shop Now <FaArrowRight />
        </Link>
      </div>
      <div className="w-1/2">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default HeaderSlider;
