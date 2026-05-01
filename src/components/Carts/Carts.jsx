import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

const Carts = ({carts}) => {
    if(carts.length==0){
        return <div>No carts Available!</div>
    }
    return (
        <div className='bg-white mt-7 p-5 rounded-xl shadow-sm space-y-2'>
            <h3 className='font-bold text-2xl'>Your Carts</h3>

            {
                carts.map(cart=>(
                 <div key={cart.id} className=''>
                    <div className='bg-red-300 rounded-xl flex items-center justify-between p-5'>
                        <div className='flex items-center'>
                            <div  className='px-5 py-5'>
                            <img
                            src={cart.icon}
                            alt="Shoes" />
                        </div>
                        <div>
                        <h2 className='text-xl font-bold'>{cart.name}</h2>
                        <p className='font-bold'>${cart.price}/<span className='opacity-50 text-[10px]'>{cart.period}</span></p>

                        </div>
                        </div>
                        
                        <button className='btn text-red-600 rounded-full' >
                                <RiDeleteBin6Line />
                            </button>

                    </div>
                 </div>
                ))
            }
            
        </div>
    );
};

export default Carts;