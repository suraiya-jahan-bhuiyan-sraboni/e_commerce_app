import React from 'react'

const CategoryCard = ({img,title}) => {
  return (
      <div className=' m-2 hover:bg-[#DB4444] hover:text-white border border-gray-400 px-5 py-10 flex flex-col items-center justify-center gap-4 '>
          <img src={img} alt="" />
          <p>{ title} </p>
    </div>
  )
}

export default CategoryCard