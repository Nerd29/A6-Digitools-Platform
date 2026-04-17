import React from 'react';
import { SiTicktick } from "react-icons/si";

const PricingFeature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center mt-2'><span className='text-green-500 mr-2'><SiTicktick /></span>{feature}</p>
        </div>
    );
};

export default PricingFeature;