import Image from 'next/image';
import React from 'react';

const ProductCard = ({ id, name, price, img }) => {
  return (
    <div className="w-[320px] h-[400px] p-6 rounded-3xl bg-white border-[1.5px] border-gray-100 flex flex-col items-center justify-between transition-all duration-500 ease-in-out hover:shadow-lg">
      <div className="flex justify-center">
        <Image src={img} alt={`${name} Image`} width={198} height={198} className="object-contain" />
      </div>
      <div className="text-center">
        <h1 className="text-lg font-extralight text-gray-800">
          {name} 
  
        </h1>
        <span className="text-lg font-bold text-[#317189]">{price}</span>
      </div>
      <div>
      <button className="px-6 py-4 text-center text-[1rem] font-bold rounded-[18px] transition-all duration-500 ease-in-out bg-white text-[#6FB4FF] border-2 border-[#6FB4FF] hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] hover:text-white hover:shadow-lg">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
