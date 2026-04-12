import React from 'react';
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className='mt-[177px] max-w-7xl mx-auto'>
            <div>
                <div className="inline-flex items-center gap-2 bg-[#E1E7FF] px-3 py-2 rounded-full">
                {/* The Alert Icon (Purple Dot) */}
                <div className="flex justify-center items-center w-4 h-4 rounded-full bg-[#c3c8de]">
                <div className="w-2 h-2 rounded-full bg-[#4F39F6] animate-pulse"></div>
                </div>

                {/* The Text */}
                <h2 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent  text-xs font-semibold">
                    New: AI-Powered Tools Available
                </h2>
                </div>

                <div>
                    <h2 className='text-[#101727] font-bold text-[72px]'>Supercharge Your<br />Digital Workflow</h2>
                    <p className='text-[#627382] text-xl'>Access premium AI tools, design assets, templates, and productivity<br/>
                    software—all in one place. Start creating faster today.<br/>
                    Explore Products
                    </p>
                    <div className='inline-flex gap-3 mt-4'>
                        <button className='text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-5 py-3 rounded-full '>Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full  h-[52px] "><IoPlayOutline />Watch Demo</button>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Banner;