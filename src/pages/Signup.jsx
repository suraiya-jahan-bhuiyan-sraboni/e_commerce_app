import React from 'react'
import { Link } from 'react-router'

const Signup = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full gap-10 items-center md:my-10 '>
      <div className='w-full lg:w-[60%]'>
        <img className='w-full' src="src/assets/dl.beatsnoop 1.png" alt="" />
      </div>
      <div className="w-full max-w-md p-4 rounded-md sm:p-8 dark:text-gray-800 xl:w-11/12 mx-auto">
        <h2 className="mb-3 text-3xl font-semibold text-center">Create your account</h2>
        <p className="text-sm text-center dark:text-gray-600">Already have account?
          <Link to={"/login"} className="focus:underline hover:underline"> Login here</Link>
        </p>
        <div className="my-6 space-y-4">
          <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Sign Up with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form noValidate="" action="" className="space-y-8">
          <div className="space-y-4">
            {/* name */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm">Name</label>
              <input type="username" name="username" id="username" placeholder="Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
            {/* email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="Email or Phone Number" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
            {/* password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            </div>
          </div>
          <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-red-400 dark:text-gray-50">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup