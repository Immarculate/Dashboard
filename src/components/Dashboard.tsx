import React, { useState } from 'react';
import Stats from './Stats';
import UsersList from './UsersList';
// import { Button } from './button';
// import { Input } from './input';

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);



  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <h1 className='text-[24px] leading-7 mt-16 mx-6 mb-10 text-sky-950'>Users</h1>
      <Stats />

      <div className='my-6 shadow w-[1010px] mx-6'>
{/* 
        <div className='flex bg-white'>
          <div className='flex my-4'>
            <div className='flex items-center ml-6' onClick={toggleNav}>
              <h2 className='text-[12px]'>ORGANIZATION</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </div>
            <div className='flex items-center ml-4'>
              <h2 className='text-[12px]'>USERNAME</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </div>
            <div className='flex items-center mx-5 xs:hidden'>
              <h2 className='text-[12px]'>EMAIL</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </div>
          </div>

          <div className='ml-[6rem] flex'>
            <div className='flex items-center mx-5 xs:hidden'>
              <h2 className='text-[12px] '>PHONE NUMBER</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </div>
            <div className='flex items-center xs:hidden'>
              <h2 className='text-[12px]'>DATE JOINED</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </div>
          </div>

          <div className='ml-[9rem] flex'>
            <div className='flex items-center'>
              <h2 className='text-[12px]'>STATUS</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </div>
          </div>
        </div> */}
        {isNavOpen && (
        <div className='w-[270px] h-[600px] bg-white shadow absolute ml-6'>
          <div className='m-4'>
            <h2>Organization</h2>
            <input className='w-[230px] h-[40px] border-2 rounded'/>
          </div>
          <div className='m-4'>
            <h2>Username</h2>
            <input className='w-[230px] h-[40px] border-2 rounded' />
          </div>
          <div className='m-4'>
            <h2>Email</h2>
            <input className='w-[230px] h-[40px] border-2 rounded' />
          </div>
          <div className='m-4'>
            <h2>Date</h2>
            <input className='w-[230px] h-[40px] border-2 rounded' />
          </div>
          <div className='m-4'>
            <h2>Phone Number</h2>
            <input className='w-[230px] h-[40px] border-2 rounded' type='' />
          </div>
          <div className='m-4'>
            <h2>Status</h2>
            <input className='w-[230px] h-[40px] border-2 rounded' />
          </div>
          <div className='flex m-6'>
            <button className='h-[40px] w-[98px] rounded bg-transparent border text-black'>Reset</button>
            <button className='h-[40px] w-[98px] rounded ml-5 bg-sky-400'>Filter</button>
          </div>
        </div>
      )}
      <UsersList />
     {/* userlist */}

      </div>

      <div className='my-6 shadow w-[1010px] mx-6 h-8'>
        <div className='flex ml-6'>
          <span>Showing</span>
          <button className='h-[30px] w-[80px] bg-slate-400 flex items-center rounded mx-4 justify-center'> 100 <img src='/assets/toggledown.png' className='h-[11.21px] ml-2' alt='' /></button>
          <span>out of 100</span>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
