import Image from 'next/image'
import React from 'react'

const Content = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-12 py-20 px-6 xl:px-80">
            <div>
                <p>Over the years, we have dedicated ourselves to meet the production requirements of all of our clients. We take pride in the strong working relationships that we develop with our clients. These relationships foster a special loyalty and an understanding that each and every job is mission critical. We believe that our proven track record, vast industry experience, and all-encompassing production capabilities gives us a distinct advantage over others. We are certain that we can meet the changing needs and expectations of all of our clients, not only regionally, but nationwide.</p>
                <h4 className="font-bold text-2xl mt-12">Our capabilities include:</h4>
                <ul className="list-disc list-inside mt-6">
                    <li>Formed plastic and flex faced signs</li>
                    <li>Four color process silk screening</li>
                    <li>Heat transfer flex face decorations</li>
                    <li>Channel Letters</li>
                    <li>LED Gas Pricers</li>
                    <li>LED Display Systems</li>
                    <li>Indoor advertising signs and clocks</li>
                    <li>Merchandising displays and custom POP materials</li>
                    <li>Wide format digital printing on a wide array of materials</li>
                    <li>Menuboards</li>
                    <li>Awnings</li>
                    <li>Design engineering and prototyping</li>
                </ul>
                <p className="mt-6">Complimenting our product line, our Project Management department has the professional capabilities to handle any size program. Our associate contractors are carefully screened and monitored for proper job performance. Companies have trusted their programs with us for over sixty years. This experience combined with industry leading real time reporting capabilities designed to fit your needs, provides our customers with all the information they need accurately, dependably and on time.</p>
                <h4 className="font-bold text-2xl mt-12">Our Approach and Innovation</h4>
                <p className="mt-6">It is our promise to build quality signs with strict adherence to the specifications for every project. Learn More about our Approach…</p>
                <h4 className="font-bold text-2xl mt-12">Mission Statement</h4>
                <p className="mt-6">Our mission is to provide our customers with a superior quality product with on time delivery and installation along with excellent customer service. We want to achieve for our customers a total image solution that will make a lasting impression.</p>
            </div>
            <div className="flex-none flex flex-col gap-6">
                <Image
                    src="/mountain-works.png"
                    width="312"
                    height="312"
                    alt="Facebook Logo"
                />
                <Image
                    src="/ds-works.png"
                    width="312"
                    height="312"
                    alt="Facebook Logo"
                />
                <Image
                    src="/wine-works.png"
                    width="312"
                    height="312"
                    alt="Facebook Logo"
                />
            </div>
        </div>
    )
}

export default Content