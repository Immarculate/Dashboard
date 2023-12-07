// import Buttombar from '@/components/shared/Buttombar';
// import LeftSidebar from '@/components/shared/Leftsidebar';
// import Topbar from '@/components/shared/Topbar';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const RootLayout = () => {
    return (
        <div className='w-full'>
            <Navbar />
            <div className='flex'>
                <Sidebar />

                <section className='h-full'>
                    <Outlet />
                </section>
            </div>

            {/* <Buttombar /> */}
        </div>
    )
}

export default RootLayout