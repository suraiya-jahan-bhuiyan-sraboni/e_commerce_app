import React from 'react'

import Service from '../components/home components/Service'

const About = () => {
  return (
    <div>
      <div className='flex flex-col-reverse md:flex-row py-15 gap-4'>
        <div className='flex flex-col gap-5 md:pl-15 items-start justify-center w-full md:w-[50%]  '>
          <h1 className='text-5xl font-semibold' >Our Story</h1>
          <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
            presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
            Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p>Exclusive has more than 1 Million products to offer, growing at a very fast.
            Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className='flex items-center justify-center w-full md:w-[50%] '>
          <img src="src/assets/portrait-two-african-females.png" alt="two african girl" />
        </div>

      </div>
      <Service></Service>
    </div>
  )
}

export default About