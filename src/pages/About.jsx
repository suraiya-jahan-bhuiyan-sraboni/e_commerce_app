import React from 'react'

import Service from '../components/home components/Service'
import SalesCustomer from '../components/about component/SalesCustomer'
import Employee from '../components/about component/Employee'
import Breadcrumbs from '../components/Breadcrumbs'

const About = () => {
  return (
    <div className="w-11/12 mx-auto px-4">
      <div className='py-4'>
        <Breadcrumbs />
      </div>
      <div className="flex flex-col-reverse md:flex-row py-15 gap-4">
        <div className="flex flex-col gap-5 md:pr-10 items-start justify-center w-full md:w-1/2 ">
          <h1 className="text-5xl font-semibold">Our Story</h1>
          <p className="md:text-[1.2rem]">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="md:text-[1.2rem]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2">
          <img
            src="src/assets/portrait-two-african-females.png"
            alt="two african girl"
          />
        </div>
      </div>
      <SalesCustomer />
      <Employee />
      <div className="flex justify-center items-center gap-2 ">
        <span className="p-2 rounded-full bg-gray-300"></span>
        <span className="p-2 rounded-full bg-gray-300"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="8" cy="8" r="5" fill="#DB4444" />
          <circle
            opacity="0.3"
            cx="8"
            cy="8"
            r="7"
            stroke="black"
            stroke-width="2"
          />
        </svg>
        <span className="p-2 rounded-full bg-gray-300"></span>
        <span className="p-2 rounded-full bg-gray-300"></span>
      </div>
      <Service></Service>
    </div>
  );
}

export default About