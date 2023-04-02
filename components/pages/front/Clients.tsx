import Image from 'next/image'
import React from 'react'

const Clients = () => {
    return (
        <div className="py-24 px-6 lg:px-52 xl:px-80 bg-[url('/world-bg.png')]">
            <h3 className="font-bold text-4xl text-giants-orange text-center">
                OUR VALUED <span className="text-oxford-blue">CLIENTS</span>
            </h3>
            <p className="text-sm text-center mt-4 px-20 xl:px-44">We bring all our skill and experience to bear on every project, small or large, simple or complex, each and every time. We’re dedicated to presenting every client’s brand identity accurately and effectively.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:px-12 xl:px-44 justify-center mt-16 place-items-center">
                <div>
                    <Image
                        src="/starbucks-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/ford-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/subway-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/comcast-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/dennys-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/att-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/taco-bell-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/kfc-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>
                <div>
                    <Image
                        src="/holiday-inn-logo.png"
                        width="160"
                        height="160"
                        alt="Works"
                    />
                </div>         
            </div>
        </div>
    )
}

export default Clients