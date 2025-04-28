import React from 'react'
import { MdSend } from "react-icons/md";
import { Link } from 'react-router';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='bg-black text-white  px-4 pb-2' >
      <div className='w-11/12 mx-auto flex justify-between gap-4 py-14'>

        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-xl'>Exclusive</h1>
          <h2 className='font-meduim'>Subscribe</h2>
          <p className='text-xs'>Ge 10% off your first order</p>
          <div className="join ">
            <div>
              <label className="input validator join-item bg-black border-white">
                <input type="email" placeholder="Enter your email" required />
                <MdSend className='text-2xl' />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-xl'>Support</h1>
          <p className='text-sm' >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='text-sm'>exclusive@gmail.com</p>
          <p className='text-sm'>+88015-88888-9999</p>
        </div>

        <div className='flex flex-col gap-2 text-sm'>
          <h1 className="text-xl font-bold">Account</h1>
          <Link to="/myaccount">My Account</Link>
          <Link to="/login">Login/Register</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/whishlist">Whishlist</Link>
          <Link to="/products">Shop</Link>
        </div>
        <div className='flex flex-col gap-2 text-sm'>
          <h1 className="text-xl font-bold">Quick Link</h1>
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/terms">Terms Of Use</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-xl'>Download App</h1>
          <div>
            <p className='text-gray-400 pb-1 text-xs '>Save $3 with App New User Only</p>
            <div className='flex gap-2 items-center'>
              <img src="src/assets/Qrcode 1.png" alt="" />
              <div className='flex flex-col items-center gap-2'>
                <img src="src/assets/google-play-store.png" alt="google play store" />
                <img src="src/assets/download-appstore.png" alt="Apple store" />
              </div>
            </div>
          </div>
          <div className='flex justify-between text-2xl items-center'>
            <FaFacebookF />
            <CiTwitter className='text-4xl'/>
            <FaInstagram />
            <FaLinkedinIn />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer