import Image from 'next/image';
import React from 'react';

const HeroProductCard = ({ id, name, price, img }) => {
  return (
    <div className="w-[calc(var(--header-right))] h-[calc(var(--header-right))] max-h-[554px] max-w-[554px] flex flex-col justify-between items-center p-[50px_104px] bg-white relative z-5 shadow-[0px_4px_15px_5px_rgba(120,143,156,0.25)] rounded-[50px] gap-[2rem]">
      <Image src={img} alt={name} className="max-w-[362px] max-h-[362px] w-[36.2rem] h-[36.2rem]" />
      <hr className="w-[120px] rounded-[1px] bg-[#F2F2F2] h-[2px] border-none" />
      <h2 className="text-[#818181] text-center text-[20px] font-normal uppercase">
        {name} <span className="text-[#317189] font-bold">- {price}</span>
      </h2>
    </div>
  );
};

export default HeroProductCard;
