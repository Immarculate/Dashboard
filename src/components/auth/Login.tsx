import React, { useState } from 'react'

const Login = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex h-full">

            <div className="flex bg-[rgba(255, 255, 255, 1)] ml-16 flex-1 flex-col gap-1 justify-center mt-[5.5rem] ]">
                <img src="/assets/lnqlogo.svg" alt="" className="w-[173.76px] h-9" />
                <img className="w-[600px] h-[337.57px] mt-16" src="/assets/logimage.svg" alt="logo" />
            </div>

            <div className="flex flex-1 flex-col gap-1 justify-center mt-[9rem] bg-[rgba(84, 95, 125, 0.15)]">
                <h1 className=" text-5xl text-blue-950 font-bold mb-4">Welcome!</h1>
                <p className="text-[20px] mb-6">Enter details to login.</p>
                <div className="mt-[1rem] flex-col">
                    <div className='my-4'>
                        <input placeholder="E-mail" type="email" className="w-[27.9375rem] h-12 rounded border-2" />
                    </div>
                    <div >

                        <input
                            className="w-[27.9375rem] h-12 rounded border-2 mr-14"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className='text-[12px] text-blue-400 cursor-pointer leading-[i6.39px] absolute ml-[-6.1rem] my-4'
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <p className="text-[12px] text-blue-400 cursor-pointer leading-[34.64px]">Forgot PASSWORD?</p>
                <button type="submit" className="w-[27.9375rem] h-12 bg-sky-400 hover:bg-sky-500 rounded">LOG IN</button>
            </div>
            {/* Login */}
        </div>
    )
}

export default Login