import React from 'react';
import CardsFeature from './CardsFeature';
import { toast } from 'react-toastify';
// import toast from 'react-hot-toast';

const Cards = ({tool,carts,setCarts}) => {

  const tagStyles =()=> {
    if(tool.tagType=='best-seller')
        return 'bg-[#FEF3C6] text-[#BB4D00]';
    if(tool.tagType=='popular')
        return 'bg-blue-100 text-blue-600';
    if(tool.tagType=='limited')
        return 'bg-red-100 text-red-600';
    if(tool.tagType=='featured')
        return 'bg-green-100 text-green-600';
    if(tool.tagType=='exclusive')
        return 'bg-purple-100 text-purple-600';
    };
    // console.log(tool)
    const isExist=carts.find(item=>item.id==tool.id);
    const addToCart=(tool)=>{
      if(isExist){
        toast.error('Sorry!Item is already added to cart!')
        return
      }
      setCarts([...carts,tool])
      toast.success('Item added to cart successfully!')
    }
    // console.log(carts)
    return (
        <div className="card bg-base-100 w-96 shadow-sm hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
  <div  className='px-5 py-5 flex justify-between'>
    <img
      src={tool.icon}
      alt="Shoes" />

      {tool.tag && (
        <span className={`badge badge-ghost font-bold text-xs p-3 rounded-full ${tagStyles()}`}>
          {tool.tag}</span>
        )}
  </div>
  <div className="card-body">
    <h2 className="card-title">{tool.name}</h2>
    <p className="text-[#627382]">{tool.description}</p>
    <h1 className='font-bold text-4xl'>${tool.price}<span className='opacity-90 text-[15px]'>/{tool.period}</span></h1>
    <div className="card-actions">
        <div>
            {
                tool.features.map((feature,index)=><CardsFeature key={index} feature={feature}></CardsFeature>)
            }
        </div>
      <button onClick={()=>addToCart(tool)} className={`font-semibold px-5 py-3 rounded-full w-full ${isExist?'bg-green-500 text-white ':'text-white bg-gradient-to-r from-[#4F39F6] to-[#9514FA]  '}`}>{isExist?'Added to Cart':'Buy Now'}</button>
    </div>
  </div>
</div>
    );
};

export default Cards;