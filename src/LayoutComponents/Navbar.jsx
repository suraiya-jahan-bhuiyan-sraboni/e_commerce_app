import React from 'react'
import { Link, NavLink } from 'react-router'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
      <div className=" bg-black">
        <div className="flex justify-center  text-white w-11/12 mx-auto bg-black px-4 py-1 ">
          <small className="flex-1 text-center">
            Summer sale for All Swim Suits And Free Express Delivery - OFF 50%!
            <NavLink to="/products" className="text-red-500 font-bold ml-1">
              Shop Now
            </NavLink>
          </small>
          <select className="text-white bg-black hidden sm:block " name="translate" id="">
            <option value="English">English</option>
            <option value="Bangla">Bangla</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between p-4  items-center w-11/12 mx-auto  ">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn m-1"><GiHamburgerMenu /></div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100  z-1 w-52 p-2 shadow-sm">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
          </ul>
        </div>
        <Link to="/" className="text-2xl font-bold "> Exclusive </Link>
        <div className="hidden lg:flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
        <div className="flex items-center justify-around gap-3">
          <label className="input hidden sm:flex">
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
          <Link to="/favourites" className="">
            <FaRegHeart className="text-xl" />
          </Link>
          <Link to="/cart" className="">
            <IoCartOutline className="text-2xl" />
          </Link>
          
          <div className="dropdown dropdown-end hidden">
            <div tabIndex={0} role="button" className=" m-1"><LuUser className='text-2xl hover:text-orange-400  rounded-full'/></div>
            <ul tabIndex={0} className=" text-white font-semibold dropdown-content menu bg-[#0000000A] backdrop-blur-2xl opacity-[30%] 
              rounded-box z-10 w-56   p-2 shadow-sm  ">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar