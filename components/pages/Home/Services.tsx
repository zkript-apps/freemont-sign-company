import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faScrewdriver, faSignHanging } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 h-[512px] w-[512px] bg-[url('/left-services.png')]">
                </div>
                <div className="flex-1 bg-oxford-blue flex flex-col justify-center lg:max-w-[512px]">
                    <div className="p-8">
                        <h4 className="text-giants-orange text-2xl text-center">WE DO IT ALL.</h4>
                        <h4 className="text-giants-orange text-2xl text-center">WE DO IT RIGHT.</h4>
                        <h4 className="text-giants-orange text-2xl text-center">WE DO IT ON TIME.</h4>
                        <p className="text-white text-center mt-6">Serving Nation Wide Markets with Sign Design, Manufacturing and Project Management Excellence for over 15 years in Bay Area.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex flex-col lg:max-w-[512px]">
                    <Link href="/signage" className="flex flex-col justify-center bg-oxford-blue bg-opacity-95 px-8 py-4 h-[256px]">
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faSignHanging} className="h-12 w-12 hover:cursor-pointer text-white" />
                        </div>
                        <h4 className="font-bold text-2xl text-center text-white mt-4">Signage</h4>
                        <p className="text-center text-white mt-4 text-sm">Here’s what we know: People will form an impression of your business based on a host of factors. One of those is the image you present with your signage.</p>
                    </Link>
                    <Link href="/maintenance" className="flex flex-col justify-center bg-giants-orange px-8 py-4 h-[256px]">
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faScrewdriver} className="h-12 w-12 hover:cursor-pointer text-white" />
                        </div>
                        <h4 className="font-bold text-2xl text-center text-white mt-4">Maintenance</h4>
                        <p className="text-center text-white mt-4 text-sm">Customer engagement and branding don’t take any days off. That’s why Triangle provides emergency, planned and preventive maintenance services for signs and lighting systems nationwide.</p>
                    </Link>
                </div>
                <div className="flex-1 flex flex-col lg:max-w-[512px]">
                    <Link href="/lighting" className="flex flex-col justify-center bg-giants-orange px-8 py-4 h-[256px]">
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faLightbulb} className="h-12 w-12 hover:cursor-pointer text-white" />
                        </div>
                        <h4 className="font-bold text-2xl text-center text-white mt-4">Lighting</h4>
                        <p className="text-center text-white mt-4 text-sm">For our customers, lighting is no afterthought. It’s a make or break factor in the success of their business and their brand and that recognition is what brought them to Triangle.</p>
                    </Link>
                    <div className="flex flex-col justify-center bg-oxford-blue px-8 py-4 h-[256px]">
                        <h4 className="font-bold text-2xl text-center text-white mt-4">WE MAKE A LONG LASTING IMPRESSION</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services