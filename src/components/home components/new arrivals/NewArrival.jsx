import React from 'react'
import HomeSectionHeading from './../HomeSectionHeading';
import NewArrivalProductCard from './NewArrivalProductCard';
import plays from '../../../assets/playstation_large.png'



const NewArrival = () => {
  return (
      <div>
      <HomeSectionHeading title={"Featured"} name={"New Arrival"} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 mt-10 mb-20'>
        <div className="md:col-span-2 md:row-span-2 bg-red-400">
          <NewArrivalProductCard img={plays} title={"PlayStation 5"}
          des={"Black and White version of the PS5 coming out on sale."}  />
        </div>
        <div className="md:row-span-1 md:col-span-2 ">
          <NewArrivalProductCard img={"src/assets/women-hat.png"} title={"Women’s Collections"}
            des={"Featured woman collections that give you another vibe."} />
        </div>
        <div className="">
          <NewArrivalProductCard img={"src/assets/speaker.png"} title={"Speakers"}
            des={"Amazon wireless speakers"} />
        </div>
        <div className="">
          <NewArrivalProductCard img={"src/assets/gucci.png"} title={"Perfume"}
            des={"GUCCI INTENSE OUD EDP"} />
        </div>

   
      </div>
    </div>
  )
}

export default NewArrival