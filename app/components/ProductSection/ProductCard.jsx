import Image from 'next/image';
import React from 'react';

const ProductCard = ({ id, name, price, img }) => {
  return (
    <div className="w-[32.2rem] h-[41.2rem] p-8 rounded-[30px] bg-white border-2 border-gray-200 flex flex-col items-center justify-between transition-all duration-500 ease-in-out hover:shadow-lg aspect-[32.2/41.2] max-w-[300px] max-h-[386px]">
      <div>
        <Image src={img} alt={`${name} Image`} width={198} height={198} className="w-[19.8rem] h-[19.8rem]" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-normal leading-6 text-gray-700 uppercase">
          {name} <span className="text-2xl font-bold text-[#317189]">{price}</span>
        </h1>
      </div>
      <div>
      <button className="px-14 py-4 text-white text-center text-[1.4rem] font-bold rounded-[18px] transition-all duration-500 ease-in-out bg-white text-[#6FB4FF] border-2 border-[#6FB4FF] hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] hover:text-white hover:shadow-lg">
      BUY NOW
    </button>
      </div>
    </div>
  );
};

export default ProductCard;
