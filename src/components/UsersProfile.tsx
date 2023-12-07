import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usersDatabase } from '../../database.json';
import { UserModel } from '../types';


const UsersProfile = () => {
  const [user, setUser] = useState<UserModel | null>(null); // Initialize with null
  const { id } = useParams<{ id: string }>(); // Replace with the actual user id

  const fetchUser = async () => {
    const usersData = usersDatabase;

    const selectedUser = usersData.find((user: any) => user.id === id);

    if (selectedUser) {
      const mappedUser: UserModel = {
        id: selectedUser.id,
        organization: selectedUser.profile.organization,
        name: selectedUser.profile.name,
        email: selectedUser.email,
        statusCode: selectedUser.statusCode,
        phone: selectedUser.profile.phone,
        dateJoined: selectedUser.profile.dateJoined,
        facebook: selectedUser.facebook,
        twitter: selectedUser.twitter,
        instagram: selectedUser.instagram,
        userCode: selectedUser.userCode,
        company: selectedUser.profile.company,
        gender: selectedUser.profile.gender,
        levelOfEducation: selectedUser.profile.levelOfEducation,
        employmentStatus: selectedUser.profile.employmentStatus,
        marritalStatus: selectedUser.profile.marritalStatus,
        bvn: selectedUser.profile.bvn,
        children: selectedUser.profile.children,
        officeMail: selectedUser.profile.officeMail,
        sectorOfEmployment: selectedUser.profile.sectorOfEmployment,
        monthlyIncome: selectedUser.profile.monthlyIncome,
        loanRepayment: selectedUser.profile.loanRepayment,
        // typeOfResidence: selectedUser.profile.typeOfResidence,
      };

      setUser(mappedUser);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]); // Include id in the dependency array

  return (
    <div className='background w-full overflow-hidden'>
      {user ? (
        <div>
          <Link to='/'>
            <div className='flex ml-4 mt-6 items-center'>
              <img src='/assets/backArrow.png' alt='back' />
              <p className='text-[16px] ml-1'>Back to Users</p>
            </div>
          </Link>
          <div className='flex w-full ml-4 my-8'>
            <p className='text-[24px] ml-4'>User Details</p>
            <button className='h-10 w-[10.7rem] flex items-center bg-red-100 text-red-700 hover:bg-red-200 border justify-center rounded ml-[30.3rem]'>Blacklist User</button>
            <button className='h-10 w-[10.7rem] flex items-center bg-green-100 text-green-500 hover:bg-green-200 border justify-center rounded mx-8'>Activate User</button>
          </div>

          <div className='w-[64.8125rem] h-[210px] bg-white ml-4 rounded shadow'>
            <div className='flex'>
              <div className='rounded-full Bgc w-[100px] h-[100px] my-8 mx-8 flex items-center justify-center'><img src='/assets/h-user.png' alt='image' /></div>
              <div className='mt-14 mr-4'>
                <p className='text-[22PX] font-bold'>{user.name}</p>
                <p>{user.userCode}</p>
              </div>
              <div className='mt-14 mx-4'>
                <p>User's Tier</p>
              </div>
              <div className='mt-14 mx-4'>
                <p className='text-[22PX] font-bold'>₦{user.loanRepayment}</p>
                <p></p>
              </div>
            </div>

            <div className='flex'>
              <p className='text-[16px] mx-8 cursor-pointer hover:text-sky-400'>General Details</p>
              <p className='text-[16px] mx-8 cursor-pointer hover:text-sky-400'>Documents</p>
              <p className='text-[16px] mx-8 cursor-pointer hover:text-sky-400'>Bank Details</p>
              <p className='text-[16px] mx-8 cursor-pointer hover:text-sky-400'>Loans</p>
              <p className='text-[16px] mx-8 cursor-pointer hover:text-sky-400'>Savings</p>
              <p className='text-[16px] mx-8 cursor-pointer hover:text-sky-400'>App and System</p>
            </div>
          </div>

          <div className='w-[64.8125rem] rounded bg-white ml-4 my-8 shadow'>
            <p className='my-4 mt-6 mx-8 text-[16px] font-bold '>Persoanl Information</p>
            <div className='flex flex-wrap'>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>FULL NAME</p>
                <p className='leading-[18.77px] text-[16px]'>{user.name}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>PHONE NUMBER</p>
                {/* <p>{user.phone}</p> */}
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>EMAIL ADDRESS</p>
                <p className='leading-[18.77px] text-[16px]'>{user.email}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>BVN</p>
                {/* <p>{user.bvn}</p> */}
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>GENDER</p>
                <p className='leading-[18.77px] text-[16px]'>{user.gender}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>MARITAL STATUS</p>
                <p className='leading-[18.77px] text-[16px]'>{user.marritalStatus}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>CHILDREN</p>
                {/* <p>{user.children}</p> */}
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>TYPE OF RESIDENCE</p>
                <p className='leading-[18.77px] text-[16px]'>{user.typeOfResidence}</p>
              </div>

            </div>
            <hr />
            <p className='text-[16px] my-6 mx-8 font-bold'>Education and Employment</p>
            <div className='flex flex-wrap'>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>LEVEL OF EDUCATION</p>
                <p className='leading-[18.77px] text-[16px]'>{user.levelOfEducation}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>EMPLOYMENT STATUS</p>
                <p className='leading-[18.77px] text-[16px]'>{user.employmentStatus}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>SECTOR OF EMPLOYMENT</p>
                <p className='leading-[18.77px] text-[16px]'>{user.sectorOfEmployment}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>DURATION OF EMPLOYMENT</p>
                <p className='leading-[18.77px] text-[16px]'>{user.gender}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>OFFICE EMAIL</p>
                <p className='leading-[18.77px] text-[16px]'>{user.officeMail}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>MONTHLY INCOME</p>
                <p className='leading-[18.77px] text-[16px]'>{user.gender}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>LOAN REPAYMENT</p>
                <p className='leading-[18.77px] text-[16px]'>{user.loanRepayment}</p>
              </div>
            </div>
            <hr className='mt-2' />

            <p className='text-[16px] my-6 mx-8 font-bold'>Socials</p>
            <div className='flex flex-wrap'>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>FACEBOOK</p>
                <p className='leading-[18.77px] text-[16px]'>{user.facebook}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>TWITTER</p>
                <p className='leading-[18.77px] text-[16px]'>{user.twitter}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>INSTAGRAM</p>
                <p className='leading-[18.77px] text-[16px]'>{user.instagram}</p>
              </div>
            </div>

            <hr />
            <p className='text-[16px] my-6 mx-8 font-bold'>Guarantor</p>
            <div className='flex flex-wrap'>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>LOAN REPAYMENT</p>
                <p className='leading-[18.77px] text-[16px]'>{user.loanRepayment}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>LOAN REPAYMENT</p>
                <p className='leading-[18.77px] text-[16px]'>{user.loanRepayment}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>LOAN REPAYMENT</p>
                <p className='leading-[18.77px] text-[16px]'>{user.loanRepayment}</p>
              </div>
            </div>

            <hr />

            <div>
              <div className='flex flex-wrap'>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>FULL NAME</p>
                <p className='leading-[18.77px] text-[16px]'>{user.name}</p>
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>PHONE NUMBER</p>
                {/* <p>{user.phone}</p> */}
              </div>
              <div className='mx-10 my-4'>
                <p className='text-[12px] opacity-50'>EMAIL ADDRESS</p>
                <p className='leading-[18.77px] text-[16px]'>{user.email}</p>
              </div>
                <div className='mx-10 my-4'>
                  <p className='text-[12px] opacity-50'>REALATIONSHIP</p>
                  <p className='leading-[18.77px] text-[16px]'>{user.loanRepayment}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UsersProfile;
