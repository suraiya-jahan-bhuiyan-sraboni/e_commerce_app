import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs'

const MyAccount = () => {
  return (
      <div className='min-h-screen w-11/12 mx-auto'>
          <div className='flex justify-between items-center py-4'>
              <Breadcrumbs />
              <h1>Welcome! <span className='text-red-400'>username</span></h1>
          </div>
          
          
      </div>
  )
}

export default MyAccount