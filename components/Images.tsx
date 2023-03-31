"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { Navigation, Pagination, Autoplay } from "swiper";

const Images = ({ imagesNames }: { imagesNames: string[] }) => {
    return (
        <div className="py-20 px-6 xl:px-80 items-center">
            <div className="hidden lg:block">
                <Swiper
                    loop
                    slidesPerView={3}
                    spaceBetween={50}
                    centeredSlides={true}
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {imagesNames.map((name, index) =>{
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
            <div className="block lg:hidden">
                <Swiper
                    loop
                    slidesPerView={1}
                    spaceBetween={50}
                    centeredSlides={true}
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {imagesNames.map((name, index) =>{
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

export default Images