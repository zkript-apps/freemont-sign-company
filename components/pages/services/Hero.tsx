"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { Autoplay } from "swiper";
import Link from 'next/link';

const Hero = ({ smallTitle, title, subTitle, description, imagesNames }: { smallTitle: string, title: string, subTitle: string, description: string, imagesNames: string[] }) => {
    return (
        <div className="flex flex-col xl:flex-row gap-12 py-20 px-6 xl:px-80 items-center">
            <div className="flex-1">
                <p className="text-gray-400 italic">{smallTitle}</p>
                <h3 className="text-4xl font-extrabold mt-12">{title}</h3>
                <h3 className="text-2xl mt-6">{subTitle}</h3>
                <p className="mt-4">{description}</p>
            </div>
            <div className="flex-1 w-full lg:w-[512px] bg-[url('/bg-welding.png')] py-44 px-12">
                <h3 className="font-extrabold text-4xl text-white text-center">Check Our Services Pages Below</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 place-items-center mt-12">
                    <Link href="/services/engraving" className="text-white text-4xl text-center hover:underline">Engraving</Link>
                    <Link href="/services/permits" className="text-white text-4xl text-center hover:underline">Permits</Link>
                    <Link href="/services/engineering" className="text-white text-4xl text-center hover:underline">Engineering</Link>
                    <Link href="/services/sign-master-program" className="text-white text-4xl text-center hover:underline">Sign Master Program</Link>
                    <Link href="/services/design" className="text-white text-4xl text-center hover:underline">Design</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero