import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import Navbar from '../LayoutComponents/Navbar'
import Footer from '../LayoutComponents/Footer'
import { Link } from 'react-router'

const _404Error = () => {
  return (
    <>
      <Navbar />
      <div className='w-11/12 mx-auto px-4  '>
        <Breadcrumbs isNotFound />
        <div className='text-center  py-30 flex flex-col gap-4 items-center'>
          <h1 className='text-7xl'>404 Not Found</h1>
          <p className=''>Your visited page not found. You may go home page.</p>
          <Link to="/">
          <button type="button" className=" px-8 py-3 font-semibold rounded-md bg-red-400 dark:text-gray-50">Back to home page</button>
          </Link>
        </div>

      </div>
      <Footer/>
    </>

  )
}

export default _404Error