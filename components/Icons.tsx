"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Icons = ({ iconText }: { iconText: { icon: IconProp, text: string }[] }) => {
  return (
    <div className="flex flex-col gap-12 py-20 px-6 xl:px-80 items-center bg-gray-100">
    <div>
        <h3 className="font-extrabold text-4xl text-giants-orange text-center">
            QUALITY <span className="text-oxford-blue">FIRST</span>
        </h3>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
        {iconText.map((item, index) => {
            return (
                <div key={index} className="flex flex-col gap-4 items-center">
                    <FontAwesomeIcon icon={item.icon} className="h-12 w-12 text-sgbus-green" />
                    <h3 className="text-2xl">{item.text}</h3>
                </div>
            );
        })}
    </div>
</div>
  )
}

export default Icons