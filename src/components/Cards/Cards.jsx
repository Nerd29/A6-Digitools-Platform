import React from 'react';
import CardsFeature from './CardsFeature';

const Cards = ({tool,carts,setCarts}) => {
    // console.log(tool)
    const addToCart=(tool)=>{
      const isExist=carts.find(item=>item.id==tool.id)
      if(isExist){
        alert('Sorry!Item is already added to cart!')
        return
      }
      setCarts([...carts,tool])
      console.log(carts)
    }
    // console.log(carts)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <div  className='px-5 py-5'>
    <img
      src={tool.icon}
      alt="Shoes" />
  </div>
  <div className="card-body space-y-2">
    <h2 className="card-title">{tool.name}</h2>
    <p className="t">{tool.description}</p>
    <h1 className='font-bold text-4xl'>${tool.price}<span className='opacity-90 text-[15px]'>/{tool.period}</span></h1>
    <div className="card-actions">
        <div>
            {
                tool.features.map((feature,index)=><CardsFeature key={index} feature={feature}></CardsFeature>)
            }
        </div>
      <button onClick={()=>addToCart(tool)} className="btn btn-primary w-full">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Cards;