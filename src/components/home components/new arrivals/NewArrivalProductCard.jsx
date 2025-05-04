import React from 'react'
import { Link } from 'react-router'


const NewArrivalProductCard = ({ img, title, des }) => {
    return (
        <div className='relative bg-black text-white h-full px-4 flex items-center justify-center rounded'>
            <img className=' object-cotain' src={img} alt="" />
            <div className='absolute bottom-10 left-5 flex flex-col gap-3'>
                <h2 className='font-bold text-2xl'>{title}</h2>
                <p className='text-xs'>{des}</p>
                <Link to={"/products"}><span className='border-b-2 pb-1 font-medium'>Shop Now</span></Link>
            </div>

        </div>
    )
}

export default NewArrivalProductCard