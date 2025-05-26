import React from 'react'
import HomeSectionHeading from './../home components/HomeSectionHeading';
import ProductCard from '../ProductCard';
import { Link } from 'react-router';

const BestSellingProducts = () => {
    return (
        <div>

            <div className='flex items-end justify-between'>
                <HomeSectionHeading title={"This Month"} name={"Best Selling Products"} />
                <Link to="/allproducts" className="flex justify-center items-center py-5 px-10 text-white bg-red-500 rounded-md">
                    View All
                </Link>

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 items-center justify-around gap-4 pt-20'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}

export default BestSellingProducts