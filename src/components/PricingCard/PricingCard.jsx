import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    
    return (
        <div className={`relative p-8 rounded-2xl text-left shadow-lg ${
            pricing.isPopular 
            ? 'bg-gradient-to-b from-[#4F39F6] to-[#9514FA] text-white ' 
            : 'bg-[#F2F2F2]  border-[#F2F2F2] '
        }`}>
            {pricing.isPopular ? (
                <div className="absolute -top-4 left-43 -translate-x-13 bg-[#FEF3C6] text-[#BB4D00] text-[14px] px-4 py-2 rounded-full">
                    Most Popular
                </div>
            ) : null}
            <div>
                <h1 className='text-2xl font-bold'>{pricing.name}</h1>
                <p className='opacity-90'>{pricing.description}</p>
            </div>

            <div className='mt-2'>
                <h1 className='font-bold text-4xl'>{pricing.price}<span className='opacity-90 text-[15px]'>/Month</span></h1>

                <div className='mt-6'>
                    {
                        pricing.features.map((feature,index)=><PricingFeature key={index} feature={feature}></PricingFeature>)
                    }
                </div>
               <button className={`mt-10 w-full py-3 rounded-full font-bold text-[16px] ${
                pricing.isPopular ? 'bg-white text-[#9514FA]' : 'bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  text-white'
            }`}>
                {pricing.buttonText}
            </button>
               
            </div>
        </div>
    );
};

export default PricingCard;