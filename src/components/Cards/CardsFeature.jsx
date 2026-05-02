import React from 'react';
import { SiTicktick } from "react-icons/si";
const CardsFeature = ({feature}) => {
    // console.log(feature)
    return (
        <div>
            <p className='flex items-center mt-2 text-[#627382]'><span className='text-green-500 mr-2'><SiTicktick /></span>{feature}</p>
        </div>
    );
};

export default CardsFeature;