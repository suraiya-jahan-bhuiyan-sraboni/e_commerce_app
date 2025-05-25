import React from 'react'
import { Link } from "react-router";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { MdDelete, MdOutlineRemoveRedEye } from "react-icons/md";
import game_player_1 from "../assets/shelf.png";

const ProductCard2 = () => {
  return (
      <div className="w-full group relative">
          <Link to="/" className=" relative flex flex-col gap-2 ">
              <div className=" flex flex-col absolute right-2 top-2 gap-3">
                  <span className="p-2 bg-white rounded-full">
                      <MdDelete />
                  </span>
              </div>
              <span className="p-1 bg-red-500 absolute top-2 left-2 text-white font-meduim rounded">- 40%</span>
              <div className=" bg-gray-100 flex justify-center items-center py-6 ">
                  <img className="" src={game_player_1} alt="" />
              </div>
              <div className="p-3">
                  <h3 className='font-semibold'>HAVIT HV-G92 Gamepad</h3>
                  <span className="flex gap-3">
                      <p className="text-red-500">$120</p> <del>$160</del>
                  </span>
                  
              </div>
              <button class="w-full absolute bottom-17 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2">
                  Add to Cart
              </button>
          </Link>
      </div>
  )
}

export default ProductCard2