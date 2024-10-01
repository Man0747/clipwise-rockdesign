"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import HeroProductCard from "./HeroProductCard";
import { SwipeArrow } from "@/public/assets/hero/SwipeArrow";
import img from '@/public/assets/product/product.png';

// Slide data
export const HeroSlides = [
    {
        id: 1,
        name: "Crystal Agate Phone Grip",
        price: "18.99$",
        img: img
    },
    {
        id: 2,
        name: "Crystal Agate Phone Grip",
        price: "18.99$",
        img: img
    },
    {
        id: 3,
        name: "Crystal Agate Phone Grip",
        price: "18.99$",
        img: img
    },
    {
        id: 4,
        name: "Crystal Agate Phone Grip",
        price: "18.99$",
        img: img
    },
    {
        id: 5,
        name: "Crystal Agate Phone Grip",
        price: "18.99$",
        img: img
    },
    {
        id: 6,
        name: "Crystal Agate Phone Grip",
        price: "18.99$",
        img: img
    },
    {
        id: 7,
        name: "Crystal Agate Phone Grip",
        price: "18.99$",
        img: img
    },
];

const HeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    // SlideBullet component
    const SlideBullet = ({ id, activeIndex }) => {
        const swiper = useSwiper();

        return (
            <div
                onClick={() => swiper.slideTo(id, 500)}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer ${activeIndex === id ? 'bg-[#8A93E5]' : 'bg-[#D7DBFF]'}`}
            />
        );
    };

    return (
        <div className="w-[569px] flex flex-col justify-center bg-transparent">
            <Swiper
                effect="fade"
                spaceBetween={150}
                slidesPerView={1}
                onSlideChange={(slide) => setActiveIndex(slide.activeIndex)}
                className="w-full h-full bg-transparent"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {HeroSlides.map((el, _i) => (
                    <SwiperSlide className="flex justify-center rounded-[50px] w-max" key={_i}>
                        <div className="flex justify-center items-center ">
                        <HeroProductCard 
                            id={el.id}
                            img={el.img}
                            name={el.name}
                            price={el.price}
                        />
                        </div>
                    </SwiperSlide>
                ))}
                <div className="flex w-full h-max p-5 gap-[2.4rem] items-center justify-center">
                    <button onClick={() => swiperRef.current.slidePrev()} className="bg-transparent">
                        <SwipeArrow rotate={180} />
                    </button>
                    <div className="flex gap-[1rem]">
                        {HeroSlides.map((el, _i) => (
                            <SlideBullet key={el.id} id={_i} activeIndex={activeIndex} />
                        ))}
                    </div>
                    <button onClick={() => swiperRef.current.slideNext()} className="bg-transparent">
                        <SwipeArrow rotate={0} />
                    </button>
                </div>
            </Swiper>
        </div>
    );
};

export default HeroSlider;
