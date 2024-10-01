import React, { FC } from 'react';
import HeroBackground from './HeroBackground';

const HeroInfo = () => {
  return (
    <>
    <div className="flex flex-col gap-16 text-center lg:text-left">
      {/* Title Section */}
      <div className="text-white">
        <span className="text-4xl font-normal">Welcome to</span>
        <h1 className="text-6xl font-bold leading-tight">Pop Rock Crystal Shop!</h1>
      </div>

      {/* Description Section */}
      <div className="w-40rem lg:w-full">
        <p className="text-[#31546D] text-base font-normal leading-6">
          Here you will find unique phone accessories, crystals, jewelry, and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
        </p>
      </div>

      {/* Button Section */}
      <div className="flex items-center gap-16 justify-center lg:justify-start">
      <button className="rounded-lg bg-gradient-to-r from-white to-[#F1FAFF] shadow-lg py-4 px-12 text-[#317189] text-lg font-bold">
      SHOP NOW
    </button>
      </div>
    </div>
    
    </>
  );
};

export default HeroInfo;
