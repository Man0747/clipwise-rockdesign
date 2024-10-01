import React, { FC } from "react";
import Image from "next/image";
import HeroBackground from "./HeroBackground";
import HeroInfo from "./HeroInfo";
import HeroSlider from "./HeroSlider";
import { Mouse } from "@/public/assets/hero/Mouse";
import { HeroWave } from "@/public/assets/hero/HeroBlob";


const HeroSection = () => {
  return (
    <section className="w-screen h-screen backdrop-blur-[125px] bg-gradient-to-br from-[#8481FF] to-[#2EF1FD] to-[#0430A1] flex justify-center relative">
    <HeroBackground />
      <div className="w-full h-full relative z-30 flex items-center justify-between">
        <HeroInfo />
        <HeroSlider />
        <div className="absolute flex w-max left-0 right-0 bottom-[6rem] mx-auto gap-[1.6rem] items-center z-30">
          <Mouse />
          <span className="text-[#317189] text-[1.6rem] font-medium">
            scroll down
          </span>
        </div>
      </div>
      <div className="absolute w-full h-[70%] bottom-0 left-0 flex items-end z-20 pointer-events-none">
      <HeroWave />
      </div>
    </section>
  );
};

export default HeroSection;
