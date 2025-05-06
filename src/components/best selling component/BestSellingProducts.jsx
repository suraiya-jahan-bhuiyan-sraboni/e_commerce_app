import React from 'react'
import HomeSectionHeading from './../home components/HomeSectionHeading';
import ProductCard from '../ProductCard';

const BestSellingProducts = () => {
    return (
        <div>
            <div className='flex items-end justify-between'>
                <HomeSectionHeading title={"This Month"} name={"Best Selling Products"} />
                <button className="flex justify-center items-center py-5 px-10 text-white bg-red-500 rounded-md">
                    View All
                </button>

            </div>
            <div className='flex items-center justify-around gap-4 pt-20'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}

export default BestSellingProducts