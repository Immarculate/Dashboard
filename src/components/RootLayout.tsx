
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