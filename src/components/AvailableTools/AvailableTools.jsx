import React from 'react';
import Cards from '../Cards/Cards';

const AvailableTools = ({tools,carts,setCarts}) => {
    // console.log(tools)
    return (
        
        <div className=" pl-6 py-10 bg-base-200 mt-5">
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    tools.map((tool)=>{
                        
                        // console.log(tool)
                        return(
                            <Cards key={tool.id} tool={tool} carts={carts} setCarts={setCarts}></Cards>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AvailableTools;