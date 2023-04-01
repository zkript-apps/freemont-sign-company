"use client"
import React from 'react'
import Images from '@/components/Images';
import Image from 'next/image';

const Content = () => {
  return (
    <>
      <div className="py-24 px-6 lg:px-52 xl:px-80 flex flex-col lg:flex-row gap-12">
        <Image
            src="/sign-program.png"
            width={512}
            height={512}
            alt="Program"
        />
        <div>
            <p>A Master Sign Program (MSP) is used to create standard sign design guidelines for projects with multiple buildings or tenants. Once a MSP is approved, tenants receive approval for their individual signs at staff level instead of having to go through the Design Review process each time.</p>
            <p className="mt-4">Our sign designers team up with architects and engineers write up and show all tenant space with guidance for signs to meet the city guidelines and regulations by the code. overall continuity between the signs and the building</p>
            <p className="mt-4">Any Commercial, Office, or Industrial project with more than one building or multi tenant shopping center required MSP</p>
            <p className="mt-4">The Planning Commission makes the decision on Master Sign Programs</p>
        </div>
      </div>
      <Images imagesNames={["mountain-works.png", "ds-works.png", "subway-works.png", "wine-works.png", "parking1.jpg", "parking2.jpg", "parking3.jpg", "parking4.jpg"]} />
    </>
  )
}

export default Content