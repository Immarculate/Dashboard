// import React from 'react'
import { businesses, customers, settings } from '../constants'

const Sidebar = () => {
  return (
    <div className='w-[17.7rem] h-[1574px] xs:hidden'>
      <div className='flex justify-center items-center mt-8'>
        <img src='/assets/briefcase.png' className='w-4 h-4' alt='briefcase'/>
        <p className='text-[16px] mx-2 leading-4 cursor-pointer'>Switch Organization</p>
        <img src='/assets/toggledown.png' className='h-[11.21px] mt-1' alt='toggle' />
      </div>

      <div className='flex ml-[3.1rem] mt-16 items-center'>
        <img src='/assets/home.png' className='w-4 h-4' alt='logo'/>
        <span className='text-[16px] cursor-pointer mx-2'>Dashboard</span>
      </div>

      <div className='mt-8 mb-6'>
        <h1 className='ml-[3.1rem] text-[12px] leading-[14.08px] mb-4 cursor-pointer'>CUSTOMERS</h1>
        <div>
          {customers.map((customer) => (
            <div className='flex items-center cursor-pointer h-10 hover:bg-slate-200'>
              <img src={customer.image} alt={customer.alt} className='ml-[3.1rem] mr-2' />
              <span className='text-[12px]'>{customer.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='my-8'>
        <h1 className='ml-[3.1rem] text-[12px] leading-[14.08px] mb-4 cursor-pointer'>BUSINESSES</h1>
        <div>
          {businesses.map((business) => (
            <div className='flex items-center cursor-pointer h-10 hover:bg-slate-200'>
              <img src={business.image} alt='icon' className='ml-[3.1rem] mr-2'/>
              <span className='text-[12px]'>{business.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className='my-8'>
        <h1 className='ml-[3.1rem] text-[12px] leading-[14.08px] mb-4 cursor-pointer'>SETTINGS</h1>
        <div>
          {settings.map((setting) => (
            <div className='flex items-center cursor-pointer h-10 hover:bg-slate-200'>
              <img src={setting.image} alt='' className='ml-[3.1rem] mr-2'/>
              <span className='text-[12px]'>{setting.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar