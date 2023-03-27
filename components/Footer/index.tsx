import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-center py-8 bg-giants-orange px-6 xl:px-80">
            <div className="flex-1 flex flex-col md:flex-row gap-6 items-center">
                <Image
                    src="/message.png"
                    width="80"
                    height="80"
                    alt="Message"
                />
                <div>
                    <h3 className="text-white font-bold text-2xl text-center md:text-left">GOT A QUESTION?</h3>
                    <p className="text-white text-md text-center md:text-left">We’re here to help. Send us an email or call us at 510-573-3162</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <Link href="/contact" className="shadow-lg bg-black text-white font-semibold px-6 py-2 hover:bg-gray-900">GET IN TOUCH</Link>
                <Link href="/contact" className="shadow-lg bg-white text-black font-semibold px-6 py-2 hover:bg-gray-100">MAKE PAYMENT</Link>
            </div>
        </div>
        <div className="flex flex-col px-6 xl:px-80 py-14 bg-oxford-blue divide-y divide-white">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center">
                <div className="flex-1">
                    <Image
                        src="/fremont_logo_white.png"
                        width="320"
                        height="210"
                        alt="Main Logo"
                    />
                </div>
                <div className="mb-4 lg:mb-0">
                    <p className="text-white text-center lg:text-right">44279 Fremont Blvd. Unit P</p>
                    <p className="text-white text-center lg:text-right">Fremont, CA 94538</p>
                    <p className="text-white text-center lg:text-right">510-573-3162</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-center">
                <div className="flex-1 mt-4">
                    <Link href="https://www.facebook.com/fremontsigncompany/">
                        <Image
                            src="/facebook.png"
                            width="30"
                            height="30"
                            alt="Facebook Logo"
                        />
                    </Link>
                </div>
                <div className="flex gap-3 divide-x divide-white">
                    <Link href="/about" className="text-white text-right">About</Link>
                    <Link href="/contact" className="text-white text-right pl-2">Contact</Link>
                    <p className="text-white text-right pl-2">@ {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    </>
    // FIX RESPONSIVENESS OF MAIN NAV AND FOOTER
    // ADD SCROLL TO TOP BUTTON
  )
}

export default Footer