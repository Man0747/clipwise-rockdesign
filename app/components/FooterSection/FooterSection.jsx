import Image from 'next/image';
import React from 'react';
import product from '@/public/assets/product/product.png';
import HeroBackground from '../HeroSection/HeroBackground';
import wave from '@/public/assets/hero/Productwave.png';

const FooterSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-teal-300 to-blue-900">
      {/* Background */}
      <HeroBackground />

      {/* Content Container */}
      <div className="relative flex justify-between items-center gap-20 w-full px-4 md:px-20 z-20">
        
        {/* Info Section */}
        <div className="flex flex-col items-end text-right gap-6 md:w-[600px]">
          <div className="text-gray-700">
            <span className="block text-2xl font-medium">BEST PRICE</span>
            <h1 className="text-5xl font-bold">Agate Phone Grip</h1>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl text-teal-600 line-through">44.50$</span>
            <h3 className="text-6xl font-bold text-red-500">19.50$</h3>
          </div>

          <div className="text-gray-700">
            <p className="text-lg leading-7 max-w-lg">
              These Pop Rock Crystal grip tops can be swapped with other tops depending on your mood, outfit, nails, phone case, holiday, etc.! Just gently squeeze the sides to remove and swap out with another color or design!
            </p>
          </div>

          {/* Buy Now Button */}
          <div>
            <button className="px-14 py-4 text-center text-[1.4rem] font-bold rounded-[18px] transition-all duration-500 ease-in-out bg-white text-[#6FB4FF] border-2 border-[#6FB4FF] hover:bg-gradient-to-r hover:from-[#75CCEB] hover:to-[#6FB4FF] hover:text-white hover:shadow-lg">
            BUY NOW
            </button>
          </div>
        </div>

        {/* Product Image */}
        <div className="hidden md:flex items-center justify-center w-[572px] h-[572px] bg-white/30 rounded-full relative">
          <div className="absolute inset-0 m-auto w-[484px] h-[484px] bg-white rounded-full shadow-md"></div>
          <div className="absolute inset-0 m-auto w-[348px] h-[348px] bg-white rounded-full shadow-lg z-10"></div>
          <Image src={product} alt="Product" className="relative w-[324px] h-[324px] mr-4 mt-4 z-20" />
        </div>
      </div>

      {/* Wave Image */}
      <div className="absolute w-full h-full  z-10">
       <Image src={wave} alt="Wave" className="absolute w-full h-full " />
      </div>
    </section>
  );
};

export default FooterSection;
