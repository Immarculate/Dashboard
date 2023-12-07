
const Navbar = () => {
    return (
      <div className='h-[100px] w-full xs:w-[100%] flex shadow sticky top-0 z-10 bg-white'>
        <div className='ml-8 mt-8 xs:flex xs:justify-center'>
          <img src='/assets/lnqlogo.svg' alt='logo' className='h-[30px]' />
        </div>
  
        <div className='flex justify-center mt-8 ml-[14rem]'>
          <input className='w-[400px] h-[40px] border-2 rounded' />
          <button className='bg-sky-400 h-[40px] w-14 rounded flex items-center justify-center'><img src='/assets/search.png' alt='search' className='h-[14px]' /></button>
        </div>
  
        <div className='flex justify-center items-center ml-[7rem]'>
          <span className='test-[16px] underline cursor-pointer hover:text-sky-400'>Docs</span>
          <img src='/assets/bell.png' alt='bell' className='h-6 w-6 ml-4' />
          {/* <Avatar className=' ml-4'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar> */}
          <span className=' ml-4'>Ajibola</span>
          <img src='/assets/dropdown.png' alt='avarta' className='h-[20px] ml-2 w-[20px]' />
        </div>
      </div>
    )
  }
  
  export default Navbar