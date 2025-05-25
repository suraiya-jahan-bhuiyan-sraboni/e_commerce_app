import React from 'react'
import ProductCard2 from './../components/ProductCard2';
import HomeSectionHeading from '../components/home components/HomeSectionHeading';
import ProductCard3 from './../components/ProductCard3';


const Favourites = () => {
  return (
      <div className='min-h-screen w-11/12 mx-auto py-10'>
          <div className='flex justify-between items-center '>
              <h1 className='text-xl'>Wishlist (4)</h1>
              <button className="btn btn-outline">Move All To Bag</button>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
              <ProductCard2 />
              <ProductCard2 />
              <ProductCard2 />
              <ProductCard2 />
          </div>
          <div className='flex justify-between items-center mt-10'>
              <HomeSectionHeading title={"Just For You"} name={""} />
              <button className="btn btn-outline px-10 py-5">See All</button>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
              <ProductCard3 />
              <ProductCard3 />
              <ProductCard3 />
              <ProductCard3 />
          </div>
      </div>
  )
}

export default Favourites