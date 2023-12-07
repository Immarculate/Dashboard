import React, { useEffect, useState } from 'react';
import { usersDatabase } from '../../database.json';
import { Link } from 'react-router-dom';

type UserModel = {
  id: string;
  organization: string;
  name: string;
  email: string;
  statusCode: string;
  phone: string;
  dateJoined: string;
};


const UsersList = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [clicked, setClicked] = useState<UserModel['id'] | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);



  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const statusColorMap = {
    Active: 'sky',
    Inactive: 'teal',
    pending: 'pink',
    Blacklisted: 'red'
  }

  const toggleDot = (id: string) => {
    if (!clicked) {
      setClicked(id);
    } else {
      setClicked(null);
    }
  };

  const fetchList = async () => {
    const usersData = usersDatabase;


    const mappedUsers: UserModel[] = usersData.slice(0, 20).map((user: any) => ({
      id: user.id,
      organization: user.profile.organization,
      name: user.profile.name,
      email: user.email,
      statusCode: user.statusCode,
      phone: user.profile.phone,
      dateJoined: user.profile.dateJoined
    }));

    setUsers(mappedUsers);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <div className='bg-white'>
        <table className='w-[61.1rem] border-b h-12 items-center mx-6 '>
          <tr className='mt-'>
            <th className='flex ' onClick={toggleNav}>
              <h2 className='text-[12px]'>ORGANIZATION</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </th>
            <th className='flex'>
              <h2 className='text-[12px]'>USERNAME</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </th>
            <th className='xs:hidden flex'>
              <h2 className='text-[12px]'>EMAIL</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </th>
            <th className='xs:hidden flex'>
              <h2 className='text-[12px] '>PHONE NUMBER</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </th>
            <th className='xs:hidden flex'>
              <h2 className='text-[12px]'>DATE JOINED</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </th>
            <th >
              <h2 className='text-[12px]'>STATUS</h2>
              <img src='/assets/filter.svg' alt='filter' />
            </th>
          </tr>
          {users.map((user) => (
            <tr key={user.id} className='ml-6 h-16'>
              <td className='ml-4'>{user.organization}</td>
              <td>{user.name}</td>
              <td className="xs:hidden">{user.email}</td>
              <td className="xs:hidden">{user.phone}</td>
              <td className="xs:hidden">{user.dateJoined}</td>
              <td>{user.statusCode}</td>
              <img src='/assets/3dot.png' alt='toggle' className='mr-3' onClick={() => toggleDot(user.id)} />

              {clicked === user.id && (
              <div className='w-[11.4rem] h-[8.1rem] rounded bg-white shadow absolute flex-col justify-right ml-[-10rem] mt-[0.4rem]'>
                <Link to={`/user-profile/${user.id}`}>

                  <div className='flex items-center mx-6 my-3'>
                    <img src='/assets/eye.png' alt='' />
                    <p className='ml-3'>View Details</p>
                  </div>
                </Link>
                <div className='flex items-center mx-6 my-3'>
                  <img src='/assets/delete-user.png' alt='' />
                  <p className='ml-3'>BlackList User</p>
                </div>
                <div className='flex items-center mx-6'>
                  <img src='/assets/activate-user.png' alt='' />
                  <p className='ml-3'>Activate User</p>
                </div>
              </div>
            )}
            </tr>
            
            
          ))}

          {isNavOpen && (
            <div className='w-[270px] h-[600px] bg-white shadow absolute  mt-[-33rem]'>
              <div className='m-4'>
                <h2>Organization</h2>
                <input className='w-[230px] h-[40px] border-2 rounded' />
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
        </table>
        {/* {users.map((user) => (
          
            <button className={`text-[14px] h-[30px] bg-${statusColorMap[user.statusCode]}-100 border rounded-full`}>
              <h2 className={`mx-2 text-${statusColorMap[user.statusCode]}-950`}>{user.statusCode}</h2>
            </button>
            

        ))} */}
      </div>
    </div>
  );
};

export default UsersList;
