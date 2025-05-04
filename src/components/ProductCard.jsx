import React from "react";
import { Link } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import game_player_1 from "../assets/game-player 1.png";

const ProductCard = () => {
  return (
    <div>
      <Link to="/all_products" className=" relative flex flex-col gap-2 ">
        <div className=" flex flex-col absolute right-2 top-2 gap-3">
          <span className="p-2 bg-white rounded-full">
            <FaRegHeart />
          </span>
          <span className=" p-2 bg-white rounded-full">
            <MdOutlineRemoveRedEye />
          </span>
        </div>
        <div className=" bg-gray-100 flex justify-center items-center py-6 ">
          <img className="" src={game_player_1} alt="" />
        </div>
        <div className="p-3">
          <h3>HAVIT HV-G92 Gamepad</h3>
          <span className="flex gap-3">
            <p>$120</p> <del>$160</del>
          </span>
          <div>
            <Rating style={{ maxWidth: 120 }} value={4} readOnly />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
