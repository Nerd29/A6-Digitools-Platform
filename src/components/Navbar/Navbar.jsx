import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = ({carts}) => {
    return (
  
      <div className="navbar max-w-7xl mx-auto bg-white container mx-auto flex justify-between items-center">
  <div className=" navbar-start flex-1">
    
    <h1 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-3xl font-bold w-[180px]">DigiTools</h1>
  </div>
  <div className="navbar-center hidden lg:flex flex-none justify-center">
    <ul className="menu menu-horizontal px-3 gap-4 font-semibold text-[16px] text-center">
     <li>Products</li>
     <li>Features</li>
     <li>Pricing</li>
     <li>Testimonials</li>
     <li>FAQ</li>
    </ul>
  </div>
  <div className="navbar-end flex-1 flex justify-end ">
    <div className="dropdown dropdown-end flex items-center gap-3">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item bg-red-200 rounded-full">{carts.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-3">
      <h3>Login</h3>
      <button className='text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-5 py-3 rounded-full '>Get Started</button>
        </div>
    </div>
    
  </div>
</div>
    )
  };

export default Navbar;