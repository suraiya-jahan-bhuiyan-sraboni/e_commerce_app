import React from 'react'

const ServiceComponent = ({ img, title, description }) => {
    return (
        <div className='flex flex-col gap-3 items-center justify-center text-center p-4'>
            <div className='w-10 h-10 p-1 bg-black rounded-full flex justify-center items-center border-gray-300 border-5'>
                <img src={img} alt="serviceImage" />
            </div>
            <div>
                <h2 className='text-base font-semibold'>{title}</h2>
                <p className='text-xs'>{description}</p>
            </div>
        </div>
    )
}

export default ServiceComponent