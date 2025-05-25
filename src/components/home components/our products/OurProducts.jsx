import React from 'react'
import HeaderSliderComponent from '../HeaderSliderComponent'
import HomeSectionHeading from '../HomeSectionHeading'
import ProductCard from '../../ProductCard'

const OurProducts = () => {
  return (
    <div >
          <HomeSectionHeading title={"Our Products"} name={"Explore Our Products"} />
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />  
          </div>
          <div className='mt-15 flex items-center justify-center '>
              <button className="flex justify-center items-center py-4 px-12 text-white bg-red-500 rounded-md">
              View All Products
          </button>
          </div>
          
    </div>
  )
}

export default OurProducts