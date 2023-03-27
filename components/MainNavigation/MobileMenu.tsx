"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ name, url, subMenu }: { name: string, url: string, subMenu: { name: string, url: string }[] }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
            },
            display: "block"
        },
        exit: {
            opacity: 0,
            rotateX: -15,
            transition: {
                duration: 0.2,
            },
            transitionEnd: {
                display: "none"
            }
        }
    };
    return (
        <>
            <div className="group hover:cursor-pointer py-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className="flex">
                    {subMenu.length > 0 ? (
                        <>
                            <p className="flex-1 font-semibold text-sm group-hover:text-giants-orange">{name}</p>
                            <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4 hover:cursor-pointer group-hover:text-giants-orange" />
                        </>
                    ) : <Link href={url} className="flex-1 font-semibold text-sm group-hover:text-giants-orange">{name}</Link>}
                </div>
                {subMenu.length > 0 && (
                    <motion.div
                        className="bg-white w-full py-4"
                        initial="exit"
                        animate={isMenuOpen ? "enter" : "exit"}
                        variants={subMenuAnimate}
                    >
                        <div className="flex flex-col">
                            {subMenu.map((menu, index) => {
                                return (
                                    <div key={index} className="hover:cursor-pointer p-3 hover:bg-giants-orange hover:text-white">
                                        <Link href={menu.url} className="flex-1 font-semibold text-sm">{menu.name}</Link>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    )
}

export default MobileMenu