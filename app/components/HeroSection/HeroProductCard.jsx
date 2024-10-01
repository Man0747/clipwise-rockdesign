import Image from 'next/image';
import React from 'react';

const HeroProductCard = ({ id, name, price, img }) => {
  return (
    <div className="relative w-[450px] h-[450px] bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-center items-center">
      {/* "New lot" tag */}
      <div className="absolute top-16 left-0 bg-[#6B6EC6] text-white px-3 py-1 rounded-r-lg text-xs font-semibold">
        New lot
      </div>

      {/* Product Image */}
      <div className="w-[250px] h-[250px] flex justify-center items-center">
        <Image 
          src={img} 
          alt={name} 
          className="object-cover rounded-full"
          layout="intrinsic"
          width={250}
          height={250}
        />
      </div>
      
      {/* Product Name and Price */}
      <h2 className="text-center text-[#818181] text-[20px] font-medium mt-4">
        {name} <span className="text-[#317189] font-bold">- {price}</span>
      </h2>
    </div>
  );
};

export default HeroProductCard;
