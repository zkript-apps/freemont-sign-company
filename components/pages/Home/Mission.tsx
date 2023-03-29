import Image from 'next/image'
import React from 'react'

const Mission = () => {
    return (
        <div className="py-24 px-8 xl:px-80">
            <div className="flex flex-col xl:flex-row gap-8">
                <div className="flex-none xl:w-[300px]">
                    <div className="bg-white shadow-lg p-6 w-full">
                        <h3 className="text-xl text-giants-orange">
                            GET YOUR FREE <span className="text-oxford-blue">CONSULTATION &<br/>QUOTE</span>
                        </h3>
                        <form className="mt-6">
                            <input name="fullName" type="text" className="w-full bg-gray-100 p-2" placeholder="Full Name*" />
                            <input name="email" type="email" className="w-full bg-gray-100 p-2 mt-4" placeholder="Email*" />
                            <input name="subject" type="text" className="w-full bg-gray-100 p-2 mt-4" placeholder="Subject*" />
                            <input type="file" name="myfile" className="mt-4"/>
                            <textarea name="message" rows={4} className="w-full bg-gray-100 p-2 mt-4" placeholder="Message*"></textarea>
                            <button className="w-full shadow-lg bg-black text-white px-6 py-2 hover:bg-gray-900 mt-2">Send</button>
                        </form>
                    </div>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-4xl text-giants-orange">
                        WE ARE EXPERT IN<br />
                        <span className="text-oxford-blue">DIFFERENT SOLUTIONS</span>
                    </h3>
                    <div className="flex flex-col xl:flex-row gap-8 mt-6">
                        <div className="flex flex-col gap-6 flex-1">
                            <Image
                                src="/signage-1.png"
                                width="512"
                                height="1080"
                                alt="Message"
                            />
                            <h3 className="text-giants-orange text-2xl">Manufacturing</h3>
                            <p className="text-md">Our strength and value comes from many decades of experience, combined with a commitment to continually improve our manufacturing processes.</p>
                        </div>
                        <div className="flex flex-col gap-6 flex-1">
                            <Image
                                src="/signage-2.png"
                                width="512"
                                height="1080"
                                alt="Message"
                            />
                            <h3 className="text-giants-orange text-2xl">Project Management</h3>
                            <p className="text-md">Extensive, up-front planning is the key ingredient to managing large signage conversion projects. The customer’s wants, needs and expectations are always kept as our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 h-[1px] w-full bg-gray-200 px-72 hidden lg:block"></div>
            <div className="mt-12">
                <h3 className="font-bold text-4xl text-giants-orange text-center">
                    MISSION STATEMENT <span className="text-oxford-blue">STATEMENT</span>
                </h3>
                <p className="mt-6 text-center">To become the “Industry Leader” of custom signage encompassing design, fabrication, installation, and service, by establishing a cohesive organization that is committed to working together, dedicated to providing excellent service to its customers, and by recognizing that our relationship with our employees is the key to our success.</p>
            </div>
        </div>
    )
}

export default Mission