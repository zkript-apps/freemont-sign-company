import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedWorks = () => {
    return (
        <div className="py-24 px-6 lg:px-52 xl:px-80">
            <h3 className="font-bold text-4xl text-giants-orange text-center">
                OUR FEATURED <span className="text-oxford-blue">WORKS</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 place-items-center gap-12 mt-12">
                <Image
                    src="/mountain-works.png"
                    width="256"
                    height="256"
                    alt="Works"
                    className="shadow-lg"
                />
                <Image
                    src="/ds-works.png"
                    width="256"
                    height="256"
                    alt="Works"
                    className="shadow-lg"
                />
                <Image
                    src="/subway-works.png"
                    width="256"
                    height="256"
                    alt="Works"
                    className="shadow-lg"
                />
                <Image
                    src="/wine-works.png"
                    width="256"
                    height="256"
                    alt="Works"
                    className="shadow-lg"
                />
            </div>
            <div className="mt-12 flex justify-center">
                <Link href="/signage" className="shadow-lg bg-giants-orange text-white font-semibold px-6 py-2 hover:opacity-70">SEE MORE PHOTOS</Link>
            </div>
        </div>
    )
}

export default FeaturedWorks