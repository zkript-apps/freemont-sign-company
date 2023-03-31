"use client"
import Image from 'next/image'
import React from 'react'

const TextImage = ({ isImageLeft = false, isBgGray = false, imageName, title, description, id }: { isImageLeft?: boolean, isBgGray?: boolean, imageName: string, title: string[], description: string[], id?: string }) => {
    return (
        <div id={id} className={`flex flex-col gap-12 py-20 px-6 xl:px-80 items-center ${isImageLeft ? "xl:flex-row" : "xl:flex-row-reverse"} ${isBgGray ? "bg-gray-100" :""}`}>
            <div className="flex-none">
                <Image
                    src={`/${imageName}`}
                    width="512"
                    height="512"
                    alt="Works"
                />
            </div>
            <div>
                <h3 className="font-extrabold text-3xl text-giants-orange">
                    {title.map((item, index) => {
                        if(index === title.length-1) {
                            return (
                                <span key={index} className="text-oxford-blue">
                                    {item}
                                </span>
                            );
                        } else {
                            return (
                                <span key={index}>{item} </span>
                            );
                        }
                    })}
                </h3>
                {description.map((desc, index) => {
                    return (
                        <p key={index} className={`${index === 0 ? "mt-6" : "mt-4"}`}>
                            {desc}
                        </p>
                    );
                })}
            </div>
        </div>
    )
}

export default TextImage