import React from 'react'
import { Link } from 'react-router'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
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
}

export default Navbar