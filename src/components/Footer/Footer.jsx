import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-10 py-20 px-6 md:px-20 text-center text-white space-y-3'>
            <h1 className='font-bold text-[24px] md:text-[40px] '>Ready to Transform Your Workflow?</h1>
            <p className='text-[16px] opacity-70'>Join thousands of professionals who are already using Digitools to work smarter.<br/>Start your free trial today.</p>
             <div className='inline-flex gap-3 mt-4'>
                <button className='bg-white text-purple-800  font-bold px-5 py-3 rounded-full '>Explore Products</button>
               <button className="btn bg-transparent rounded-full  h-[52px] text-white font-bold ">View Products</button>
            </div>
            <p className='opacity-70'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Footer;