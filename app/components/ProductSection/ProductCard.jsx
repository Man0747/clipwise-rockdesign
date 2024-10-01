import Image from 'next/image';
import React from 'react';

const ProductCard = ({ id, name, price, img }) => {
  return (
    <div className="w-[280px] h-[400px] p-6 rounded-3xl bg-white border-2 border-gray-200 flex flex-col items-center justify-between transition-all duration-500 ease-in-out hover:shadow-lg">
      <div className="flex justify-center">
        <Image src={img} alt={`${name} Image`} width={198} height={198} className="object-contain" />
      </div>
      <div className="text-center">
        <h1 className="text-lg font-semibold text-gray-800">
          {name} <span className="text-lg font-bold text-[#317189]">{price}</span>
        </h1>
      </div>
      <div>
      <button className="px-10 py-4 text-[#6FB4FF] text-[1.2rem] font-bold rounded-full transition-all duration-300 ease-in-out bg-white border-2 border-[#6FB4FF] hover:bg-[#75CCEB] hover:text-white shadow-md">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
