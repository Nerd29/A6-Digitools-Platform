import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const Package = ({packagePromise}) => {

    const packageData=use(packagePromise)
    console.log(packageData)
    return (
        <div className='py-30 px-50 text-center'>
            <h1 className='font-bold text-5xl'>Simple, Transparent Pricing</h1>
            <p className='text-[16px] mt-3 opacity-90'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                {
                    packageData.map(pricing=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default Package;