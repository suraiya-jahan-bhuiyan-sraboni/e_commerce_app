import React from 'react'

const CategoriesBanner = () => {
    return (
      
      <div className='flex px-15 py-20 justify-between items-center bg-black text-white'>
          <div className='flex flex-col gap-5 items-start'>
              <p className='text-green-400 font-semibold'>Categories</p>
              <h1 className='text-5xl font-semibold pb-3'>Enhance Your Music Experience</h1>
              <div className='flex justify-start items-center gap-4'>
                  <div className='bg-white w-18 h-18 rounded-full text-black flex flex-col justify-center items-center' >
                      <span className='font-bold'>23</span>
                      <span className=''>hours</span>
                  </div>
                  <div className='bg-white w-18 h-18 rounded-full text-black flex flex-col justify-center items-center' >
                      <span className='font-bold'>23</span>
                      <span className=''>hours</span>
                  </div>
                  <div className='bg-white w-18 h-18 rounded-full text-black flex flex-col justify-center items-center' >
                      <span className='font-bold'>23</span>
                      <span className=''>hours</span>
                  </div>
                  <div className='bg-white w-18 h-18 rounded-full text-black flex flex-col justify-center items-center' >
                      <span className='font-bold'>23</span>
                      <span className=''>hours</span>
                  </div>
              </div>
              <button className='mt-5 text-white bg-green-400 px-8 py-4 font-bold rounded'>Buy Now!</button>
          </div>
          <div className="relative w-fit h-fit ">
              <div className="absolute inset-0 rounded-full opacity-30 bg-[#D9D9D9] blur-[100px] z-0"></div>
              <img className="relative z-10" src="src/assets/speaker1.png" alt="Speaker" />
          </div>

    </div>
  )
}

export default CategoriesBanner