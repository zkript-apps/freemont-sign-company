"use client"
import { NAVIGATION_MENU } from '@/helpers/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import Menu from './Menu'
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import MobileMenu from './MobileMenu'

const MainNavigation = () => {
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
            <div className="bg-seasalt px-6 py-2 hidden md:flex">
                <div className="flex-1">
                    <p className="text-silver text-sm">Fremont, CA 94538</p>
                </div>
                <div>
                    <p className="text-silver text-sm">510-573-3162 | fremontsigncompany@gmail.com</p>
                </div>
            </div>
            <div className="py-3 px-6 shadow-md flex items-center">
                <div className="flex-1">
                    <Image
                        src="/fremont_logo.png"
                        width="230"
                        height="210"
                        alt="Main Logo"
                    />
                </div>
                <div className="hidden gap-10 xl:flex">
                    {NAVIGATION_MENU.map((menu, index) => {
                        return <Menu key={index} name={menu.name} url={menu.url} subMenu={menu.subMenu} />
                    })}
                </div>
                <div className="flex xl:hidden">
                    <FontAwesomeIcon icon={faBars} className="h-6 w-6 hover:cursor-pointer hover:text-giants-orange" onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </div>
            <motion.div
                className="bg-white shadow-lg py-3 px-6 absolute w-full"
                initial="exit"
                animate={isMenuOpen ? "enter" : "exit"}
                variants={subMenuAnimate}
            >
                <div className="flex flex-col">
                    {NAVIGATION_MENU.map((menu, index) => {
                        return <MobileMenu key={index} name={menu.name} url={menu.url} subMenu={menu.subMenu} />
                    })}
                </div>
            </motion.div>
        </>
    )
}

export default MainNavigation