import React from 'react'
import ServiceComponent from './ServiceComponent'

const Service = () => {
  return (
      <div className='w-11/12 mx-auto px-4 flex flex-wrap justify-around items-center my-20'>
          <ServiceComponent
              img={"src/assets/icon-delivery.png"}
              title={"FREE AND FAST DELIVERY"}
              description={"Free delivery for all orders over $140"} />
          <ServiceComponent
              img={"src/assets/Icon-Customer service.png"}
              title={"24/7 CUSTOMER SERVICE"}
              description={"Friendly 24/7 customer support"} />
          <ServiceComponent
              img={"src/assets/shield-tick.png"}
              title={"MONEY BACK GUARANTEE"}
              description={"We reurn money within 30 days"} />
      </div>
  )
}

export default Service