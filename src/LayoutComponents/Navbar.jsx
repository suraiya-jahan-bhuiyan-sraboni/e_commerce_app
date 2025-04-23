import React from 'react'
import { Link } from 'react-router'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div>
      <div className="flex justify-center  text-white bg-black px-4 py-1">
        <small className="flex-1 text-center">
          Summer sale for All Swim Suits And Free Express Delivery - OFF 50%!
        </small>
        <select className="text-white bg-black " name="translate" id="">
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
        </select>
      </div>
      <div className="flex justify-around">
        <div className='text-2xl font-bold '> Exclusive </div>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
        <div>
          <input
            type="text"
            className="outline-none"
            placeholder="what are you looking for?"
          />
        </div>
      </div>
    </div>
  );
=======
    <>
      <div className='flex justify-around items-center text-center text-white bg-black'>
        <div className='flex gap-6  items-center p-2'>
          <p className='text-sm'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <Link to="/products" className='underline text-sm'>Shop now</Link>
        </div>
        <div>
          <p className='text-sm flex items-center'>English <RiArrowDropDownLine className='text-3xl' /></p>
        </div>
      </div>

      <div className='flex gap-6'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </>

  )
>>>>>>> f3de0b5b45e2d206848e4d0943dc8743e90c9cdf
}

export default Navbar