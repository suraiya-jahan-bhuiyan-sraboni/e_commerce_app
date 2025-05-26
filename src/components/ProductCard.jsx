import React from "react";
import { Link } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import game_player_1 from "../assets/game-player 1.png";

const ProductCard = () => {
  return (
    <div className="w-full group relative">
      <Link to="/product-details/product" className=" relative flex flex-col gap-2 ">
        <div className=" flex flex-col absolute right-2 top-2 gap-3">
          <span className="p-2 bg-white rounded-full">
            <FaRegHeart />
          </span>
          <span className=" p-2 bg-white rounded-full">
            <MdOutlineRemoveRedEye />
          </span>
          
        </div>
        <span className="p-1 bg-red-500 absolute top-2 left-2 text-white font-meduim rounded">- 40%</span>
        <div className=" bg-gray-100 flex justify-center items-center py-6 ">
          <img className="" src={game_player_1} alt="" />
        </div>
        <div className="p-3">
          <h3>HAVIT HV-G92 Gamepad</h3>
          <span className="flex gap-3">
            <p className="text-red-500">$120</p> <del>$160</del>
          </span>
          <div className="flex items-center gap-3">
            <Rating style={{ maxWidth: 120 }} value={4} readOnly /> <span className="text-gray-500">(12)</span>
          </div>
        </div>
        <button class="w-full absolute bottom-22 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2  opacity-0 group-hover:opacity-100 transition duration-300">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
