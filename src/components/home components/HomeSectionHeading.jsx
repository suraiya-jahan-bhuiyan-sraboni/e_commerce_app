import React from 'react'

const HomeSectionHeading = ({title, name}) => {
  console.log(title, name)
  return (
    <div>
      <p className='text-red-600 font-semibold '><span className='border-10 rounded-lg mr-4'></span>{title}</p>
      <h1 className='text-3xl font-bold py-3'>{ name}</h1>
    </div>
  )
}
                  
export default HomeSectionHeading