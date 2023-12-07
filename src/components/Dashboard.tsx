
import Stats from './Stats';
import UsersList from './UsersList';


const Dashboard = () => {
 

  return (
    <div>
      <h1 className='text-[24px] leading-7 mt-16 mx-6 mb-10 text-sky-950'>Users</h1>
      <Stats />

      <div className='my-6 shadow w-[1010px] mx-6'>

      <UsersList />
     

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
