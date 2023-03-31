"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { Autoplay } from "swiper";

const Hero = ({ smallTitle, title, subTitle, description, imagesNames }: { smallTitle: string, title: string, subTitle: string, description: string, imagesNames: string[] }) => {
    return (
        <div className="flex flex-col xl:flex-row gap-12 py-20 px-6 xl:px-80 items-center">
            <div className="flex-1">
                <p className="text-gray-400 italic">{smallTitle}</p>
                <h3 className="text-4xl font-extrabold mt-12">{title}</h3>
                <h3 className="text-2xl mt-6">{subTitle}</h3>
                <p className="mt-4">{description}</p>
            </div>
            <div className="flex-1 w-full lg:w-[512px]">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {imagesNames.map((name, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Image
                                    src={`/${name}`}
                                    width="512"
                                    height="512"
                                    alt="Message"
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Hero