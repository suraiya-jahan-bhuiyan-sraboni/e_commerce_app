import React, { useState } from 'react'
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import ProductCard from '../components/ProductCard';
import { IoFilter } from "react-icons/io5";

const Allproducts = () => {
  const [isGridView, setIsGridView] = useState(true);
  const categories = ['All', 'Gaming', 'Computers', 'Electronics', 'Furniture', 'Phones'];
  const brands = ['HAVIT', 'AK', 'Samsung', 'Herman Miller', 'Apple'];
  const colors = ['bg-black', 'bg-white', 'bg-red-500', 'bg-purple-500', 'bg-gray-500'];


  return (
    <div className='min-h-screen w-11/12 mx-auto'>

      <div className="flex gap-4 px-4 py-6">
        {/* Sidebar */}
        <aside className="hidden sm:block w-1/5 bg-base-100  rounded-lg space-y-6">
          {/* Categories */}
          <div className='shadow p-4'>
            <h2 className="font-semibold text-lg mb-2">Categories</h2>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <button className="btn btn-ghost btn-sm justify-start w-full">{category}</button>
                </li>
              ))}
              <li><button className="btn btn-ghost btn-md font-bold justify-start w-full">see more</button></li>
            </ul>
          </div>

          {/* Brands */}
          <div className='shadow p-4'>
            <h2 className="font-semibold text-lg mb-2">Brands</h2>
            <div className="form-control space-y-1 flex flex-col text-xs">
              {brands.map((brand) => (
                <label className="label cursor-pointer" key={brand}>
                  <input type="checkbox" className="checkbox checkbox-sm mr-2" />
                  <span className="label-text overflow-x-auto scrollbar-none ">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div  className='shadow p-4'>
            <h2 className="font-semibold text-lg mb-2">Colors</h2>
            <div className="flex flex-wrap gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`btn btn-sm rounded-full border-2 cursor-pointer ${color}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className='shadow p-4'>
            <h2 className="font-semibold text-lg mb-2">Price Range</h2>
            <input type="number" placeholder="Min Price" className="input input-bordered input-sm mb-2 w-full" />
            <input type="number" placeholder="Max Price" className="input input-bordered input-sm w-full" />
          </div>

          {/* Clear Filters */}
          <button className="btn btn-error btn-sm w-full mt-2">Clear Filters</button>
        </aside>

        {/* Main Content */}
        <main className="sm:w-4/5 w-11/12  mx-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">

              <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn flex btn-square btn-sm text-2xl sm:hidden"><IoFilter /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  {/* dropdown filter */}
                  <div className="bg-base-100  rounded-lg space-y-6">
                    {/* Categories */}
                    <div className='shadow p-4'>
                      <h2 className="font-semibold text-lg mb-2">Categories</h2>
                      <ul className="space-y-1">
                        {categories.map((category) => (
                          <li key={category}>
                            <button className="btn btn-ghost btn-sm justify-start w-full">{category}</button>
                          </li>
                        ))}
                        <li><button className="btn btn-ghost btn-md font-bold justify-start w-full">see more</button></li>
                      </ul>
                    </div>

                    {/* Brands */}
                    <div className='shadow p-4'>
                      <h2 className="font-semibold text-lg mb-2">Brands</h2>
                      <div className="form-control space-y-1 flex flex-col text-xs">
                        {brands.map((brand) => (
                          <label className="label cursor-pointer" key={brand}>
                            <input type="checkbox" className="checkbox checkbox-sm mr-2" />
                            <span className="label-text overflow-x-auto scrollbar-none ">{brand}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Colors */}
                    <div className='shadow p-4'>
                      <h2 className="font-semibold text-lg mb-2">Colors</h2>
                      <div className="flex flex-wrap gap-2">
                        {colors.map((color, index) => (
                          <button
                            key={index}
                            className={`btn btn-sm rounded-full border-2 cursor-pointer ${color}`}
                          ></button>
                        ))}
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className='shadow p-4'>
                      <h2 className="font-semibold text-lg mb-2">Price Range</h2>
                      <input type="number" placeholder="Min Price" className="input input-bordered input-sm mb-2 w-full" />
                      <input type="number" placeholder="Max Price" className="input input-bordered input-sm w-full" />
                    </div>

                    {/* Clear Filters */}
                    <button className="btn btn-error btn-sm w-full mt-2">Clear Filters</button>
                  </div>
                </ul>
              </div>

              <select className="select select-bordered select-sm">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>

              <button className={`hidden sm:flex btn btn-square btn-sm text-2xl ${isGridView ? 'btn-active' : ''}`}
                onClick={() => setIsGridView(true)}
                aria-label="Grid View">
                <LuLayoutGrid />
              </button>
              <button className={`hidden sm:flex btn btn-square btn-sm text-2xl ${!isGridView ? 'btn-active' : ''}`}
                onClick={() => setIsGridView(false)}
                aria-label="List View">
                <LuLayoutList />
              </button>
            </div>
            <span className="text-sm">Showing 6 results</span>
          </div>

          {/* Product Grid */}
          <div className={
            isGridView
              ? "grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4"
              : "flex flex-col gap-4"
          }>
            {/* Card placeholder */}
            <ProductCard/>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>
        </main>
      </div>

    </div>
  )
}

export default Allproducts