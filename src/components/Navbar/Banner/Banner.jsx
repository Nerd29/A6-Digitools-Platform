import React from 'react';
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='mt-[100px] md:mt-[160px] max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 px-5 text-center items-center gap-10 md:text-left'>
            <div className='flex flex-col items-center md:items-start'>
                <div className="inline-flex items-center gap-2 bg-[#E1E7FF] px-3 py-2 rounded-full">
                
                <div className="flex justify-center items-center w-4 h-4 rounded-full bg-[#c3c8de]">
                <div className="w-2 h-2 rounded-full bg-[#4F39F6] animate-pulse"></div>
                </div>

                {/* The Text */}
                <h2 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  text-xs font-semibold">
                    New: AI-Powered Tools Available
                </h2>
                </div>

                <div>
                    <h2 className='text-[#101727] font-bold text-[36px] md:text-[60px]'>Supercharge Your<br className='hidden md:block' /><span className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>Digital Workflow</span></h2>
                    <p className='text-[#627382] text-[16px]'>Access premium AI tools, design assets, templates, and productivity<br/>
                    software—all in one place. Start creating faster today.<br/>
                    Explore Products
                    </p>
                    <div className='flex flex-wrap justify-center md:justify-start gap-3 mt-8'>
                        <button className='text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-5 py-3 rounded-full '>Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full  h-[52px] "><IoPlayOutline />Watch Demo</button>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center md:justify-end mt-10 md:-mt-20'>
                <img className='max-w-[500px] h-auto object-contain w-full' 
                src="./assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;