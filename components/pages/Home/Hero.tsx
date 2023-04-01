"use client"
import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="bg-[url('/bg-top.png')] py-16 px-6 lg:px-52 xl:px-80 flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col justify-center">
                <p className="text-white">Welcome to Fremont Sign Company!</p>
                <h1 className="text-white font-bold text-4xl mt-10">NATIONWIDE SIGNAGE<br/>AND BRANDING SOLUTION</h1>
                <p className="text-white mt-10">Our staff will work with your designer or our in house<br/>designers will help you make a lasting impression.</p>
                <div className="mt-12">
                    <Link href="/services" className="shadow-lg bg-giants-orange text-white font-semibold px-6 py-3 hover:opacity-70">LEARN MORE</Link>
                </div>
            </div>
            <div className="flex-none max-w-[512px]">
                <Swiper 
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Image
                            src="/signage-fremont.jpg"
                            width="512"
                            height="512"
                            alt="Message"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/wine-works.png"
                            width="512"
                            height="512"
                            alt="Message"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/ds-works.png"
                            width="512"
                            height="512"
                            alt="Message"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/mountain-works.png"
                            width="512"
                            height="512"
                            alt="Message"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/dennys-sign.jpg"
                            width="512"
                            height="512"
                            alt="Message"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/subway-sign.jpg"
                            width="512"
                            height="512"
                            alt="Message"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero