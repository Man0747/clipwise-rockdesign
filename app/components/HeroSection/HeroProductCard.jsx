import Image from 'next/image';
import React from 'react';

const HeroProductCard = ({ id, name, price, img }) => {
  return (
    <div className=" w-[450px] h-[450px] flex flex-col justify-between items-center px-16 py-6 bg-white relative z-5 shadow-lg rounded-3xl gap-2">
      {/* Product Image */}
      <Image 
        src={img} 
        alt={name} 
        className="w-full h-[250px] object-cover rounded-xl"
        layout="responsive" // Responsive layout for better handling
        width={250}
        height={150}
      />
      
      <hr className="w-[40%] rounded-full bg-[#d23434] h-[1px] border-none" />
      
      {/* Product Name and Price */}
      <h2 className="text-[#818181] text-center text-[20px] font-normal uppercase">
        {name} <span className="text-[#317189] font-bold">- {price}</span>
      </h2>
    </div>
  );
};

export default HeroProductCard;
