import SideBar from './Sidebar';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
// import Stats from './Stats';

const Hero = () => {
    return (
        <div className=''>
            {/* <Navbar /> */}
            <div className='flex'>
                {/* <SideBar /> */}
                <div className='background flex-1'>
                    {/* <Stats /> */}
                    <Dashboard />
                </div>
            </div>
        </div>
    );
}

export default Hero;
