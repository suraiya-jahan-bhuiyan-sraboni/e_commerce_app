import React from 'react'
import { Link } from 'react-router'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
      <div className=" bg-black">
        <div className="flex justify-center  text-white w-11/12 mx-auto bg-black px-4 py-1 ">
          <small className="flex-1 text-center">
            Summer sale for All Swim Suits And Free Express Delivery - OFF 50%!
            <Link to="/products" className="text-red-500 font-bold ml-1">
              Shop Now
            </Link>
          </small>
          <select className="text-white bg-black " name="translate" id="">
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between p-4  items-center w-11/12 mx-auto  ">
        <div className="text-2xl font-bold "> Exclusive </div>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="flex items-center justify-around gap-3">
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
          <FaRegHeart className="text-3xl" />
          <IoCartOutline className="text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Navbar