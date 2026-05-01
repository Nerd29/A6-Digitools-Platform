import React, { use } from 'react';
import AvailableTools from '../AvailableTools/AvailableTools';
import Carts from '../Carts/Carts';
// import AvailableTools from './AvailableTools';

const DigiTools = ({toolsPromise,carts,setCarts}) => {
    // console.log(toolsPromise)
    const tools=use(toolsPromise)
    // console.log(tools)
    return (
        <div className='mt-[120px] max-w-7xl mx-auto'>
            <div className='text-center '>
            <h1 className='text-[#101727] text-[40px] font-bold'>Premium Digital Tools</h1> 
            <p className='text-[16px] text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
        </div>
            

            <div className='flex flex-row justify-center items-center gap-3 mt-3'>
                <button className="text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-5 py-3 rounded-full">Products</button>
                <button className="btn text-black font-semibold px-5 py-3 rounded-full">Cart<span>({carts.length})</span></button>

                </div>   
             <div>
                <AvailableTools tools={tools} carts={carts} setCarts={setCarts}></AvailableTools>
                <Carts carts={carts}></Carts>
             </div>
        </div>
        
        
    );
};

export default DigiTools;