import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-10 px-40 py-15 flex justify-around items-center'>
            <div className='text-[#FFFFFF] flex flex-col items-center gap-3'>
                <h1 className='font-bold text-6xl m-0'>50K+</h1>
                <p className='text-xl opacity-80 mr-6'>Active Users</p>       
            </div>
            <div className='text-[#FFFFFF] flex flex-col items-center gap-3'>
                <h1 className='font-bold text-6xl '>200+</h1>
                <p className='text-xl opacity-80'>Premium Tools</p>
            </div>
            <div className='text-[#FFFFFF] flex flex-col items-center gap-3'>
                <h1 className='font-bold text-6xl'>4.9</h1>
                <p className='text-xl opacity-80'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;