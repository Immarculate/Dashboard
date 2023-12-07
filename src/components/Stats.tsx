
import { stats } from '../constants';

const Stats = () => {
    return (
        <div className='w-[1037px] flex justify-between'>

            <div className='flex xs:flex-col justify-between ml-4'>
                {stats.map((stat) => (
                    <div className='w-[240px] h-[160px] bg-white rounded m-2 shadow' key={stat.title}>
                        <div className={`${stat.className} h-[40px] w-[40px] rounded-full flex justify-center items-center ml-4 mt-4 mb-[1rem]`}>
                            <img src={stat.image} className='h-[22px] w-[22px]' alt='image' />
                        </div>
                        <span className='text-[14px] ml-4'>{stat.title}</span>
                        <p className='text-2xl font-bold leading-[28px] ml-4'>{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Stats; 