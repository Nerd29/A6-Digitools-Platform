import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Carts = ({carts,setCarts}) => {
    const total=carts.reduce((sum,cart)=>sum+cart.price,0)

    const removeItem=(id)=>{
        const filterCarts=carts.filter(cart=>cart.id!=id)
        setCarts(filterCarts)
        toast.arguments('Selected item is removed successfully!')
    }

    const removeAll = () => {
        setCarts([]); // Sets the cart state to an empty array
        toast.success("Thank you for your purchase! Your cart has been cleared.");
    };
    if(carts.length==0){
        return <div className='bg-base-200 mt-7 py-8 rounded-xl shadow-sm text-center flex flex-col items-center'><div className='rounded-full text-[#627382]'><FaCartPlus size={40} /></div>
            <h2 className='font-bold text-2xl'>No carts Available!</h2>
        <p className='text-xl text-[#627382] font-sans'>Plz add your cart</p></div>
    }
    return (
        <div className='bg-white mt-7 p-5 rounded-xl shadow-sm space-y-2'>
            <h3 className='font-bold text-2xl'>Your Carts</h3>

            {
                carts.map(cart=>(
                 <div key={cart.id} className=''>
                    <div className='bg-base-300 rounded-xl flex items-center justify-between p-5'>
                        <div className='flex items-center'>
                            <div  className='px-5 py-5'>
                            <img
                            src={cart.icon}
                            alt="Shoes" />
                        </div>
                        <div>
                        <h2 className='text-xl font-bold'>{cart.name}</h2>
                        <p className='font-bold'>${cart.price}/<span className='text-[10px]'>{cart.period}</span></p>

                        </div>
                        </div>
                        
                        <button onClick={()=>removeItem(cart.id)} className='btn text-red-600 rounded-full' >
                                <RiDeleteBin6Line />
                            </button>

                    </div>
                 </div>
                ))
            }

            <div className='flex justify-between p-4'>
                <h1 className='text-[#627382] text-xl'>Total</h1>
                <h1 className='font-bold text-xl'>${total}</h1>
            </div>
           <button onClick={()=>removeAll()} className="text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-5 py-3 rounded-full w-full">Proceed to checkout</button>
        </div>
    );
};

export default Carts;