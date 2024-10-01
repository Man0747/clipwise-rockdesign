import { HeroBlob, HeroBlobSecondary } from '@/public/assets/hero/HeroBlob';
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="w-full h-full absolute overflow-hidden z-[1]">
      {/* Blur Overlay */}
      <div className="bg-[rgba(255,255,255,0.40)] backdrop-blur-[125px] w-full h-full absolute z-[2]" />

      {/* SVG Blobs */}
      <div className="relative w-full h-full z-0">
        <HeroBlob className="absolute top-[4rem] left-0 w-full h-full" />
        <HeroBlobSecondary className="absolute top-0 left-[22rem]" />
      </div>
    </div>
  );
};

export default HeroBackground;
