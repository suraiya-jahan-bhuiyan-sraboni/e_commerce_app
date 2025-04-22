import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex gap-6 text-white bg-black'>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar