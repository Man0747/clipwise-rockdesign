import React from "react";
import HeroBackground from "./HeroBackground";
import HeroInfo from "./HeroInfo";
import HeroSlider from "./HeroSlider";
import { Mouse } from "@/public/assets/hero/Mouse";
import wave from "@/public/assets/hero/wave.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
    <section className="w-full h-screen backdrop-blur-[125px] bg-gradient-to-br from-[#8481FF] to-[#2EF1FD] to-[48.50%] via-[#0430A1] relative flex justify-center">
      <HeroBackground />
      <div className="w-[var(--page-format)] h-full relative mx-[5%] z-20 flex items-center justify-between">
        <HeroInfo />
        <HeroSlider />
        <div className="absolute flex max-w-max left-0 right-0 bottom-14 mx-auto gap-2 items-center z-20">
          <Mouse />
          <span className="text-[#317189] font-bold ">
            scroll down
          </span>
        </div>
      </div>
      <div className="absolute w-full h-[70%] bottom-0 left-0 flex items-end z-10 pointer-events-none">
        <Image src={wave} alt="Wave" className="absolute w-full h-full bottom-[-1px]" />
      </div>
      </section>
    </>
  );
};

export default HeroSection;
