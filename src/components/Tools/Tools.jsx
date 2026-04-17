import React from 'react';

const Tools = () => {
    return (
        <div className='py-30 px-50 text-center'>
            <h1 className='font-bold text-5xl'>Get Started in 3 Steps</h1>
            <p className='text-[16px] mt-3 opacity-90'>Start using premium digital tools in minutes, not hours.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-[40px]'>
                <div className='space-y-4 shadow-xl rounded-xl p-6 w-[380px] h-[350px]'>
                    <div className='flex justify-center pt-5'>
                        <img className=' border-gray-100 p-3 rounded-full bg-gray-100' src="./assets/user.png" alt="" />
                    </div>
                    
                    <h3 className='font-bold text-2xl'>Create Account</h3>
                    <p className='text-[16px] opacity-90'>Sign up for free in seconds. No credit card required to get started</p>
                </div>
                <div className='space-y-4 shadow-xl rounded-xl p-6 w-[380px] h-[350px]'>
                    <div className='flex justify-center pt-5'>
                         <img className='border-gray-100 p-3 rounded-full bg-gray-100' src="./assets/package.png" alt="" />
                    </div>
                   
                    <h3 className='font-bold text-2xl'>Choose Products</h3>
                    <p className='text-[16px] opacity-90'>Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className='space-y-4 shadow-xl rounded-xl p-6 w-[380px] h-[350px]'>
                    <div className='flex justify-center pt-5'>
                         <img className='border-gray-100 p-4 rounded-full bg-gray-100' src="./assets/rocket.png" alt="" />
                    </div>
                    <h3 className='font-bold text-2xl'>Start Creating</h3>
                    <p className='text-[16px] opacity-90'>Download and start using your premium tools immediately.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Tools;